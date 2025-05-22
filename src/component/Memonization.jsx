import React, { useState } from "react";

function Product(a, b) {
  console.log("Calculating Product");
  return a * b;
}

function memo(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log("Returning from cache");
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

const MemoizedProduct = memo(Product);

export const Memoization = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const res = MemoizedProduct(a, b);
    setResult(res);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
      <div className="bg-gray-800 p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-cyan-400 text-center">
          🧠 Memoized Product Calculator
        </h2>
        <div className="space-y-4">
          <input
            type="number"
            value={a}
            onChange={(e) => setA(Number(e.target.value))}
            placeholder="Enter value for A"
            className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="number"
            value={b}
            onChange={(e) => setB(Number(e.target.value))}
            placeholder="Enter value for B"
            className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <button
            onClick={handleCalculate}
            className="w-full py-2 bg-cyan-500 text-black font-bold rounded hover:bg-cyan-400 transition"
          >
            Calculate
          </button>
        </div>
        {result !== null && (
          <p className="mt-6 text-center text-lg">
            ✅ Result: <span className="font-bold">{result}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Memoization;
