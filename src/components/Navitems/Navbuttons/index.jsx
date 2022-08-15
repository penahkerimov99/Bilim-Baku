import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.scss";

const NavButtons = () => {
  return (
    <div className="nav-items">
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "non-active")}
            to="/"
          >
            Ana səhifə
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "non-active")}
            to="/about"
          >
            Haqqımızda
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "non-active")}
            to="/labs"
          >
            Laboratoriyalar
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "non-active")}
            to="/centers"
          >
            Mərkəzlər
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "non-active")}
            to="/news"
          >
            Xəbərlər
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "non-active")}
            to="/contact"
          >
            Günlük əlaqə
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavButtons;
