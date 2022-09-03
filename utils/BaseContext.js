import { Contract, ethers } from "ethers";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { BOUNTY_STATION_ABI } from "./abi";
import { BOUNTY_STATION } from "./constants";

export const BaseContext = createContext({});

export const BaseContextProvider = (props) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [categories, setCategories] = useState([]);
  const [bounties, setBounties] = useState([]);

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
    <BaseContext.Provider
      value={{
        currentAccount,
        categories,
        bounties,
        setCategories,
        setBounties,
        setCurrentAccount,
        connectWallet,
      }}
    >
      {props.children}
    </BaseContext.Provider>
  );
};
