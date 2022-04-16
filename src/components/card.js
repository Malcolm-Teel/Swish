import React from "react";
import { css } from "@emotion/css";
import * as Colors from "../styles/colors";

export default function Card(props) {
  return (
    <div className={[styles[props.type] ?? styles.standard]}>
      {props.type=="chooseLevel"||"quarter"? <h2>{props.title}</h2>: <h4>{props.title}</h4>}
      <div>{props.children}</div>
    </div>
  )
}

const styles = {
  standard: css`
    //padding: 12px 64px 12px 64px;
    background-image: linear-gradient(#cbe4fe, #84b9ff);
    box-shadow: 0px 2px 3px #68819c;
    border-radius: 32px;
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
  `,
  third: css`
    flex-basis: 33%;
    //padding: 0px 96px 0px 96px;
    background-image: linear-gradient(#cbe4fe, #84b9ff);
    border-radius: 32px;
    box-shadow: 0px 2px 3px #68819c;
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
  `,
  half: css`
    flex-basis: 47%;
    padding: 16px 8px 32px 8px;
    background-image: linear-gradient(#cbe4fe, #84b9ff);
    border-radius: 32px;
    box-shadow: 0px 2px 3px #68819c;
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
  `,
  whole: css`
    flex-basis: 100%;
    // padding: 0px 16px 0px 16px;
    background-image: linear-gradient(#cbe4fe, #84b9ff);
    border-radius: 32px;
    box-shadow: 0px 2px 3px #68819c;
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
  `,
  quarter: css`
    flex-basis: 23%;
    padding: 0px 4px 0px 4px;
    background-image: linear-gradient(#cbe4fe, #84b9ff);
    border-radius: 32px;
    box-shadow: 0px 2px 3px #68819c;
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
  `,
  threeQuarter: css`
    flex-basis: 73%;
    padding: 4px 0px 24px 0px;
    background-image: linear-gradient(#cbe4fe, #84b9ff);
    border-radius: 32px;
    box-shadow: 0px 2px 3px #68819c;
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
  `,
  chooseLevel: css`
    flex-basis: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 32px;
    align-text: center;
    background-image: linear-gradient(#d2e7fe, #b1d4fe);
    border-radius: 32px;
    box-shadow: 0px 1px 3px #68819c;
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
    margin-bottom: 48px;
`,
  
}