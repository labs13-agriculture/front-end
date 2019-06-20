import React, { Component } from "react";
import {UserResultsList} from "../ManageUsers/UserResultsList";
import { connect } from "react-redux";
import {userSearchResults} from '../../actions';
import styled from "styled-components";
import AddUser from './AddUser';
import { Modal } from 'reactstrap';
import {  media} from '../../styles/searchStyles';

 class SearchUsers extends Component{
    constructor(props){
        super(props);

        this.state = {
            searchResults :[],
            searchQuery:'',
            toggleAddModal:false,
            
        }
    }

    focusCursor() {
        const field = document.querySelector(".search-input");
    
        field.focus();
    }

    
    toggleAddModal = () => this.setState({toggleAddModal:!this.state.toggleAddModal})
    
    handleChanges = (e) =>{
        e.preventDefault();
        this.setState({searchQuery:e.target.value})
        
       
    }

   

    componentDidMount(){
        this.focusCursor();
    }

    componentDidUpdate (prevProps, prevState) {
        if(prevState.searchQuery !== this.state.searchQuery) {
          this.props.userSearchResults(this.state.searchQuery);
        }
      }

    

    render(){
        return(
            
            <StyledSearchUsers>
                <StyledSearchBar>
                <div className="search-tools-cont">
                <input placeholder="Search Username..." onChange={this.handleChanges} className="search-input" value={this.state.searchQuery}></input>
                {/* <button onClick={()=>{this.props.userSearchResults(this.state.searchQuery)}} className="search-button">Search</button> */}
                </div>
                <div className="new-user-tools-cont">
                <button onClick={this.toggleAddModal} className="search-button">ADD NEW</button>
                </div>
                <Modal isOpen={this.state.toggleAddModal}>
            
                    <AddUser userid={this.props.userid}/>
                    <button onClick={this.toggleAddModal}  color="secondary">Cancel</button>
                </Modal>
                </StyledSearchBar>
                <UserResultsList  returnedUserData={this.props.returnedUserData} userSearchSuccess={this.props.userSearchSuccess} userSearchStart={this.props.userSearchStart} />
              
            </StyledSearchUsers>
        )
    }




}


//begin styling

  

const StyledSearchUsers = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    position:relative;

    


`
const StyledSearchBar = styled.div`

    width:100%;
    display: flex;
    flex-direction:column;
    justify-content: space-between;

    .search-tools-cont{
        width:100%;
        border-top:3px solid rgb(60,57,75);

        .search-input{
            width: 100%;
            height: 70px;
            margin-bottom: 40px;
            background: #00000047;
            border: none;
            border-radius: 0px;
            font-size: 30px;
            font-weight: 600;
            font-family: "Josefin Sans", sans-serif;
            color: white;
            caret-color: #40E0D0;
            padding: 16px 0px 10px 40px;
            

            ::placeholder{
                color:gray;
                size:30px;
            }
        
        }

       
        
    }

    .new-user-tools-cont{
            height:100%;
            ${media.phone`display:flex;`}
            ${media.phone`justify-content:flex-end;`}
        }

    .search-button{
            padding: 7px 90px;
            background: none;
            border: 2px solid white;
            border-radius: 30px;
            color: white;
            background: #00000047;
            font-family: "Josefin Sans", sans-serif;
            font-size:15px;
            font-size: 1.2rem;
            font-weight: 600;

        }

`

const mapStateToProps = state => {
   return{
    returnedUserData:state.userReducer.data,
    userSearchSuccess:state.userReducer.userSearchSuccess,
    userSearchFailure:state.userReducer.userSearchFailure,
    userSearchStart:state.userReducer.userSearchStart

   }
    
}

export default connect(mapStateToProps,{userSearchResults})(SearchUsers);