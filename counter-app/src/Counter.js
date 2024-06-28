import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
    toast.info('Counter has been reset');
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center text-4xl font-bold mb-80">
          Saleem Talha
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Counter: {count}</h1>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
            onClick={increment}
          >
            Increment
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2"
            onClick={decrement}
          >
            Decrement
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded m-2"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Counter;
