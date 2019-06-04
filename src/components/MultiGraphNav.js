import React, { Component}  from "react";
import { NavLink } from 'react-router-dom'

import styled, { css } from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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


const StyledMultiGraphNav = styled.div`
    display:flex;
    justify-content:space-between;
    width:100%;
    font-family:'Mandali', sans-serif;
    flex-direction:column;
    margin-top:-5px;
    padding: 0px 25px 5px 20px;
    position:relative;

    .multigraph-current-product{
        font-size: 40px;
        font-weight: 800;
        margin: 0px 0px 15px 0px;
        }

    .multigraph-nav{
        /* height:50px; */
        display:flex;
        width:150px;
        justify-content:space-between;

       /* .navlink.active{
           border-bottom:3px solid blue;
       } */

        h4{
            font-size:14px;
            margin-top:20px;
            margin-right:5px;
            margin-bottom:19px;
            font-weight:600;
            color:lightgray;


            &:hover{
                color:initial;
                
            }
            
        }

        a:hover{
                text-decoration:none;
         }

        
    }
    .extra-stat-detail{
            color:black;
            
            top:0px;

    }
    
    #hidden-stat-desc{
            visibility:hidden;
    }

    .info-div{
        display:flex;
        flex-direction:column;
        align-items:flex-end;
        .far.fa-question-circle{
            font-size:18px;
            color:lightgray;
            padding:10px 0px;
            
            &:hover{
                color:black;
                cursor:pointer;
            }
        }

        .extra-stat-detail{
            position:absolute;
            box-shadow: 0 13px 27px -5px rgba(254, 254, 254, 0),0 8px 16px -8px rgba(0, 0, 0, 0.4),0 -6px 16px -6px rgba(0,0,0,0.025);
            top:30px;

            padding: 20px;

            border-top: 2px solid #0000ff7a;

             

        }
    }

`


export default class MultiGraphNav extends Component{
    constructor(props){
        super(props);
        this.state = {
            question:true
        }
    }

    componentDidMount(){
        // this.setHoverDetailListener();
        // this.setMouseOutListener();
    }

    // setHoverDetailListener = ()=> {
    //     var inputon = document.querySelectorAll(".menu-link");
    //     inputon.forEach(item => item.addEventListener("mouseover", function(event) {
    //     let mydesc = document.querySelector('#hidden-stat-desc');
    //     mydesc.id ="visible";
    //     }));
    // }

    // setMouseOutListener = ()=>{
    //     var inputoff = document.querySelectorAll(".menu-link");
    //     inputoff.forEach(item => item.removeEventListener("mouseout", function(event) {
    //     let mydesc = document.querySelector('#visible');
    //     mydesc.id ="visible";
    //     }));

    
    // }

    questionClicked =()=>{
        this.setState({question: !this.state.question})
    }

    render(){
        return(
            <StyledMultiGraphNav>
                <div className ="info-div">
                    <i  onClick={this.questionClicked} class="far fa-question-circle"></i>
                    <h5 id={this.state.question ? 'hidden-stat-desc':''} className="extra-stat-detail">
                    Statistics above based on totals  across all products or loans.</h5>
                </div>
                
                <h4>Sales</h4>
                <h3 className="multigraph-current-product">{"corn".toUpperCase()}</h3>
                <div className="multigraph-nav">
                    <NavLink className="navlink"><div className="multigraph-link"><h4>1D</h4></div></NavLink>
                    <NavLink className="navlink"><div className="multigraph-link"><h4>1W</h4></div></NavLink>
                    <NavLink className="navlink"><div className="multigraph-link"><h4>1M</h4></div></NavLink>
                    <NavLink className="navlink"><div className="multigraph-link"><h4>1Y</h4></div></NavLink>

                    
                </div>

            </StyledMultiGraphNav>
        )
    }
}