import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

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
        setActiveBounty,
      }}
    >
      {props.children}
    </BaseContext.Provider>
  );
};
