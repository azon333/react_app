import React from "react";

const ShoppingItem = ({item, removeProduct, addOne, removeOne}) => {
    return(
        <div className="shopping-item">
            <h1 className="Name">{item.title}</h1>
            <div className="right">
                <button className="minus" onClick={() => removeOne(item.id)}>-</button>
                <h1 className="counter">{item.count}</h1>
                <button className="plus" onClick={() => addOne(item.id)}>+</button>
                <button className="delet" onClick={() => removeProduct(item.id)}>
                    Del
                </button>
            </div>
        </div>
    )
}

export default ShoppingItem