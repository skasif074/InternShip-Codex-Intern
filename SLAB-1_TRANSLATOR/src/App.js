import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [targetLang, setTargetLang] = useState("en");
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    if (!text) return;
    setLoading(true);
    setTranslatedText("");

    try {
      const response = await fetch(
        "https://google-translate113.p.rapidapi.com/api/v1/translator/text",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-rapidapi-key": "40972861cfmsh443137cbb14d2b8p199f4ejsn3e0d5aacef12",
            "x-rapidapi-host": "google-translate113.p.rapidapi.com",
          },
          body: JSON.stringify({
            from: "auto",
            to: targetLang,
            text: text,
          }),
        }
      );

      const data = await response.json();
      if (data.trans) {
        setTranslatedText(data.trans);
      } else {
        setTranslatedText("Translation not available.");
      }
    } catch (err) {
      setTranslatedText("Error fetching translation.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-lg transform transition duration-500 hover:scale-[1.02]">
        <h1 className="text-3xl font-extrabold mb-6 text-center bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text">
          Translator By SK ASIF
        </h1>

        <textarea
          className="w-full p-4 border-2 border-gray-200 rounded-xl mb-4 focus:ring-2 focus:ring-pink-400 focus:outline-none text-gray-800"
          rows="4"
          placeholder="Enter your Text here(Any Language)"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <select
          className="w-full p-3 border-2 border-gray-200 rounded-xl mb-4 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          value={targetLang}
          onChange={(e) => setTargetLang(e.target.value)}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="hi">Hindi</option>
          <option value="de">German</option>
          <option value="ar">Arabic</option>
          <option value="zh">Chinese</option>
          <option value="ru">Russian</option>
          <option value="ja">Japanese</option>
        </select>

        <button
          onClick={handleTranslate}
          disabled={loading}
          className="w-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:opacity-90 transition"
        >
          {loading ? "Just a Moment." : "Translate"}
        </button>

        <div className="mt-6">
          <h2 className="font-bold text-lg mb-2 text-gray-700">Result:</h2>
          <p className="p-4 border-2 border-gray-200 rounded-xl bg-gray-50 min-h-[60px] text-gray-900">
            {translatedText}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
