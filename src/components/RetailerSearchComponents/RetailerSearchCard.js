import React from "react";
import { Link } from "react-router-dom";

const RetailerSearchCard = props =>{
    return(
        <Link to={`/retailer/${props.retailer.id}`}>
            <h3>{props.retailer.name}</h3>
            <p>{props.retailer.retailerlocation.address}</p>
            <p>{props.retailer.retailerlocation.community}</p>
            <p>{props.retailer.retailerlocation.district}</p>
            <p>{props.retailer.retailerlocation.landmark}</p>
            <p>{props.retailer.retailerlocation.region}</p>

        </Link>
    )
}

export default RetailerSearchCard