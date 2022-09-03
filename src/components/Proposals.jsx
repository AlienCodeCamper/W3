import React, { useEffect, useState } from "react";

export default function Proposals() {
  const [acceptedProposal, setAcceptedProposal] = useState(true);
  const [taskSubmitted, setTaskSubmitted] = useState(true);
  return (
    <>
      {acceptedProposal ? (
        <div style={{ marginTop: "20px" }}>
          <div style={{ fontSize: "20px" }}>Bounty awarded to:</div>
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
                <div>
                  <div style={{ fontSize: "20px" }}>In progress</div>
                  <div style={{ fontSize: "12px", marginTop: "5px" }}>
                    Status
                  </div>
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
          <div style={{ marginTop: "20px" }}>
            <div style={{ fontSize: "20px" }}>Task:</div>
            <div
              className="bountyCard"
              style={{
                display: "flex",
                alignItems: "center",
                padding: "12px",
                border: "1px solid",
                borderRadius: "4px",
                marginTop: "20px",
              }}
            >
              {taskSubmitted ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "12px" }}>Submitted 5mins ago</div>
                    <div style={{ fontSize: "12px", marginTop: "8px" }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                  </div>
                  <div>
                    <button
                      style={{
                        border: "1px solid",
                        background: "white",
                        borderRadius: "3px",
                        cursor: "pointer",
                        padding: "8px",
                      }}
                    >
                      Dispute
                    </button>
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
                      Approve
                    </button>
                  </div>
                </div>
              ) : (
                <div style={{ fontSize: "12px" }}>
                  The bounty hunder hasnt submitter any task.
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
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
      )}
    </>
  );
}
