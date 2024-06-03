import React from "react";
import { Link, NavLink } from "react-router-dom";
import profilePic from '../../assets/pngs/profilePic.jpg'
import styles from "./Header.module.scss";
const Header: React.FC = ({fun}:any) => {
  return (
    <header className={styles.header}>
      <NavLink to="/">
        <div className={styles.content}>
          <img
            src={profilePic}
            alt=""
          />
          <span >SAKSHI SINGH</span>
        </div>
      </NavLink>
      <nav>
        <ul onClick={()=> console.log("first")}>
          <li>
            <NavLink to="/skills">
              {/* <FaHome /> */}
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects">
              {/* <FaFileAlt /> */}
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              {/* <FaUser /> */}
              Contact Me
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
