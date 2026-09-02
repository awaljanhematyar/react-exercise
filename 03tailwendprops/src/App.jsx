function App() {
  return (
    <>
      <h1 className="bg-green-500 text-orange-500 rounded-2xl p-4 m-4 ">
        tailwend is working
      </h1>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="w-80 bg-white rounded-xl shadow-lg p-6">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500"
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto object-cover"
          />

          <h2 className="text-2xl font-bold text-gray-800 text-center mt-4">
            Awal Jan
          </h2>

          <p className="text-gray-500 text-center mt-2">Frontend Developer</p>

          <button className="w-full bg-blue-500 text-white py-2 rounded-lg mt-5 hover:bg-blue-600">
            View Profile
          </button>
        </div>
      </div>
      
    </>
  );
}

export default App;
