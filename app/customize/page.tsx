'use client';

import { useState } from 'react';
import Header from '../components/Header';
import CasePage from '../components/CaseSelector';
import SizePage from '../components/SizeSelector';
import BandPage from '../components/BandSelector';

export default function page() {
  const [history, setHistory] = useState<string[]>(['home']); 
  const [selectedCollection, setSelectedCollection] = useState<string>('Apple Watch Series 10');

  const collectionImages: Record<string, { name: string, image: string }> = {
    'Apple Watch Series 10': {
      name: 'Apple Watch Series 10',
      image: 'https://www.apple.com/newsroom/images/live-action/wwdc-2023/standard/watchos-10/Apple-WWDC23-watchOS-10-Messages-230605_inline.jpg.large.jpg',
    },
    'Apple Watch Hermès Series 10': {
      name: 'Apple Watch Hermès Series 10',
      image: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/MTHV3_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1693090921944',
    },
    'Apple Watch SE': {
      name: 'Apple Watch SE',
      image: 'https://tse3.mm.bing.net/th?id=OIP.Jlv2TB2K3HIqB1N5PyFGQwAAAA&pid=Api&P=0&h=180',
    },
  };

  const navigateTo = (page: string) => {
    setHistory((prevHistory) => [...prevHistory, page]); 
  };

  const goBack = () => {
    setHistory((prevHistory) => prevHistory.slice(0, -1)); 
  };

  const currentPage = history[history.length - 1]; 
  
  return (
    <>
      <Header
        selectedCollection={selectedCollection}
        setSelectedCollection={setSelectedCollection}
        collectionImages={collectionImages}
      />
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
        {currentPage === 'home' && (
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-xl w-full max-w-3xl">
            <div className="mt-4 text-center">
              <img
                src={collectionImages[selectedCollection].image}
                alt={collectionImages[selectedCollection].name}
                className="mx-auto w-64 h-auto object-contain"
              />
              <h3 className="text-xl font-semibold">{collectionImages[selectedCollection].name}</h3>
            </div>
            <p className="text-lg text-gray-600 mb-4">46mm Jet Black Aluminum Case with Black Solo Loop</p>
            <p className="text-xl font-bold text-gray-800">From $429</p>
            <div className="mt-6 flex justify-center gap-6">
              <button
                className="bg-gray-800 text-white py-2 px-6 rounded-lg shadow-md flex items-center space-x-2 hover:bg-gray-700"
                onClick={() => navigateTo("size")}
              >
                <span>Size</span>
              </button>

              <button
                className="bg-gray-800 text-white py-2 px-6 rounded-lg shadow-md flex items-center space-x-2 hover:bg-gray-700"
                onClick={() => navigateTo("case")}
              >
                <span>Case</span>
              </button>

              <button
                className="bg-gray-800 text-white py-2 px-6 rounded-lg shadow-md flex items-center space-x-2 hover:bg-gray-700"
                onClick={() => navigateTo("band")}
              >
                <span>Band</span>
              </button>
            </div>
          </div>
        )}

      
        {currentPage === 'size' && (
          <SizePage
        
            navigateTo={navigateTo}
            goBack={goBack}
          />
        )}
        {currentPage === 'case' && (
          <CasePage
        
            navigateTo={navigateTo}
            goBack={goBack}
          />
        )}
        {currentPage === 'band' && (
          <BandPage
          
            navigateTo={navigateTo}
            goBack={goBack}
          />
        )}
      </div>
    </>
  );
}
