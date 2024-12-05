interface GeneralInfoProps {
  clientName: string;
  URL: string;
  auditDate: string
  // Structure: any;
}

const GeneralInfo: React.FC<GeneralInfoProps> = ({
  clientName,
  URL,
  auditDate,
  // Structure,
}) => {
  return (
    <div className="h-full p-4 mb-4 bg-white rounded-lg shadow">
      <h2 className="py-3 mb-4 text-xl font-bold text-center text-black rounded-lg bg-primary">
        General Information
      </h2>
      <table className="table w-full overflow-hidden border-collapse rounded-lg">
        <tbody>
          <tr className="bg-gray-50">
            <td className="w-1/2 px-4 py-3 font-semibold border-r">Client Name </td>
            <td className="w-1/2 px-4 py-3">{clientName}</td>
          </tr>
          <tr className="bg-white-50">
            <td className="w-1/2 px-4 py-3 font-semibold border-r"> Website URL </td>
            <td className="w-1/2 px-4 py-3">{URL}</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="w-1/2 px-4 py-3 font-semibold border-r">Date</td>
            <td className="w-1/2 px-4 py-3">{auditDate}</td>
          </tr>
          {/* <tr className="bg-gray-50">
            <td className="px-4 py-2">GTMetrix Structure </td>
            <td className="px-4 py-2">{Structure} %</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default GeneralInfo;
