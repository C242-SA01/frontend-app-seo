import Link from "next/link";
import React, { useState } from "react";

interface AuditHistoryItem {
  id: string;
  clientName: string;
  websiteURL: string;
  createdAt: string;
}

interface AuditHistoryProps {
  data: AuditHistoryItem[];
  userEmail?: string; // Tambahkan props untuk email user dengan default value
}

const AuditHistory: React.FC<AuditHistoryProps> = ({ data, userEmail = 'Unknown User' }) => {
  const [selectedAudit, setSelectedAudit] = useState<AuditHistoryItem | null>(null);

  // Function to close the modal
  const closeModal = () => setSelectedAudit(null);

  return (
    <div className="p-4 m-4 bg-white rounded-lg shadow-md">
      {/* Header */}
      <h2 className="pb-4 text-lg font-bold text-center text-gray-800">
        History Audit
      </h2>

      {/* Table */}
      <table className="w-full border-collapse table-auto">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-center text-gray-700 border-b border-gray-300">
              Client Name
            </th>
            <th className="px-4 py-2 text-center text-gray-700 border-b border-gray-300">
              Website URL
            </th>
            <th className="px-4 py-2 text-center text-gray-700 border-b border-gray-300">
              Created At
            </th>
            <th className="px-4 py-2 text-center text-gray-700 border-b border-gray-300">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr
                key={item.id}
                className={`cursor-pointer ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-gray-200`}
                onClick={() => setSelectedAudit(item)}
              >
                <td className="px-4 py-2 border-b border-gray-300">
                  {item.clientName ?? "Unknown"}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  <a
                    href={item.websiteURL ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {item.websiteURL ?? "Unknown"}
                  </a>
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  {item.createdAt ?? "Unknown"}
                </td>
                <td className="px-4 py-2 text-center border-b border-gray-300">
                  <Link
                    href={`/history/${item.id}`} // Menggunakan URL dinamis berdasarkan ID
                  >
                    <button
                      className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="w-full h-12 text-center text-gray-500" colSpan={4}>
                No audit history found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal Detail */}
      {selectedAudit && (
        <div
          className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
          onClick={closeModal} // Menutup modal ketika background overlay di klik
        >
          <div
            className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup jika modalnya sendiri di klik
          >
            <h3 className="mb-4 text-lg font-bold">{selectedAudit.clientName}</h3>
            <p className="mb-4">
              <strong>Website URL:</strong>{" "}
              <a
                href={selectedAudit.websiteURL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                {selectedAudit.websiteURL}
              </a>
            </p>
            <p className="mb-4">
              <strong>Created At:</strong> {selectedAudit.createdAt}
            </p>
            <button
              onClick={closeModal}
              className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuditHistory;
