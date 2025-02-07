"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-3xl font-bold">Counter: {count}</h1>
      <div className="flex gap-4">
        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 hover:bg-red-700 px-4 py-2 text-white rounded-lg"
        >
          Decrease
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 hover:bg-green-700 px-4 py-2 text-white rounded-lg"
        >
          Increase
        </button>
      </div>
    </div>
  );
}
