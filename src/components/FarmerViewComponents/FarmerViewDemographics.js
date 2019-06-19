import React, { Component } from "react";
import styled, { css } from "styled-components";
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
          
          <h1>{this.props.farmerDemoData.firstName} {this.props.farmerDemoData.secondName} - Farming since {this.props.farmerDemoData.startyear} - Amount Owed: ${this.props.farmerDemoData.amountOwed || "0"} <i className="fas fa-trash" onClick={() => this.props.delete(this.props.farmerDemoData.id)}></i></h1>
          
          <div className="demoWrapper">
            <div className="narrowInfo">
              <div className="contactinfo">
                <h3>Contact</h3>
                <p>{this.props.farmerDemoData.phone|| "No Data"}</p>
                <p>{this.props.farmerDemoData.email|| "No Data"}</p>
              </div>
              <div className="locationinfo">
                <h3>Location</h3>
                <p>{this.props.farmerDemoData.address}</p>
                <p>{this.props.farmerDemoData.community}</p>
                <p>{this.props.farmerDemoData.district}</p>
                <p>Nearby Landmark: {this.props.farmerDemoData.landmark|| "No Data"}</p>
                <p>Region: {this.props.farmerDemoData.region|| "No Data"}</p>
              </div>
            </div>
            <div className="demoinfo">
              <h3>Demographics</h3>
              <div className="wideInfo">
                <div>
                  <p>Nationality: {this.props.farmerDemoData.nationality|| "No Data"}</p>
                  <p>Gender: {this.props.farmerDemoData.gender|| "No Data"}</p>
                  <p>Date of Birth: {this.props.farmerDemoData.dateofbirth|| "No Data"}</p>
                </div>
                <div>
                  <p>Education: {this.props.farmerDemoData.educationlevel|| "No Data"}</p>
                  <p>Position: {this.props.farmerDemoData.position|| "No Data"}</p>
                  <p>Title: {this.props.farmerDemoData.title || "No Data"}</p> 
                </div>
              </div>
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

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) =>
    css`
      @media (max-width: ${sizes[label]}px) {
        ${css(...args)}
      }
    `;

  return acc;
}, {});

const StyledDiv = styled.div`
  padding: 1%;
  border-radius: 3px;
  background: white;
  display: flex;
  flex-direction: column;
  width: 78%

  ${media.tablet`font-size: 1.2rem;`}
  ${media.tablet`width: 78%;`}

  h1{
    ${media.tablet`font-size:1.6rem;`}

    i{
      font-size: 1.8rem;
      margin-left: 3%;
    }
  }

  h3{
    font-weight: 600;
    margin-bottom: 10px;
    ${media.tablet`font-size:1.6rem;`}
  }

  .demoWrapper{
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    ${media.tablet`flex-direction: column;`}
    ${media.tablet`align-items: center;`}

    .demoinfo{
      width: 30%;
      ${media.tablet`width:80%;`}
      ${media.tablet`margin: auto;`}

      ${media.phone`width: 70%;`}

      h3{
        ${media.tablet`text-align: center;`}

        ${media.phone`text-align: left;`}
      }
    }

    .wideInfo{
      ${media.tablet`display: flex;`}
      ${media.tablet`justify-content: space-around;`}
      
      ${media.phone`flex-direction:column;`}
      ${media.phone`width: 85%;`}
    }

    .narrowInfo{
      ${media.tablet`display: flex;`}
      ${media.tablet`flex-direction: row;`}
      ${media.tablet`width: 95%;`}
      ${media.tablet`justify-content: space-around;`}

      ${media.phone`flex-direction: column;`}
      ${media.phone`width: 70%;`}
      ${media.phone`margin: auto;`}
      ${media.phone`font-size: 1.2rem;`}

      div{
        ${media.tablet`width:40%;`}
        ${media.phone`width: 100%;`}
      }
    }

    p{
      line-height: 1;
      margin-top: 2px;

      ${media.phone`font-size:1.6rem;`}
    }
  }
`;
