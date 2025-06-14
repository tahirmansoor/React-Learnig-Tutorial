import React, { useState } from "react";

function Colors() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200 py-5 px-20 gap-10"
      style={{ backgroundColor: color }}
    >
      <div class="container">
            <button onClick={()=> setColor("gray")} class="bg-blue-600 text-white px-4 py-2 rounded rounded-md">Gray</button>
            <button onClick={()=> setColor("green")} class="bg-blue-600 text-white px-4 py-2 rounded rounded-md">Green</button>
            <button onClick={()=> setColor("blue")} class="bg-blue-600 text-white px-4 py-2 rounded rounded-md">Blue</button>

      </div>
    </div>
  );
}

export default Colors;
