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
  const [categories, setCategories] = useState();
  const [bounties, setBounties] = useState();

  return (
    <BaseContext.Provider
      value={{
        currentAccount,
        categories,
        bounties,
        setCategories,
        setBounties,
        setCurrentAccount,
      }}
    >
      {props.children}
    </BaseContext.Provider>
  );
};
