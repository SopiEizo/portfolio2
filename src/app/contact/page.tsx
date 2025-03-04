import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Metadata } from 'next';
import { useRouter } from "next/router";
import ResendContactForm from "./components/ResendContactForm";

export const metadata: Metadata = {
  title: 'Contact | sopieizo.work',
};

function Contact() {
  return (
    <ResendContactForm />
  );
}

export default Contact