import React from 'react';
const Header = () => {
    return ( 
        <header >
        <div id = "headerMenu" >
            <button > < a href = "/" > Html </a></button >
            <button > < a href = "/css" > Css </a></button >
            <button > < a href = "/javascript" > Javascript </a></button >
            <button > < a href = "/others" > Others </a></button >
        </div>
        </header>
    );
}
export default Header;