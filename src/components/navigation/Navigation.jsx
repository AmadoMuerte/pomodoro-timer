import React from 'react';

import {NavLink } from "react-router-dom";
import './Navigation.css'

function Navigation() {

    return (
        <div className={'nav'}>
            <NavLink className={'nav__item'} to={`/setting`} >
                <p >setting</p>
            </NavLink>
            <NavLink className={'nav__item'} to={`/report`} >
                <p >report</p>
            </NavLink>
        </div>
    );
}

export default Navigation;