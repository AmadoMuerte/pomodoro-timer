import React from 'react';
import './Logo.css'
import {Link } from "react-router-dom";


function Logo(props) {
    return (
        <div className="logo">
            <Link to={`/`} className="logo__item">
                Pomodoro Timer
            </Link>
        </div>
    );
}

export default Logo;