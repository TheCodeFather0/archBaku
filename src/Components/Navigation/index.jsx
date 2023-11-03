import React from "react";
import { MyRoutes } from "../../MyRoutes/index";
import { Link, NavLink } from "react-router-dom";
import styles from "./style.module.css";
import { FaBars } from "react-icons/fa";

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo">
          <Link>
            <img src="./Logo.png" alt="Logo" />
          </Link>
        </div>

        <nav>
          <ul className="d-none d-xl-flex align-items-center">
            {MyRoutes.map(({ id, path, title }) => {
              return (
                <li key={id} className="ms-5">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? styles.active : null
                    }
                    to={path}
                  >
                    {title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className={`d-block d-xl-none ${styles.bars}`}>
          <FaBars />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
