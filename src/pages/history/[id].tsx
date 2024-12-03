// pages/history/[id].tsx

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
  const { id } = query; // Mengambil parameter ID dari URL
  console.log("ini adlaah id", id);

  const { data, error, isLoading } = useSWR(
    id ? `/api/history?id=${id}` : null, // Fetch data berdasarkan ID
    fetcher
  );

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
  console.log("ini adlaah detail", detail);

  return (
    <div className="p-8">
      <h1 className="my-8 text-2xl font-bold text-center">Detail History</h1>

      {/* General Information */}
      <GeneralInfo
        clientName={detail.generalInformation.clientName}
        websiteURL={detail.generalInformation.websiteURL}
        date={new Date(detail.generalInformation.date).toLocaleString()}
      />

      {/* Performance Metrics */}
      {/* <PerformanceMetrics metrics={detail.performanceMetrics} /> */}
      <PerformanceMetrics
        metrics={[
          {
            name: "GTMetrix Grade",
            value: detail.performanceMetrics?.gtmetrixGrade || "-",
          },
          {
            name: "GTMetrix Performance",
            value: detail.performanceMetrics?.gtmetrixPerformance || "-",
          },
          {
            name: "GTMetrix Structure",
            value: detail.performanceMetrics?.gtmetrixStructure || "-",
          },
          {
            name: "PageSpeed Performance",
            value: detail.performanceMetrics?.pagespeedPerformance || "-",
          },
          {
            name: "PageSpeed Accessibility",
            value: detail.performanceMetrics?.pagespeedAccessibility || "-",
          },
          {
            name: "PageSpeed Best Practices",
            value: detail.performanceMetrics?.pagespeedBestPractices || "-",
          },
          {
            name: "PageSpeed SEO",
            value: detail.performanceMetrics?.pagespeedSEO || "-",
          },
        ]}
      />

      {/* Content Analysis */}
      {/* <ContentAnalysis contentData={detail.contentAnalysis} /> */}
      <ContentAnalysis
        contentData={[
          {
            label: "Word Count",
            value: detail.contentAnalysis?.wordCount || "-",
          },
          {
            label: "Reading Time",
            value: detail.contentAnalysis?.readingTime || "-",
          },
          { label: "Keyword Density", value: "2.5%" },
        ]}
      />

      {/* Metadata Information */}
      <MetadataTable metadata={detail.metadata} />

      {/* Additional Notes */}
      {/* <AdditionalNotes notes={detail.additionalNotes.notes} /> */}
    </div>
  );
};

export default DetailHistoryPage;
