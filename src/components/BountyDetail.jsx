import { formatEther } from "ethers/lib/utils";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { BaseContext } from "../../utils/BaseContext";
import { minifyAddress } from "../../utils/util";
import Proposals from "./Proposals";
import SubmitProposal from "./SubmitProposal";

export default function BountyDetail({ bountyId }) {
  const { bounties, categories } = useContext(BaseContext);

  let bounty = bounties.filter((b) => b.bountyId.toNumber() == bountyId)[0];
  console.log({ categories, bounties, bounty });

  return bounty && categories ? (
    <div style={{ marginTop: "32px" }}>
      <div style={{ fontSize: "20px" }}>{bounty.bountyTitle}</div>
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
          Posted by: {minifyAddress(bounty.bountyCreator)}
        </span>
        <span
          style={{
            fontSize: "14px",
            marginLeft: "16px",
            cursor: "pointer",
          }}
        >
          {categories[bounty.bountyCategory].categoryName}
        </span>
        {/* <span
          style={{
            fontSize: "14px",
            marginLeft: "16px",
            cursor: "pointer",
          }}
        >
          Posted 5 mins ago
        </span> */}
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
          {formatEther(bounty.bountyValueETH)} ETH
        </div>
        <div style={{ fontSize: "12px", marginTop: "5px" }}>Bounty Value</div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <div style={{ fontSize: "20px" }}>Bounty Description</div>
        <div>{bounty.bountyDescription}</div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <div style={{ fontSize: "20px" }}>Link</div>
        <div>{bounty.bountyLink}</div>
      </div>

      <Link passHref href={`/bounty/${bountyId}/propose`}>
        <button
          style={{
            marginTop: "20px",
            display: "block",
            padding: "16px 24px",
            fontFamily: "DM Sans",
            fonStyle: "normal",
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "26px",
            width: "189px",
            height: "56px",
            color: "white",
            background: "#000000",
            borderRadius: "8px",
          }}
        >
          Submit a Proposal
        </button>
      </Link>
    </div>
  ) : (
    <>Loading...</>
  );
}
