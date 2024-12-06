interface ContentAnalysisItem {
  label: string;
  value: string | number | JSX.Element;
}

interface ContentAnalysisProps {
  contentData?: ContentAnalysisItem[];  // Tandai sebagai opsional
}

const ContentAnalysis: React.FC<ContentAnalysisProps> = ({ contentData = [] }) => {
  return (
    <div className="p-4 m-8 bg-white rounded-lg shadow-lg">
      {/* Header Tabel */}
      <h2 className="py-3 mb-4 text-xl font-bold text-center text-black rounded-lg bg-primary">Content Analysis</h2>
      <table className="w-full border-collapse table-auto">
        <tbody>
          {contentData.length > 0 ? (
            contentData.map((item, index) => (
              <tr key={index} className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}>
                <td className="w-1/2 px-4 py-3 font-semibold border-r">{item.label}</td>
                <td className="w-1/2 px-4 py-3">{item.value}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={2} className="text-center py-4">
                No content analysis available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ContentAnalysis;
