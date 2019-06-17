import React from "react";
import styled from "styled-components";
import SearchUsers from './SearchUsers';



export const ManageUsersContainer = () =>{
    return(
        <StyledManageUsersContainer>
            <SearchUsers/>
            
        </StyledManageUsersContainer>
        
    )
}

const StyledManageUsersContainer = styled.div`

    border:1px solid green;
    height:100%;
    padding:20px;
    position:relative;

`