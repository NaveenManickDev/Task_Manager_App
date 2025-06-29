import { useState } from "react";

const Table = ({ tableData, handleEdit, handleDelete }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 3;

  // Calculate pagination
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = tableData.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(tableData.length / rowsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <table className="w-full border mt-6">
        <thead>
          <tr className="bg-gray-300">
            <th className="border p-0">S.No</th>
            <th className="border p-2">Task</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((data, index) => (
            <tr key={indexOfFirstRow + index} className="text-xl text-center">
              <td className="border border-gray-300 px-2 py-2">
                {indexOfFirstRow + index + 1}
              </td>
              <td className="border border-gray-300 px-4 py-2">{data.task}</td>
              <td className="border border-gray-300 px-4 py-2">{data.description}</td>
              <td className="border border-gray-300 px-4 py-2 flex justify-evenly">
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                  onClick={() => handleEdit(indexOfFirstRow + index)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded"
                  onClick={() => handleDelete(indexOfFirstRow + index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {currentRows.length === 0 && (
            <tr>
              <td colSpan="4" className="text-center py-4">
                No tasks found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-center space-x-4 mt-4">
        <button
          onClick={goToPrevPage}
          disabled={currentPage === 1}
          className="bg-gray-600 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="self-center text-lg">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="bg-gray-600 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;