import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-3 rounded-3xl">
          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}>
            black
          </button>
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}>
            red
          </button>
          <button onClick={()=>setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}>
            green
          </button>
          <button onClick={()=>setColor("orange")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "orange" }}>
            Orange
          </button>
          <button onClick={()=>setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "yellow" }}>
            Yellow
          </button>
          <button onClick={()=>setColor("white")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg "
            style={{ backgroundColor: "white" }}>
            white
          </button>
          <button onClick={()=>setColor("pink")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg "
            style={{ backgroundColor: "pink" }}>
            pink
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default App;
