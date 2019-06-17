import React, { Component } from "react";
import styled from "styled-components";
import { connect } from 'react-redux';
import { getFarmer } from "../../actions";

class FarmerViewDemographics extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.getFarmer(this.props.id)
  }
  render() {
    if(!this.props.farmerDemoData){
      return(
      <StyledDiv>
        <h1>Farmer not Found</h1>
      </StyledDiv>
      )
    }
    else{
      console.log("FARMER LOCATION SHOULD BE HERE", this.props.farmerDemoData);
      return (
        <StyledDiv>
          
          <h1>{this.props.farmerDemoData.secondName}, {this.props.farmerDemoData.firstName} - Farming since {this.props.farmerDemoData.startyear} - Amount Owed: ${this.props.farmerDemoData.amountOwed}</h1>
          <i className="fas fa-trash" onClick={() => this.props.delete(this.props.farmerDemoData.id)}></i>
          <div className="demoWrapper">
            <div className="locationinfo">
              <p>{this.props.farmerDemoData.phone}</p>
              <p>{this.props.farmerDemoData.email}</p>
              <p>Nationality: {this.props.farmerDemoData.nationality}</p>
              <p>Gender: {this.props.farmerDemoData.gender}</p>
              <p>Date of Birth: {this.props.farmerDemoData.dateofbirth}</p>
              <p>Education: {this.props.farmerDemoData.educationlevel}</p>
              <p>Position: {this.props.farmerDemoData.position}</p>
              <p>Title: {this.props.farmerDemoData.title}</p>
              
            </div>
            <div className="contactinfo">
            <p>{this.props.farmerDemoData.address}</p>
              <p>{this.props.farmerDemoData.community}, {this.props.farmerDemoData.district}</p>
              <p>Nearby Landmark: {this.props.farmerDemoData.landmark}</p>
              <p>Region: {this.props.farmerDemoData.region}</p>
            </div>
          </div>
         
        </StyledDiv>
      );
    }
  }
}

const mapStateToProps = state => {
  return{
    farmerDemoData:state.farmerData.farmerDemoData,
    farmerDemoError:state.farmerData.error,
    farmerDemoDataStart:state.farmerData.getStart
    
   
    
  }
  
}

export default connect(mapStateToProps,{getFarmer})(FarmerViewDemographics);



const StyledDiv = styled.div`
  padding: 1%;
  background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
  border-radius: 3px;
  display: flex;
  flex-direction: column;

  .demoWrapper{
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    p{
      line-height: 1;
    }
  }
`;
