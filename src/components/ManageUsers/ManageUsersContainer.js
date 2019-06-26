import React from "react";
import styled from "styled-components";
import SearchUsers from './SearchUsers';
import { Redirect } from 'react-router-dom';



export const ManageUsersContainer = () =>{
    if(window.localStorage.getItem("admin") === "false"){
        return <Redirect to="/search" />
    } else
    return(
        <StyledManageUsersContainer>
            <SearchUsers/>
            
        </StyledManageUsersContainer>
        
    )
}

const StyledManageUsersContainer = styled.div`

    height:100%;
   
    position:relative;

`