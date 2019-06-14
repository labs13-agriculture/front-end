import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { connect } from "react-redux";

function AddItemModal(props) {

    useEffect(() => {

    }, [])
    
    return(
        <Modal>
            <div onClick={props.doModal} className="center">
                <div onClick={event => event.stopPropagation()}className="content">
                    <h2>Add Item To Inventory</h2>
                    <select>
                        <option value="test">test</option>
                    </select>
                    <input type="number"/>
                </div>
            </div>
        </Modal>
    )
}

export default connect(state => ({

}), {

})(AddItemModal)

const Modal = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.3);

    .center {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
    }

    .exit {
        position: fixed;
        top: 15px;
        left: 15px;
    }

    .content {
        background: #fefefe;
        min-width: 500px;
        min-height: 500px;
        width: 50%;
        height: 50%;
        padding: 10px;

        border-radius: 5px;
    }
`