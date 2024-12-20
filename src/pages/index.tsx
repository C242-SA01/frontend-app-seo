import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Homepage from "../components/Homepage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={inter.className}>
      <Head>
        <title>SEO Bizzagi</title>
      </Head>
      <Homepage />
    </div>
  );
}
