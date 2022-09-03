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
      <div style={{ marginTop: "20px" }}>
        <div style={{ fontSize: "20px" }}>Proposals Received: 4</div>
        <div>
          <div
            style={{
              padding: "12px",
              border: "1px solid",
              borderRadius: "4px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid",
                paddingBottom: "20px",
              }}
            >
              <div>
                <div style={{ fontSize: "20px" }}>Username.eth</div>
                <div style={{ fontSize: "12px", marginTop: "5px" }}>
                  Bounty Hunter
                </div>
              </div>
              <div>
                <div style={{ fontSize: "20px" }}>1.2 ETH</div>
                <div style={{ fontSize: "12px", marginTop: "5px" }}>
                  Bid Amount
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ fontSize: "12px" }}>Submitted 5 mins ago</span>
                <button
                  style={{
                    background: "black",
                    color: "white",
                    border: "none",
                    borderRadius: "3px",
                    cursor: "pointer",
                    padding: "8px",
                    marginLeft: "15px",
                  }}
                >
                  Accept Proposal
                </button>
              </div>
            </div>
            <div style={{ marginTop: "20px" }}>
              <div style={{ fontSize: "12px" }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Praesentium delectus repudiandae consequatur eius aperiam
                reprehenderit aliquam. Blanditiis itaque soluta quo nemo
                officiis voluptate temporibus vel tempora quidem? Debitis,
                facere delectus.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
