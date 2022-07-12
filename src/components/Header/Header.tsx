import React from "react";
import './Header.module.css';
import {NavLink} from "react-router-dom";
import classes from './Header.module.css';
import {HeaderPropsType} from "./HeaderContainer";

export const Header = (props:HeaderPropsType) => {
    return (
        <header className={classes.header}>
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxl0bsetRA8iWHNd5O4XXnAVCdei9U9cca1g&usqp=CAU'} alt={'image'}/>
            <div className={classes.loginBlock}>
                {props.isAuth ? <>{props.login}<div onClick={props.logoutThunk}>EXIT</div></>
                :<NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}