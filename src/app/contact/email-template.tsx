import * as React from 'react';
import styles from "./page.module.css";

interface EmailTemplateProps {
  senderName: string;
  content: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  senderName, content
}) => (
    <div className={styles.emmain}>
        <h1>お問い合わせありがとうございます！</h1>
        <p>以下の内容でお問合せを受け付けました。</p>
        <div className={styles.emcontent}>
            <p>名前：{senderName}</p>
            <p>内容：</p>
            <p>{content}</p>
        </div>
        sopieizo@shiftz.workからの返信をお待ちください。
      </div>
);