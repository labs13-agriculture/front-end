import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

export default function InventoryItem(props) {
    let {item} = props;

    return (
        <Container>
            <div className="left">
                { props.header ?(<>
                    <div className="name">Item Name</div>
                    <div className="quantity">Quantity </div>
                    <div className="active">Active </div>
                    </>
                ) : (<>
                    <div className="name">{item.name}</div>
                    <div className="quantity">{item.quantity}</div>
                    <div className="active">{item.active ? "true" : "false"}</div>
                    </>
                )}
            </div>
            <div className="right">
                {!props.header ?(<>
                    <button className={`edit${props.header ? " hidden" : ""}`}>Edit</button>
                </> ) : ( <>
                    <button className='add' onClick={props.doModal}>Add</button>
                </>)}
                <button className={`delete${props.header ? " hidden" : ""}`}>Delete</button>
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

    ${props => props.header ? " " : `border-bottom: 1px solid grey;`}

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
        width: 15%;
    }
    .active {
        width: 15%;
    }

    .hidden {
        visibility: hidden;
    }
    
    button {
        margin-left: 20px;
        border-radius: 4px;
        background: white;
        box-shadow: 2px 1px 1px rgba(0,0,0,0.4);
        transition: .25s;
        padding: 2px 15px;

        &:hover {
            box-shadow: 1px 1px 1px rgba(0,0,0,0.4); 


        }

        &.delete:hover {
            background: palevioletred;
            border-color: palevioletred
        }

        &.edit:hover {
            background: lightblue;
            border-color: lightblue;
        }

        &.add:hover {
            background: lightgreen;
            border-color: lightgreen;
        }
    }
`;