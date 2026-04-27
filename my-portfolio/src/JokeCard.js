// ✅ Only change this one line
import { useState, useEffect } from "react";

function JokeCard() {
  const [joke, setjoke] = useState(null);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    async function jokefetch() {
      const get = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data = await get.json();
      setjoke(data);
    }
    jokefetch();
  }, [refresh]);

  if (!joke) {
    return <p className="text-center mt-10">Loading joke... 😄</p>;
  }

  return (
    <div className="flex flex-col items-center mt-10 p-6">
      <h2 className="text-2xl font-bold mb-4">😄 {joke.setup}</h2>
      <p className="text-xl text-gray-600">🤣 {joke.punchline}</p>
      <button
        className="bg-red-500 text-lg px-4 py-2 mt-4 rounded-lg text-white"
        onClick={() => setRefresh(refresh + 1)}
      >
        New Joke 😄
      </button>
    </div>
  );
}

export default JokeCard;