import { useState } from "react";

export default function CaseSelector({
  selectedCollection,
  navigateTo,
  goBack,
}: {
  navigateTo: (page: string) => void;
  goBack: () => void;
  selectedCollection:string;
}) {
  const allCases = [
    { id: 1, name: "Aluminum", price:220, type: "aluminum", image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shopsy-smartwatch/v/p/c/1-44-android-ios-new-t5000-zdea-yes-original-imagw4fuxpfpzy6v.jpeg?q=90&crop=false" },
    { id: 2, name: "Aluminum", price:220, type: "aluminum", image: "https://alarm-stores.com/wp-content/uploads/2024/09/Jet-Black-2.png" },
    { id: 3, name: "Aluminum", price:220, type: "aluminum", image: "https://rukminim1.flixcart.com/image/300/300/xif0q/smartwatch/e/j/r/44-android-ios-t500-jb-a1-jb-sons-yes-original-imagzhbmygeg52pv.jpeg" },
    { id: 4, name: "Aluminum", price:220, type: "aluminum", image: "https://rukminim1.flixcart.com/image/300/300/xif0q/smartwatch/w/2/u/44-android-ios-t500-jb-a14-jb-sons-yes-original-imagzhc8scnrbbeh.jpeg" },
    { id: 5, name: "Aluminum", price:220, type: "aluminum", image: "https://rukminim1.flixcart.com/image/300/300/xif0q/smartwatch/r/w/2/44-android-ios-t500-jb-a36-jb-sons-yes-original-imagzhdsdfbkz85d.jpeg" },
    { id: 6, name: "Titanium", price:220, type: "titanium", image: "https://img-cdn.heureka.group/v1/d8ee801a-0e4c-483a-adfb-5867c62c2123.jpg" },
    { id: 7, name: "Rose Gold", price:320, type: "aluminum", image: "https://rukminim1.flixcart.com/image/300/300/xif0q/smartwatch/o/i/g/44-android-ios-t500-jb-a18-jb-sons-yes-original-imagzqv2xrnfzz9h.jpeg" },
    { id: 8, name: "Steel", price:300, type: "titanium", image: "https://img-cdn.heureka.group/v1/d8ee801a-0e4c-483a-adfb-5867c62c2123.jpg" },
    { id: 9, name: "Steel", price:320, type: "titanium", image: "https://img-cdn.heureka.group/v1/d8ee801a-0e4c-483a-adfb-5867c62c2123.jpg" },
    { id: 10, name: "Steel", price:320, type: "titanium", image: "https://in.static.webuy.com/product_images/Electronics/Apple%20Watch/SAWAT10CSLTI46C_l.jpg" },
  ];

  const [selectedCase, setSelectedCase] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<"aluminum" | "titanium">("aluminum");

  const filteredCases = allCases.filter((watchCase) => watchCase.type === selectedType);

  const scrollContainer = (direction: "left" | "right") => {
    const container = document.getElementById("case-scroll-container");
    if (container) {
      container.scrollBy({ left: direction === "left" ? -200 : 200, behavior: "smooth" });
    }
  };

  const selectedCaseDetails = allCases.find((c) => c.id === selectedCase);

  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-white relative">
     
      <div className="relative w-full max-w-5xl">
     
        <button
          onClick={() => scrollContainer("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 text-black p-2  shadow-lg hover:bg-gray-400 z-10"
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
      {selectedCaseDetails
        ? selectedCaseDetails.type.charAt(0).toUpperCase() + selectedCaseDetails.type.slice(1)
        : "Unknown"}
      {" "}Price:{"$ "}
      {selectedCaseDetails
        ? selectedCaseDetails.price
        : "Unknown"}
    </p>
  </div>
) : (
  <p className="text-gray-500 mt-4">Please select a case to preview.</p>
)}


      <div className="flex justify-center space-x-4 mb-8">
        <button
          className={`py-2 px-6 rounded-md font-medium ${
            selectedType === "aluminum" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setSelectedType("aluminum")}
        >
          Aluminum
        </button>
        <button
          className={`py-2 px-6 rounded-md font-medium ${
            selectedType === "titanium" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
          }`}
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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-aspect-ratio"
      viewBox="0 0 16 16"
    >
      <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z" />
      <path d="M2 4.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H3v2.5a.5.5 0 0 1-1 0zm12 7a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H13V8.5a.5.5 0 0 1 1 0z" />
    </svg>
    <span>Size</span>
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


