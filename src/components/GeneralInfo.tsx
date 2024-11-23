interface GeneralInfoProps {
  clientName: string;
  websiteURL: string;
  structure: number;
}

const GeneralInfo: React.FC<GeneralInfoProps> = ({ clientName, websiteURL, structure }) => {
  return (
    <div className="h-full p-4 mb-4 bg-white rounded-lg shadow">
      <h2 className="py-2 mb-4 text-xl font-bold text-center text-black rounded-lg bg-primary">General Information</h2>
      <table className="table w-full overflow-hidden border-collapse rounded-lg">
        <tbody>
          <tr className="bg-gray-50">
            <td className="px-4 py-2">Client Name </td>
            <td className="px-4 py-2">{clientName}</td>
          </tr>
          <tr className="bg-white-50">
            <td className="px-4 py-2">Website URL </td>
            <td className="px-4 py-2">{websiteURL}</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-4 py-2">GTMetrix Structure </td>
            <td className="px-4 py-2">{structure}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GeneralInfo;
