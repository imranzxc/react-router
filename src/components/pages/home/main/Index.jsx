import React from 'react';
import style from './main.module.css';

const Main = () => {
  return (
    <main className={style.main}>
      <h1 className={style.title}>Cover your page.</h1>
      <div className={style.text}>
        <p>
          Cover is a one-page template for building simple and beautiful home pages. Download, edit
          the text, and add your own fullscreen background photo to make it your own.
        </p>
      </div>
      <button className={style.btn}>Learn more</button>
    </main>
  );
};

export default Main;
