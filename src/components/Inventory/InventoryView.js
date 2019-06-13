import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import InventoryItem from './InventoryItem';

import {
    // Import actions here
    getInventoryList, addItemToInventory, updateItemInInventory, deleteItemFromInventory
} from '../../actions'

function InventoryView(props) {
  
    useEffect(() => {
      // put in the call to get items here
      // use effect gets called on every render,
      // the 2nd argument is the stuff ti cares about, it wont run if that variable hasnt changed
      // empty array only fires on mount
        props.getInventoryList()
    }, []);
  
    return (
        <ViewContainer>
            {/* Banner */}
            <div className="banner">
                <h2>Inventory</h2>
                
            </div>
            <div className="content">
                {/* Inventory card Container */}
                <InventoryItem header item={{id:"id", name:"name", quantity:"quantity", active:"active"}} />

                {/* Inventory Cards */}
                {props.inventoryList && props.inventoryList.map((i, index) => {
                    let {quantity, item, id} = i;
                    let {name, active} = item;
                    let cleanItem = {id, name, quantity, active}

                    return (
                        <InventoryItem key={id} item={cleanItem} />
                    );
                })}
            </div>
            
        </ViewContainer>
    );
}

export default connect(state => ({
    //map state to props stuff here
    inventoryList: state.inventory.inventoryList,
    error: state.inventory.error,
    gettingInventory: state.inventory.gettingInventory,
    updatingInventory: state.inventory.updatingInventory,
    addingInventory: state.inventory.addingInventory,
    deletingInventory: state.inventory.deletingInventory,

}), {
    // connect actions here
    getInventoryList
})(InventoryView)


const ViewContainer = styled.div`
    height: 100%;
    /* if you add width here it stretches container? */
    background: #f3f3f3;

    margin: 10px;

    border-radius: 10px;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    /* border-top: 5px solid #d3d3d3; */
    
    .banner {
        /* border-bottom: 1.5px solid #d3d3d3; */
        padding: 10px 10px 0;

        h2 {
            font-size: 3rem;
            font-weight: 700;
        }
    }
`;