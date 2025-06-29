import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react";
// import TaskList from "./components/TaskList";
// import Create from "./components/Create";

// function App() {
//   const [tasks, setTasks] = useState([]); // ✅ main task data lives here

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route
//           path="/tasklist"
//           element={
//             <TaskList
//               tableData={tasks}
//             />
//           }
//         />
//         <Route
//           path="/create"
//           element={
//             <Create
//               tableData={tasks}
//               setTableData={setTasks}
//             />
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
