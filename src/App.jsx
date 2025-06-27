import { useState } from 'react'
import Home from './components/Home'
import Table from './components/Table'

function App() {

  const initialFormData = {
    task:"",
    description:""
  }

  const [formData, setFormData] = useState(initialFormData)
  const [tableData, setTableData] = useState([])
  const [editIndex, setEditIndex] = useState(null)

  const handleFormData = (key, value) =>{
      // console.log({key, value});

      setFormData({
        ...formData,
        [key]:value
      })      
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log("Form Submited", formData);
    if (editIndex === null) {
      setTableData([...tableData, formData]) 
    
      setFormData(initialFormData)

    } else{
      tableData[editIndex] = formData
      setFormData(initialFormData)
      setTableData(tableData)
      setEditIndex(null)
    }
    // console.log("Form Data Changed", {formData, tableData});
    
  }
  
  const handleEdit = (index) => {
    // console.log("Edit clicked", index);

    const clickedItem = tableData[index]
    setFormData(clickedItem)
    setEditIndex(index)
    
  }

  const handleDelete = (index) => {
    tableData.splice(index,1)

    setTableData([...tableData])
  }

  return (
    <div className='p-5 mt-24 mx-auto max-w-screen-lg'>
      <Home handleFormData={handleFormData} handleSubmit={handleSubmit} formData={formData}
      editIndex={editIndex}/>
      <Table tableData={tableData} handleEdit={handleEdit} handleDelete={handleDelete}/>
    </div>
  )
}

export default App
