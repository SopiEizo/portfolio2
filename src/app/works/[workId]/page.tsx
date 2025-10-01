import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { getDetail,getWorks,client } from "../../../../libs/client";
import { YouTubeEmbed } from "@next/third-parties/google";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import { Metadata } from 'next';
import styled from '@emotion/styled'

export const metadata: Metadata = {
  title: 'Works | sopieizo.work',
};

export async function generateStaticParams(){
  const data = await getWorks();

  const paths = data.map((work)=>{
    return {
      workId: work.id,
    }
  });
  return paths;
}

export default async function StaticDetailPage({
  params: {workId},
}: {
  params: {workId : string};
}) {
  const work = await getDetail(workId);
  const idb = work.yturl;
  const idburl = 'https://www.youtube.com/watch?v=' + idb;
  const ymdfm = new Date(work.ymd as string).toLocaleDateString();
  
  console.log(work);

  return(
    <main className={styles.main}>
      <div className={styles.thumb}>
        <div className={styles.titleflex1}>
          <div className={styles.titleflex2}>
            <div>
              <h1 className={styles.title}>{work.title}</h1>
              <p>Client work</p>
            </div>
            <div>
              <Link href={idburl}><div className={styles.playbutton}>Play</div></Link>
            </div>
          </div>
        </div>
        <div className={styles.gra}></div>
        <Image src={work.img.url} fill sizes="100vw" className={styles.image}></Image>
      </div>
      <div className={styles.content}>
        <div className={styles.infoarea}>
          <div className={styles.info}>
            <p>Client</p>
            <p className={styles.credit}>Shikido</p>
          </div>
          <div className={styles.info}>
            <p>Illust</p>
            <p className={styles.credit}>ネプロギウス</p>
          </div>
          <div className={styles.info}>
            <p>Movie</p>
            <p className={styles.credit}>SopiEizo</p>
          </div>
          <div className={styles.info}>
            <p>Editing Assistant</p>
            <p className={styles.credit}>Imai Yuji</p>
          </div>
          <div className={styles.info}>
            <p>Camera</p>
            <p className={styles.credit}>じゃがさん</p>
          </div>
          <div className={styles.info}>
            <p>Camera Assistant</p>
            <p className={styles.credit}>よみや</p>
          </div>
        </div>
        <div className={styles.desc}>
          <p>shikidoさん{work.color}の新曲「i世界 / 初音ミク」のMVを制作しました。<br/>コンポジットやリリックモーション、3DCGを担当しています。<br/>この楽曲のコンセプトである「世界」を実写映像を基盤に表現し、グリッチ音に合わせてDataMoshや多彩なグリッチエフェクトを組み合わせることで、聴覚と視覚の双方から楽しめる映像作品を制作しました。</p>
        </div>
      </div>
    </main>
  )
}