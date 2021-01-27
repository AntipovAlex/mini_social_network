import React, {Component} from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";

class Header extends Component {

    render() {

        return (

            <div className={style.header}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAdfpdxU6Qkxrczy4GJQY2vdDC12yzqaKU0g&usqp=CAU"/>

                <div className={style.blockLogin}>
                    {this.props.isAuth
                        ? <div>{this.props.login}  <button onClick={this.props.logout}> Log uot</button></div>
                        : <NavLink to={"/login"}> Login </NavLink> }
                </div>
            </div>
        );
    }
}

export default Header;