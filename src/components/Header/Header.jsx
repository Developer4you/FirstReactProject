import React from 'react';
import c from './Header.module.css';

const Header = (props) => {
let url = props.imgUrl;
    return <header className={c.header}>
        <img src='http://ae01.alicdn.com/kf/Hd2da616fd9694fdc83508f40d6ee95eeF/Volkrays.jpg' />
        <div className={c.title}>Social network for fishermen and hunters</div>
    </header>
}

export default Header;