import React from "react";
import Footer from "../../footer";
import style from "./features.module.css";

const Features = () => {
  return (
    <>
      <main className={style.main}>
        <div className={style.image}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8mEIWZjRFdiO4YIkq790lTaNzTtCH6DcwrQ&usqp=CAU"
            alt=""
          />
        </div>
        <div className={style.content}>
          <h2 className={style.title}>Lorem ipsum</h2>
          <div className={style.desk}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quam
              eaque expedita. Esse iure corrupti expedita blanditiis? Pariatur
              ut debitis fugiat esse iste, voluptatem eum aliquid dignissimos
              excepturi ipsum soluta.
            </p>
          </div>
          <button className={style.btn}>Submit</button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Features;