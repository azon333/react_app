import React, { useEffect, useReducer, useContext } from "react";
import ShoppingForm from "./ShoppingForm";
import ShoppingItem from "./ShoppingItem";
import list from "./data";
import "./ShoppingList.css";
import ShoppingReducer from "../reducers/ShoppingReducer";
import l18nContext from "../contexts/l18nContext";

const STORAGE_KEY = "shopping_products";

const ShopingList = () => {
    const [products, dispatch] = useReducer(
        ShoppingReducer,
        JSON.parse(localStorage.getItem(STORAGE_KEY)) || list
    );

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    }, [products]);

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

    const totalUnits = products.reduce((sum, p) => sum + (p.count || 0), 0);
    const distinct = products.length;
    const { currentTexts } = useContext(l18nContext);

    return (
        <div className="shopping">
            <h1 className="sum">{currentTexts.total}: {totalUnits}</h1>
            <h2 className="sum">{currentTexts.distinct}: {distinct}</h2>

            <ShoppingForm addProduct={addProduct} />

            <h1 className="shopList">{currentTexts.listTitle}</h1>

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