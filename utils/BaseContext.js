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
  const [activeBounty, setActiveBounty] = useState(null);

  return (
    <BaseContext.Provider
      value={{
        currentAccount,
        categories,
        bounties,
        activeBounty,
        setCategories,
        setBounties,
        setCurrentAccount,
        connectWallet,
        setActiveBounty,
      }}
    >
      {props.children}
    </BaseContext.Provider>
  );
};
