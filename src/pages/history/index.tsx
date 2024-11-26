import AuditHistory from "@/views/Seo";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Timestamp } from "firebase/firestore"; // Import Timestamp

const inter = Inter({ subsets: ["latin"] });

type HistoryType = {
  id: string;
  clientName: string;
  websiteURL: string;
  createdAt: string;
};

const HistoryPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [histories, setHistories] = useState<HistoryType[]>([]);
  const { push } = useRouter();

  useEffect(() => {
    if (!isLogin) {
      push("auth/login");
    }
  }, [isLogin]);

  useEffect(() => {
    fetch("/api/history")
      .then((res) => res.json())
      .then((response) => {
        const mappedHistories = response.data.map((audit: any) => {
          console.log(audit);
          let createdAt = new Date();
          const miliseconds = audit.createdAt.seconds * 1000 + audit.createdAt.nanoseconds / 1000000;
          createdAt = new Date(miliseconds);
          return {
            id: audit.id,
            clientName: audit.generalInfo.clientName,
            websiteURL: audit.generalInfo.websiteURL,
            createdAt: createdAt.toLocaleDateString(),
          };
        });

        setHistories(mappedHistories);
      });
  }, []);

  return (
    <div className="text-center">
      <Head>
        <title>History</title>
      </Head>
      <AuditHistory data={histories} />
    </div>
  );
};

export default HistoryPage;
