import React, { useState, useRef, useEffect } from "react";

interface BandSelectorProps {
  selectedCollection: string;
  navigateTo: (page: string) => void;
  goBack: () => void;
  bands: Array<{
    id: number;
    name: string;
    price: number;
    color: string;
    type: string;
    image: string;
    watchfront: string;
    watchside: string;
  }>;
  selectedBand: number | null;
  setSelectedBand: (id: number | null) => void;
}

export default function BandSelector({
  selectedCollection,
  selectedBand,
  setSelectedBand,
  bands,
  navigateTo,
  goBack,
}: BandSelectorProps) {
  const [selectedType, setSelectedType] = useState<string>("sport");
  const [view, setView] = useState<"front" | "side">("front");
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const filteredBands = bands.filter((band) => band.type === selectedType);
  const selectedBandDetails = bands.find((band) => band.id === selectedBand);

  // Update scroll buttons' state
  const updateScrollButtons = () => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      setCanScrollLeft(carousel.scrollLeft > 0);
      setCanScrollRight(
        carousel.scrollLeft < carousel.scrollWidth - carousel.offsetWidth
      );
    }
  };

  // Smooth scrolling
  const scrollToDirection = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const itemWidth = carousel.offsetWidth / 3;

      let targetScroll =
        direction === "left"
          ? carousel.scrollLeft - itemWidth
          : carousel.scrollLeft + itemWidth;

      carousel.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });

      setTimeout(updateScrollButtons, 300); // Adjust buttons after scroll
    }
  };

  const scrollToNearestWithSnap = () => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const itemWidth = carousel.offsetWidth / 3;
      const scrollLeft = carousel.scrollLeft;
      const nearestIndex = Math.round(scrollLeft / itemWidth);

      carousel.scrollTo({
        left: nearestIndex * itemWidth,
        behavior: "smooth",
      });

      const centeredBand = filteredBands[nearestIndex];
      if (centeredBand) setSelectedBand(centeredBand.id);
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.addEventListener("scroll", updateScrollButtons);
    }
    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener("scroll", updateScrollButtons);
      }
    };
  }, []);

  useEffect(() => {
    updateScrollButtons();
  }, [filteredBands]);

  return (
    <div className="flex flex-col items-center min-h-screen p-6 relative">
      <div className="relative flex items-center justify-center">
        <img
          src={
            selectedBandDetails
              ? view === "front"
                ? selectedBandDetails.watchfront
                : selectedBandDetails.watchside
              : view === "front"
              ? "https://pngimg.com/uploads/watches/watches_PNG9899.png"
              : "https://www.bhphotovideo.com/images/images2500x2500/apple_mu692ll_a_watch_series_4_gps_1434917.jpg"
          }
          alt={view === "front" ? "Front View" : "Side View"}
          className="w-40 max-w-sm rounded-lg mb-4 z-10"
        />
      </div>

      <div className="flex items-center justify-between w-full max-w-3xl mt-6">
        <button
          onClick={() => scrollToDirection("left")}
          className={`p-2 bg-gray-200 hover:bg-gray-300 rounded-full ${
            canScrollLeft ? "visible" : "invisible"
          }`}
        >
          &lt;
        </button>
        <div
          ref={carouselRef}
          className="flex overflow-x-scroll no-scrollbar transition-transform"
          onTouchEnd={scrollToNearestWithSnap}
          onMouseUp={scrollToNearestWithSnap}
        >
          {filteredBands.map((band, index) => (
            <div
              key={band.id}
              className={`border rounded-lg p-4 shadow-lg flex-shrink-0 w-1/3 transition-transform cursor-pointer ${
                selectedBand === band.id ? "border-blue-500 bg-blue-50" : "border-gray-300"
              }`}
              onClick={() => setSelectedBand(band.id)}
            >
              <img
                src={band.image}
                alt={band.name}
                className="w-20 h-20 object-cover mb-2 mx-auto"
              />
              <p className="text-center">{band.name}</p>
            </div>
          ))}
        </div>
        <button
          onClick={() => scrollToDirection("right")}
          className={`p-2 bg-gray-200 hover:bg-gray-300 rounded-full ${
            canScrollRight ? "visible" : "invisible"
          }`}
        >
          &gt;
        </button>
      </div>

      <button
        onClick={() => setView((prev) => (prev === "front" ? "side" : "front"))}
        className="text-blue-500 underline mt-4"
      >
        {view === "front" ? "Side View" : "Front View"}
      </button>

      <h2 className="text-xl font-bold mt-4">{selectedCollection}</h2>
      {selectedBandDetails && (
        <div className="mt-4 text-center">
          <h2 className="text-gray-500 text-sm">
            {selectedBandDetails.name} - {selectedBandDetails.color}
          </h2>
          <h2>Price: ${selectedBandDetails.price}</h2>
        </div>
      )}

      <div className="flex space-x-4 mt-6">
        {["sport", "braided", "nike"].map((type) => (
          <button
            key={type}
            className={`py-2 px-4 rounded-lg transition ${
              selectedType === type ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setSelectedType(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      <div className="flex space-x-6 mt-4">
        <button
          className="bg-gray-800 text-white py-2 px-6 rounded-lg shadow-md hover:bg-gray-700"
          onClick={() => navigateTo("size")}
        >
          Size
        </button>
        <button
          className="bg-gray-800 text-white py-2 px-6 rounded-lg shadow-md hover:bg-gray-700"
          onClick={() => navigateTo("case")}
        >
          Case
        </button>
        <button
          className="bg-red-800 text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-700"
          onClick={goBack}
        >
          Back
        </button>
      </div>
    </div>
  );
}
