import { useState, useCallback, useEffect } from "react";

export default function App() {
  const [length, setLength] = useState(8); // default length
  const [randomString, setRandomString] = useState("");

  // Function to generate a random string
  const generateString = useCallback(() => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }, [length]);

  // Generate string on first load & whenever length changes
  useEffect(() => {
    setRandomString(generateString());
  }, [generateString]);

  // Handle button click
  const handleGenerate = () => {
    setRandomString(generateString());
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">
          🎲 Random String Generator
        </h1>

        {/* Length input */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">String Length:</label>
          <input
            type="number"
            min="1"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Generated string display */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Generated String:</label>
          <div className="bg-gray-100 p-3 rounded-lg font-mono break-all">
            {randomString}
          </div>
        </div>

        {/* Generate button */}
        <button
          onClick={handleGenerate}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          Generate New String
        </button>
      </div>
    </div>
  );
}
