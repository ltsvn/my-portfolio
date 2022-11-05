import React from 'react';
import style from './Main.module.css'
import  styleContainer from '../common/styles/Container.module.css'

const Main = () => {
    return (
        <div className={style.mainBlock}>
          <div className={`${styleContainer.container} ${style.mainContainer}`}>
              <div className={style.text}>
                  <span>Hi There!</span>
                  <h1>I am Anastasiia Lutsiv</h1>
                  <p>A FRONT-END DEVELOPER</p>
              </div>
              <div className={style.photo}></div>
          </div>
        </div>
    );
};

export default Main;