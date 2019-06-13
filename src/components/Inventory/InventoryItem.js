import React, { useEffect } from "react";
import styled from "styled-components";

export default function InventoryItem(props) {
    let {item} = props;

    return (
        <Container>
            <div className="left">
                <div className="name">{item.name}</div>
                <div className="quantity">{item.quantity}</div>
                <div className="active">{item.active ? "true" : "false"}</div>
            </div>
            <div className="right">
                <button className="delete">Delete</button>
                <button className="edit">Edit</button>
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    padding: 10px;
    font-size: 2rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid grey;

    .left {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
    }
    .right {
        display: flex;
    }

    .name {
        width: 30%;
    }
    .quantity {
        width: 10%;
    }
    .active {
        width: 10%;
    }
    
    button {
        margin-left: 20px;
        border-radius: 4px;
        background: white;
        box-shadow: 3px 3px 3px rgba(0,0,0,0.4);
        transition: .25s;
        padding: 2px 15px;

        &:hover {
            box-shadow: 1px 1px 1px rgba(0,0,0,0.4); 


        }

        &.delete:hover {
            background: palevioletred;
        }

        &.edit:hover {
            background: lightblue;
        }
    }
`;