import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { deleteItemFromInventory, updateItemInInventory } from '../../actions'

function InventoryItem(props) {
    let {item} = props;

    // these are the state
    const [isEditing, setIsEditing] = useState(false);
    // this feels dirty
    const [isActive, setIsActive] = useState(item.active)
    const [newQty, setNewQty] = useState(0);

    const toggleEditing = event => {
        event.preventDefault();
        setIsEditing(!isEditing);
    }

    const toggleActive = event => {
        setIsActive(!isActive)
    }

    const handleQty = event => {
        setNewQty(event.target.value)
    }

    const submitUpdate = event => {
        event.preventDefault()
        console.log("Pretend we updated an item")
        item.active = isActive
        item.quantity = newQty > 0 ? newQty : item.quantity;
        props.updateItemInInventory(item)
        setIsEditing(false);
    }

    return (
        <Container>
            <div className="left">
                { props.header ?(<>
                    {/* If header is true lets add in these default headings */}
                    <div className="name">Item Name</div>
                    <div className="quantity">Quantity </div>
                    <div className="active">Active </div>
                    </>
                ) : (<>
                    {/* otherwise lets use the item passed to populate some fields */}
                    <div className="name">{item.name}</div>
                    {/* if editing its the quantity input otherwise it just displays item quantity */}
                    { isEditing
                        ? <input className="qty-input" type="text" name="quantity" 
                            placeholder={item.quantity} 
                            onChange={handleQty}
                            value={newQty}
                            />
                        : <div className="quantity">{item.quantity}</div>
                    }
                    { isEditing
                        ? <input 
                            className="active-input"
                            type="checkbox"
                            name="active"
                            checked={isActive}
                            onChange={toggleActive}
                          />
                        : <div className="active">{item.active ? "true" : "false"}</div>
                    }
                    </>
                )}
            </div>
            <div className="right">
                {/* This section contains all the buttons */}
                {!props.header ?(<>
                    <button 
                        className={`edit${props.header ? " hidden" : ""}`}
                        onClick={toggleEditing}
                    >{isEditing ? `Cancel` : `Edit`}</button>
                </> ) : ( <>
                    <button className='add' onClick={props.doModal}>Add</button>
                </>)}
                {isEditing
                ? <button className='add' onClick={submitUpdate}>Submit</button>
                : <button
                    // this button isn't used in the header but is set to invisible to keep spacing consistent
                    className={`delete${props.header ? " hidden" : ""}`}
                    onClick={() => props.deleteItemFromInventory(item.id)}
                >Delete</button>
                }
            </div>
        </Container>
    )
}

export default connect(state => ({

}), {
    deleteItemFromInventory,
    updateItemInInventory
})(InventoryItem)

const Container = styled.div`
    width: 100%;
    padding: 10px;
    font-size: 2rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid grey;

    @media (max-width: 750px) {
        font-size: 1.5rem;
    }

    @media (max-width: 550px) {
        flex-direction: column;
        justify-content: flex-start;
    }

    .left {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
    }
    .right {
        display: flex;

        @media (max-width: 550px) {
            width: 100%;
        }
    }

    .name {
        width: 50%;
    }
    .quantity {
        width: 25%;
    }
    .qty-input {
        width: 100px;
    }
    .active {
        width: 25%;
    }
    .active-input {
        margin-left: 13%
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

        @media (max-width: 550px) {
            width: 100%;
        }

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