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

    height:100%;
   
    position:relative;

`