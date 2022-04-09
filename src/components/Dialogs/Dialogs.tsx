import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

export const Dialogs = () =>{
    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <div className={classes.dialog+' '+classes.active}>
                    <NavLink to={"/dialogs/1"}>Yauhen</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to={'/dialogs/2'}>Irina</NavLink>

                </div>
                <div className={classes.dialog}>Sergey</div>
                <div className={classes.dialog}>Pavel</div>
                <div className={classes.dialog}>Rolan</div>
                <div className={classes.dialog}>Rustam</div>
                <div className={classes.dialog}>Irina</div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>How is your progress?</div>
                <div className={classes.message}></div>
            </div>
        </div>
    )
}