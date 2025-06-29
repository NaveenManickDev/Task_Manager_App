const Home = ({ formData, handleFormData, handleSubmit, editIndex }) => {
  return (
    <div className="bg-green-400 text-white">
      <h1 className="text-3xl font-bold text-center">Task {editIndex === null ? "Create" : "Edit"}</h1>
      <form className="p-5 items-center" onSubmit={handleSubmit}>
        <div className="flex space-x-4 py-2 px-4">
          <div>
            <label className="text-2xl font-bold">Title</label>
            <input
              className="border border-gray-600 text-xl font-bold text-black p-2 rounded-lg"
              type="text"
              value={formData.task}
              onChange={(e) => handleFormData("task", e.target.value)}
              required
            />
          </div>
          <div>
            <label className="text-2xl font-bold">Description</label>
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
            className="bg-yellow-600 py-2 px-4 rounded-lg text-xl font-bold hover:bg-orange-700 transition"
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


// const Home = ({ formData, handleFormData, handleSubmit, editIndex }) => {
//   return (
//     <div className="bg-green-400 text-white">
//       <h1 className="text-3xl font-bold text-center">
//         {editIndex === null ? "Create Task" : "Edit Task"}
//       </h1>
//       <form className="p-5" onSubmit={handleSubmit}>
//         <div className="flex space-x-4">
//           <div>
//             <label className="text-2xl font-bold">Title</label>
//             <input
//               className="border border-gray-600 text-xl font-bold text-red-600 p-2 rounded-lg"
//               type="text"
//               onChange={(e) => handleFormData("task", e.target.value)}
//               required
//               value={formData.task}
//             />
//           </div>
//           <div>
//             <label className="text-2xl font-bold">Description</label>
//             <input
//               className="border border-gray-600 text-xl font-bold text-red-600 p-2 rounded-lg"
//               type="text"
//               onChange={(e) => handleFormData("description", e.target.value)}
//               required
//               value={formData.description}
//             />
//           </div>
//         </div>
//         <div className="text-center mt-5">
//           <button
//             className="bg-yellow-600 py-2 px-4 rounded-lg text-xl font-bold hover:bg-orange-700 transition"
//             type="submit"
//           >
//             {editIndex === null ? "Add Task" : "Update Task"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Home;