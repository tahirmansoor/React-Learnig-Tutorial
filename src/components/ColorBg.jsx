import React, { useState } from "react";

function Colors() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-max duration-200 py-2 px-3 gap-10"
      style={{ backgroundColor: color }}
    >
      <div class="container">
        <div className="flex justify-start space-x-1">
            <button onClick={()=> setColor("gray")} class=" text-white px-4 py-2 rounded-xl bg-gray-600"></button>
            <button onClick={()=> setColor("green")} class="bg-green-600 text-white rounded-xl px-4 py-2"></button>
            <button onClick={()=> setColor("blue")} class="bg-blue-600 text-white rounded-xl px-4 py-2"></button>
      </div>
      </div>
    </div>
  );
}

export default Colors;
