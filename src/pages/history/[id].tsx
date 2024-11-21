import { useRouter } from "next/router";
const DetailHistoryPage = () => {
  const { query } = useRouter();
  return (
    <div>
      <h1>Detail History</h1>
      <p>This is the detail history page with id: {query.id}</p>
    </div>
  );
};

export default DetailHistoryPage;
