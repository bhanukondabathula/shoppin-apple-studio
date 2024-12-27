import { useState, useEffect } from 'react';

// Defining the types for the props of the Header component
interface HeaderProps {
  selectedCollection: string;
  setSelectedCollection: (collection: string) => void;
  collectionImages: Record<string, { name: string; image: string }>;
}

const Header = ({ selectedCollection, setSelectedCollection, collectionImages }: HeaderProps) => {
  const [isCollectionDropdownOpen, setIsCollectionDropdownOpen] = useState(false);
  const [isShareDropdownOpen, setIsShareDropdownOpen] = useState(false);

  const collections = [
    'Apple Watch Series 10',
    'Apple Watch Hermès Series 10',
    'Apple Watch SE',
  ];

  const [shareUrl, setShareUrl] = useState('');

  useEffect(() => {
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set('collection', selectedCollection);
    setShareUrl(currentUrl.toString());
  }, [selectedCollection]);

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(shareUrl);
    let shareLink = '';

    switch (platform) {
      case 'whatsapp':
        shareLink = `https://wa.me/?text=${url}`;
        break;
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?url=${url}`;
        break;
      case 'linkedin':
        shareLink = `https://www.linkedin.com/shareArticle?mini=true&url=${url}`;
        break;
      default:
        return;
    }

    window.open(shareLink, '_blank');
  };

  return (
    <header className="bg-white p-4 w-full">
      <div className="flex items-center justify-between">
        <div className="absolute left-0 ml-4">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.0G_U0hC3hggy3TV_NfkdmAAAAA&pid=Api&P=0&h=180"
            alt="Apple Watch"
            className="h-8"
          />
        </div>

        <div className="flex justify-center w-full">
          <div className="relative">
            <button
              aria-expanded={isCollectionDropdownOpen}
              className="flex items-center space-x-2 p-2 bg-gray-200 rounded-md"
              onClick={() => setIsCollectionDropdownOpen(!isCollectionDropdownOpen)}
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

            {isCollectionDropdownOpen && (
              <div
                id="dropdown-menu"
                className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10 transition-all ease-in-out duration-200"
              >
                {collections.map((collection) => (
                  <button
                    key={collection}
                    onClick={() => {
                      setSelectedCollection(collection);
                      setIsCollectionDropdownOpen(false);
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

        <div className="absolute right-0 mr-4 flex space-x-4">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-md">Save</button>

          <button
            onClick={() => setIsShareDropdownOpen(!isShareDropdownOpen)}
            className="bg-green-500 text-white py-2 px-6 rounded-md"
          >
            Share
          </button>

          {isShareDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10 transition-all ease-in-out duration-200">
              <button
                onClick={() => handleShare('whatsapp')}
                className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-200"
              >
                Share on WhatsApp
              </button>
              <button
                onClick={() => handleShare('facebook')}
                className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-200"
              >
                Share on Facebook
              </button>
              <button
                onClick={() => handleShare('twitter')}
                className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-200"
              >
                Share on Twitter
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-200"
              >
                Share on LinkedIn
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
