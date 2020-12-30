import React, { useEffect, useState } from "react";
import { ShortProductInfo } from "../../Components/ShortProductInfo/ShortProductInfo";
import { Searcher } from "../../Components/Searcher/Searcher";
import { fetchProducts } from "../../Services/fetchProducts";

export const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchedData = fetchProducts();

        setProducts(fetchProducts);
    }, []);

    return (
        <>

            <Searcher />

            <hr className="hr" />

            {products.map((product, index) =>
                <ShortProductInfo
                    key={index}
                    id={product.id}
                    imageUrl={product.imageUrl}
                    title={product.title}
                    description={product.description}
                />
            )}

        </>
    );
}