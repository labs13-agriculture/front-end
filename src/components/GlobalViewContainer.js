import React, { Component } from "react";
import styled, { css } from "styled-components";

export default class GlobalViewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: []
    };
  }

  render() {
    return (
      <GVC>
        <h1>Global View Container</h1>
      </GVC>
    );
  }

  // componentDidMount(){

  // }
}

const GVC = styled.div`
  display: flex;
  width: 80%;
  margin-bottom: -2000px;
  padding-bottom: 2000px;
  justify-content: center;
`;
