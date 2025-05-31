import React from 'react';
import Footer from '../../components/Footer';

const VitaminsAndMineralsPremixDcGranules = () => {
  const premixItems = [
    {
      img: '/assets/products/lastimage1.jpg',
      name: 'Healthy Pregna Premix DC GRANULES',
      code: 'VIT-MIN-P2',
    },
    {
      img: '/assets/products/lastimage2.jpg',
      name: 'Mini Vita Premix DC GRANULES',
      code: 'VIT-MIN-P3',
    },
    {
      img: '/assets/products/lastimage3.jpg',
      name: 'HAZI CA VID Premix DC GRANULES',
      code: 'VIT-MIN-P1',
    },
    {
      img: '/assets/products/lastimage4.jpg',
      name: 'ENERGETIC PREMIX DC GRANULES',
      code: 'VIT-MIN-P',
    },
    {
      img: '/assets/products/lastimage5.jpg',
      name: 'CaViD PremiX DC GRANULES',
      code: 'VIT-MIN',
    },
  ];

  return (
    <div className="font-roboto">
      {/* Hero Section */}
      <div className="relative w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[400px] mb-6">
        {/* Small Screen Hero Image */}
        <div
          className="sm:hidden absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgba(0,0,0,0.28), rgba(0,0,0,0.28)), url('/assets/products/herosmall.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        {/* Medium Screen Hero Image */}
        <div
          className="hidden sm:block lg:hidden absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgba(0,0,0,0.28), rgba(0,0,0,0.28)), url('/assets/products/heromedium.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        {/* Large Screen Hero Image */}
        <div
          className="hidden lg:block absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgba(0,0,0,0.28), rgba(0,0,0,0.28)), url('/assets/products/productshero.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold font-quicksand leading-snug">
            VITAMINS & MINERALS PREMIX DC GRANULES
          </h1>
          <p className="font-[Roboto] text-white mt-[30px] md:mt-[30px] lg:mt-[40px] text-sm sm:text-base md:text-xl lg:text-[24px] font-bold mt-2">
            Essential blends designed for better health & nutrition.
          </p>
        </div>
      </div>

      {/* Image */}
      <div className="max-w-6xl mx-auto mb-6 px-4 lg:mt-[50px]">
        <img
          src="/assets/products/VITAMINS & MINERALS PREMIX DC GRANULES.png" // Replace with your actual image
          alt="Vitamins and Minerals Premix Visual"
          className="w-full rounded-lg shadow-md object-cover max-h-64 sm:max-h-72 md:max-h-96"
        />
      </div>

      {/* Heading */}
      <div className="max-w-6xl mx-auto px-4 py-4 sm:py-6">
        <div className="bg-green-600 text-white text-center py-2 rounded-md mb-4">
          <h2 className="text-sm sm:text-base md:text-lg font-semibold font-quicksand">
            VITAMINS & MINERALS PREMIX DC GRANULES LIST
          </h2>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full border border-gray-300 text-xs sm:text-sm md:text-base">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-2 text-left">Image</th>
                <th className="border border-gray-300 p-2 text-left">Product Name</th>
                <th className="border border-gray-300 p-2 text-left">Product Code</th>
              </tr>
            </thead>
            <tbody>
              {premixItems.map((item, idx) => (
                <tr key={idx}>
                  <td className="border border-gray-300 p-2 w-28">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-20 h-16 object-contain rounded"
                    />
                  </td>
                  <td className="border border-gray-300 p-2 align-top">{item.name}</td>
                  <td className="border border-gray-300 p-2 align-top">{item.code}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default VitaminsAndMineralsPremixDcGranules;
