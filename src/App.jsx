import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Create from "./components/Create";
import TaskList from "./components/TaskList";

function App() {
  const [tableData, setTableData] = useState([]);
  const [formData, setFormData] = useState({ task: "", description: "" });
  const [editIndex, setEditIndex] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={
            <TaskList
              tableData={tableData} setTableData={setTableData}
              setFormData={setFormData} setEditIndex={setEditIndex}
            />
          }
        />
        <Route
          path="/create"
          element={
            <Create
              tableData={tableData} setTableData={setTableData}
              formData={formData} setFormData={setFormData}
              editIndex={editIndex} setEditIndex={setEditIndex}
            />
          }
        />
        <Route path="*" element={<Navigate to={"/home"}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
