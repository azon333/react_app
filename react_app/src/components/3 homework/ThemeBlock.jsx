import React, { useState } from 'react';
import './ThemeBlock.css';


const ThemeBlock = () => {
    const [theme, setTheme] = useState('light');


    return (
        <div className="theme-container">
            <button onClick={() => setTheme('light')}>Світла тема</button>
            <button onClick={() => setTheme('dark')}>Темна тема</button>


            <div className={theme === 'light' ? 'box light' : 'box dark'}>
                <p>Текст усередині блоку</p>
            </div>
        </div>
    );
};
export default ThemeBlock;