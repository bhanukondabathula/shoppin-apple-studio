'use client';

import { useState } from 'react';
import Header from '../components/Header';
import CasePage from '../components/CaseSelector';
import SizePage from '../components/SizeSelector';
import BandPage from '../components/BandSelector';

export default function page() {
  const [history, setHistory] = useState<string[]>(['home']); // Keep track of the visited pages
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedSizePrice, setSelectedSizePrice] = useState<number | null>(null);
  const [selectedCase, setSelectedCase] = useState<string | null>(null);
  const [selectedCasePrice, setSelectedCasePrice] = useState<number | null>(null);
  const [selectedBand, setSelectedBand] = useState<string | null>(null);
  const [selectedBandPrice, setSelectedBandPrice] = useState<number | null>(null);

  const navigateTo = (page: string) => {
    setHistory((prevHistory) => [...prevHistory, page]); // Add the current page to the history stack
  };

  const goBack = () => {
    setHistory((prevHistory) => prevHistory.slice(0, -1)); // Go back to the previous page
  };

  const currentPage = history[history.length - 1]; // The last page in the history stack

  const calculateTotalPrice = () => {
    // Calculate total price by summing up the selected prices
    const total =
      (selectedSizePrice || 0) +
      (selectedCasePrice || 0) +
      (selectedBandPrice || 0);
    return total;
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
                className="w-full h-full object-contain rounded-lg shadow-lg"
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
                onClick={() => navigateTo("case")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-smartwatch" viewBox="0 0 16 16">
                  <path d="M9 5a.5.5 0 0 0-1 0v3H6a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 .5-.5z"/>
                  <path d="M4 1.667v.383A2.5 2.5 0 0 0 2 4.5v7a2.5 2.5 0 0 0 2 2.45v.383C4 15.253 4.746 16 5.667 16h4.666c.92 0 1.667-.746 1.667-1.667v-.383a2.5 2.5 0 0 0 2-2.45V8h.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H14v-.5a2.5 2.5 0 0 0-2-2.45v-.383C12 .747 11.254 0 10.333 0H5.667C4.747 0 4 .746 4 1.667M4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3"/>
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
            </div>

          </div>
        )}

        {/* Conditionally Render Pages */}
        {currentPage === 'size' && (
          <SizePage
            navigateTo={navigateTo}
            goBack={goBack}
            setSelectedSize={setSelectedSize}
            setSelectedSizePrice={setSelectedSizePrice}
          />
        )}
        {currentPage === 'case' && (
          <CasePage
            navigateTo={navigateTo}
            goBack={goBack}
            setSelectedCase={setSelectedCase}
            setSelectedCasePrice={setSelectedCasePrice}
          />
        )}
        {currentPage === 'band' && (
          <BandPage
            navigateTo={navigateTo}
            goBack={goBack}
            setSelectedBand={setSelectedBand}
            setSelectedBandPrice={setSelectedBandPrice}
          />
        )}

      </div>
    </>
  );
}
