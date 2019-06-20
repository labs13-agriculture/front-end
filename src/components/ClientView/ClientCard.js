import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default class GlobalClientCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  redirect = () => {
    this.setState({
      redirect: true
    });
  };

  render() {
    const { client } = this.props;

    console.log("GLOBAL CLIENT CARD PROPS", this.props);
    return (
      //loop through keys of card data in props
      //return h3 element with formatted key value pairs
      <Link to={`/dashboard/${client.type}/${client.id}`}>
        <StyledGlobalClientCard>
          <h3>
            {client.firstName} {client.secondName}
          </h3>
          <div className="demo">
            <p>title: {client.title}</p>
            <p>dob: {client.dateofbirth}</p>
            <p>gender: {client.gender}</p>
          </div>
          <div className="contact">
            <p>email: {client.email}</p>
            <p>phone: {client.phone}</p>
          </div>
          <div className="location">
            <p>address: {client.address}</p>
            <p>region: {client.region}</p>
            <p>community: {client.community}</p>
          </div>
        </StyledGlobalClientCard>
      </Link>
    );
  }
}

const StyledGlobalClientCard = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  padding: 10px;
  border-radius: 3px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);

  &:hover {
    cursor: pointer;
  }
`;
