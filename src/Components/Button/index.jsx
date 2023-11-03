import React from "react";
import "./style.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";

const Button = ({ children, bg, arrow }) => {
  console.log(arrow);
  return (
    <motion.button
      className={`button ${bg}`}
      initial={{ transform: "rotate(0deg)" }}
      whileInView={{ transform: "rotate(360deg)" }}
    >
      <span className="me-1">{children}</span>
      {arrow && <AiOutlineArrowRight />}
    </motion.button>
  );
};

export default Button;
