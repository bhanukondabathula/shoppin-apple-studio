import { useState } from 'react';

// Define BandType for type safety
type BandType = 'sport' | 'braided' | 'nike';

// Define the props expected in the component
interface BandSelectorProps {
  selectedCollection: string;
  navigateTo: (page: string) => void;
  goBack: () => void;
  bands: Array<{
    id: number;
    name: string;
    price: number;
    color: string;
    type: BandType;
    image: string;
    watchfront: string;
    watchside: string;
  }>;
  selectedBand: number | null; // Accept the selected band from the parent
  setSelectedBand: (id: number | null) => void; // Function to update the selected band in the parent
}

export default function BandSelector({
  selectedCollection,
  selectedBand,
  setSelectedBand,
  bands,
  navigateTo,
  goBack,
}: BandSelectorProps) {
  const [selectedType, setSelectedType] = useState<BandType>('sport');
  const [scrollIndex, setScrollIndex] = useState(0);
  const [view, setView] = useState<'front' | 'side'>('front');

  // Filter bands based on selected type
  const filteredBands = bands.filter((band) => band.type === selectedType);
  const selectedBandDetails = bands.find((band) => band.id === selectedBand);

  // Handle scroll behavior for band selection
  const handleScroll = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setScrollIndex((prev) => Math.max(prev - 1, 0));
    } else {
      setScrollIndex((prev) => Math.min(prev + 1, filteredBands.length - 3));
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-6 relative">
      {/* Watch Display */}
      <div className="relative flex items-center justify-center">
        <img
          src={
            selectedBandDetails
              ? view === 'front'
                ? selectedBandDetails.watchfront // Display front view
                : selectedBandDetails.watchside // Display side view
              : view === 'front'
              ? 'https://pngimg.com/uploads/watches/watches_PNG9899.png' // Default front view if no band is selected
              : 'https://www.bhphotovideo.com/images/images2500x2500/apple_mu692ll_a_watch_series_4_gps_1434917.jpg' // Default side view if no band is selected
          }
          alt={view === 'front' ? 'Front View' : 'Side View'}
          className="w-40 max-w-sm rounded-lg mb-4 z-10"
        />
      </div>

      {/* Band Selector */}
      <div className="flex items-center justify-between w-full max-w-3xl mt-6">
        <button onClick={() => handleScroll('left')} className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full">
          &lt;
        </button>
        <div className="flex overflow-hidden w-full max-w-lg">
          <div className="flex transition-transform" style={{ transform: `translateX(-${scrollIndex * 120}px)` }}>
            {filteredBands.map((band) => (
              <label
                key={band.id}
                className={`border rounded-lg p-4 shadow-lg cursor-pointer flex flex-col items-center ${
                  selectedBand === band.id ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                }`}
              >
                <img src={band.image} alt={band.name} className="w-20 h-20 object-cover mb-2" />
                <input
                  type="radio"
                  name="band"
                  value={band.id}
                  checked={selectedBand === band.id}
                  onChange={() => setSelectedBand(band.id)}
                  className="hidden"
                />
              </label>
            ))}
          </div>
        </div>
        <button onClick={() => handleScroll('right')} className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full">
          &gt;
        </button>
      </div>

      {/* View Toggle */}
      <button
        onClick={() => setView((prevView) => (prevView === 'front' ? 'side' : 'front'))}
        className="text-blue-500 underline mt-4"
      >
        {view === 'front' ? 'Side View' : 'Front View'}
      </button>

      {/* Selected Band Details */}
      <h2 className="text-xl font-bold">{selectedCollection}</h2>
      {selectedBandDetails ? (
        <div className="mt-4 text-center">
          <h2 className="text-gray-500 text-sm">
            Name: {`${selectedBandDetails.type.charAt(0).toUpperCase() + selectedBandDetails.type.slice(1)} ${selectedBandDetails.color} ${selectedBandDetails.name}`}
          </h2>
          <h2>Price: ${selectedBandDetails.price}</h2>
        </div>
      ) : (
        <p className="text-gray-500 mt-4">Please select a band to preview.</p>
      )}

      {/* Band Type Selector */}
      <div className="flex space-x-4 mt-6">
        {['sport', 'braided', 'nike'].map((type) => (
          <button
            key={type}
            className={`py-2 px-4 rounded-lg transition ${
              selectedType === type ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
            }`}
            onClick={() => setSelectedType(type as BandType)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex space-x-6 mt-4">
        <button
          className="bg-gray-800 text-white py-2 px-6 rounded-lg shadow-md hover:bg-gray-700"
          onClick={() => navigateTo('size')}
        >
          Size
        </button>
        <button
          className="bg-gray-800 text-white py-2 px-6 rounded-lg shadow-md hover:bg-gray-700"
          onClick={() => navigateTo('case')}
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
