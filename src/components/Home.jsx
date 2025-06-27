const Home = ({formData, handleFormData, handleSubmit, editIndex}) => {
    // console.log("handleFormData",handleFormData);
    
  return (
    <div className="bg-green-400 text-white">
        <h1 className='text-3xl font-bold text-center'>Task List</h1>
        <form className=' p-5 items-center' onSubmit={handleSubmit}>            
            <div className="flex  space-x-4 py-2 px-4">
                <div>
                    <label className="text-2xl font-bold" htmlFor="">Title</label>
                <input className="border border-gray-600 text-xl font-bold text-red-600 
                    p-5 rounded-lg py-2" type="text" 
                    onChange={(e)=>{
                    const {value} = e.target
                    handleFormData("task",value)                    
                }}
                required
                value={formData.task}
                />
                </div>
                
                <div>
                    <label className="text-2xl font-bold" htmlFor="">Description</label>
                <input className="border border-gray-600 text-xl font-bold text-red-600 
                    p-5 rounded-lg py-2" type="text" 
                    onChange={(e)=>{
                    const {value} = e.target
                    handleFormData("description",value)
                }}
                required
                value={formData.description}/>
                </div>                
            </div>
                <div className="text-center mt-10">
                    <a href="">
                    <button className="bg-yellow-600 py-2 px-4 rounded-lg 
                    text-xl font-bold hover:bg-orange-700 transition"
                    >{editIndex === null ? "Add Task" :"Edit Task"}</button>
                </a>
                </div>       
        </form>
    </div>
  )
}

export default Home