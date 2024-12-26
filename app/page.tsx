import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Card container */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full text-left">
        <p className="text-l font-semibold text-gray-700 mb-4">Apple Watch Studio</p>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Choose a case.</h1>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Pick a band.</h1>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Create your own style.</h1>
        <Link href="/customize">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
            Get Started
          </button>
        </Link>
        <img 
          src="https://static.alaneesqatar.qa/2024/09/Untitled-design-2024-09-10T143425-592_hx4rnrrs_.png?tr=w-395,q-100" 
          className="w-32 mx-auto mt-4" 
          alt="Apple Watch"
        />
      </div>
    </div>
  );
}
