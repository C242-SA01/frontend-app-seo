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
    return <p>Data tidak ditemukan</p>;
  }

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
            URL={auditData.URL}
            auditDate={auditDate}
          />
        </div>
        <AuditScore
          Grade={auditData.Grade}
          description={getDescription(auditData.Grade)}
        />
      </div>

      <PerformanceMetrics
        metrics={[
          { name: "GTMetrix Performance", value: auditData.Performance },
          { name: "GTMetrix Structure", value: auditData.Structure },
          { name: "PageSpeed Performance", value: auditData.Performance },
          { name: "PageSpeed Accessibility", value: auditData.Accessibility },
          { name: "PageSpeed Best Practices", value: auditData["Best Practices"] },
          { name: "PageSpeed SEO", value: auditData.SEO },
        ]}
      />
      <div className="m-8">
        <ContentAnalysis
          contentData={[
            { label: "Broken Links Count", value: auditData["Broken Link Count"] },
            { label: "Duplicate Content Percentage", value: auditData["Duplicate Count Percentage"] },
            { label: "Common Content Percentage", value: auditData["Common Count Percentage"] },
            { label: "Unique Content Percentage", value: auditData["Unique Count Percentage"] },
            { label: "Mobile Friendly", value: auditData["Mobile Friendly"] },
          ]}
        />
      </div>
      <div className="m-8">
        <MetadataTable
          metadata={[
            { label: "Meta Title", value: auditData["Meta title"] },
            { label: "Meta Title Count", value: auditData["Meta title count"] },
            { label: "Meta Description", value: auditData["Meta description"] },
            { label: "Meta Description Count", value: auditData["Meta description count"] },
            { label: "H1 Count", value: auditData["H1 count"] },
            { label: "H2 Count", value: auditData["H2 count"] },
            { label: "H3 Count", value: auditData["H3 count"] },
            { label: "Meta Robots", value: auditData["Meta robots"] },
            { label: "Meta Keywords", value: auditData["Meta keywords"] },
            { label: "Open Graph Status", value: auditData["Open Graph Status"] },
            { label: "Canonical Tag Present", value: auditData["Canonical Tag Present"] },
            { label: "Sitemap Present", value: auditData["Sitemap Present"] },
            { label: "Robots.txt Present", value: auditData["Robots.txt Present"] },
            { label: "Google Search Console Connected", value: auditData["Google Search Console Connected"] },
            { label: "Favicon Present", value: auditData["Favicon Present"] },
          ]}
        />
      </div>
      <div className="m-8">
        <AdditionalNotes notes={notesAnalysis} />
      </div>
      <div className="m-8">
        <Recommendation recommendations={actionableRecommendations} />
      </div>
    </>
  );
};

export default ResultPage;
