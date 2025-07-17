import { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ smallText, Son, btnText, onAddToCart }) => {
  const cardData = [
    {
      id: 1,
      title: "Nature View",
      image:
        "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "A peaceful view of nature. Ideal for your relaxation and peace of mind.",
    },
    {
      id: 2,
      title: "Mountain Peaks",
      image:
        "https://images.pexels.com/photos/1151440/pexels-photo-1151440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Towering mountains that inspire adventure and exploration.",
    },
    {
      id: 3,
      title: "City Lights",
      image:
        "https://images.pexels.com/photos/1697218/pexels-photo-1697218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "The vibrant glow of city life after dark. Perfect for urban explorers.",
    },
    {
      id: 4,
      title: "Desert Dunes",
      image:
        "https://images.pexels.com/photos/1450083/pexels-photo-1450083.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Golden sands stretching endlessly. A calm yet striking visual.",
    },
  ];

  return (
    <div className="container mx-auto px-4 flex gap-4 flex-wrap mt-10">
      {cardData.map((card) => (
        
          <div
            key={card.id}
            className="max-w-xs p-6 rounded-md shadow-md bg-sky-100"
          >
            <Link to={`/card/${card.id}`} key={card.id}>
            <img
              src={card.image}
              alt={card.title}
              className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
            />
            <div className="mt-6 mb-2">
              <span className="block text-sm font-medium font-mono tracking-widest uppercase text-gray-500">
                {smallText} <br />
                {Son || ""}
              </span>
              <h2 className="text-xl font-semibold tracking-wide">
                {card.title}
              </h2>
            </div>
            <p className="text-gray-600">{card.description}</p>
              </Link>
            <button
              className="bg-slate-800 text-white mt-5 px-4 py-2 rounded hover:bg-blue-700 transition"
              onClick={onAddToCart}
            >
              {btnText}
            </button>
          </div>
      
      ))}
    </div>
  );
};

export default Card;
