import { useState } from "react";

export default function CaseSelector({
  navigateTo,
  goBack,
}: {
  navigateTo: (page: string) => void;
  goBack: () => void;
}) {
  const allCases = [
    { id: 1, name: "Aluminum", price:420, type: "aluminum", image: "https://tse4.mm.bing.net/th?id=OIP.XOZSH4fnrHdqHl8x-Qk4cgHaMw&pid=Api&P=0&h=180" },
    { id: 2, name: "Aluminum", price:420, type: "aluminum", image: "https://alarm-stores.com/wp-content/uploads/2024/09/Jet-Black-2.png" },
    { id: 3, name: "Aluminum", price:420, type: "aluminum", image: "https://pbs.twimg.com/media/GXDOXgtXEAAn-Xc?format=jpg&name=4096x4096" },
    { id: 4, name: "Aluminum", price:420, type: "aluminum", image: "https://pbs.twimg.com/media/GXDOXgtXEAAn-Xc?format=jpg&name=4096x4096" },
    { id: 5, name: "Aluminum", price:420, type: "aluminum", image: "https://tse2.mm.bing.net/th?id=OIP.5pu_6g0XfS-ejXxFwPWcMAHaI7&pid=Api&P=0&h=180" },
    { id: 6, name: "Titanium", price:420, type: "titanium", image: "https://llounge.in/wp-content/uploads/2022/09/MQEJ3ref_VW_PFwatch-49-titanium-ultra_VW_PF_WF_COwatch-face-49-trail-ultra_VW_PF_WF_CO_GEO_IN.jfif_.jpg" },
    { id: 7, name: "Rose Gold", price:420, type: "aluminum", image: "https://alarm-stores.com/wp-content/uploads/2024/09/Rose-Gold-2-300x300.png" },
    { id: 8, name: "Steel", price:500, type: "titanium", image: "https://i5.walmartimages.com/asr/85b07a4b-337e-4148-8063-92cb57f5098b.ac480b7acade92879dab0cc021bbab16.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF" },
    { id: 9, name: "Steel", price:500, type: "titanium", image: "https://tse3.mm.bing.net/th?id=OIP.6ElGU39YOtpDwJMj-IDR8gAAAA&pid=Api&P=0&h=180" },
    { id: 10, name: "Steel", price:520, type: "titanium", image: "https://tse3.mm.bing.net/th?id=OIP.RRbqdXc2dX8S6IjbSRlw9QHaHa&pid=Api&P=0&h=180" },
    { id: 11, name: "Steel", price:520, type: "titanium", image: "https://tse3.mm.bing.net/th?id=OIP.RRbqdXc2dX8S6IjbSRlw9QHaHa&pid=Api&P=0&h=180" },
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
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 text-black p-2 rounded-full shadow-lg hover:bg-gray-400 z-10"
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
                selectedCase === watchCase.id ? "border-4 border-blue-500 rounded-full" : "hover:shadow-lg"
              }`}
            >
              <img
                src={watchCase.image}
                alt={`${watchCase.name} Watch Case`}
                className="w-40 h-40 object-cover rounded-full"
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
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 text-black p-2 rounded-full shadow-lg hover:bg-gray-400 z-10"
          aria-label="Scroll right"
        >
          &gt;
        </button>
      </div>

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


