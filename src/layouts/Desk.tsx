import React from "react";
import styles from "./Desk.module.css";
import Logo from "../components/common/Logo";
import Diary from "../components/Diary";
import { Outlet } from "react-router-dom";

interface DeskProps {
  isAuthenticated: boolean;
  check: boolean;
}

function Desk({ isAuthenticated, check }: DeskProps) {
  return (
    <div className={styles.Desk}>
      <Logo />
      <Diary isAuthenticated={isAuthenticated} check={check} />
    </div>
  );
}

export default Desk;
