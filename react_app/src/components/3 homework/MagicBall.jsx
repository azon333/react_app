import React, { useState } from 'react';


const MagicBall = () => {
    const answers = ["Так", "Ні", "Можливо", "Запитай пізніше"];
    const [answer, setAnswer] = useState('');


    const askBall = () => {
        const random = Math.floor(Math.random() * answers.length);
        setAnswer(answers[random]);
    };


    return (
        <div className="ball">
            <button onClick={askBall}>Запитати кулю</button>
            <h3>{answer}</h3>
        </div>
    );
};
export default MagicBall;