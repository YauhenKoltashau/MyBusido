import React from "react";
import styles from "./Captcha.module.scss"
import refresh from "../../assets/refresh.svg"

export const Captcha = ({url,refreshImage}: { url: string, refreshImage?:() => void }) => {
    return (
        <div className={styles.captcha}>
            <img src={url} alt="loading"/>
            <button onClick={refreshImage} >REFRESH</button>
        </div>
    )

}