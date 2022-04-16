import {css } from "@emotion/css";
import React from "react";
const Header = ({title}) => {
  return (
    <div className={styles.headerContainer}>
      <h1>{title}</h1>
    </div>
  );
}

const styles = {
  headerContainer: css`
    background-color: light-blue;
  `
}

export default Header;