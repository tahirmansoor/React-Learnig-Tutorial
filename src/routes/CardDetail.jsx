import React from "react";
import { useParams } from "react-router-dom";

const cardData = [
  {
    id: 1,
    title: "Nature View",
    image: "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "A peaceful view of nature, perfect for meditation, relaxation, and evening walks in the cool breeze of the forest.",
  },
  {
    id: 2,
    title: "Mountain Peaks",
    image: "https://images.pexels.com/photos/1151440/pexels-photo-1151440.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Soaring peaks and alpine serenity – ideal for climbers and explorers looking to conquer nature's majesty.",
  },
  {
    id: 3,
    title: "City Lights",
    image: "https://images.pexels.com/photos/1697218/pexels-photo-1697218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A bustling city glowing under the night sky. Great for those who thrive in the fast-paced urban lifestyle.",
  },                                     
  
  {
    id: 4,
    title: "Desert Dunes",
    image: "https://images.pexels.com/photos/1450083/pexels-photo-1450083.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Golden dunes stretch to the horizon. Perfect for off-road adventure seekers and solitude lovers.",
  },
];

const CardDetail = () => {
  const { id } = useParams();
  const product = cardData.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div className="text-center mt-10 text-red-600 text-lg font-medium">Product not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-white shadow-xl rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left: Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right: Details */}
        <div className="md:w-1/2 w-full p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{product.title}</h2>
            <p className="text-gray-600 text-base leading-relaxed mb-6">{product.description}</p>
          </div>

          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-md transition duration-300 ease-in-out shadow-md w-fit">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
