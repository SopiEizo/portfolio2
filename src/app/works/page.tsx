import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { getWorks } from "../../../libs/client";
import test from "node:test";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Works | sopieizo.work',
};

export default async function StaticPage() {
  const contents = await getWorks();

  return (
    <main className={styles.main}>
        <h1 className={styles.workstext}>Works</h1>
        <div className={styles.work}>
        {contents.map((work) => (
                <div key={work.id}>
                  <Link className={styles.flexia} href={`/works/${work.id}`}>
                    <div className={styles.flexitem}>
                      <Image src={work.img.url} alt="work image" fill className={styles.simg}/>
                      <h2 className={styles.contentstitle}>{work.title}</h2>
                      <h2 className={styles.workclass}>{work.class}</h2>
                    </div>
                  </Link>
                </div>
                ))}
        </div>
    </main>
  );
}