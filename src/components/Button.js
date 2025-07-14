import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({ children, type, onClick, buttonStyle, buttonSize, to, className }) => { 
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    const btnClass = `btn ${checkButtonStyle} ${checkButtonSize} ${className || ''}`.trim();

    if (to) {
        return (
            <Link to={to} className={btnClass} onClick={onClick} type={type}>
                {children}
            </Link>
        );
    }
    return (
        <button className={btnClass} onClick={onClick} type={type}>
            {children}
        </button>
    );
};