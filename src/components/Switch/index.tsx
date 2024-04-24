"use client"
import { useState } from 'react';
import React from 'react';
import './style.css';

const Switch = () => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleSwitch = () => {
        setIsChecked(prevState => !prevState);
    };

    return (
        <div className="switch-container">
            <input
                type="checkbox"
                id="switch"
                className="switch-input"
                checked={isChecked}
                onChange={toggleSwitch}
            />
            <label htmlFor="switch" className="switch-label">
                <span className="switch-inner"></span>
            </label>
        </div>
    );
};

export default Switch;
