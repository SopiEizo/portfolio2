import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comission | sopieizo.work',
};

export default function Home() {
  return (
    <main className={styles.main}>
        <h1 className={styles.comissiontext}>Comission</h1>
        <h2>1.見積もり</h2>
        <p>XのDMまたは、sopieizo@shiftz.workにて、以下の内容を教えてください</p>
        <p>・何を作るか（歌ってみたのMV制作など）</p>
        <p>・納期（目安は１ヶ月です）</p>
        <p>・予算（料金の例は<a href="#Fee">こちら</a>）</p>
        <p>・作る映像の尺または楽曲名</p>
        <p>・イメージ（指標となる作例や、箇条書き、絵コンテ、なんでもOK！）</p>
        <p>※場合によっては、追加で音源やイラスト、曲名などを教えていただくようお願いすることがあります。</p>
        <p>それらの情報から、納期や料金などをお伝えいたします。もし追加で知りたい情報があれば気軽に質問してください！</p>
        <h2>2.素材を渡す</h2>
        <p>映像の中で使いたい素材（イラストや動画素材など）があればGigaFile便やGoogleドライブなどで送ってください。</p>
        <h2>3.制作</h2>
        <p>MVの場合はサビ前あたりまで完成させ、一度GigaFile便にて進捗を送付させていただきます。その際、「ここをこうしてほしい」などのリテイクが必要な場合はお伝えください。</p>
        <p>リテイクはこちらのミスを除き、無料で5回まで引き受けさせていただきます。6回目以降のリテイクに関しましては、一回につき3,000円を報酬額に加えさせていただきます。</p>
        <h2>4.納品</h2>
        <p>映像が完成して、リテイクのご指示がない場合は、GigaFile便にて納品させていただきます。</p>
        <h2>5.お支払い</h2>
        <p>お支払いは納品確認から60日以内にお振込みをお願い致します。</p>
        <p>お支払い方法</p>
        <p>・銀行振込</p>
        <div className={styles.hr}>
          <h2 id="Fee" className={styles.Fee}>料金</h2>
          <p>・歌ってみたMV制作<span className={styles.Feenum}>40,000円〜</span></p>
          <p>・オリジナルMV制作<span className={styles.Feenum}>50,000円〜</span></p>
          <p>・YouTubeなどのOP,ED,トランジションなど<span className={styles.Feenum}>20,000円〜</span></p>
          <p>※制作を開始してからのキャンセル料は本来の料金の50%です。</p>
          <p>※尺や納期、料金によってはお断りする場合がございます。</p>
          <p>※その他ジャンルの映像の料金は要相談</p>
        </div>
        <h2>その他</h2>
        <p>通話などでのミーティングの対応は致しかねます。</p>
    </main>
  );
}
