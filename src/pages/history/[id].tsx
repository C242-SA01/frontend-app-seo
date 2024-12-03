import { fetcher } from "@/lib/swr/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";
import PerformanceMetrics from "@/components/PerformanceMetrics";
import AdditionalNotes from "@/components/AdditionalNotes";
import AuditScore from "@/components/AuditScore";
import ContentAnalysis from "@/components/ContentAnalysis";
import GeneralInfo from "@/components/GeneralInfo";
import MetadataTable from "@/components/MetadataTable";

const DetailHistoryPage = () => {
  const { query } = useRouter();
  const { data, error, isLoading } = useSWR(query.id ? `/api/history/${query.id}` : null, fetcher);
  // const { data, error, isLoading } = useSWR(query.id ? `/api/history?id=${query.id}` : null, fetcher);
  // console.log("Data dari API:", data);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-screen h-screen bg-gray-100">
        <div>Loading...</div>
      </div>
    );
  }

  if (error) {
    return <p>Error loading data: {error.message}</p>;
  }

  if (!data || !data.status || !data.data) {
    return <p>Data not found</p>;
  }

  const detail = data.data;

  return (
    <div className="p-8">
      <h1 className="my-8 text-2xl font-bold text-center">Detail History</h1>

      {/* General Information */}
      <GeneralInfo clientName={detail.generalInformation.clientName} websiteURL={detail.generalInformation.websiteURL} date={new Date(detail.generalInformation.date).toLocaleString()} />

      {/* Performance Metrics */}
      <PerformanceMetrics metrics={detail.performanceMetrics} />

      {/* Content Analysis */}
      <ContentAnalysis contentData={detail.contentAnalysis} />

      {/* Metadata Information */}
      <MetadataTable metadata={detail.metadata} />

      {/* Additional Notes */}
      <AdditionalNotes notes={detail.additionalNotes.notes} />
    </div>
  );
};

export default DetailHistoryPage;
