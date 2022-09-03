import abi from "../utils/BuyMeACoffee.json";
import { ethers } from "ethers";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import BountyListing from "../src/components/bountyListing";
import CreateBounty from "../src/components/createBounty";
import { minifyAddress } from "../utils/util";

export default function Home() {
  // Contract Address & ABI
  const contractAddress = "0xDBa03676a2fBb6711CB652beF5B7416A53c1421D";
  const contractABI = abi.abi;

  // Component state
  const [currentAccount, setCurrentAccount] = useState("");

  // Wallet connection logic
  const isWalletConnected = async () => {
    try {
      const { ethereum } = window;

      const accounts = await ethereum.request({ method: "eth_accounts" });
      console.log("accounts: ", accounts);

      if (accounts.length > 0) {
        const account = accounts[0];
        setCurrentAccount(account);
      } else {
        console.log("make sure MetaMask is connected");
      }
    } catch (error) {
      console.log("error: ", error);
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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let buyMeACoffee;
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
              height: "48px",
              borderBottom: "1px solid",
            }}
          >
            <div style={{ display: "flex", gap: "40px" }}>
              <div>Company Logo</div>
              <div>Bounty Board</div>
              {/* <div>Top Bounty Hunters</div> */}
            </div>
            <div>Create a Bounty</div>
            <div>Connected: {minifyAddress(currentAccount)} </div>
          </div>
          <main className={styles.main}>
            {currentAccount && (
              <div style={{ marginTop: "32px" }}>
                <div style={{ fontSize: "20px" }}>Bounty Title</div>
                <div
                  style={{
                    marginTop: "20px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "14px",
                      cursor: "pointer",
                    }}
                  >
                    Posted by: address.eth
                  </span>
                  <span
                    style={{
                      fontSize: "14px",
                      marginLeft: "16px",
                      cursor: "pointer",
                    }}
                  >
                    Category
                  </span>
                  <span
                    style={{
                      fontSize: "14px",
                      marginLeft: "16px",
                      cursor: "pointer",
                    }}
                  >
                    Posted 5 mins ago
                  </span>
                </div>
                <div
                  className="bountyCard"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "12px",
                    border: "1px solid",
                    borderRadius: "4px",
                    marginTop: "20px",
                  }}
                >
                  <div style={{ fontSize: "24px" }}>1.2 ETH</div>
                  <div style={{ fontSize: "12px" }}>Bounty Value</div>
                </div>
                <div style={{ marginTop: "20px" }}>
                  <div style={{ fontSize: "20px" }}>Bounty Description</div>
                  <div>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Molestias, eveniet eligendi laudantium pariatur assumenda
                    voluptate quaerat asperiores aut illum, quod necessitatibus
                    saepe! Quibusdam maiores fugiat magnam, blanditiis ipsam sed
                    deserunt.
                  </div>
                </div>
                <div style={{ marginTop: "20px" }}>
                  <div style={{ fontSize: "20px" }}>Resources</div>
                  <div>bountynew.xyz</div>
                </div>
                <div style={{ marginTop: "20px" }}>
                  <div style={{ fontSize: "20px" }}>Proposals Received: 4</div>
                  <div>
                    <div
                      style={{
                        padding: "12px",
                        border: "1px solid",
                        borderRadius: "2px",
                        marginTop: "20px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>Username.eth</div>
                        <div>1.2ETH</div>
                        <div>Accept</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
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
