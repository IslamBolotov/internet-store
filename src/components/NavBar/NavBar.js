import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ()=>{
    return(
        <div className="nav-bar">
            <ul>
                <li><NavLink to="/add" >Католог товаров</NavLink></li>
                <li><NavLink exact to="/" activeClassName="active">О нас</NavLink></li>
                <li><NavLink exact to="/dos" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/opl" activeClassName="active">Add</NavLink></li>
                <li><NavLink exact to="/contacts" activeClassName="active">Контакты</NavLink></li>
                <li><NavLink to="/basket">Корзина</NavLink></li>
            </ul>
        </div>
    )
}

export default NavBar;