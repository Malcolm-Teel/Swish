import Header from './header.js';
import React from 'react';
import { css } from '@emotion/css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Button from './button.js';
import swish from '../assets/swish-logo.png';
import whiteBall from '../assets/white-ball-logo.png';
import avax from '../assets/avax.png';
import '../App.css';

const Page = ({ title, wallet, enable, ...rest }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <img src={whiteBall} alt="Logo" className={styles.swishLogo} />
        </div>
        <div>
          <Link to="/" className={styles.link}>Dashboard</Link>
          <Link to="/create" className={styles.link}>Create</Link>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
          <img src={avax} alt="Avax" className={styles.avaxLogo} />
          <Button title="connect" />
        </div>
      </div>
      <div className={styles.main}>
        <h1 className={styles.title}>{title}</h1>
        <div>
          {rest.children}
        </div>
      </div>
    </div>

  )
}
const styles = {
  container: css`
    text-align: center;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  `,
  link: css`
    margin: 0px 64px 0px 64px;
    z-index: 15;
    font-family: 'Roboto';
    text-decoration: none;
    color: #f1f8ff;
    a:visited {text-decoration:none, color: #f1f8ff;};
    a:active {text-decoration: none; color: #daebff;};
    a:hover {text-decoration: none; color: black;};
  `,
  main: css`
    flex: 1;
    padding: 32px 0px 32px 0px;
    background-color: #aad3ff;
  `,
  header: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10px;
    padding: 36px 8px 36px 0px;
    border-bottom: 2px solid #8aabce;
    box-shadow: 0px 0px 5px #8aabce; 
    background-image: linear-gradient(#c7e2fe, #aad3ff);
    z-index: 10;
  `,
  title: css`
     color: #5e99e2;
  `,
  footer: css`
    height: 50px;
  `,
  swishLogo: css`
    height: 80px;
    margin-left: 16px;
    margin-top: 4px;
   
  `,
  avaxLogo: css`
    height: 35px;
    margin-right: 12px;
   
  `,
}

export default Page;