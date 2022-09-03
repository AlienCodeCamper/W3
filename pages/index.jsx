import abi from "../utils/BuyMeACoffee.json";
import { ethers } from "ethers";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  // Contract Address & ABI
  const contractAddress = "0xDBa03676a2fBb6711CB652beF5B7416A53c1421D";
  const contractABI = abi.abi;

  // Component state
  const [currentAccount, setCurrentAccount] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [memos, setMemos] = useState([]);

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onMessageChange = (event) => {
    setMessage(event.target.value);
  };

  // Wallet connection logic
  const isWalletConnected = async () => {
    try {
      const { ethereum } = window;

      const accounts = await ethereum.request({ method: "eth_accounts" });
      console.log("accounts: ", accounts);

      if (accounts.length > 0) {
        const account = accounts[0];
        console.log("wallet is connected! " + account);
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

  const buyCoffee = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum, "any");
        const signer = provider.getSigner();
        const buyMeACoffee = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        console.log("buying coffee..");
        const coffeeTxn = await buyMeACoffee.buyCoffee(
          name ? name : "anon",
          message ? message : "Enjoy your coffee!",
          { value: ethers.utils.parseEther("0.001") }
        );

        await coffeeTxn.wait();

        console.log("mined ", coffeeTxn.hash);

        console.log("coffee purchased!");

        // Clear the form fields.
        setName("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Function to fetch all memos stored on-chain.
  const getMemos = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const buyMeACoffee = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        console.log("fetching memos from the blockchain..");
        const memos = await buyMeACoffee.getMemos();
        console.log("fetched!");
        setMemos(memos);
      } else {
        console.log("Metamask is not connected");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let buyMeACoffee;
    isWalletConnected();
    getMemos();

    // Create an event handler function for when someone sends
    // us a new memo.
    const onNewMemo = (from, timestamp, name, message) => {
      console.log("Memo received: ", from, timestamp, name, message);
      setMemos((prevState) => [
        ...prevState,
        {
          address: from,
          timestamp: new Date(timestamp * 1000),
          message,
          name,
        },
      ]);
    };

    const { ethereum } = window;

    // Listen for new memo events.
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum, "any");
      const signer = provider.getSigner();
      buyMeACoffee = new ethers.Contract(contractAddress, contractABI, signer);

      buyMeACoffee.on("NewMemo", onNewMemo);
    }

    return () => {
      if (buyMeACoffee) {
        buyMeACoffee.off("NewMemo", onNewMemo);
      }
    };
  }, []);

  return (
    <div className={styles.container} style={{ padding: "30px 150px" }}>
      <Head>
        <title>W3</title>
        <meta name="description" content="W3 Upwork" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
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
          <div>Top Bounty Hunters</div>
        </div>
        <div>Create a Bounty</div>
      </div>
      <main className={styles.main}>
        {currentAccount ? (
          <div
            style={{
              margin: "0px auto",
              alignItem: "center",
              width: "744px",
            }}
          >
            <div
              style={{
                fontSize: "32px",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              Create A Bounty
            </div>
            <form>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  width: "462px",
                  margin: "0px auto",
                }}
              >
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Bounty Title"
                  style={{
                    padding: "8px",
                    border: "1px solid",
                    borderRadius: "3px",
                  }}
                />
                <input
                  type="text"
                  name="value"
                  id="value"
                  placeholder="Bounty Value"
                  style={{
                    padding: "8px",
                    border: "1px solid",
                    borderRadius: "3px",
                  }}
                />
                <select
                  name="Category"
                  id="category"
                  placeholder="Category"
                  style={{
                    padding: "8px",
                    border: "1px solid",
                    borderRadius: "3px",
                  }}
                >
                  <option value="product">Product</option>
                  <option value="marketing">Marketing</option>
                  <option value="news">News</option>
                </select>
                <input
                  type="text"
                  name="url"
                  id="url"
                  placeholder="URL"
                  style={{
                    padding: "8px",
                    border: "1px solid",
                    borderRadius: "3px",
                  }}
                />
                <textarea
                  rows={3}
                  placeholder="Bounty Description"
                  id="description"
                  onChange={onMessageChange}
                  required
                ></textarea>
                <button
                  type="button"
                  onClick={buyCoffee}
                  style={{
                    background: "black",
                    color: "white",
                    border: "none",
                    borderRadius: "3px",
                    height: "36px",
                    cursor: "pointer",
                  }}
                >
                  Post this bounty
                </button>
              </div>
            </form>
          </div>
        ) : (
          <>
            <h1 className={styles.title}>Connect wallet to enter app!</h1>
            <button onClick={connectWallet}> Connect your wallet </button>
          </>
        )}
      </main>

      {/* {currentAccount && <h1>Memos received</h1>} */}

      {/* {currentAccount &&
        memos.map((memo, idx) => {
          return (
            <div
              key={idx}
              style={{
                border: "2px solid",
                borderRadius: "3px",
                padding: "5px",
                margin: "5px",
              }}
            >
              <p style={{ fontWeight: "bold" }}>"{memo.message}"</p>
              <p>
                From: {memo.name} at {memo.timestamp.toString()}
              </p>
            </div>
          );
        })} */}

      <footer className={styles.footer}>
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
      </footer>
    </div>
  );
}
