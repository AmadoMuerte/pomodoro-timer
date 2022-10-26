import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/header/Header';
import Main from '../components/main/Main'

function Root(props) {
    return (
        <div>
            <Header />
            <Main outlet={<Outlet />}/>
        </div>
    );
}

export default Root;