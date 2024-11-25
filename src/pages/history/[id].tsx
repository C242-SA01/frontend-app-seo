import { fetcher } from "@/lib/swr/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";

const DetailHistoryPage = () => {
  const { query } = useRouter();

  // Pastikan SWR hanya memanggil API jika query.history tersedia
  const { data, error, isLoading } = useSWR(query.id ? `/api/history/${query.id}` : null, fetcher);

  // Log untuk memastikan query dan respons API
  console.log("Query ID:", query.history);
  console.log("API Response:", data);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading data: {error.message}</p>;
  }

  // Validasi data dari API
  if (!data || !data.status || !data.data) {
    return <p>No data found for this ID</p>;
  }

  const detail = data.data;

  return (
    <div>
      <h1>Detail History</h1>
      <h2>General Information</h2>
      <p>
        <strong>Client Name:</strong> {detail.generalInfo.clientName}
      </p>
      <p>
        <strong>Website URL:</strong> {detail.generalInfo.websiteURL}
      </p>
      <p>
        <strong>Structure:</strong> {detail.generalInfo.structure}
      </p>

      <h2>Metrics</h2>
      <p>
        <strong>GTMetrix Grade:</strong> {detail.metrics["GTMetrix Grade"]}
      </p>
      <p>
        <strong>GTMetrix Structure:</strong> {detail.metrics["GTMetrix Structure"]}
      </p>
      <p>
        <strong>PageSpeed SEO:</strong> {detail.metrics["PageSpeed SEO"]}
      </p>

      <h2>Score Information</h2>
      <p>
        <strong>Score:</strong> {detail.scoreInfo.score}
      </p>
      <p>
        <strong>Description:</strong> {detail.scoreInfo.description}
      </p>

      <h2>Content Analysis</h2>
      <p>
        <strong>Broken Links Count:</strong> {detail.contentAnalysisData["Broken Links Count"]}
      </p>
      <p>
        <strong>Broken Links URL:</strong> {detail.contentAnalysisData["Broken Links URL"]}
      </p>
    </div>
  );
};

export default DetailHistoryPage;
