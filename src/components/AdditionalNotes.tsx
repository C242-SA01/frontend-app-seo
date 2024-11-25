const AdditionalNotes = () => {
  return (
    <div className="p-2 bg-white rounded-lg shadow-lg">
      <h2 className="py-3 text-lg font-bold text-center text-black rounded-t-lg bg-primary">Additional Notes</h2>
      <table className="table w-full overflow-hidden border-collapse rounded-lg">
        <tbody>
          <tr className="bg-gray-50">
            <td className="px-4 py-2 text-center">Notes will appear here</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default AdditionalNotes;
