import React, { Component } from "react";
import Card from "../components/card";
import Page from "../components/page";
import { css } from "@emotion/css";
import Button from "../components/button";

export class Dashboard extends Component {
  constructor(props) {
    super(props);


  }

  async componentDidMount() {

  }
  componentDidUpdate(prevProps, prevState) {

  }

  render() {
    return (
      <Page title=''>
        <div className={styles.row}>
          <Card type="third" title="Price" >
            <h1>$5.00</h1>
          </Card>
          <Card type="third" title="Market Cap" style={{ flexGrow: 1 }}>
            <h1>0</h1>
          </Card>
          <Card type="third" title="Swishes Made" style={{ flexGrow: 1 }}>
            <h1>0</h1>
          </Card>
        </div>
        <div className={styles.row}>
          <Card type="whole" title="">
            <div className={styles.cardLine} style={{ paddingBottom: 16 }}>
              <h3>My claimable rewards</h3>
              <h3>0.00000000</h3>
              <Button title="Claim" />
            </div>
          </Card>
        </div>
        <div className={styles.row}>
          <Card type="half" title="" style={{ marginLeft: 8 }}>
            <div className={styles.cardLine}>
              <h3 className={styles.noMargin}>Total Propsects</h3>
              <h2 className={styles.noMargin}>0</h2>
            </div>
            <div className={styles.cardLine}>
              <h3 className={styles.noMargin}>Total Rookies</h3>
              <h2 className={styles.noMargin}>0</h2>
            </div>
            <div className={styles.cardLine}>
              <h3 className={styles.noMargin}>Total Professionals</h3>
              <h2 className={styles.noMargin}>0</h2>
            </div>
            <div className={styles.cardLine}>
              <h3 className={styles.noMargin}>Total All-Stars</h3>
              <h2 className={styles.noMargin}>0</h2>
            </div>
            <div className={styles.cardLine}>
              <h3 className={styles.noMargin}>Total Hall of Famers</h3>
              <h2 className={styles.noMargin}>0</h2>
            </div>
          </Card>
          <Card type="half" title="">
            <div className={styles.cardLine}>
              <h3 className={styles.noMargin}>My Propsects</h3>
              <h2 className={styles.noMargin}>0</h2>
            </div>
            <div className={styles.cardLine}>
              <h3 className={styles.noMargin}>My Rookies</h3>
              <h2 className={styles.noMargin}>0</h2>
            </div>
            <div className={styles.cardLine}>
              <h3 className={styles.noMargin}>My Professionals</h3>
              <h2 className={styles.noMargin}>0</h2>
            </div>
            <div className={styles.cardLine}>
              <h3 className={styles.noMargin}>My All-Stars</h3>
              <h2 className={styles.noMargin}>0</h2>
            </div>
            <div className={styles.cardLine}>
              <h3 className={styles.noMargin}>My Hall of Famers</h3>
              <h2 className={styles.noMargin}>0</h2>
            </div>
          </Card>
        </div>
      </Page>
    )
  }
}

const styles = {
  row: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 16px;
    padding: 0px 180px 0px 180px;
  `,
  cardLine: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 32px 0px 32px;
  `,
  noMargin: css`
    margin: 4px 0px 4px 0px;
  `,

}
export default Dashboard;