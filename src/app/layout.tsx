import type { Metadata } from "next";
import type { Viewport } from "next";
import { Inter } from "next/font/google";
import Image from 'next/image'
import "./globals.css";
import style1 from "./layout.module.css"
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "sopieizo.work",
  description: "SopiEizo portfolio",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
      <div className={style1.hheader}>
        <Link href="/"><Image src="/rogo.jpg" alt="logo" width={40} height={40} className={style1.hrogo} /></Link>
        <nav>
            <ul className={style1.hps}>
                <li className={style1.hlis}><Link href="/about">About</Link></li>
                <li className={style1.hlis}><Link href="/works">Works</Link></li>
                <li className={style1.hlis}><Link href="/comission">Comission</Link></li>
            </ul>
        </nav>
      </div>
        {children}
        </body>
    </html>
  );
}
