import React, { useEffect, useReducer, useState } from "react";
import ShoppingForm from "./ShoppingForm";
import ShoppingItem from "./ShoppingItem";
import list from "./data";
import "./ShoppingList.css";
import ShoppingReducer from "../reducers/ShoppingReducer";

const STORAGE_KEY = "shopping_products";

const ShopingList = () => {
    const [products, dispatch] = useReducer(
        ShoppingReducer,
        JSON.parse(localStorage.getItem(STORAGE_KEY)) || list
    );

    // синхронизация в localStorage при изменениях
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    }, [products]);

    // функции, ранее использующие setProducts, теперь диспатчат действия
    const addProduct = (title) => {
        const exists = products.some(
            (product) => product.title.toLowerCase() === title.toLowerCase()
        );

        if (exists) {
            alert("Товар с таким названием уже существует!");
            return;
        }

        dispatch({ type: "add", payload: title });
    };

    const removeProduct = (id) => {
        dispatch({ type: "remove", payload: id });
    };

    const addOne = (id) => {
        dispatch({ type: "addOne", payload: id });
    };

    const removeOne = (id) => {
        dispatch({ type: "removeOne", payload: id });
    };

    // подсчёты: totalUnits — общее количество единиц товаров, distinct — кол-во наименований
    const totalUnits = products.reduce((sum, p) => sum + (p.count || 0), 0);
    const distinct = products.length;



    return (
        <div className="shopping">
            <h1 className="sum">Усього товарів (шт): {totalUnits}</h1>
            <h2 className="sum">Найменувань: {distinct}</h2>

            <ShoppingForm addProduct={addProduct} />

            <h1 className="shopList">Список покупок</h1>

            <div className="shop-list">
                {products.map((product) => (
                    <ShoppingItem
                        key={product.id}
                        item={product}
                        removeProduct={removeProduct}
                        addOne={addOne}
                        removeOne={removeOne}
                    />
                ))}
            </div>
        </div>
    )
}

export default ShopingList