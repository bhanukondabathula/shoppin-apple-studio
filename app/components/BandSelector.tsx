import { useState } from 'react';

type BandType = 'sport' | 'braided' | 'nike';

export default function BandSelector({
  selectedCollection,
  navigateTo,
  goBack,
}: {
  navigateTo: (page: string) => void;
  goBack: () => void;
  selectedCollection: string;
}) {
  const bands = [
    { id: 1, name: 'Sport Loop',price:200, color:'pink', type: 'sport', image: 'https://tse1.mm.bing.net/th?id=OIP.wBiyg42_eb0Fz4IpiBp1tgAAAA&pid=Api&P=0&h=180', watchfront:"https://brain-images-ssl.cdn.dixons.com/9/3/10189639/l_10189639_001.jpg", watchside:"https://smartawatches.com/wp-content/uploads/2019/12/21-Light-Pink-Bright-Silicone-Apple-Watch-Band.jpg" },
    { id: 2, name: 'Sport Loop',price:200,  color:'ocean blue', type: 'sport', image: 'https://www.bhphotovideo.com/images/images2500x2500/apple_mnj22am_a_apple_watch_38_ocean_1280876.jpg', watchfront:"https://cdn.webshopapp.com/shops/199505/files/97963874/image.jpg", watchside:"https://i5.walmartimages.com/asr/bbcf4593-4dc1-45a8-9b41-23c7b1974cd3_1.550f648393218bfa67f1f3e1e1cde391.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff" },
    { id: 3, name: 'Sport Loop',price:220,  color:'black', type: 'sport', image: 'https://m.media-amazon.com/images/I/313IPkDTfdL.__AC_SY445_SX342_QL70_ML2_.jpg', watchfront:"https://images.mobilefun.co.uk/graphics/productgalleries/86774/b.jpg",watchside:"https://allstore.com.ve/wp-content/uploads/2020/09/1080-324871.png" },
    { id: 4, name: 'Sport Loop',price:200,  color:'clay', type: 'sport', image: 'https://m.media-amazon.com/images/I/31Hh+B1AhVL._AC_SX342_SY445_.jpg',watchfront:"https://s13emagst.akamaized.net/products/60442/60441082/images/res_de9a163ac3994a2bfa12588dfd8a9bdd.jpg", watchside:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/41-stainless-gold-sport-band-clay-s9?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1693325459248" },
    { id: 6, name: 'Sport Loop',price:200,  color:'star light', type: 'sport', image: 'https://m.media-amazon.com/images/I/31yBV1mh+oL._AC_SL1000_.jpg',watchfront:"https://tse2.mm.bing.net/th?id=OIP.xUDH_oKlUnERHXMWa3GqDAAAAA&pid=Api&P=0&h=180", watchside:"https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/refurb-45-nc-alum-starlight-sport-band-starlight-s9?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1709325328071" },
    { id: 7, name: 'Braided Solo Loop',price:300,  color:'black', type: 'braided', image: 'https://tse1.mm.bing.net/th?id=OIP.aPbRb-VXFxZexy7u8AficAHaHa&pid=Api&P=0&h=180',watchfront:"https://www.devicemag.com/wp-content/uploads/2023/04/Apple_Watchs_Braided_Solo_Loop_Band_1682076356-jpg.webp",watchside:"https://www.devicemag.com/wp-content/uploads/2023/04/Apple_Watchs_Braided_Solo_Loop_Band_1682076356-jpg.webp" },
    { id: 8, name: 'Braided Solo Loop',price:200,  color:'blue', type: 'braided', image: 'https://tse4.mm.bing.net/th?id=OIP.BiYy8J6YnT_dcuOAqMdZIgHaHa&pid=Api&P=0&h=180',watchfront:"https://di2ponv0v5otw.cloudfront.net/posts/2021/05/27/60b006b8e0b7c720042dd8c5/m_60b006b8ae766f6c4ca07d4e.jpg",watchside:"https://di2ponv0v5otw.cloudfront.net/posts/2021/05/27/60b006b8e0b7c720042dd8c5/m_60b006b8ae766f6c4ca07d4e.jpg" },
    { id: 9, name: 'Braided Solo Loop',price:200,  color:'rainbow', type: 'braided', image: 'https://cdn.shopify.com/s/files/1/0498/6001/8343/products/braidedsoloband_prideedition.jpg?v=1632563421',watchfront:"https://tse2.mm.bing.net/th?id=OIP.Bb_bZe9bSt58pjK_T48FegHaHa&pid=Api&P=0&h=180",watchside:"https://tse1.mm.bing.net/th?id=OIP.r9vbQvHMClb_8jTG-VLFTQHaHa&pid=Api&P=0&h=180"},
    { id: 10, name: 'Nike Sport Band',price:180,  color:'black/volt', type: 'nike', image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6216/6216197_rd.jpg',watchfront:"https://www.virginmegastore.ae/medias/sys_master/root/h5d/he9/9038925430814/Apple-42mm-Black-Volt-Nike-218696-Gal-1-Detail.jpg",watchside:"https://www.virginmegastore.ae/medias/sys_master/root/h5d/he9/9038925430814/Apple-42mm-Black-Volt-Nike-218696-Gal-1-Detail.jpg" },
    { id: 11, name: 'Nike Sport Band',price:200,  color:'black', type: 'nike', image: 'http://img3.tmon.kr/cdn4/deals/2022/07/22/12407025702/12407025702_front_d1b7c6c578.jpg',watchfront:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6495/6495706ld.jpg",watchside:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6298/6298529_sd.jpg" },
    { id: 12, name: 'Nike Sport Band',price:200,  color:'gray', type: 'nike', image: 'https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202309/14/00194610808837____1__640x640.jpg',watchfront:"https://external-preview.redd.it/CVzL6buJiD1sm5o0zdlvIbPc-epXW4E9jcVnHHiOpF4.jpg?auto=webp&s=47f80c9deb71dee936ee3ef265db590b16631179",watchside:"https://360view.hum3d.com/zoom/Apple/Apple_Watch_Nike_Black_Gray_1000_0002.jpg" },
    { id: 13, name: 'Nike Sport Band',price:250,  color:'crimson', type: 'nike', image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6334/6334593_rd.jpg' ,watchfront:"https://tse3.mm.bing.net/th?id=OIP.DJOBD2YIu_fzXJxS_54RQgHaHa&pid=Api&P=0&h=180",watchside:"https://media.education.studio7thailand.com/58653/Apple-Acc-Watch-Bright-Crimson-Gym-Red-Nike-Sport-Band-2-square_medium.jpg"},
    { id: 14, name: 'Nike Sport Band',price:200,  color:'hasta/light', type: 'nike', image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6334/6334538cv11d.jpg' ,watchfront:"https://tse2.mm.bing.net/th?id=OIP.ZjbH4TZpfY3qVlNHfa-dCgAAAA&pid=Api&P=0&h=180",watchside:"https://img-prd-pim.poorvika.com/product/Apple-Watch-Nike-Sport-Band-41mm-SM-Cargo-Khaki-Front-Left-View.png"},
  ];


  const [selectedBand, setSelectedBand] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<BandType>('sport');
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
      {/* Watch Display */}
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
