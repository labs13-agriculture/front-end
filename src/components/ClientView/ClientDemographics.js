import React, { Component } from "react";
import styled from "styled-components";
import {theme} from "../../config";
import { Link } from "react-router-dom";
export default class ClientDemographics extends Component{
    

    render(){
        const { client } = this.props;
        return(
            <StyledDemoContainer>
                <div className="demo">
                    <p className="category"><span className="descriptor">Title:</span> {client.title}</p>
                    {/* <p className="category"><span className="descriptor">DOB:</span>  {client.dateofbirth}</p> */}
                    <p className="category"><span className="descriptor">Gender:</span>  {client.gender}</p>
                </div>
                <div className="contact">
                <p className="category">
                    <span className="descriptor">
                     <i class="fas fa-phone-square"></i> 
                    </span>
                     {client.phone}</p>
                </div>
                <div className="location">
                    <p className="category">
                    <span className="descriptor">
                    <i class="fas fa-map-marker-alt"></i> 
                    </span>
                    {client.address}</p>
                    {/* <p className="category"><span className="descriptor">Region:</span>  {client.region}</p> */}
                    {/* <p className="category"><span className="descriptor">Community:</span>  {client.community}</p> */}
                </div>
                <Link to={this.props.to} className="more-options-btn">MORE <i class="fas fa-arrow-circle-right"></i></Link>
                
            </StyledDemoContainer>
        )

            
          
        
    }
}

const StyledDemoContainer = styled.div`

    background-color:rgba(60,57,75);
    width:100%;
    height:100%;
    
    color:white;
    border-top:2px solid ${theme.activeblue};

    .descriptor{
        
        padding:5px;
        color:gray;
        font-weight:800;
        border-radius:5px;
    }

    .category{
        padding: 0px;
        font-size: 1.3rem;
        font-family:${theme.experimentalFont};
        margin: 15px;
        border-radius: 2px;
        font-weight: 800;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 250px;
        display: block;
        overflow: hidden
        
    }

    }

    .more-options-btn{
        display:flex;
        justify-content:center
        padding:5px;
        width:100%:
        text-decoration:none;
        background:#0000002e;
        color:gray;
        font-family:${theme.searchInputFont};
        font-size: 1.3rem;
        align-items:center;
        .fas{
            margin-left:2px;
        }
        &:hover{
            color:${theme.activeblue};
            text-decoration:none;
            background:${theme.inputblack};
        }

    }


`