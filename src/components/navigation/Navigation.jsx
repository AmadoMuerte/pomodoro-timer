import React from 'react';

import {NavLink } from "react-router-dom";
import './Navigation.css'

function Navigation() {

    return (
        <div className={'nav'}>
            <NavLink className={'nav__item'} to={`/setting`} activeclassname={'active'}>
                <p >setting</p>
            </NavLink>
            <NavLink className={'nav__item'} to={`/report`} activeclassname={'active'}>
                <p >report</p>
            </NavLink>
        </div>
    );
}

export default Navigation;