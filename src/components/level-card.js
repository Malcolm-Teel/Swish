import React from "react";
import { css } from "@emotion/css";
import * as Colors from "../styles/colors";
import swish from '../assets/swish-logo.png';
import Button from "./button";

export default function LevelCard({logo, maxSlots, maxPerUser, price, type, ...rest}) {


  return (
    <div className={[styles[type] ?? styles.bottom]}>
      <img src={logo} alt="logo" className={styles.logo}/>
      <p className={styles.max}>Max slots {maxSlots}</p>
      <p className={styles.max}>Max {maxPerUser} per user</p>
      <h4>{price} $SWISHES</h4>
      <Button title="Create" />
      <div>{rest.children}</div>
    </div>
  )
}
const styles = {
  top: css`
  padding-top: 8px;
  padding-bottom: 16px;
  flex-basis: 30%;
  background-image: linear-gradient(#b0d6ff, #85b8ff);
  box-shadow: 0px 2px 3px #68819c;
  border-radius: 32px;
  font-family: 'Roboto', sans-serif;
  color: #ffffff;
  margin-bottom: 24px;
`,
  bottom: css`
  padding-top: 8px;
  padding-bottom: 16px;
  flex-basis: 30%;
  background-image: linear-gradient(#a4cffe, #7ab2ff);
  box-shadow: 0px 2px 3px #68819c;
  border-radius: 32px;
  font-family: 'Roboto', sans-serif;
  color: #ffffff;
`,
max: css`
  font-size: .5em;
  margin: 0px 0px 0px 0px;
`,
logo: css`
  height: 50px;
`
}