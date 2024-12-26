'use client';

import { useState } from 'react';
import Header from '../components/Header';
import CasePage from '../components/CaseSelector';
import SizePage from '../components/SizeSelector';
import BandPage from '../components/BandSelector';

export default function page() {
  const [history, setHistory] = useState<string[]>(['home']); 
  const [selectedWatch, setSelectedWatch] = useState({
    size: '',
    case: '',
    band: ''
  }); 

  const navigateTo = (page: string) => {
    setHistory((prevHistory) => [...prevHistory, page]); 
  };

  const goBack = () => {
    setHistory((prevHistory) => prevHistory.slice(0, -1)); 
  };

  const currentPage = history[history.length - 1]; 
  const updateSelectedWatch = (option: string, value: string) => {
    setSelectedWatch((prevWatch) => ({ ...prevWatch, [option]: value }));
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
        {currentPage === 'home' && (
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-xl w-full max-w-3xl">
            <div className="relative mb-6 w-full h-72">
              <img
                src="https://pngimg.com/uploads/watches/watches_PNG9899.png"
                alt="Apple Watch Customization"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-4">Apple Watch Series 10</h2>
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
            selectedSize={selectedWatch.size}
            updateSelectedWatch={updateSelectedWatch}
            navigateTo={navigateTo}
            goBack={goBack}
          />
        )}
        {currentPage === 'case' && (
          <CasePage
            selectedCase={selectedWatch.case}
            updateSelectedWatch={updateSelectedWatch}
            navigateTo={navigateTo}
            goBack={goBack}
          />
        )}
        {currentPage === 'band' && (
          <BandPage
            selectedBand={selectedWatch.band}
            updateSelectedWatch={updateSelectedWatch}
            navigateTo={navigateTo}
            goBack={goBack}
          />
        )}
      </div>
    </>
  );
}
