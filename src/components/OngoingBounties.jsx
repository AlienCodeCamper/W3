export default function OngoingBounties() {
  return (
    <div style={{ marginTop: "32px" }}>
      <div style={{ fontSize: "20px" }}>
        Ongoing Bounties
        <span
          style={{
            fontSize: "14px",
            marginLeft: "16px",
            cursor: "pointer",
          }}
        >
          Bounties Posted
        </span>
        <span
          style={{
            fontSize: "14px",
            marginLeft: "16px",
            cursor: "pointer",
          }}
        >
          Bounties Applied
        </span>
      </div>
      <div
        className="bountyCard"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "12px",
          border: "1px solid",
          borderRadius: "2px",
          marginTop: "20px",
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
            Bounty Title
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <span style={{}}>Category</span>
            <span>Posted 5 mins ago</span>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            architecto unde sapiente itaque quibusdam rem quas. Ipsa odio
            laborum cumque, architecto numquam veniam impedit ipsum magnam,
            saepe iste rem quis?
          </div>
        </div>
        <div style={{ paddingLeft: "24px", borderLeft: "1px solid" }}>
          <div>1.2 ETH</div>
          <div>Bounty Value</div>
        </div>
      </div>
    </div>
  );
}
