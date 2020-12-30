import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../../Services/fetchSingleProduct";

export const Product = () => {

    const { productId } = useParams();

    const [product, setProduct] = useState();
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        const fetchedProduct = fetchSingleProduct(productId);

        setProduct(fetchedProduct);
        setisLoading(false);
    }, [productId]);

    return (
        <>
            <div className="under-product-header">
                {isLoading &&
                    <span className="span">Loading...</span>
                }
                {!isLoading &&
                    <span className="span">{product.details}</span>
                }
            </div>
        </>
    );
}