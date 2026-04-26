import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center mt-10">
      <h1
        className={`text-6xl font-bold mb-6 ${
          count > 0 ? "text-green-500" : count < 0 ? "text-red-500" : "text-black"
        }`}
      >
        {count}
      </h1>

      <div className="flex gap-4">
        <button
          className="bg-green-500 text-white px-6 py-2 rounded-lg text-xl hover:bg-green-600"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <button
          className="bg-red-500 text-white px-6 py-2 rounded-lg text-xl hover:bg-red-600"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <button
          className="bg-gray-500 text-white px-6 py-2 rounded-lg text-xl hover:bg-gray-600"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;