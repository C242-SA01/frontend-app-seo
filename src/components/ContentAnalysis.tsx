interface ContentAnalysisItem {
  label: string;
  value: string | number | JSX.Element;
}

interface ContentAnalysisProps {
  contentData: ContentAnalysisItem[];
}

const ContentAnalysis: React.FC<ContentAnalysisProps> = ({ contentData }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      {/* Header Tabel */}
      <h2 className="py-3 text-lg font-bold text-center text-black rounded-t-lg bg-primary">Content Analysis</h2>
      <table className="w-full border-collapse table-auto">
        <tbody>
          {contentData.map((item, index) => (
            <tr key={index} className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}>
              <td className="px-4 py-3 font-semibold text-gray-700 border border-gray-300">{item.label}</td>
              <td className="px-4 py-3 text-center border border-gray-300">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContentAnalysis;
