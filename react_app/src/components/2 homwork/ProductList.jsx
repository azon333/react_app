import React from "react";
import ProductItem from "./ProductItem";
import products from "./data";
import "./ProductList.css"

const ProductList = () => {
    return (
        <div className="products">
            <h1>Товари</h1>

            <div className="product-list">
                {products.map((p) => (
                    <ProductItem key={p.id} item={p} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;

