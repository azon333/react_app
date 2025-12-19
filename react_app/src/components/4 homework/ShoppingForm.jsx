import React, { useContext, useState } from "react";
import l18nContext from "../contexts/l18nContext";


const ShoppingForm = ({addProduct}) => {
    const [title, setTitle] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const { currentTexts } = useContext(l18nContext);

    const changeHandler = (e) => {
        setTitle(e.target.value);
    };

    const submitHandler = () => {
        if (title.trim().length < 3) {
            setErrorMessage(currentTexts.error);
            return;
        }
        addProduct(title);
        setErrorMessage("");
        setTitle("");
    };

    return (
        <div>
            <div className="shopping-form">
                <input
                    type="text"
                    value={title}
                    onChange={changeHandler}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") submitHandler();
                    }}
                />
                <button onClick={submitHandler}>{currentTexts.addBtn}</button>
            </div>
            {errorMessage && <div className="error">{errorMessage}</div>}
        </div>
    )
}

export default ShoppingForm