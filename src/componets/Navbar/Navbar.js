import React, {Component} from 'react';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to="/profile" activeClassName={style.activLink}> Profile </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/dialogs" activeClassName={style.activLink}> Messanger </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/news" activeClassName={style.activLink}> News </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/music" activeClassName={style.activLink}> Music </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/settings" activeClassName={style.activLink}> Setting </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/users" activeClassName={style.activLink}> Users </NavLink>
            </div>
        </nav>
    );
}


export default Navbar;