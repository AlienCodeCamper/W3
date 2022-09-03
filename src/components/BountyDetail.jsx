import Proposals from "./Proposals";

export default function BountyDetail() {
  return (
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
        <div style={{ fontSize: "12px", marginTop: "5px" }}>Bounty Value</div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <div style={{ fontSize: "20px" }}>Bounty Description</div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias,
          eveniet eligendi laudantium pariatur assumenda voluptate quaerat
          asperiores aut illum, quod necessitatibus saepe! Quibusdam maiores
          fugiat magnam, blanditiis ipsam sed deserunt.
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <div style={{ fontSize: "20px" }}>Resources</div>
        <div>bountynew.xyz</div>
      </div>
      <Proposals />
    </div>
  );
}
