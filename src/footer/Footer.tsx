import React from 'react';
import style from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css'
import styles from "../skills/Skills.module.css";

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Anastasiia Lutsiv</h2>
                <div className={style.iconContainer}>
                    <span className={style.icon}></span>
                    <span className={style.icon}></span>
                    <span className={style.icon}></span>
                    <span className={style.icon}></span>
                </div>
                <h3>©All rights reserved</h3>
            </div>
        </div>
    );
};

export default Footer;