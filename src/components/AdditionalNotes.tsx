import React from 'react';

interface AdditionalNotesProps {
  notes: string;
}

const AdditionalNotes: React.FC<AdditionalNotesProps> = ({ notes }) => {
  const notesArray = notes.split(/\d+\.\s/).filter((note) => note.trim() !== "");
  return (
    <div className="p-4 m-8 bg-white rounded-lg shadow-lg">
      <h2 className="py-3 mb-4 text-xl font-bold text-center text-black rounded-lg bg-primary">Notes Analysis</h2>
        <ol className="list-decimal list-inside">
          {notesArray.map((note, index) => (
            <li key={index} className="mb-2">
              {note}
            </li>
          ))}
        </ol>
    </div>
  );
};

export default AdditionalNotes;
