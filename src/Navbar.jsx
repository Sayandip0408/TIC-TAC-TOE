import React from 'react';
import { FcHome, FcSelfServiceKiosk } from 'react-icons/fc'

const portfolio = () => {
    window.location.href = 'https://sayandip2.netlify.app/';
}

const home = () => {
    window.location.reload(false);
}

const Navbar = () => {
    return (
        <nav id="nav">
            <h1>Tic Tac Toe</h1>
            <div id="nav_btn_div">
                <button onClick={home}>Home <FcHome /></button>
                <button onClick={portfolio}>Developer <FcSelfServiceKiosk /></button>
            </div>
        </nav>
    );
}

export default Navbar;