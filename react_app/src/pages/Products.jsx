import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import ProductCard from "../components/ProductCard";
import "./Products.css";

const STORAGE_WISHLIST = "fakestore_wishlist";

const Products = () => {
    const products = useLoaderData();

    const [wishlist, setWishlist] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_WISHLIST)) || [];
        } catch (e) {
            return [];
        }
    });

    const [cart, setCart] = useState([]);

    useEffect(() => {
        localStorage.setItem(STORAGE_WISHLIST, JSON.stringify(wishlist));
    }, [wishlist]);

    const toggleWishlist = (id) => {
        setWishlist((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
    };

    const buyNow = (product) => {
        setCart((prev) => [...prev, product]);
        alert(`Куплено: ${product.title}`);
    };

    return (
        <div>
            <h1>Products</h1>

            <div style={{ display: "flex", gap: 16, marginBottom: 12 }}>
                <div>Wishlist: {wishlist.length}</div>
                <div>Cart: {cart.length}</div>
            </div>

            <div className="products-grid">
                {products.map((p) => (
                    <ProductCard
                        key={p.id}
                        product={p}
                        isWishlisted={wishlist.includes(p.id)}
                        onToggleWishlist={() => toggleWishlist(p.id)}
                        onBuy={() => buyNow(p)}
                    />
                ))}
            </div>
        </div>
    );
};


export default Products;