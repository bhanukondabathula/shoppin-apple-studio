import { useState, useEffect } from 'react';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState('Apple Watch Series 10');
  
  const collections = [
    'Apple Watch Series 10',
    'Apple Watch Hermès Series 10',
    'Apple Watch SE',
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdownMenu = document.getElementById('dropdown-menu');
      if (dropdownMenu && !dropdownMenu.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white p-4 shadow-md w-full">
      <div className="flex items-center justify-between">
        {/* Left section (Logo) */}
        <div className="absolute left-0 ml-4">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.0G_U0hC3hggy3TV_NfkdmAAAAA&pid=Api&P=0&h=180"
            alt="Apple Watch"
            className="h-8"
          />
        </div>

        {/* Center section (Collection Dropdown) */}
        <div className="flex justify-center w-full">
          <div className="relative">
            <button
              aria-expanded={isDropdownOpen}
              className="flex items-center space-x-2 p-2 bg-gray-200 rounded-md"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="text-sm font-semibold">{selectedCollection}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div
                id="dropdown-menu"
                className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10 transition-all ease-in-out duration-200"
              >
                {collections.map((collection) => (
                  <button
                    key={collection}
                    onClick={() => {
                      setSelectedCollection(collection);
                      setIsDropdownOpen(false);
                    }}
                    className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-200"
                  >
                    {collection}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right section (Save Button) */}
        <div className="absolute right-0 mr-4">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-md">Save</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
