import React from "react";

const ProductItem = ({ item }) => {
    const { title, image, price, salePrice, freeDelivery } = item;

    return (
        <div className="product-item">
            <img src={image} alt={title} className="product-img" />

            <h3>{title}</h3>

            <div className="product-price">
                {salePrice ? (
                    <div>
                        <span className="old-price">{price} ₴</span>
                        <span className="new-price">{salePrice} ₴</span>
                    </div>
                ) : (
                    <span className="new-price">{price} ₴</span>
                )}
            </div>

            {freeDelivery && <p className="delivery">Безкоштовна доставка</p>}
        </div>
    );
};

export default ProductItem;
