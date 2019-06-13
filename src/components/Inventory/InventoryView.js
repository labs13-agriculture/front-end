import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

export default function InventoryView(props) {
    console.log("YO I AM FIRING")
  
    // useEffect(() => {
    //   // put in the call to get items here
    //   // use effect gets called on every render,
    //   // the 2nd argument is the stuff ti cares about, it wont run if that variable hasnt changed
    //   // empty array only fires on mount

    // }, []);
  
    return (<div>LETS JUST MAKE SURE I CAN GET This ShOWING</div>);
}

const ViewContainer = styled.div`
    width: 100%;
    background: #0e0e0e;
    color: #f3f3f3;
`;