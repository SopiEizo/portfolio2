import Link from "next/link";
import styles from "../page.module.css";

export default function Page() {
  return (
    <main className={styles.main}>
        <div>
        <h2>お問い合わせありがとうございます。</h2>
        <Link href="../">フォームに戻る</Link>
        </div>
    </main>
  );
}