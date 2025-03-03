import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comission | sopieizo.work',
};

export default function Home() {
  return (
    <main className={styles.main}>
        <h1 className={styles.contacttext}>Contact</h1>
        <p>お問い合わせフォーム</p>
        <form method="post" action={process.env.NEXT_PUBLIC_HYPERFORM_URL}>
          <div className={styles.formitem}>
            <label>お名前<br/>
            <input type="text" name="name" placeholder="例）山田太郎" className={styles.cformtext} />
            </label>
          </div>
          <div className={styles.formitem}>
            <label>メールアドレス<br/>
            <input type="email" name="email" placeholder="example@example.com" className={styles.cformemail} />
            </label>
          </div>
          <div className={styles.formitem}>
            <label>お問い合わせ内容<br/>
            <textarea name="お問い合わせ内容" required className={styles.cformtextarea}></textarea>
            </label>
          </div>
          <button type="submit" className={styles.cformbutton}>送信</button>
        </form>
    </main>
  );
}
