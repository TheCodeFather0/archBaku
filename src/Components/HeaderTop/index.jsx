import React from "react";
import styles from "./style.module.css";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import HeaderTopContact from "../HeaderTopContact";
import { Link } from "react-router-dom";
const contactInfo = [
  { id: 1, title: "+994 55 000 00 00", icon: <BsFillTelephoneForwardFill /> },
  { id: 1, title: "info@archbaku.az", icon: <AiOutlineMail /> },
  { id: 1, title: "Bakı / Azərbaycan", icon: <HiLocationMarker /> },
];
const HeaderTop = () => {
  return (
    <div className={`d-none d-xl-block ${styles.headerTop}`}>
      <div className="container">
        <div className={styles.contactAndSocial}>
          <div className={styles.contactInfo}>
            {contactInfo.map((props) => {
              return <HeaderTopContact {...props} />;
            })}
          </div>

          <div className="d-flex align-items-center ">
            <Link className={styles.link} to="https://google.com">
              <AiFillInstagram />
            </Link>
            <Link className={styles.link} to="https://google.com">
              <AiFillFacebook />
            </Link>
            <Link className={styles.link} to="https://google.com">
              <AiFillLinkedin />
            </Link>
            <Link className={styles.link} to="https://google.com">
              <AiOutlineWhatsApp />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
