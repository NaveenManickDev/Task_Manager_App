const Home = ({ formData, handleFormData, handleSubmit, editIndex }) => {
  return (
    <div className="bg-gray-400 text-black">
      <h1 className="text-3xl font-bold text-center pt-5">Task </h1>
      <form className="p-5 items-center" onSubmit={handleSubmit}>
        <div className="flex space-x-4 py-2 px-4">
          <div className="space-x-5">
            <label className="text-xl font-bold">Title</label>
            <input
              className="border border-gray-600 text-xl font-bold text-black p-2 rounded-lg"
              type="text"
              value={formData.task}
              onChange={(e) => handleFormData("task", e.target.value)}
              required
            />
          </div>
          <div className="space-x-5">
            <label className="text-xl font-bold">Description</label>
            <input
              className="border border-gray-600 text-xl font-bold text-black p-2 rounded-lg"
              type="text"
              value={formData.description}
              onChange={(e) => handleFormData("description", e.target.value)}
              required
            />
          </div>
        </div>
        <div className="text-center mt-10">
          <button
            className="bg-yellow-600 text-white py-2 px-4 rounded-lg text-xl font-bold hover:bg-orange-700 transition"
            type="submit"
          >
            {editIndex === null ? "Add Task" : "Edit Task"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;