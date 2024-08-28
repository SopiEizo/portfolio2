import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { getDetail,getWorks,client } from "../../../../libs/client";
import { YouTubeEmbed } from "@next/third-parties/google";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";


export async function generateStaticParams(){
  const data = await getWorks();

  const paths = data.map((work)=>{
    return {
      workId: work.id,
    }
  });
  console.log(paths)
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

  console.log(work.yturl)

  return(
    <main className={styles.main}>
      <div className={styles.flex}>
        <div className={styles.leftbox}>
          <h3 className={styles.class}>#{work.class}</h3>
          <h2 className={styles.title}>{work.title}</h2>
        </div>
        <div className={styles.rightbox}>
          <YouTubeEmbed videoid={idb} style="width: 100%" />
          <div className={styles.aboutbox}>
            <p>Title</p>
            <h3>{work.title}</h3>
            <p>Date</p>
            <h3>{ymdfm}</h3>
            <p className={styles.about}>Tools</p>
            <h3>{work.tools}</h3>
          </div>
          <h2>About</h2>
          <div dangerouslySetInnerHTML={{__html: `${work.body}`,}}/>
          <h2>Link</h2>
          <div className={styles.linksbox}>
            <Link href={work.url as string}><div className={styles.linkbox}><FontAwesomeIcon icon={faXTwitter} width={15} className={styles.icons}/><p>{work.title}</p></div></Link>
            <Link href={idburl}><div className={styles.linkbox}><FontAwesomeIcon icon={faYoutube} width={15} className={styles.icons}/><p>{work.title}</p></div></Link>
          </div>
        </div>
      </div>
    </main>
  )
}