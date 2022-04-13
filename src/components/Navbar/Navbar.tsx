import React from "react";
import {NavLink} from "react-router-dom";
import './Navbar.module.css';
import classes from './Navbar.module.css';
import {sideBarType} from "../../redux/state";

type NavbarPropsType = {
    sideBar: Array<sideBarType>
}
export const Navbar = (props: NavbarPropsType) => {
    return (<nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to={"/profile"} activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={`${classes.item}`}>
                <NavLink to={"/dialogs"} activeClassName={classes.active}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={'/news'} activeClassName={classes.active}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={'/music'} activeClassName={classes.active}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={'/settings'} activeClassName={classes.active}>Settings</NavLink>
            </div>
            Friends:
            <div className={classes.friends}>{props.sideBar.map((s) =>
                <div>
                    <img src={'data:image/jpeg;base64,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'}/>
                    {s.name}
                </div>
            )}</div>

        </nav>
    )
}