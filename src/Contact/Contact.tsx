import React from 'react';
import style from './Contact.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {text} from "stream/consumers";

type ContactPropsType = {

}


const Contact = (props:ContactPropsType) => {
    return (
        <div className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.mainBlockInfo}`}>
                    <h2 className={style.title}>Contact</h2>
                    <form className={style.formContainer}>
                        <input type={"text"} placeholder={'Name'} className={style.InputStyles}/>
                        <input type={"text"} placeholder={'Email'} className={style.InputStyles}/>
                        <textarea placeholder={'Your message'} className={style.messageInputStyles}></textarea>
                    </form>
                    <button className={style.button}>Send message</button>
            </div>
        </div>
    );
};

export default Contact;