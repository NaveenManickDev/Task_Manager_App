const Home = () => {
  return (
    <div className="bg-gray-400 text-white">
        <h1 className='text-3xl font-bold text-center'>Task List</h1>
        <form className='flex justify-between p-5 items-center'>            
            <div className="space-x-4 py-2 px-4">
                <label className="text-2xl font-bold" htmlFor="">Search</label>
            <input className="border border-gray-600 rounded-lg py-2" type="text" />
            </div>
            <div>
                <a href="">
                    <button className="bg-yellow-600 py-2 px-4 rounded-lg text-xl font-bold hover:bg-orange-700 transition">Create Task</button>
                </a>
            </div>        
        </form>
    </div>
  )
}

export default Home