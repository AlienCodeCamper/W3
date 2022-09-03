import Proposals from "./Proposals";
import React, { useContext, useEffect, useState } from "react";
import { BaseContext, BaseContextProvider } from "../../utils/BaseContext";
import { formatUnits } from "ethers/lib/utils";

export default function DealDetails() {
  const {
    currentAccount,
    categories,
    bounties,
    setCategories,
    setBounties,
    setCurrentAccount,
    activeBounty,
    setActiveBounty,
  } = useContext(BaseContext);
  console.log({ currentAccount, categories, bounties });
  console.log({ activeBounty });
  return (
    <div style={{ marginTop: "32px" }}>
      <div style={{ fontSize: "20px" }}>{activeBounty.bountyTitle}</div>
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
          Posted by: {activeBounty.bountyCreator}
        </span>
        <span
          style={{
            fontSize: "14px",
            marginLeft: "16px",
            cursor: "pointer",
          }}
        >
          {categories[activeBounty.bountyCategory.toNumber()]?.categoryName}
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
        <div style={{ fontSize: "24px" }}>
          {formatUnits(activeBounty.bountyValueETH)}
        </div>
        <div style={{ fontSize: "12px", marginTop: "5px" }}>Bounty Value</div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <div style={{ fontSize: "20px" }}>Bounty Description</div>
        <div>{activeBounty.bountyDescription}</div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <div style={{ fontSize: "20px" }}>Resources</div>
        <div>{activeBounty.bountyLink}</div>
      </div>
      <Proposals />
    </div>
  );
}
