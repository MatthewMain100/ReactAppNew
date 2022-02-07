import React from 'react';
import { NavLink } from 'react-router-dom';
import s from'./Header.module.css';
const Header = (props) =>{
    return <header className ={s.header}>
        <img src='https://yt3.ggpht.com/a/AATXAJzs5RFuuvZa7amXmozXv_E4jIx-6i76mcyxRfbb=s900-c-k-c0x00ffffff-no-rj' />
        <div className={s.loginBlock}>
            {props.isAuth ? props.login
            : <NavLink to ={'/login'}> Login  </NavLink>}
        </div>
        </header>
}
export default Header;