interface AdditionalNotesProps {
  notes: string;
}

const AdditionalNotes: React.FC<AdditionalNotesProps> = ({ notes }) => {
  return (
    <div className="p-2 bg-white rounded-lg shadow-lg">
      <h2 className="py-3 mb-4 text-xl font-bold text-center text-black rounded-lg bg-primary">Notes Analysis</h2>
      <p className="px-4 py-2">{notes}</p>
    </div>
  );
};

export default AdditionalNotes;
