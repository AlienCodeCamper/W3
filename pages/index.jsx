import abi from "../utils/BuyMeACoffee.json";
import { Contract, ethers } from "ethers";
import Head from "next/head";
import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { minifyAddress } from "../utils/util";
import { BOUNTY_STATION } from "../utils/constants";
import { BOUNTY_STATION_ABI } from "../utils/abi";
import BountyDetail from "../src/components/BountyDetail";
import BountyListing from "../src/components/BountyListing";
import { BaseContext, BaseContextProvider } from "../utils/BaseContext";
import Link from "next/link";
import { Navbar } from "../src/components/Navbar";

export default function Home() {
  const {
    currentAccount,
    categories,
    bounties,
    setCategories,
    setBounties,
    setCurrentAccount,
    connectWallet,
  } = useContext(BaseContext);
  // Wallet connection logic

  return (
    <div className={styles.container} style={{ padding: "30px 150px" }}>
      <Head>
        <title>W3</title>
        <meta name="description" content="W3 Upwork" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!currentAccount && (
        <>
          <h1 className={styles.title}>Connect wallet to enter app!</h1>
          <button
            style={{
              width: "200px",
              alignSelf: "center",
              marginTop: "20px",
              background: "black",
              color: "white",
              border: "none",
              borderRadius: "3px",
              padding: "8px",
            }}
            onClick={connectWallet}
          >
            {" "}
            Connect your wallet{" "}
          </button>
        </>
      )}
      {currentAccount && (
        <>
          <Navbar />
          <main className={styles.main}>
            {currentAccount && <BountyListing />}
          </main>

          {/* <footer className={styles.footer}>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div>About Us</div>
                <div>Team</div>
                <div>History</div>
              </div>
              <div>Company Info</div>
            </div>
          </footer> */}
        </>
      )}
    </div>
  );
}
