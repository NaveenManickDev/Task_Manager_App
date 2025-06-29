import { useNavigate } from "react-router-dom";
import Home from "./Home";

function Create({
  tableData,
  setTableData,
  formData,
  setFormData,
  editIndex,
  setEditIndex
}) {
  const navigate = useNavigate();
  const initialFormData = { task: "", description: "" };

  const handleFormData = (key, value) => {
    setFormData({
      ...formData,
      [key]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex === null) {
      setTableData([...tableData, formData]);
    } else {
      const updated = [...tableData];
      updated[editIndex] = formData;
      setTableData(updated);
    }

    setFormData(initialFormData);
    setEditIndex(null);

    navigate("/home");
  };

  return (
    <div className="p-5 mt-24 mx-auto max-w-screen-lg">
      <Home
        handleFormData={handleFormData} handleSubmit={handleSubmit} formData={formData}
        editIndex={editIndex}
      />
    </div>
  );
}

export default Create;