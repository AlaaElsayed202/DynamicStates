import React, { useState } from "react";

export default function FanState() {
  const [FanSpeed, setFanSpeed] = useState(0);
  const [FanState, setFanState] = useState(false);

  const toggle = () => setFanState(!FanState);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-blue-50 flex justify-center items-center">
      <div className="flex flex-col gap-6 p-10 w-[400px] bg-blue-200 rounded-2xl border-2 border-blue-400 shadow-md items-center">
        <h1 className="text-3xl font-bold text-blue-900">
          Fan State is :
          <span className={FanState ? "text-green-600" : "text-red-600"}>
            {FanState ? "Open" : "Close"}
          </span>
        </h1>

        <h1 className="text-2xl text-blue-800">
          Fan Speed: <span className="font-bold">{FanSpeed }</span>
        </h1>

        <button
          onClick={toggle}
          className="bg-blue-500 text-white font-bold py-2 px-6 rounded hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all"
        >
          Power
        </button>
      </div>
    </div>
  );
}
