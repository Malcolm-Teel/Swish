import React, { Component } from "react";
import { PRIMARY_BLUE } from "../styles/colors";
import { css } from "@emotion/css";

export default function Button({ title }) {
  return (
    <button className={styles.button}>{title}</button>
  )
}

const styles = {
  button: css`
    border-style: solid;
    border-width: 1px;
    border-color: #dfeaf9;
    border-radius: 64px;
    padding: 10px 36px 10px 36px;
    background-color: transparent;
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
    padding: 8px 40px 8px 40px;
  `,
}
