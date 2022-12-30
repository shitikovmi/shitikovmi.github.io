import React from 'react';
import img from "../../../assets/icons/shared/whatsapp.svg"
import './WhatsAppButton.scss'

const WhatsAppButton = () => {
    return (
        <div className="whats-app-button">
            <a href="https://wa.me/995577752526" className="whats-app-button__link">
                <img style={{width: '50px', height: '50px'}} className="whats-app-button__img" src={img} alt=""/>
            </a>
        </div>
    );
};

export default WhatsAppButton;