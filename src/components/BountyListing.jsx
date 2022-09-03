import { BigNumber } from "ethers";
import { formatUnits } from "ethers/lib/utils";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { BaseContext, BaseContextProvider } from "../../utils/BaseContext";

export default function BountyListing() {
  const {
    currentAccount,
    categories,
    bounties,
    setCategories,
    setBounties,
    setCurrentAccount,
  } = useContext(BaseContext);
  console.log({ currentAccount, categories, bounties });
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleChangeCategory = (e) => {
    console.log(e.target.value);
    setSelectedCategory(e.target.value);
  };

  return (
    <div style={{ marginTop: "32px" }}>
      <div style={{ fontSize: "16px" }}>
        Bounty Board{" "}
        <select
          name="bountyType"
          id="bountyType"
          onChange={handleChangeCategory}
        >
          <option value={"all"}>All</option>
          {categories?.map((category, i) => {
            return (
              <option key={i} value={i}>
                {category.categoryName}
              </option>
            );
          })}
        </select>
      </div>
      {bounties
        ?.filter((bounty) => {
          if (selectedCategory == "all") {
            return true;
          }
          if (selectedCategory == bounty.bountyCategory.toNumber()) {
            return true;
          }
        })
        .map((bounty, i) => {
          return (
            <Link
              key={bounty.bountyId}
              passHref
              href={`/bounty/${bounty.bountyId}`}
            >
              <div
                className="bountyCard"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "12px",
                  border: "1px solid",
                  borderRadius: "2px",
                  marginTop: "20px",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    gap: "8px",
                    display: "flex",
                    flexDirection: "column",
                    paddingRight: "12px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "20px",
                    }}
                  >
                    {bounty.bountyTitle}
                  </div>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <span style={{}}>
                      {
                        categories[bounty.bountyCategory.toNumber()]
                          ?.categoryName
                      }
                    </span>
                    <span style={{ fontSize: "12px", alignSelf: "center" }}>
                      Posted {i + 5} mins ago
                    </span>
                  </div>
                  <div style={{ fontSize: "12px" }}>
                    {bounty.bountyDescription}
                  </div>
                </div>
                <div
                  style={{
                    paddingLeft: "24px",
                    borderLeft: "1px solid",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "5px",
                  }}
                >
                  <div>{formatUnits(bounty.bountyValueETH)}</div>
                  <div style={{ fontSize: "12px" }}>Bounty Value</div>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
}
