import React, { Component } from "react";
import Card from "../components/card";
import Page from "../components/page";
import { css } from "@emotion/css";
import Button from "../components/button";
import LevelCard from "../components/level-card";
import swish from '../assets/swish-logo.png';
import allstar from '../assets/allstar.png'
import hallOfFame from '../assets/hall-of-fame.png';
import professional from '../assets/professional.png';
import propsect from '../assets/prospect.png';
import rookie from '../assets/rookie.png';


export class Create extends Component {
  constructor(props) {
    super(props);


  }

  async componentDidMount() {

  }
  componentDidUpdate(prevProps, prevState) {

  }

  render() {
    return (
      <Page title="">
        <div className={styles.main}>
          <Card title="Big Baller NFT" type="quarter">
            <div>
              <p className={styles.leftCardText} style={{ textAlign: "left", paddingLeft: 16, paddingRight:16 }}>
                Own one of every single tier to become a legend! Only legends are big ballers who can boost rewards
              </p>
              <img src={swish} alt="logo" className={styles.swishLogo}></img>
              <h3>30 $AVAX</h3>
              <p className={styles.leftCardText} style={{ textAlign: "center", paddingLeft: 32, paddingRight:32, marginBottom: 32 }}>Boost your rewards and get white listed for MoneyShotz</p>
              <Button title="Mint" />
              <div className={styles.leftCardRow} style={{marginTop:32}}>
                <h3>My Nfts</h3>
                <h3>0/0</h3>
              </div>
            </div>
          </Card>
          <Card title="" type="threeQuarter">
            <div className={styles.cardRow}>
              <Card title="CHOOSE YOUR LEVEL" type="chooseLevel"></Card>
            </div>
            <div className={styles.cardRow}>
              <LevelCard logo={allstar} maxSlots={10000} maxPerUser={2} price={460} type="top"></LevelCard>
              <LevelCard logo={hallOfFame} maxSlots={500} maxPerUser={1} price={1200} type="top"></LevelCard>
            </div>
            <div className={styles.cardRow}>
              <LevelCard logo={propsect} maxSlots={10000} maxPerUser={2} price={460}></LevelCard>
              <LevelCard logo={rookie} maxSlots={500} maxPerUser={1} price={1200}></LevelCard>
              <LevelCard logo={professional} maxSlots={500} maxPerUser={1} price={1200}></LevelCard>
            </div>
            <div className={styles.cardRow}>

            </div>
          </Card>
        </div>
      </Page>
    );
  }
}

const styles = {
  main: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 112px 0px 112px;
  `,
  cardRow: css`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  `,
  leftCardRow: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 16px 0px 16px;
  `,
  cardColumn: css`
    display: flex;
    flex-direction: column;
  `,
  swishLogo: css`
    height: 100px;
  `,
  leftCardText: css`
    font-size: .85em;
  `
}