import abi from "../utils/BuyMeACoffee.json";
import { Contract, ethers } from "ethers";
import Head from "next/head";
import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { minifyAddress } from "../utils/util";
import { BOUNTY_STATION } from "../utils/constants";
import { BOUNTY_STATION_ABI } from "../utils/abi";
import BountyDetail from "../src/components/BountyDetail";
import { BaseContext, BaseContextProvider } from "../utils/BaseContext";

export default function Home() {
  const {
    currentAccount,
    categories,
    bounties,
    setCategories,
    setBounties,
    setCurrentAccount,
  } = useContext(BaseContext);

  // Wallet connection logic
  const isWalletConnected = async () => {
    try {
      const { ethereum } = window;

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length > 0) {
        const account = accounts[0];
        setCurrentAccount(account);
        getCategories();
        getBounties();
      } else {
        console.log("make sure MetaMask is connected");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const getCategories = async () => {
    try {
      const BountyStation = new Contract(
        BOUNTY_STATION,
        BOUNTY_STATION_ABI,
        ethers.getDefaultProvider(4)
      );

      let categoriess = await BountyStation.getAllCategories();
      setCategories(categoriess);
    } catch (error) {
      console.error(error);
    }
  };

  const getBounties = async () => {
    try {
      const BountyStation = new Contract(
        BOUNTY_STATION,
        BOUNTY_STATION_ABI,
        ethers.getDefaultProvider(4)
      );

      let bounties = await BountyStation.getAllBounties();
      setBounties(bounties);
    } catch (error) {
      console.error(error);
    }
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("please install MetaMask");
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
      getCategories();
      getBounties();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    isWalletConnected();

    const { ethereum } = window;

    // Listen for new memo events.
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum, "any");
      const signer = provider.getSigner();
    }
  }, []);

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
          <div
            className="navBar"
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              height: "48px",
              borderBottom: "1px solid",
            }}
          >
            <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
              <div>Company Logo</div>
              <div>Ongoing Bounties</div>
              <div>Bounty Board</div>
              <button
                style={{
                  background: "black",
                  color: "white",
                  border: "none",
                  borderRadius: "3px",
                  cursor: "pointer",
                  padding: "8px",
                }}
              >
                Create a Bounty
              </button>
            </div>
            <div>Connected: {minifyAddress(currentAccount)} </div>
          </div>
          <main className={styles.main}>
            {currentAccount && <BountyDetail />}
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
