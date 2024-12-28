"use client";

import { useState } from 'react';
import Header from '../components/Header';
import CasePage from '../components/CaseSelector';
import SizePage from '../components/SizeSelector';
import BandPage from '../components/BandSelector';


export default function Page() {
  const [history, setHistory] = useState<string[]>(['home']);
  const [selectedCollection, setSelectedCollection] = useState<string>('Apple Watch Series 10');
  const [selectedCase, setSelectedCase] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<"aluminum" | "titanium">("aluminum");
  const [selectedBand, setSelectedBand] = useState<number | null>(null);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);


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

  const allCases: Record<string, { id: number, name: string, price: number, type: string, image: string }> = {
    1: { id: 1, name: "Aluminum", price: 220, type: "aluminum", image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shopsy-smartwatch/v/p/c/1-44-android-ios-new-t5000-zdea-yes-original-imagw4fuxpfpzy6v.jpeg?q=90&crop=false" },
    2: { id: 2, name: "Aluminum", price: 220, type: "aluminum", image: "https://alarm-stores.com/wp-content/uploads/2024/09/Jet-Black-2.png" },
    3: { id: 3, name: "Aluminum", price: 220, type: "aluminum", image: "https://rukminim1.flixcart.com/image/300/300/xif0q/smartwatch/e/j/r/44-android-ios-t500-jb-a1-jb-sons-yes-original-imagzhbmygeg52pv.jpeg" },
    4: { id: 4, name: "Aluminum", price: 220, type: "aluminum", image: "https://rukminim1.flixcart.com/image/300/300/xif0q/smartwatch/w/2/u/44-android-ios-t500-jb-a14-jb-sons-yes-original-imagzhc8scnrbbeh.jpeg" },
    5: { id: 5, name: "Aluminum", price: 220, type: "aluminum", image: "https://rukminim1.flixcart.com/image/300/300/xif0q/smartwatch/r/w/2/44-android-ios-t500-jb-a36-jb-sons-yes-original-imagzhdsdfbkz85d.jpeg" },
    6: { id: 6, name: "Titanium", price: 220, type: "titanium", image: "https://img-cdn.heureka.group/v1/d8ee801a-0e4c-483a-adfb-5867c62c2123.jpg" },
    7: { id: 7, name: "Rose Gold", price: 320, type: "aluminum", image: "https://rukminim1.flixcart.com/image/300/300/xif0q/smartwatch/o/i/g/44-android-ios-t500-jb-a18-jb-sons-yes-original-imagzqv2xrnfzz9h.jpeg" },
    8: { id: 8, name: "Steel", price: 300, type: "titanium", image: "https://img-cdn.heureka.group/v1/d8ee801a-0e4c-483a-adfb-5867c62c2123.jpg" },
    9: { id: 9, name: "Steel", price: 320, type: "titanium", image: "https://img-cdn.heureka.group/v1/d8ee801a-0e4c-483a-adfb-5867c62c2123.jpg" },
    10: { id: 10, name: "Steel", price: 320, type: "titanium", image: "https://in.static.webuy.com/product_images/Electronics/Apple%20Watch/SAWAT10CSLTI46C_l.jpg" },
  };
  
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

  const sizes = [
    {
      id: 1,
      size: '42mm',
      price: 280,
      image: 'https://www.apple.com/newsroom/images/2024/09/introducing-apple-watch-series-10/article/Apple-Watch-Series-10-watch-face-Flux-240909_inline.jpg.large.jpg',
    },
    {
      id: 2,
      size: '46mm',
      price: 360,
      image: 'https://rukminim2.flixcart.com/image/750/900/xif0q/smartwatch/j/m/6/-original-imah4jndaff8bgz7.jpeg?q=20&crop=false',
    },
  ];
    const calculatePrice = () => {
      let total = 0;

      if (selectedCase !== null) {
        total += allCases[selectedCase].price;
      }
      if (selectedSize !== null) {
        total += sizes[selectedSize - 1].price; 
      }
      if (selectedBand !== null) {
        total += bands[selectedBand - 1].price; 
      }

      return total;
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

            <p className="text-lg text-gray-600 mb-4">
              {selectedSize !== null && `${sizes[selectedSize - 1]?.size} `}
              
              {selectedCase !== null
                ? `${allCases[selectedCase].name} ${allCases[selectedCase].type} case `
                : "Please select a case"}
              
              {selectedBand !== null && `with ${bands[selectedBand - 1].name}`}
            </p>


            <p className="text-xl font-bold text-gray-800">
              Total Price: ${calculatePrice()}
            </p>

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
            selectedCollection={selectedCollection}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            sizes={sizes}
            navigateTo={navigateTo}
            goBack={goBack}
          />
        )}

        {currentPage === 'case' && (
          <CasePage
            selectedCollection={selectedCollection}
            selectedCase={selectedCase}
            setSelectedCase={setSelectedCase}
            allCases={allCases}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            navigateTo={navigateTo}
            goBack={goBack}
          />
        )}

        {currentPage === 'band' && (
          <BandPage
          selectedCollection={selectedCollection}
          selectedBand={selectedBand}
          setSelectedBand={setSelectedBand} 
          bands={bands}
          navigateTo={navigateTo}
          goBack={goBack}
        />
        )}
      </div>
    </>
  );
}
