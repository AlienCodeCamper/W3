import Head from "next/head";
import DealDetail from "../../src/components/DealDetail";
import { Navbar } from "../../src/components/Navbar";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { BaseContext, BaseContextProvider } from "../../utils/BaseContext";

export default function dealDetail() {
  const router = useRouter();
  const { id } = router.query;
  const {
    currentAccount,
    categories,
    bounties,
    setCategories,
    setBounties,
    setCurrentAccount,
    activeBounty,
    setActiveBounty,
  } = useContext(BaseContext);

  useEffect(() => {
    if (bounties.length) {
      setActiveBounty(bounties[id]);
    }
  }, [id]);

  return (
    <div className={styles.container} style={{ padding: "30px 150px" }}>
      <Head>
        <title>W3</title>
        <meta name="description" content="W3 Upwork" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <DealDetail />
      </main>
    </div>
  );
}
