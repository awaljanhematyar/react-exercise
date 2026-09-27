import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef
  const passwordRef = useRef(null);

  // Generate Password
  const passwordGenerator = useCallback(() => {
    let pass = "";

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }

    if (charAllowed) {
      str += "!@#$%^&*_+[]{}|;:,.?";
    }

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  // Generate password when settings change
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  // Copy Password
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();

    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-400 bg-gray-900">

      <h1 className="text-white text-center text-2xl font-bold mb-4">
        Password Generator
      </h1>

      {/* Password Input */}
      <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-amber-50">

        <input
          type="text"
          value={password}
          className="outline-none w-full py-2 px-5 text-black"
          placeholder="Password"
          ref={passwordRef}
          readOnly
        />

        <button
          onClick={copyPasswordToClipboard}
          className="bg-blue-600 text-white px-4 py-2 shrink-0"
        >
          Copy
        </button>

      </div>

      {/* Settings */}
      <div className="flex flex-wrap text-sm gap-4">

        {/* Length */}
        <div className="flex items-center gap-2">

          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(Number(e.target.value));
            }}
          />

          <label>
            Length: {length}
          </label>

        </div>

        {/* Numbers */}
        <div className="flex items-center gap-2">

          <input
            type="checkbox"
            checked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />

          <label htmlFor="numberInput">
            Numbers
          </label>

        </div>

        {/* Characters */}
        <div className="flex items-center gap-2">

          <input
            type="checkbox"
            checked={charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />

          <label htmlFor="characterInput">
            Characters
          </label>

        </div>

      </div>

      {/* Generate Button */}
      <button
        onClick={passwordGenerator}
        className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
      >
        Generate Password
      </button>

    </div>
  );
}

export default App;