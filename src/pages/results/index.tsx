import AdditionalNotes from "@/components/AdditionalNotes";
import AuditScore from "@/components/AuditScore";
import ContentAnalysis from "@/components/ContentAnalysis";
import GeneralInfo from "@/components/GeneralInfo";
import Footer from "@/components/layouts/Footer";
import MetadataTable from "@/components/MetadataTable";
import PerformanceMetrics from "@/components/PerformanceMetrics";
import Recommendation from "@/components/Recommendation";

const ResultPage: React.FC = () => {
  const generalInfo = {
    clientName: "Client Y",
    websiteURL: "http://google.com",
    structure: 50,
  };
  const scoreInfo = {
    score: "A",
    description: "Sangat Baik",
  };
  const metrics = [
    { name: "GTMetrix Grade", value: "A" },
    { name: "GTMetrix Performance", value: "85%" },
    { name: "GTMetrix Structure", value: "90%" },
    { name: "PageSpeed Performance", value: "90%" },
    { name: "PageSpeed Accessibility", value: "75%" },
    { name: "PageSpeed Best Practices", value: "82%" },
    { name: "PageSpeed SEO", value: "82%" },
  ];
  const metadataData = [
    { label: "Meta Title", value: "Example Page Title" },
    { label: "Meta Title Count", value: 1 },
    { label: "Meta Description", value: "Example meta description." },
    { label: "Meta Description Count", value: 1 },
    { label: "Heading Count", value: "" },
    { label: "H1", value: 1 },
    { label: "H2", value: 0 },
    { label: "H3", value: 1 },
    { label: "H4", value: 0 },
    { label: "H5", value: 1 },
    { label: "H6", value: 1 },
    { label: "Meta Robots", value: "Yes" },
    { label: "Meta Keywords", value: "example, keywords" },
    { label: "Open Graph Status", value: "Implemented" },
    { label: "Canonical Tag Present", value: "Yes" },
    { label: "Sitemap Present", value: "Yes" },
    { label: "Robots.txt Present", value: "Yes" },
    { label: "Google Search Console Connected", value: "Yes" },
    { label: "Favicon Present", value: "Yes" },
  ];
  const contentAnalysisData = [
    { label: "Broken Links Count", value: 3 },
    {
      label: "Broken Links URL",
      value: (
        <a href="https://example.com/broken-links" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
          https://example.com/broken-links
        </a>
      ),
    },
    { label: "Duplicate Content Percentage", value: "12%" },
    { label: "Common Content Percentage", value: "45%" },
    { label: "Unique Content Percentage", value: "43%" },
    { label: "Mobile Friendly", value: "Yes" },
  ];
  return (
    <>
      <h1 className="my-8 text-2xl font-bold text-center">Here Your Audit Result</h1>
      <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-1 gap-4 m-8 md:grid-cols-3">
        <div className="col-span-2">
          <GeneralInfo {...generalInfo} />
        </div>
        {/* Audit Score (4/12) */}
        <AuditScore {...scoreInfo} />
      </div>

      <PerformanceMetrics metrics={metrics} />
      <div className="m-8">
        <ContentAnalysis contentData={contentAnalysisData} />
      </div>
      <div className="m-8">
        <MetadataTable metadata={metadataData} />
      </div>
      <div className="m-8">
        <AdditionalNotes />
      </div>
      <div className="m-8">
        <Recommendation />
      </div>
      <Footer />
    </>
  );
};

export default ResultPage;
