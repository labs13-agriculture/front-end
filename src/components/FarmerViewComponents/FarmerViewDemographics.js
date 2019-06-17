import React, { Component } from "react";
import styled from "styled-components";
import { connect } from 'react-redux';
import {getFarmer} from "../../actions";

class FarmerViewDemographics extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(typeof this.props.farmer === 'string'){
      return(
      <StyledDiv>
        <h1>Farmer not Found</h1>
      </StyledDiv>
      )
    }
    else{
      console.log("FARMER LOCATION SHOULD BE HERE", this.props.farmer);
      return (
        <StyledDiv>
          
          <h1>{this.props.farmer.name} - Farming since {this.props.farmer.startyear} - Amount Owed: ${this.props.farmer.amountOwed}</h1>
          <i className="fas fa-trash" onClick={() => this.props.delete(this.props.farmer.id)}></i>
          <div className="demoWrapper">
            <div className="locationinfo">
              <p>{this.props.farmer.farmercontact.phone}</p>
              <p>{this.props.farmer.farmercontact.email}</p>
              <p>Nationality: {this.props.farmer.farmercontact.nationality}</p>
              <p>Gender: {this.props.farmer.farmercontact.gender}</p>
              <p>Date of Birth: {this.props.farmer.farmercontact.dateofbirth}</p>
              <p>Education: {this.props.farmer.farmercontact.educationlevel}</p>
              <p>Position: {this.props.farmer.farmercontact.position}</p>
              <p>Title: {this.props.farmer.farmercontact.title}</p>
              
            </div>
            <div className="contactinfo">
            <p>{this.props.farmer.farmerlocation.address}</p>
              <p>{this.props.farmer.farmerlocation.community}, {this.props.farmer.farmerlocation.district}</p>
              <p>Nearby Landmark: {this.props.farmer.farmerlocation.landmark}</p>
              <p>Region: {this.props.farmer.farmerlocation.region}</p>
            </div>
          </div>
        </StyledDiv>
      );
    }
  }
}

const mapStateToProps = state => {
  // return 
  // {
  //   farmerDemoData:state.farmerData.farmerDemoData
   
    
  // }
  
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
