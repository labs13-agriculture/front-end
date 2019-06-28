import React, { Component } from "react";
import styled from "styled-components";
import UserResultsItem from "./UserResultsItem";
import { Spinner } from 'reactstrap';
import {theme} from "../../config";


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
         {this.props.userSearchSuccess && 
         <div className="mini-nav-container">
          <h3 className="mini-nav-title">System Users</h3>
          <h3 className="mini-nav-results">{this.props.returnedUserData.length}</h3>
         </div>}
          
        </StyledMiniNav>
        <StyledResultsList>
          {this.props.userSearchStart && <div className="search-placeholder">
            <Spinner className="loader" style={{ width: '10rem', height: '10rem' }} />
          </div>}
          {(this.props.userSearchSuccess &&
            this.props.returnedUserData.length > 0) && this.props.returnedUserData.map(user => (
              <UserResultsItem
                username={user.username}
                creator={user.creator}
                userRoles={user.userRoles}
                userid={user.userid}
                
                
              />
            ))}
          {/* {!this.props.userSearchStart && !this.props.userSearchSuccess && <div className="no-results"><i class="fas fa-user-cog"></i></div>} */}
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
  padding:20px;
  
  &::-webkit-scrollbar {
    display: none;
  }

  .mini-nav-container{
    display:flex;
  }
  h3 {
    font-family: ${theme.generalTextFont}

   
    font-size: 14px;
    width:200px;
    font-size: 3rem;
    

  }


  .mini-nav-title {
    font-family: ${theme.generalTextFont}
    font-size: 16px;
    ${'' /* padding: 20px 20px 15px 20px; */}

    
    font-size:30px;
    font-weight:800;
    color:white;

  
  }

  .mini-nav-results {
    font-family: ${theme.generalTextFont}
    
    ${'' /* padding: 20px 20px 15px 20px; */}

    
    font-size:50px;
    font-weight:800;
    color:${theme.activeblue};

  
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
  
  justify-content: flex-start;
  &::-webkit-scrollbar {
        display: none;
  }
  
  .search-placeholder{
    display:flex;
   height:100%; 
    font-size:90px;
    justify-content:center;
    
    .fas.fa-search{
      color:${theme.inputblack};
    }

  }

  .loader{
    
    border: 15px solid ${theme.activeblue};
    border-right-color: transparent;
  }

  .no-results{
    width:100%:
    height:100%;
    font-family:${theme.inputblack};
    color:${theme.inputblack};
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;

    h3{
      text-align:center;
      font-size:
    }
    .fas.fa-user-cog{
      font-size:13rem;
      color:#00000012;
    }

  }

  .dropdown-toggle.btn.btn-primary{
    background:${theme.inputblack};
    border:${theme.inputblack};
    font-family: ${theme.generalTextFont}
  }

  #caret{
    border:${theme.inputblack};
    background:${theme.inputblack};
    font-family: ${theme.generalTextFont}

  }

  .dropdown-menu.show{
    font-family: ${theme.generalTextFont}
    
  }
  
`;
