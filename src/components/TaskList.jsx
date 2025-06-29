import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "./Table";

const TaskList = ({ tableData, setTableData, setFormData, setEditIndex }) => {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");

  const handleEdit = (index) => {
    setFormData(tableData[index]);
    setEditIndex(index);
    navigate("/create");
  };

  const handleDelete = (index) => {
    const updated = [...tableData];
    updated.splice(index, 1);
    setTableData(updated);
  };

  const filteredData = tableData.filter((task) =>
    task.task.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-400 text-white p-5 mt-24 mx-auto max-w-screen-lg">
      <h1 className="text-3xl font-bold text-center">Task Manager</h1>
      <div className="flex justify-between p-5 items-center">
        <div className="space-x-4 py-2 px-4">
          <label className="text-2xl font-bold">Search</label>
          <input
            className="border border-gray-600 rounded-lg py-2 px-2 text-black"
            type="text"
            placeholder="Search by Title or Description"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button
          className="bg-yellow-600 py-2 px-4 rounded-lg text-xl font-bold hover:bg-orange-700 transition"
          onClick={() => {
            setFormData({ task: "", description: "" });
            setEditIndex(null);
            navigate("/create");
          }}
        >
          Create Task
        </button>
      </div>
      <Table
        tableData={filteredData}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default TaskList;