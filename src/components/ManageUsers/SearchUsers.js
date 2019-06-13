import React, { Component } from "react";
import styled, { css } from "styled-components";
import {UserResultsList} from "../ManageUsers/UserResultsList";
import { connect } from "react-redux";
import {userSearchResults} from '../../actions';
import PrivateRoute from '../PrivateRoute';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddUser from './AddUser';
import UserDetails from './UserDetails';

 class SearchUsers extends Component{
    constructor(props){
        super(props);

        this.state = {
            searchResults :[],
            searchQuery:''
        }
    }


    
    handleChanges = (e) =>{
        e.preventDefault();
        this.setState({searchQuery:e.target.value})
        
       
    }

    // setTypingListener(){
    //     var input = document.querySelector(".search-input");
    //     input.addEventListener("keyup", function(event) {
    //     const typingTimer = setTimeout(this.props.userSearchResults(this.state.searchQuery), 5000);
    //     })
        
    // }

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
                <input onChange={this.handleChanges} className="search-input" value={this.state.searchQuery}></input>
                <button onClick={()=>{this.props.userSearchResults(this.state.searchQuery)}} className="search-button">Search</button>
                </div>
                <div className="new-user-tools-cont">
                <Link to='/dashboard/manage-users/add'><button className="search-button">ADD NEW</button></Link>
                </div>
                
                </StyledSearchBar>
                <UserResultsList returnedUserData={this.props.returnedUserData} userSearchSuccess={this.props.userSearchSuccess} />
                <PrivateRoute path='/dashboard/manage-users/:id' component={UserDetails}/>
                <PrivateRoute path='/dashboard/manage-users/add' component={AddUser}/>
            </StyledSearchUsers>
        )
    }




}

const StyledSearchUsers = styled.div`
    border:1px solid red;
    height:100%;
    display:flex;
    flex-direction:column;
    position:relative;


`
const StyledSearchBar = styled.div`

    width:100%;
    border:1px solid purple;
    display: flex;
    justify-content: space-between;


`

const mapStateToProps = state => {
   return{
    returnedUserData:state.searchUserReducer.data,
    userSearchSuccess:state.searchUserReducer.userSearchSuccess,
    userSearchFailure:state.searchUserReducer.userSearchFailure,
    userSearchStart:state.searchUserReducer.userSearchStart

   }
    
}

export default connect(mapStateToProps,{userSearchResults})(SearchUsers);