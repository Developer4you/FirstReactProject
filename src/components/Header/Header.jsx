import React from 'react';
import c from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={c.header}>
        <img src='http://ae01.alicdn.com/kf/Hd2da616fd9694fdc83508f40d6ee95eeF/Volkrays.jpg' />
        <div className={c.title}>Social network for fishermen and hunters</div>
        <div className={c.loginBlock}>
            {props.isAuth ? props.login
            :<NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;