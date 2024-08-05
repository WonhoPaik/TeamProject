// src/components/Popup.jsx
import React from 'react';
import '../../css/Popup.css';

const Popup = ({message, type, onClose}) => {
    if (!message) return null;

    return (
        <div className={`popup ${type}`}>
            <span>{message}</span>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default Popup;
