import React, { Component } from "react";
import styled from "styled-components";
import UserResultsItem from "./UserResultsItem";
import { Spinner } from 'reactstrap';


export class UserResultsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
     
    };
  }

  

  render() {
    return (
      <StyledUserResultsVue>
        <StyledMiniNav>
         {this.props.userSearchSuccess && <h3 className="mini-nav-title">Users</h3>} 
          
        </StyledMiniNav>
        <StyledResultsList>
          {this.props.userSearchStart && <div className="search-placeholder">
            <Spinner style={{ width: '10rem', height: '10rem' }} />
          </div>}
          {this.props.userSearchSuccess &&
            this.props.returnedUserData.map(user => (
              <UserResultsItem
                username={user.username}
                creator={user.creator}
                userRoles={user.userRoles}
                userid={user.userid}
                
                
              />
            ))}
        </StyledResultsList>
      </StyledUserResultsVue>
    );
  }
}





//begin styling



const StyledUserResultsVue = styled.div`
   
   background:none;
   overflow-y: scroll;
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  ${'' /* box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025); */}
  /* margin: 60px 60px 60px 0px; */
  ${'' /* border: 1px solid #d3d3d37a; */}

  h3 {
    font-family: "Mandali", sans-serif;

   
    font-size: 14px;
    width:200px;
    font-family: "Josefin Sans", sans-serif;
    

  }


  .mini-nav-title {
    font-family: "Mandali", sans-serif;
    font-size: 16px;
    ${'' /* padding: 20px 20px 15px 20px; */}

    
    font-size:30px;
    font-weight:800;
    color:white;

  
  }

  
`;
const StyledMiniNav = styled.div`
  
  width: 100%;
  
  display:flex;
  width:100%;
  justify-content:space-between;
  margin-top:40px;
  
  &:last-child{
    width:67px;
  }
`;

const StyledResultsList = styled.div`
  height: 400px;
  width: 100%;
  overflow-y: scroll;
  display:flex;
  flex-direction:column;
  
  .search-placeholder{
    display:flex;
   height:100%; 
    font-size:90px;
    justify-content:center;
    
    .fas.fa-search{
      color:#00000047;
    }

  }
  
`;
