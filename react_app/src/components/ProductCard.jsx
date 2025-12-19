import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, onToggleWishlist, onBuy, isWishlisted }) => {
    return (
        <div className="product-card">
            <div className="img-wrap">
                <img src={product.image} alt={product.title} />
            </div>

            <h3 className="title">{product.title}</h3>
            <div className="meta">
                <span className="category">{product.category}</span>
                <span className="price">${product.price}</span>
            </div>

            <div className="rating">Rating: {product.rating?.rate ?? "—"}</div>

            <div className="actions">
                <button onClick={onBuy}>Buy</button>
                <button onClick={onToggleWishlist}>{isWishlisted ? "Remove" : "Wishlist"}</button>
            </div>
        </div>
    );
};


export default React.memo(ProductCard);