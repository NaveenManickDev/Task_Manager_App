const Table = ({tableData, handleEdit, handleDelete}) => {
  return (
    <table className='w-full border mt-6'>
        <thead>
            <tr className='bg-gray-300'>
                <th className='border p-2'>Task</th>
                <th className='border p-2'>Description</th>
                <th className='border p-2'>Actions</th>
            </tr>
        </thead>
        <tbody>
            {tableData.map((data, index) => {
                return(
                    <tr key={index} className="text-xl text-center">
                        <td className="border border-gray-300 px-4 py-2">{data.task}</td>
                        <td className="border border-gray-300 px-4 py-2">{data.description}</td>
                        <td className="border border-gray-300 px-4 py-2 justify-evenly flex">
                            <button className="bg-blue-600
                             text-white px-4 py-2 rounded"
                             onClick={() => {
                                handleEdit(index)
                             }}>Edit</button>
                            <button className="bg-red-600 text-white px-4 py-2 rounded"
                            onClick={() => {
                                handleDelete(index)
                            }}>Delete</button>
                        </td>
                    </tr>
                )
            })}
        </tbody>
    </table>
  )
}

export default Table