import React from 'react';
const logo =  './favicon.png';

export const Navbar = () => {
    return (
    <>
        <div class="navbar__container">
            <div class="logo">
                <img src={'/static/containers/Navbar/favicon.png'} />
            </div>
            <ul>
                <li> LOGIN </li>
                <li> SIGNUP </li>
                <li> PROJECTS </li>
                <li> ABOUT </li>
            </ul>
        </div>
        <div class="emptyblock" style={{height: 50}}/>
    </>
    )
}

export default Navbar;