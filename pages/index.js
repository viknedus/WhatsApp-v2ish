import Head from "next/head";
import styles from "../styles/Home.module.css";
import Sidebar from "../components/Sidebar";
import Image from "next/dist/client/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>WhatsApp v2.0-ish</title>
        <link
          rel="icon"
          href="https://avatars.githubusercontent.com/u/16660623?v=4"
        />
      </Head>

      <Sidebar />

      <footer className={styles.footer}>
        <a
          href="https://viknedus.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image
              src="/pic1.png"
              alt="Viknedus Logo"
              width="15px"
              height="15px"
            />{" "}
            <label>viknedus</label>
          </span>
        </a>
      </footer>
    </div>
  );
}
