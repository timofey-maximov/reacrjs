import React from "react";
import "./ShortProductInfo.css";
import { Link } from "react-router-dom";
import { ProductRoute } from "../../Routes";

export const ShortProductInfo = (props) => {
    return (
        <div className="short-product-info">
            <img className="short-product-info-logo" src={props.imageUrl} />
            <div className="text1">
                <Link to={`${ProductRoute}/${props.id}`}>{props.title}</Link>
                <p>{props.description}</p>
            </div>
        </div>
    );
}