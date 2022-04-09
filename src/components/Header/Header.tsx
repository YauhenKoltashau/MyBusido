import React from "react";
import './Header.module.css';
import classes from './Header.module.css';

export const Header = () => {
    return (
        <header className={classes.header}>
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxl0bsetRA8iWHNd5O4XXnAVCdei9U9cca1g&usqp=CAU'}/>
        </header>
    )
}