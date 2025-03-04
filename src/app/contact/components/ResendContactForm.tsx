'use client';
import {useState} from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "../page.module.css";

type FormInputs = {
  name: string;
  email: string;
  message: string;
};

export default function ResendContactForm() {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
   
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    console.log(data);
    setIsSubmitted(false);
    setIsError(false);
    setLoading(true);
 
    const response = await fetch("../api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (response.status !== 200) {
      setIsError(true);
      return;
    } else {
      setIsSubmitted(true);
      reset();
    }
  };

  return (
    <main className={styles.main}>
        <h1 className={styles.contacttext}>Contact</h1>
        <p>お問い合わせフォーム</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formitem}>
            <label>お名前<br/>
            <input required type="text" {...register('name')} placeholder="例）山田太郎" className={styles.cformtext} />
            </label>
          </div>
          <div className={styles.formitem}>
            <label>メールアドレス<br/>
            <input required type="email" {...register('email')} placeholder="example@example.com" className={styles.cformemail} />
            </label>
          </div>
          <div className={styles.formitem}>
            <label>お問い合わせ内容<br/>
            <textarea required {...register('message')} className={styles.cformtextarea}></textarea>
            </label>
          </div>
          <button type="submit" className={styles.cformbutton}>送信</button>
        </form>
    </main>
  );
}