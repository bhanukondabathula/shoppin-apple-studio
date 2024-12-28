import { useState } from 'react';

export default function SizeSelector({
  selectedCollection,
  navigateTo,
  goBack,
  selectedSize,
  setSelectedSize,
  sizes,
}: {
  navigateTo: (page: string) => void;
  goBack: () => void;
  selectedCollection: string;
  selectedSize: number | null;
  setSelectedSize: (id:number | null)=>void;
  sizes: Array<{
    id: number;
    size: string;
    image: string;
    price: number;
  }>;
  
}) {
 
  const selectedSizeDetails = sizes.find((size) => size.id === selectedSize);
  

  return (
    <div className="flex flex-col items-center min-h-screen p-6 relative">

      <div className="flex mb-4 space-x-6">
        {sizes.map((size) => (
          <div
            key={size.id}
            className={`transition-all duration-500 ease-in-out transform ${
              selectedSize === size.id ? 'scale-100' : 'scale-90 opacity-60'
            }`}
          >
            <img
              src={size.image} // Using the image field directly
              alt={`${size.size} watch`}
              className="w-96 h-96 object-contain rounded-lg"
            />
          </div>
        ))}
      </div>


      <h2 className="text-xl font-bold">{selectedCollection}</h2>

      {selectedSizeDetails ? (
        <div className="mt-4">
          <h2 className="text-gray-500 text-sm">Name: "Apple Watch"</h2>
          <h2>Price: ${selectedSizeDetails.price}</h2>
        </div>
      ) : (
        <p className="text-gray-500 mt-4">Please select a case to preview.</p>
      )}

      <div className="flex space-x-4 mb-6 py-4">
        {sizes.map((size) => (
          <button
            key={size.id}
            onClick={() => setSelectedSize(size.id)}  
            className={`py-2 px-4 text-lg font-semibold rounded-lg border ${
              selectedSize === size.id
                ? 'bg-transparent text-blue-500 border-blue-500'
                : 'bg-transparent text-gray-700 border-gray-300'
            } hover:bg-blue-300 transition`}
          >
            {size.size}
          </button>
        ))}
      </div>

      <div className="flex space-x-6">
        <button
          className="bg-gray-800 text-white py-2 px-6 rounded-lg shadow-md flex items-center space-x-2 hover:bg-gray-700"
          onClick={() => navigateTo("case")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-smartwatch" viewBox="0 0 16 16">
            <path d="M9 5a.5.5 0 0 0-1 0v3H6a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 .5-.5z"/>
            <path d="M4 1.667v.383A2.5 2.5 0 0 0 2 4.5v7a2.5 2.5 0 0 0 2 2.45v.383C4 15.253 4.746 16 5.667 16h4.666c.92 0 1.667-.746 1.667-1.667v-.383a2.5 2.5 0 0 0 2-2.45V8h.5a.5.5 0 0 0 .5-.5z"/>
          </svg>
          <span>Case</span>
        </button>

        <button
          className="bg-gray-800 text-white py-2 px-6 rounded-lg shadow-md flex items-center space-x-2 hover:bg-gray-700"
          onClick={() => navigateTo("band")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-watch"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a7 7 0 0 0-7 7 7 7 0 1 0 14 0A7 7 0 0 0 8 1zm0 13A6 6 0 1 1 8 2a6 6 0 0 1 0 12z" />
            <path d="M8 4a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1z" />
          </svg>
          <span>Band</span>
        </button>

        <button
          className="bg-red-800 text-white py-2 px-6 rounded-lg shadow-md flex items-center space-x-2 hover:bg-red-700"
          onClick={goBack}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 1-.5.5H3.707l4.147 4.146a.5.5 0 0 1-.708.708l-5-5a.5.5 0 0 1 0-.708l5-5a.5.5 0 0 1 .708.708L3.707 7.5H14.5a.5.5 0 0 1 .5.5z"
            />
          </svg>
          <span>Back</span>
        </button>
      </div>
    </div>
  );
}
