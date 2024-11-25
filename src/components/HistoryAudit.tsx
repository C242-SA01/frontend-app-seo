interface AuditHistoryItem {
  title: string;
  url: string;
  date: string;
}

interface AuditHistoryProps {
  data: AuditHistoryItem[];
}

const AuditHistory: React.FC<AuditHistoryProps> = ({ data }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      {/* Header */}
      <h2 className="pb-4 text-center text-lg font-bold text-gray-800">History Audit</h2>
      {/* Table */}
      <table className="w-full border-collapse table-auto">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left text-gray-700 border-b border-gray-300">Judul Audit</th>
            <th className="px-4 py-2 text-left text-gray-700 border-b border-gray-300">URL</th>
            <th className="px-4 py-2 text-left text-gray-700 border-b border-gray-300">Tanggal</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="px-4 py-2 border-b border-gray-300">{item.title}</td>
              <td className="px-4 py-2 border-b border-gray-300">
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                  {item.url}
                </a>
              </td>
              <td className="px-4 py-2 border-b border-gray-300">{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuditHistory;
