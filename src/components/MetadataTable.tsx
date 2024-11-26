interface MetadataItem {
  label: string;
  value: string | number;
}

interface MetadataTableProps {
  metadata: MetadataItem[];
}

const MetadataTable: React.FC<MetadataTableProps> = ({ metadata }) => {
  if (!Array.isArray(metadata) || metadata.length === 0) {
    return <p className="text-center text-gray-500">No metadata available.</p>;
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="py-2 text-xl font-bold text-center text-black rounded-t-lg bg-primary">Metadata</h2>
      <table className="w-full border-collapse">
        <tbody>
          {metadata.map((item, index) => (
            <tr key={index} className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}>
              <td className="px-4 py-2 font-semibold border">{item.label}</td>
              <td className="px-4 py-2 text-center border">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MetadataTable;
