import React, { useEffect, useState } from "react";

export default function CreateBounty() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [memos, setMemos] = useState([]);

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const buyCoffee = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum, "any");
        const signer = provider.getSigner();
        const buyMeACoffee = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        console.log("buying coffee..");
        const coffeeTxn = await buyMeACoffee.buyCoffee(
          name ? name : "anon",
          message ? message : "Enjoy your coffee!",
          { value: ethers.utils.parseEther("0.001") }
        );

        await coffeeTxn.wait();

        console.log("mined ", coffeeTxn.hash);

        console.log("coffee purchased!");

        // Clear the form fields.
        setName("");
        setMessage("");
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
        Create A Bounty
      </div>
      <form>
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
            placeholder="Bounty Value"
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
            style={{
              padding: "8px",
              border: "1px solid",
              borderRadius: "3px",
            }}
          >
            <option value="product">Product</option>
            <option value="marketing">Marketing</option>
            <option value="news">News</option>
          </select>
          <input
            type="text"
            name="url"
            id="url"
            placeholder="URL"
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
            onChange={onMessageChange}
            required
          ></textarea>
          <button
            type="button"
            onClick={buyCoffee}
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
