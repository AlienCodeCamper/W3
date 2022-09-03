import { BigNumber, ethers, getDefaultProvider } from "ethers";
import { parseEther, parseUnits } from "ethers/lib/utils";
import React, { useContext, useEffect, useState } from "react";
import { BOUNTY_STATION_ABI } from "../../utils/abi";
import { BaseContext } from "../../utils/BaseContext";
import { BOUNTY_STATION } from "../../utils/constants";

export default function CreateBounty() {
  const [title, setTitle] = useState("");
  const [value, setBountyValue] = useState();
  const [link, setBountyLink] = useState("");
  const [category, setBountyCategory] = useState("");
  const [description, setDescription] = useState();

  const { categories } = useContext(BaseContext);

  // const buyCoffee = async () => {
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let ethValue = parseEther(value);

    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum, "any");

        const signer = provider.getSigner();
        const bountyStation = new ethers.Contract(
          BOUNTY_STATION,
          BOUNTY_STATION_ABI,
          signer
        );

        console.log("Creating Bounty...");
        const createTx = await bountyStation.createBounty(
          title,
          description,
          link,
          BigNumber.from(category),
          ethValue,
          {
            value: ethValue,
          }
        );

        await createTx.wait();

        console.log("mined ", createTx.hash);

        console.log("Bounty Created!");

        // Clear the form fields.
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        margin: "0px auto",
        alignItem: "center",
        width: "744px",
      }}
    >
      <div
        style={{
          fontSize: "32px",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Create A new Bounty
      </div>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            width: "462px",
            margin: "0px auto",
          }}
        >
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Bounty Title"
            onChange={(e) => setTitle(e.target.value)}
            style={{
              padding: "8px",
              border: "1px solid",
              borderRadius: "3px",
            }}
          />
          <input
            type="text"
            name="value"
            id="value"
            placeholder="Bounty Value (in ETH)"
            onChange={(e) => setBountyValue(e.target.value)}
            style={{
              padding: "8px",
              border: "1px solid",
              borderRadius: "3px",
            }}
          />
          <select
            name="Category"
            id="category"
            placeholder="Category"
            onChange={(e) => setBountyCategory(e.target.value)}
            style={{
              padding: "8px",
              border: "1px solid",
              borderRadius: "3px",
            }}
          >
            <option disabled>Select Category</option>
            {categories.map((cat, i) => {
              return (
                <option key={i} value={i}>
                  {cat.categoryName}
                </option>
              );
            })}
          </select>
          <input
            type="text"
            name="url"
            id="url"
            placeholder="URL"
            onChange={(e) => setBountyLink(e.target.value)}
            style={{
              padding: "8px",
              border: "1px solid",
              borderRadius: "3px",
            }}
          />
          <textarea
            rows={3}
            placeholder="Bounty Description"
            id="description"
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            style={{
              background: "black",
              color: "white",
              border: "none",
              borderRadius: "3px",
              height: "36px",
              cursor: "pointer",
            }}
          >
            Post this bounty
          </button>
        </div>
      </form>
    </div>
  );
}
