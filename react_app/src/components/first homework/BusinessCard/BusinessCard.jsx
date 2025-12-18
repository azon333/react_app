import React from "react";
import "./BusinessCard.css";
import person from "./data"

const BusinessCard = () => {
    return (
        <div className="bc-card">
            <img className="bc-photo" src={person.photo} alt={person.name} />
            <div className="bc-body">
                <h2 className="bc-name">{person.name}</h2>
                <h4 className="bc-role">{person.role}</h4>
                <p className="bc-desc">{person.desc}</p>
            </div>
        </div>
    );
};

export default BusinessCard;
