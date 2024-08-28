import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | sopieizo.work',
};

export default function Home() {
  return (
    <main className={styles.main}>
        <h1 className={styles.abouttext}>About</h1>
        <div className={styles.subheading}>
          <h2>SopiEizo</h2>
          <p>2020年から二次創作のMVやモーショングラフィックスなどを軸に作品制作をしています。</p>
          <div className={styles.snsflex}>
              <Link className={styles.snsa} href="https://x.com/Sopi_Eizo3"><div className={styles.snsbox}><FontAwesomeIcon icon={faXTwitter} width={20} className={styles.icons}/><h3>@Sopi_Eizo3</h3></div></Link>
              <Link className={styles.snsa} href="https://www.youtube.com/@Sopi_Eizo"><div className={styles.snsbox}><FontAwesomeIcon icon={faYoutube} width={20} className={styles.icons}/><h3>@Sopi_Eizo</h3></div></Link>
          </div>
        </div>
        <h2>Skill</h2>
        <p>Motion Design / Motion graphics / 3DCG / MV / Lyric motion</p>
        <h2>Tools</h2>
        <p>Blender / AfterEffects / Premiere pro / Illustrator</p>
        <h2>Contact</h2>
          <p className="iconflex">
            <Link className="snsa" href="https://x.com/Sopi_Eizo3"><FontAwesomeIcon icon={faXTwitter} width={15} className={styles.icons}/>DM</Link>
          </p>
          <p className="iconflex">
            <FontAwesomeIcon icon={faEnvelope} width={15} className={styles.icons}/>sopieizo.work@gmail.com
          </p>
        <p>ご依頼については<Link href="/" className={styles.ak}>こちら</Link></p>
    </main>
  );
}
