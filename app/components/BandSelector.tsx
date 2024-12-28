import { useState } from 'react';


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
  const [selectedType, setSelectedType] = useState<string>('sport');
  const [scrollIndex, setScrollIndex] = useState(0);
  const [view, setView] = useState<'front' | 'side'>('front');

 
  const filteredBands = bands.filter((band) => band.type === selectedType);
  const selectedBandDetails = bands.find((band) => band.id === selectedBand);

  const handleScroll = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setScrollIndex((prev) => Math.max(prev - 1, 0));
    } else {
      setScrollIndex((prev) => Math.min(prev + 1, filteredBands.length - 3));
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-6 relative">
   
      <div className="relative flex items-center justify-center">
        <img
          src={
            selectedBandDetails
              ? view === 'front'
                ? selectedBandDetails.watchfront 
                : selectedBandDetails.watchside 
              : view === 'front'
              ? 'https://pngimg.com/uploads/watches/watches_PNG9899.png' 
              : 'https://www.bhphotovideo.com/images/images2500x2500/apple_mu692ll_a_watch_series_4_gps_1434917.jpg' 
          }
          alt={view === 'front' ? 'Front View' : 'Side View'}
          className="w-40 max-w-sm rounded-lg mb-4 z-10"
        />
      </div>

  
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

   
      <button
        onClick={() => setView((prevView) => (prevView === 'front' ? 'side' : 'front'))}
        className="text-blue-500 underline mt-4"
      >
        {view === 'front' ? 'Side View' : 'Front View'}
      </button>

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

      <div className="flex space-x-4 mt-6">
        {['sport', 'braided', 'nike'].map((type) => (
          <button
            key={type}
            className={`py-2 px-4 rounded-lg transition ${
              selectedType === type ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
            }`}
            onClick={() => setSelectedType(type as string)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

 
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
