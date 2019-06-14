import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import styled from 'styled-components';

class NewYieldForm extends Component{
    constructor(props){
        super(props);
        this.state={
            goal: '',
            numBags: '',
            season: '',
            farmAcres: '',
            cropTypes: [],
            selectedCrop: 0,
            farmerId: props.id
        }
    }


    componentDidMount(){
        //just doing axios call here, redux seems like overkill
        axios.get(`https://tieme-ndo-backend.herokuapp.com/croptypes/all?cropStatus=active`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${window.localStorage.getItem('token')}`
            }
        })
        .then(res => {
            this.setState({
                cropTypes: res.data
            })
            })
        .catch(err => console.log(err));
    }

    handleChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    formSubmit = e =>{
        e.preventDefault();
        console.log('submitting');

        const newYield = {
            CropType: this.state.cropTypes[this.state.selectedCrop],
            season: this.state.season,
            numBags: parseInt(this.state.numBags),
            goal: parseInt(this.state.goal),
            farmAcres: parseInt(this.state.farmAcres)
        }

        //again, using axios here, this time just for testing purposes
        console.log(this.props.id);

        axios.post(`https://tieme-ndo-backend.herokuapp.com/yield/add/41`, newYield,{
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${window.localStorage.getItem('token')}`
            }
        })
        .then(res => {
            console.log(res.data);
            })
        .catch(err => console.log(err));

    }


    render(){
        return(
            <Modal>
                <h2>Add new Farmer Yield</h2>
                <form onSubmit={e => this.formSubmit(e)}>
                    {this.state.cropTypes.length > 0 && 
                        <label>
                            Crop:
                            <select name="selectedCrop" value={this.state.selectedCrop} onChange={e => this.handleChange(e)}>
                                {this.state.cropTypes.map((crop, index) => <option value={index}>{crop.cropName}</option>)}
                            </select>
                        </label>
                    }
                    
                    <label>
                        Number of Bags:
                        <input type="text" name="numBags" value={this.state.numBags} onChange={e => this.handleChange(e)}/>
                    </label>
                    <label>
                        Goal:
                        <input type="text" name="goal" value={this.state.goal} onChange={e => this.handleChange(e)}/>
                    </label>
                    <label>
                        Farm Acreage:
                        <input type="text" name="farmAcres" value={this.state.farmAcres} onChange={e => this.handleChange(e)}/>
                    </label>
                    <label>
                        Season:
                        <input type="text" name="season" value={this.state.season} onChange={e => this.handleChange(e)}/>
                    </label>
                    <input type="submit" />
                </form>
            </Modal>
        )
    }
}

const mapStateToProps = state =>{
    return null;
}

export default connect(mapStateToProps)(NewYieldForm);

const Modal = styled.div`
  width: 65%;
  border: 1px solid red;
  position: absolute;
  margin: auto;
  height: auto;
  z-index: 1000005;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
`;