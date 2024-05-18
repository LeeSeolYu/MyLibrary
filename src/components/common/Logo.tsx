import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return <div className={styles.Logo} onClick={handleClick}></div>;
}

export default Logo;
