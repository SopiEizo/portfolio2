import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <video src="bgv.webm" autoPlay loop muted className={styles.video}></video>
    </main>
  );
}
