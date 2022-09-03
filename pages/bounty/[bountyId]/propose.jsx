import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../../../styles/Home.module.css";
import { Navbar } from "../../../src/components/Navbar";
import SubmitProposal from "../../../src/components/SubmitProposal";

export default function Propose() {
  const { query } = useRouter();
  const { bountyId } = query;

  return (
    <div className={styles.container} style={{ padding: "30px 150px" }}>
      <Head>
        <title>W3</title>
        <meta name="description" content="W3 Upwork" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <SubmitProposal bountyId={bountyId} />
      </main>
    </div>
  );
}
