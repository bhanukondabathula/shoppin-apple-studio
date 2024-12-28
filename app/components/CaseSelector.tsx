import { useState } from "react";

export default function CaseSelector({
  selectedCollection,
  selectedCase,
  setSelectedCase,
  allCases,
  selectedType,
  setSelectedType,
  navigateTo,
  goBack,
}: {
  selectedCollection: string;
  selectedCase: number | null;
  setSelectedCase: (caseId: number | null) => void;
  allCases: Record<string, { id: number, name: string, price: number, type: string, image: string }>;
  selectedType: "aluminum" | "titanium";
  setSelectedType: (type: "aluminum" | "titanium") => void;
  navigateTo: (page: string) => void;
  goBack: () => void;
}) {
 
  const filteredCases = Object.values(allCases).filter(
    (watchCase) => watchCase.type === selectedType
  );


  const scrollContainer = (direction: "left" | "right") => {
    const container = document.getElementById("case-scroll-container");
    if (container) {
      container.scrollBy({ left: direction === "left" ? -200 : 200, behavior: "smooth" });
    }
  };


  const selectedCaseDetails = allCases[selectedCase || 0];

  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-white relative">

      <div className="relative w-full max-w-5xl">
        <button
          onClick={() => scrollContainer("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 text-black p-2 shadow-lg hover:bg-gray-400 z-10"
          aria-label="Scroll left"
        >
          &lt;
        </button>

       
        <div
          id="case-scroll-container"
          className="flex overflow-x-auto scrollbar-hide scroll-smooth space-x-8 items-center mb-6"
        >
          {filteredCases.map((watchCase) => (
            <label
              key={watchCase.id}
              className={`relative min-w-[180px] flex justify-center items-center cursor-pointer transition-all duration-200 ${
                selectedCase === watchCase.id ? "border-4 border-blue-500" : "hover:shadow-lg"
              }`}
            >
              <img
                src={watchCase.image}
                alt={`${watchCase.name} Watch Case`}
                className="w-40 h-50 object-cover"
              />
              <input
                type="radio"
                name="case"
                value={watchCase.id}
                checked={selectedCase === watchCase.id}
                onChange={() => setSelectedCase(watchCase.id)}
                className="hidden"
              />
            </label>
          ))}
        </div>

        <button
          onClick={() => scrollContainer("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 text-black p-2 shadow-lg hover:bg-gray-400 z-10"
          aria-label="Scroll right"
        >
          &gt;
        </button>
      </div>

      <h2 className="text-xl font-bold">{selectedCollection}</h2>

    
      {selectedCase ? (
        <div className="mt-4">
          <p className="text-gray-500 text-sm">
            Material:{" "}
            {selectedCaseDetails ? selectedCaseDetails.type.charAt(0).toUpperCase() + selectedCaseDetails.type.slice(1) : "Unknown"}
            {" "}Price:{"$ "}
            {selectedCaseDetails ? selectedCaseDetails.price : "Unknown"}
          </p>
        </div>
      ) : (
        <p className="text-gray-500 mt-4">Please select a case to preview.</p>
      )}


      <div className="flex justify-center space-x-4 mb-8">
        <button
          className={`py-2 px-6 rounded-md font-medium ${selectedType === "aluminum" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}
          onClick={() => setSelectedType("aluminum")}
        >
          Aluminum
        </button>
        <button
          className={`py-2 px-6 rounded-md font-medium ${selectedType === "titanium" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}
          onClick={() => setSelectedType("titanium")}
        >
          Titanium
        </button>
      </div>


      <div className="flex space-x-6">
        <button
          className="bg-gray-800 text-white py-2 px-6 rounded-lg shadow-md flex items-center space-x-2 hover:bg-gray-700"
          onClick={() => navigateTo("size")}
        >
          <span>Size</span>
        </button>

        <button
          className="bg-gray-800 text-white py-2 px-6 rounded-lg shadow-md flex items-center space-x-2 hover:bg-gray-700"
          onClick={() => navigateTo("band")}
        >
          <span>Band</span>
        </button>

        <button
          className="bg-red-800 text-white py-2 px-6 rounded-lg shadow-md flex items-center space-x-2 hover:bg-red-700"
          onClick={goBack}
        >
          <span>Back</span>
        </button>
      </div>
    </div>
  );
}
