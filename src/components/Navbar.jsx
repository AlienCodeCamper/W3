import Link from "next/link";
import { useContext } from "react";
import { BaseContext } from "../../utils/BaseContext";
import { minifyAddress } from "../../utils/util";

export function Navbar() {
  const { currentAccount } = useContext(BaseContext);
  return (
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
        <Link
          href={"/create"}
          style={{
            display: "block",
            background: "black",
            color: "white",
            border: "none",
            borderRadius: "3px",
            cursor: "pointer",
            padding: "8px",
          }}
        >
          Create a Bounty
        </Link>
      </div>
      <div>Connected: {minifyAddress(currentAccount)} </div>
    </div>
  );
}
