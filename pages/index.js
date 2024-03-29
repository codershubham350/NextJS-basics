import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>User List | Home</title>
        <meta name="keywords" content="About User Listing" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A recusandae
          ex animi harum et deleniti eos voluptates at totam eligendi nesciunt,
          ipsam dolor quas libero dicta quam eaque explicabo. Saepe voluptate
          placeat blanditiis nam tenetur totam illum, aut qui modi.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A recusandae
          ex animi harum et deleniti eos voluptates at totam eligendi nesciunt,
          ipsam dolor quas libero dicta quam eaque explicabo. Saepe voluptate
          placeat blanditiis nam tenetur totam illum, aut qui modi.
        </p>
        <Link href="/weblisting" className={styles.btn}>
          See User Listing
        </Link>
      </div>
    </>
  );
}
