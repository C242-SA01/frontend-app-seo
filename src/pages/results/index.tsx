import AuditScore from "@/components/AuditScore";
import GeneralInfo from "@/components/GeneralInfo";
import PerformanceMetrics from "@/components/PerformanceMetrics";

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
  return (
    <>
      <h1 className="mb-6 text-2xl font-bold text-center">Here Your Audit Result</h1>
      <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-1 gap-4 m-8 md:grid-cols-3">
        <div className="col-span-2">
          <GeneralInfo {...generalInfo} />
        </div>
        {/* Audit Score (4/12) */}
        <AuditScore {...scoreInfo} />
      </div>

      <PerformanceMetrics metrics={metrics} />
    </>
  );
};

export default ResultPage;
