import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default class OrganizationCard extends Component {
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
    const organization = { ...this.props };

    console.log("ORGANIZATION CARD PROPS", this.props);
    return (
      <Link to={`/dashboard/${organization.id}`}>
        <StyledGlobalClientCard>
          <h3>{organization.name}</h3>
          <div>
            <p>{organization.headquarters}</p>
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

{
  /* beneficiaries	integer($int32)
headquarters	string
id	integer($int64)
lead	boolean
name	string */
}
