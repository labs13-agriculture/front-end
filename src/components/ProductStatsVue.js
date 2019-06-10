import React, { Component } from "react";
import styled, { css } from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProductStatsMini from "./ProductStatsMini";
import { connect } from "react-redux";
import { getProductStatData } from "../actions";

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) =>
    css`
      @media (max-width: ${sizes[label]}px) {
        ${css(...args)}
      }
    `;

  return acc;
}, {});

const StyledProductStatsVue = styled.div`
  height: 600px;
  width: 260px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  margin: 60px 60px 60px 0px;
  border: 1px solid #d3d3d37a;

  h4 {
    font-family: "Mandali", sans-serif;

    margin: 0px;
    font-size: 14px;
  }

  .mini-nav-title {
    font-family: "Mandali", sans-serif;
    font-size: 16px;
    padding: 20px 20px 15px 20px;

    border-bottom: 2px solid #d3d3d37a;
    background: white;
  }
`;
const StyledMiniNav = styled.div`
    height:44px;
    width:100%;
    margin-bottom:15px;
    
    
   
}


`;

const StyledProductStatsMiniContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: scroll;
`;

class ProductStatsVue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      another: false
    };
  }

  callProductNameData = () => {
    this.props
      .getProductStatData()
      .then(() => this.setState({ products: this.props.productNameData }));
  };

  // componentWillReceiveProps({ productNameData }) {
  //     this.setState({products:this.props.ProductNameData});
  // }

  // componentWillReceiveProps(nextProps) {
  //     if( nextProps.productNameData ){
  //       this.setState({
  //           products: nextProps.productNameData,
  //       });
  //     }
  // }

  componentDidMount() {
    console.log("component mounting");

    this.callProductNameData();

    console.log("check productname data" + this.props.productNameData);
    console.log("status " + this.props.prodStatStart);
    console.log("setting state mounting");

    // this.setState({products:this.props.productNameData.data})

    // this.setState({products:[
    //     {product:"corn",
    //     avgprice:14.99,

    //     },
    //     {product:"seed",
    //     avgprice:14.99,

    //     },
    //     {product:"root",
    //     avgprice:14.99,

    //     },
    //     {product:"yam",
    //     avgprice:14.99,

    //     },
    //     {product:"turnip",
    //     avgprice:14.99,

    //     },
    //     {product:"carrot",
    //     avgprice:14.99,

    //     },
    //     {product:"raddish",
    //     avgprice:14.99,

    //     },
    //     {product:"potato",
    //     avgprice:14.99,

    //     },{product:"cabbage",
    //     avgprice:14.99,

    //     },
    //     {product:"random",
    //     avgprice:14.99,

    //     },
    //     {product:"random",
    //     avgprice:14.99,

    //     },
    //     {product:"ranrom",
    //     avgprice:14.99,

    //     }
    // ]})
  }

  render() {
    console.log("RENDERINGGGGGG");
    console.log(this.state.products);
    console.log("check productname data" + this.props.productNameData);
    console.log("status " + this.props.prodStatStart);
    console.log("setting state mounting");
    return (
      <StyledProductStatsVue>
        <StyledMiniNav>
          <h3 className="mini-nav-title">Product Sales</h3>
        </StyledMiniNav>
        <StyledProductStatsMiniContainer>
          {this.props.prodStatStart && <h1>loading. . .</h1>}
          {this.props.prodStatSuccess &&
            this.state.products.map(prod => (
              <ProductStatsMini
                product={prod.username}
                avgprice={prod.username}
              />
            ))}
        </StyledProductStatsMiniContainer>
      </StyledProductStatsVue>
    );
  }
}
const mapStateToProps = state => {
  return {
    prodStatStart: state.prodStatData.prodStatStart,
    error: state.prodStatData.error,
    prodStatFailure: state.prodStatData.loginFailure,
    productNameData: state.prodStatData.data,
    prodStatSuccess: state.prodStatData.prodStatSuccess
  };
};

export default connect(
  mapStateToProps,
  { getProductStatData }
)(ProductStatsVue);
