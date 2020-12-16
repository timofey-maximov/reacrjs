import React from "react";
import FirstMovie from "../../Assets/Images/1st-movie.jpg";
import "./Product.css";
import { Link } from "react-router-dom";

export const Product = (props) => {
    return (
        <div className="product">
            <img className="product-logo" src={FirstMovie} />
            <div className="text1">
                <Link href="1st movie" title="Гриффины">{props.title}</Link>
                <p>{props.description}</p>
            </div>
        </div>
    );
}