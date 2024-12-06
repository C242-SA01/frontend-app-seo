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
import Recommendation from "@/components/Recommendation";
import { useSession } from "next-auth/react";
import domtoimage from 'dom-to-image';
import jsPDF from 'jspdf';

const DetailHistoryPage = () => {
  const { query } = useRouter();
  const { id } = query;
  const { data: session } = useSession();
  const clientName = session?.user?.name || "Unknown";

  const { data, error, isLoading } = useSWR(
    id ? `/api/history?id=${id}` : null,
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

  const detail = data.data.result;
  const auditData = detail['Audit Data'];
  const actionableRecommendations = detail['Actionable Recommendations'];
  const notesAnalysis = detail['Notes Analysis'];
  const createdAt = new Date(data.data.createdAt._seconds * 1000).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  // Fungsi untuk menangani nilai null atau undefined
  const formatValue = (value: any) => {
    return value !== null && value !== undefined ? value : "Data not Available";
  };

  const getDescription = (grade: string) => {
    switch (grade) {
      case 'A':
        return 'Excellent';
      case 'B':
        return 'Good';
      case 'C':
        return 'Average';
      case 'D':
        return 'Poor';
      case 'E':
        return 'Very Poor';
      default:
        return 'Unknown';
    }
  };

  // Fungsi download PDF menggunakan dom-to-image dan jsPDF untuk multi halaman
  const downloadPDF = async () => {
    const element = document.getElementById('detail-history');
    if (element) {
      try {
        const canvas = await domtoimage.toPng(element);
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210; // Lebar halaman A4 dalam mm
        const pageHeight = 297; // Tinggi halaman A4 dalam mm
        const imgHeight = (element.offsetHeight * imgWidth) / element.offsetWidth;

        let heightLeft = imgHeight;
        let position = 0;

        // Menambahkan gambar pertama
        pdf.addImage(canvas, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        // Menambahkan halaman baru jika masih ada konten yang tersisa
        while (heightLeft > 0) {
          position -= pageHeight;
          pdf.addPage();
          pdf.addImage(canvas, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save("audit-result.pdf");
      } catch (error) {
        console.error("Error creating PDF:", error);
      }
    }
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8 w-full">
        <h1 className="text-2xl font-bold">Detail History</h1>
        <button
          onClick={downloadPDF}
          className="px-4 py-2 bg-primary font-semibold text-black rounded-lg hover:bg-yellow-600"
        >
          Download PDF
        </button>
      </div>

      <div id="detail-history">
        {/* General Information and Grade */}
        <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-1 gap-4 m-8 md:grid-cols-3">
          <div className="col-span-2">
            <GeneralInfo
              clientName={clientName}
              URL={formatValue(auditData?.URL)}
              auditDate={createdAt}
            />
          </div>
          <AuditScore
            Grade={formatValue(auditData?.Grade)}
            description={getDescription(auditData?.Grade)}
          />
        </div>

        {/* Performance Metrics */}
        <PerformanceMetrics
          metrics={[
            { name: "GTMetrix Performance", value: formatValue(auditData?.Performance) },
            { name: "GTMetrix Structure", value: formatValue(auditData?.Structure) },
            { name: "PageSpeed Performance", value: formatValue(auditData?.Performance) },
            { name: "PageSpeed Accessibility", value: formatValue(auditData?.Accessibility) },
            { name: "PageSpeed Best Practices", value: formatValue(auditData?.["Best Practices"]) },
            { name: "PageSpeed SEO", value: formatValue(auditData?.SEO) },
          ]}
        />

        {/* Content Analysis */}
        <ContentAnalysis
          contentData={[
            { label: "Broken Links Count", value: formatValue(auditData?.["Broken Link Count"]) },
            { label: "Duplicate Content Percentage", value: formatValue(auditData?.["Duplicate Count Percentage"]) },
            { label: "Common Content Percentage", value: formatValue(auditData?.["Common Count Percentage"]) },
            { label: "Unique Content Percentage", value: formatValue(auditData?.["Unique Count Percentage"]) },
            { label: "Mobile Friendly", value: formatValue(auditData?.["Mobile Friendly"]) },
          ]}
        />

        {/* Metadata Information */}
        <MetadataTable
          metadata={[
            { label: "Meta Title", value: formatValue(auditData?.["Meta title"]) },
            { label: "Meta Title Count", value: formatValue(auditData?.["Meta title count"]) },
            { label: "Meta Description", value: formatValue(auditData?.["Meta description"]) },
            { label: "Meta Description Count", value: formatValue(auditData?.["Meta description count"]) },
            { label: "H1 Count", value: formatValue(auditData?.["H1 count"]) },
            { label: "H2 Count", value: formatValue(auditData?.["H2 count"]) },
            { label: "H3 Count", value: formatValue(auditData?.["H3 count"]) },
            { label: "Meta Robots", value: formatValue(auditData?.["Meta robots"]) },
            { label: "Meta Keywords", value: formatValue(auditData?.["Meta keywords"]) },
            { label: "Open Graph Status", value: formatValue(auditData?.["Open Graph Status"]) },
            { label: "Canonical Tag Present", value: formatValue(auditData?.["Canonical Tag Present"]) },
            { label: "Sitemap Present", value: formatValue(auditData?.["Sitemap Present"]) },
            { label: "Robots.txt Present", value: formatValue(auditData?.["Robots.txt Present"]) },
            { label: "Google Search Console Connected", value: formatValue(auditData?.["Google Search Console Connected"]) },
            { label: "Favicon Present", value: formatValue(auditData?.["Favicon Present"]) },
          ]}
        />

        {/* Additional Notes */}
        <AdditionalNotes notes={formatValue(notesAnalysis)} />

        {/* Actionable Recommendations */}
        <Recommendation recommendations={formatValue(actionableRecommendations)} />
      </div>
    </div>
  );
};

export default DetailHistoryPage;
