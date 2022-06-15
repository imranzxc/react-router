import React from "react";
import { NavLink } from "react-router-dom";
import style from "./header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <h2 className={style.logo}>Cover</h2>
      <nav>
        <ul className={style.list}>
          <li className={style.item}>
            <NavLink className={style.link} to="/">
              Home
            </NavLink>
          </li>
          <li className={style.item}>
            <NavLink className={style.link} to="/features">
              Features
            </NavLink>
          </li>
          <li className={style.item}>
            <NavLink className={style.link} to="/contacts">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;