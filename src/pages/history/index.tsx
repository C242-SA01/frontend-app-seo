import AuditHistory from "@/views/Seo";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import "remixicon/fonts/remixicon.css";

type HistoryType = {
  id: string;
  clientName: string;
  websiteURL: string;
  createdAt: string;
};

const HistoryPage = () => {
  const [histories, setHistories] = useState<HistoryType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { data: session }: any = useSession();

  useEffect(() => {
    const email = session?.user?.email;
    const clientName = session?.user?.name;

    if (!email) {
      setIsLoading(false);
      return;
    }

    fetch(`/api/history?email=${email}`)
      .then((res) => res.json())
      .then((response) => {
        setIsLoading(false);
        if (response.status) {
          const mappedHistories = response.data.map((audit: any) => {
            const createdAtTimestamp = audit.createdAt;
            const createdAt =
              createdAtTimestamp && createdAtTimestamp._seconds
              ? new Date(createdAtTimestamp._seconds * 1000).toLocaleString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                  hour12: true,
                })
              : "Invalid Date";

            return {
              id: audit.id,
              clientName: clientName,
              websiteURL: audit.result?.URL,
              createdAt,
            };
          });

          setHistories(mappedHistories);
        } else {
          console.error(response.message);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.error(err);
      });
  }, [session]);

  return (
    <div className="text-center">
      <Head>
        <title>History</title>
      </Head>

      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <p className="text-gray-500">Loading...</p>
        </div>
      ) : histories.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-96">
          <i className="ri-folder-open-line text-6xl text-blue-400"></i>
          <p className="mt-4 text-xl font-bold text-gray-600">No History Found</p>
          <p className="mt-2 text-gray-500">It seems like you haven’t created any history yet. Start your first audit and return here to view it.</p>
        </div>
      ) : (
        <AuditHistory data={histories} />
      )}
    </div>
  );
};

export default HistoryPage;
