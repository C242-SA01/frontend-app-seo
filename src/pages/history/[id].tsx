import { fetcher } from "@/lib/swr/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";
import PerformanceMetrics from "@/components/PerformanceMetrics";
import AdditionalNotes from "@/components/AdditionalNotes";
import AuditScore from "@/components/AuditScore";
import ContentAnalysis from "@/components/ContentAnalysis";
import GeneralInfo from "@/components/GeneralInfo";
import MetadataTable from "@/components/MetadataTable";
import Recommendation from "@/components/Recommendation";

const DetailHistoryPage = () => {
  const { query } = useRouter();

  const { data, error, isLoading } = useSWR(query.id ? `/api/history/${query.id}` : null, fetcher);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-screen h-screen bg-gray-100">
        <div className="space-y-4 w-[80%] max-w-2xl">
          {/* Skeleton untuk Header */}
          <div className="w-3/4 h-8 bg-gray-300 rounded skeleton"></div>
          {/* Skeleton untuk Konten */}
          <div className="space-y-2">
            <div className="w-full h-6 bg-gray-300 rounded skeleton"></div>
            <div className="w-4/5 h-6 bg-gray-300 rounded skeleton"></div>
            <div className="w-3/5 h-6 bg-gray-300 rounded skeleton"></div>
          </div>
          {/* Skeleton untuk Tabel */}
          <div className="w-full h-32 bg-gray-300 rounded skeleton"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return <p>Error loading data: {error.message}</p>;
  }

  if (!data || !data.status || !data.data) {
    return <></>;
  }

  const detail = data.data;

  // Konversi metrics menjadi array
  const metricsArray = detail.metrics
    ? Object.entries(detail.metrics).map(([key, value]) => ({
        name: key,
        value: value,
      }))
    : [];
  const metadataArray = detail.metadataData
    ? Object.entries(detail.metadataData).map(([key, value]) => ({
        label: key,
        value: value,
      }))
    : [];
  const contentAnalysisArray = detail.contentAnalysisData
    ? Object.entries(detail.contentAnalysisData).map(([key, value]) => ({
        label: key,
        value: value,
      }))
    : [];

  return (
    <div>
      <h1 className="my-8 text-2xl font-bold text-center">Detail History</h1>
      <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-1 gap-4 m-8 md:grid-cols-3">
        <div className="col-span-2">
          <GeneralInfo clientName={detail.generalInfo.clientName} websiteURL={detail.generalInfo.websiteURL} structure={detail.generalInfo.structure} />
        </div>
        {/* Audit Score (4/12) */}
        <AuditScore score={detail.scoreInfo.score} description={detail.scoreInfo.description} />
      </div>
      <PerformanceMetrics metrics={metricsArray} />
      <div className="m-8">
        <ContentAnalysis contentData={contentAnalysisArray} />
      </div>
      <div className="m-8">
        <MetadataTable metadata={metadataArray} />
      </div>
    </div>
  );
};

export default DetailHistoryPage;
