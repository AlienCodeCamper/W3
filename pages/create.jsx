import Head from "next/head";
import CreateBounty from "../src/components/CreateBounty";
import { Navbar } from "../src/components/Navbar";
import styles from "../styles/Home.module.css";

export default function Create() {
  return (
    <div className={styles.container} style={{ padding: "30px 150px" }}>
      <Head>
        <title>W3</title>
        <meta name="description" content="W3 Upwork" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <CreateBounty />
      </main>
    </div>
  );
}
