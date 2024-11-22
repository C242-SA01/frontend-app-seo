import HistoryView from "@/views/Seo";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });
type historyType = {
  id: string;
  url: string;
  name: string;
};
const HistoryPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [histories, setHistories] = useState([]);
  const { push } = useRouter();
  useEffect(() => {
    if (!isLogin) {
      push("auth/login");
    }
  }, []);
  useEffect(() => {
    fetch("/api/history")
      .then((res) => res.json())
      .then((response) => {
        setHistories(response.data);
      });
  }, []);
  return (
    <div className="flex justify-center ">
      <HistoryView histories={histories} />
    </div>
  );
};
export default HistoryPage;
