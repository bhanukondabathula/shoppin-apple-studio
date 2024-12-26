import { useState } from 'react';

type BandType = 'sport' | 'braided' | 'nike';

export default function BandSelector({
  navigateTo,
  goBack,
}: {
  navigateTo: (page: string) => void;
  goBack: () => void;
}) {
  const bands = [
    { id: 1, name: 'Sport Loop',price:400, color:'pink', type: 'sport', image: 'https://m.media-amazon.com/images/I/51nUD8+15RL._AC_SX342_SY445_.jpg' },
    { id: 2, name: 'Sport Loop',price:400,  color:'blue', type: 'sport', image: 'https://forums.macrumors.com/attachments/3f2bc5f8-0018-4bf8-838a-89d42900c4d5-jpeg.922594/' },
    { id: 3, name: 'Sport Loop',price:420,  color:'black', type: 'sport', image: 'https://m.media-amazon.com/images/I/313IPkDTfdL.__AC_SY445_SX342_QL70_ML2_.jpg' },
    { id: 4, name: 'Sport Loop',price:400,  color:'clay', type: 'sport', image: 'https://m.media-amazon.com/images/I/31Hh+B1AhVL._AC_SX342_SY445_.jpg' },
    { id: 5, name: 'Sport Loop',price:450,  color:'Red', type: 'sport', image: 'https://m.media-amazon.com/images/I/51nUD8+15RL._AC_SX342_SY445_.jpg' },
    { id: 6, name: 'Sport Loop',price:400,  color:'star light', type: 'sport', image: 'https://m.media-amazon.com/images/I/31yBV1mh+oL._AC_SL1000_.jpg' },
    { id: 7, name: 'Braided Solo Loop',price:500,  color:'black', type: 'braided', image: 'https://tse1.mm.bing.net/th?id=OIP.aPbRb-VXFxZexy7u8AficAHaHa&pid=Api&P=0&h=180' },
    { id: 8, name: 'Braided Solo Loop',price:400,  color:'blue', type: 'braided', image: 'https://tse4.mm.bing.net/th?id=OIP.BiYy8J6YnT_dcuOAqMdZIgHaHa&pid=Api&P=0&h=180' },
    { id: 9, name: 'Braided Solo Loop',price:400,  color:'rainbow', type: 'braided', image: 'https://cdn.shopify.com/s/files/1/0498/6001/8343/products/braidedsoloband_prideedition.jpg?v=1632563421' },
    { id: 10, name: 'Nike Sport Band',price:480,  color:'black/volt', type: 'nike', image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6216/6216197_rd.jpg' },
    { id: 11, name: 'Nike Sport Band',price:300,  color:'black', type: 'nike', image: 'http://img3.tmon.kr/cdn4/deals/2022/07/22/12407025702/12407025702_front_d1b7c6c578.jpg' },
    { id: 12, name: 'Nike Sport Band',price:400,  color:'gray', type: 'nike', image: 'https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202309/14/00194610808837____1__640x640.jpg' },
    { id: 13, name: 'Nike Sport Band',price:550,  color:'crimson', type: 'nike', image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6334/6334593_rd.jpg' },
    { id: 14, name: 'Nike Sport Band',price:300,  color:'hasta/light', type: 'nike', image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6334/6334538cv11d.jpg' },
  ];


  const [selectedBand, setSelectedBand] = useState<number>(1);
  const [selectedType, setSelectedType] = useState<BandType>('sport');
  const [scrollIndex, setScrollIndex] = useState(0);
  const [view, setView] = useState<'front' | 'side'>('front');

  const filteredBands = bands.filter((band) => band.type === selectedType);
  const selectedBandDetails = bands.find((c) => c.id === selectedBand);

  const handleScroll = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setScrollIndex((prev) => Math.max(prev - 1, 0));
    } else {
      setScrollIndex((prev) => Math.min(prev + 1, filteredBands.length - 3));
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-6 relative">
      {/* Main Watch Image */}
      <div className="relative flex items-center justify-center">
        <img
          src={
            view === 'front'
              ? 'https://pngimg.com/uploads/watches/watches_PNG9899.png'
              : 'https://www.bhphotovideo.com/images/images2500x2500/apple_mu692ll_a_watch_series_4_gps_1434917.jpg'
          }
          alt={view === 'front' ? 'Front View' : 'Side View'}
          className="w-40 max-w-sm rounded-lg mb-4 z-10"
        />
      </div>

      {/* Band Selection Section */}
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

      {/* View Toggle Button */}
      <button
        onClick={() => setView((prevView) => (prevView === 'front' ? 'side' : 'front'))}
        className="text-blue-500 underline mt-4"
      >
        {view === 'front' ? 'Side View' : 'Front View'}
      </button>

      {selectedBandDetails ? (
        <div className="mt-4 text-center">
          <h2 className="text-gray-500 text-sm">
            Name: {`${selectedBandDetails.type.charAt(0).toUpperCase() + selectedBandDetails.type.slice(1)} ${selectedBandDetails.color} ${selectedBandDetails.name}`}
          </h2>
          <h2>
            Price: ${selectedBandDetails.price}
          </h2>
        </div>
      ) : (
        <p className="text-gray-500 mt-4">Please select a case to preview.</p>
      )}

      {/* Band Type Buttons */}
      <div className="flex space-x-4 mt-6">
        {['sport', 'braided', 'nike'].map((type) => (
          <button
            key={type}
            className={`py-2 px-4 rounded-lg transition ${selectedType === type ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => setSelectedType(type as BandType)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-6 mt-4">
        <button
          className="bg-gray-800 text-white py-2 px-6 rounded-lg shadow-md flex items-center space-x-2 hover:bg-gray-700"
          onClick={() => navigateTo('size')}
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
          onClick={() => navigateTo('case')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-smartwatch" viewBox="0 0 16 16">
            <path d="M9 5a.5.5 0 0 0-1 0v3H6a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 .5-.5z" />
            <path d="M4 1.667v.383A2.5 2.5 0 0 0 2 4.5v7a2.5 2.5 0 0 0 2 2.45v.383C4 15.253 4.746 16 5.667 16h4.666c.92 0 1.667-.746 1.667-1.667v-.383a2.5 2.5 0 0 0 2-2.45V8h.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H14v-.5a2.5 2.5 0 0 0-2-2.45v-.383C12 .747 11.254 0 10.333 0H5.667C4.747 0 4 .746 4 1.667M4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3" />
          </svg>
          <span>Case</span>
        </button>

        <button
          className="bg-red-800 text-white py-2 px-6 rounded-lg shadow-md flex items-center space-x-2 hover:bg-red-700"
          onClick={goBack}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
            <path d="M11.5 1a.5.5 0 0 1 .5.5V7h3a.5.5 0 0 1 .354.854l-5 5a.5.5 0 0 1-.708 0l-5-5a.5.5 0 0 1 .354-.854h3V1.5a.5.5 0 0 1 .5-.5h4z" />
          </svg>
          <span>Back</span>
        </button>
      </div>
    </div>
  );
}
