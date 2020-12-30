import { fetchProducts } from "./fetchProducts";

export const fetchSingleProduct = (productId) => {
    const allProduct = fetchProducts();

    const product = allProduct.find(element => element.id === productId);

    return product;
}