import React from 'react';
import './Main.css'

function Main(props) {
    return (
        <main className="main">
        <div className="container">
                {props.outlet}
        </div>
    </main>
    );
}

export default Main;