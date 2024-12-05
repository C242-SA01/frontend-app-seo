// src/pages/results.tsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import AdditionalNotes from "@/components/AdditionalNotes";
import AuditScore from "@/components/AuditScore";
import ContentAnalysis from "@/components/ContentAnalysis";
import GeneralInfo from "@/components/GeneralInfo";
import MetadataTable from "@/components/MetadataTable";
import PerformanceMetrics from "@/components/PerformanceMetrics";
import Recommendation from "@/components/Recommendation";

const ResultPage: React.FC = () => {
  const router = useRouter();
  const auditResult = router.query.auditResult ? JSON.parse(router.query.auditResult as string) : null;
  const [clientName, setClientName] = useState("Guest");
  const auditDate = new Date().toLocaleString();

  useEffect(() => {
    const storedClientName = localStorage.getItem("clientName");
    if (storedClientName) {
      setClientName(storedClientName);
    }
  }, []);

  console.log("Ini adalah audit result", auditResult);

  if (!auditResult) {
    return <p>Loading...</p>;
  }

  // Akses auditResult dengan memeriksa struktur JSON yang benar
  const auditData = auditResult['Audit Data']; // Mengambil objek 'Audit Data' dari auditResult
  const actionableRecommendations = auditResult['Actionable Recommendations'];
  const notesAnalysis = auditResult['Notes Analysis'];

  if (!auditData) {
    return <p>Data not Available</p>;
  }

  // Fungsi untuk menangani nilai null atau undefined
  const formatValue = (value: any) => {
    return value !== null && value !== undefined ? value : "Data tidak tersedia";
  };

  const getDescription = (grade: string) => {
    switch (grade) {
      case 'A':
        return 'Sangat Baik';
      case 'B':
        return 'Baik';
      case 'C':
        return 'Cukup';
      case 'D':
        return 'Kurang';
      case 'E':
        return 'Sangat Kurang';
      default:
        return 'Tidak Diketahui';
    }
  };

  return (
    <>
      <h1 className="my-8 text-2xl font-bold text-center">Here Your Audit Result</h1>
      <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-1 gap-4 m-8 md:grid-cols-3">
        <div className="col-span-2">
          <GeneralInfo
            clientName={clientName}
            URL={formatValue(auditData.URL)}
            auditDate={auditDate}
          />
        </div>
        <AuditScore
          Grade={formatValue(auditData.Grade)}
          description={getDescription(auditData.Grade)}
        />
      </div>

      <PerformanceMetrics
        metrics={[
          { name: "GTMetrix Performance", value: formatValue(auditData.Performance) },
          { name: "GTMetrix Structure", value: formatValue(auditData.Structure) },
          { name: "PageSpeed Performance", value: formatValue(auditData.Performance) },
          { name: "PageSpeed Accessibility", value: formatValue(auditData.Accessibility) },
          { name: "PageSpeed Best Practices", value: formatValue(auditData["Best Practices"]) },
          { name: "PageSpeed SEO", value: formatValue(auditData.SEO) },
        ]}
      />
      <div className="m-8">
        <ContentAnalysis
          contentData={[
            { label: "Broken Links Count", value: formatValue(auditData["Broken Link Count"]) },
            { label: "Duplicate Content Percentage", value: formatValue(auditData["Duplicate Count Percentage"]) },
            { label: "Common Content Percentage", value: formatValue(auditData["Common Count Percentage"]) },
            { label: "Unique Content Percentage", value: formatValue(auditData["Unique Count Percentage"]) },
            { label: "Mobile Friendly", value: formatValue(auditData["Mobile Friendly"]) },
          ]}
        />
      </div>
      <div className="m-8">
        <MetadataTable
          metadata={[
            { label: "Meta Title", value: formatValue(auditData["Meta title"]) },
            { label: "Meta Title Count", value: formatValue(auditData["Meta title count"]) },
            { label: "Meta Description", value: formatValue(auditData["Meta description"]) },
            { label: "Meta Description Count", value: formatValue(auditData["Meta description count"]) },
            { label: "H1 Count", value: formatValue(auditData["H1 count"]) },
            { label: "H2 Count", value: formatValue(auditData["H2 count"]) },
            { label: "H3 Count", value: formatValue(auditData["H3 count"]) },
            { label: "Meta Robots", value: formatValue(auditData["Meta robots"]) },
            { label: "Meta Keywords", value: formatValue(auditData["Meta keywords"]) },
            { label: "Open Graph Status", value: formatValue(auditData["Open Graph Status"]) },
            { label: "Canonical Tag Present", value: formatValue(auditData["Canonical Tag Present"]) },
            { label: "Sitemap Present", value: formatValue(auditData["Sitemap Present"]) },
            { label: "Robots.txt Present", value: formatValue(auditData["Robots.txt Present"]) },
            { label: "Google Search Console Connected", value: formatValue(auditData["Google Search Console Connected"]) },
            { label: "Favicon Present", value: formatValue(auditData["Favicon Present"]) },
          ]}
        />
      </div>
      <div className="m-8">
        <AdditionalNotes notes={formatValue(notesAnalysis)} />
      </div>
      <div className="m-8">
        <Recommendation recommendations={formatValue(actionableRecommendations)} />
      </div>
    </>
  );
};

export default ResultPage;
