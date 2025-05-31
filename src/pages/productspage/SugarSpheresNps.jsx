import React from 'react';
import Footer from '../../components/Footer';

const SugarSpheresNps = () => {
  const initialTable = [
    ['MCC Spheres (USP/EP)', '63–1400µm various size range available'],
    ['Mannitol Spheres (USP/EP)', '100% Mannitol with water soluble starter core'],
    ['Tartaric Acid Pellets (USP/EP)', '100% Tartaric Acid'],
  ];

  const sections = [
    {
      title: 'SINGLE SIZES - STANDARD',
      data: [
        ['Size # 14', '1180 - 1700 MICRONS'],
        ['Size # 16', '1000 - 1400 MICRONS'],
        ['Size # 18', '850 - 1180 MICRONS'],
        ['Size # 20', '710 - 1000 MICRONS'],
        ['Size # 25', '600 - 850 MICRONS'],
      ]
    },
    {
      title: 'SINGLE SIZES - SMALL',
      data: [
        ['Size # 30', '500 - 710 MICRONS'],
        ['Size # 35', '425 - 600 MICRONS'],
        ['Size # 40', '355 - 500 MICRONS'],
        ['Size # 45', '300 - 425 MICRONS'],
      ]
    },
    {
      title: 'SINGLE SIZES - ULTRA SMALL',
      data: [
        ['Size # 50', '250 - 355 MICRONS'],
        ['Size # 60', '212 - 300 MICRONS'],
      ]
    },
    {
      title: 'DOUBLE SIZES - STANDARD',
      data: [
        ['Size # 14/16', '1180 - 1400 MICRONS'],
        ['Size # 16/18', '1000 - 1180 MICRONS'],
        ['Size # 18/20', '850 - 1000 MICRONS'],
        ['Size # 20/25', '710 - 850 MICRONS'],
      ]
    },
    {
      title: 'DOUBLE SIZES - SMALL',
      data: [
        ['Size # 25/30', '600 - 710 MICRONS'],
        ['Size # 30/35', '500 - 600 MICRONS'],
        ['Size # 35/40', '425 - 500 MICRONS'],
      ]
    },
    {
      title: 'DOUBLE SIZES - ULTRA SMALL',
      data: [
        ['Size # 40/45', '355 - 425 MICRONS'],
        ['Size # 45/50', '300 - 355 MICRONS'],
        ['Size # 50/60', '250 - 300 MICRONS'],
      ]
    }
  ];

  return (
    <div className="font-roboto">
      {/* Hero Section */}
      <div className="relative w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[400px] mb-6">
        {/* Small */}
        <div
          className="sm:hidden absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(0deg, rgba(0,0,0,0.28), rgba(0,0,0,0.28)), url('/assets/products/herosmall.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        {/* Medium */}
        <div
          className="hidden sm:block lg:hidden absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(0deg, rgba(0,0,0,0.28), rgba(0,0,0,0.28)), url('/assets/products/heromedium.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        {/* Large */}
        <div
          className="hidden lg:block absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(0deg, rgba(0,0,0,0.28), rgba(0,0,0,0.28)), url('/assets/products/productshero.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold font-quicksand leading-snug">
            Sugar Spheres & Neutral Pellets
          </h1>
          <p className='text-white mt-[30px] md:mt-[30px] lg:mt-[40px] text-sm sm:text-base md:text-xl lg:text-[24px] font-bold'>
            Customized excipients for precision formulations.
          </p>
        </div>
      </div>

      {/* Middle Image */}
      <div className="max-w-6xl mx-auto mb-6 px-4 lg:mt-[50px]">
        <img
          src="/assets/products/SUGAR SPHERES-NPS.png" // replace if needed
          alt="Middle Visual"
          className="w-full rounded-lg shadow-md object-cover max-h-72 md:max-h-96"
        />
      </div>

      {/* Initial Table */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-left text-sm sm:text-base">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="p-3">Product</th>
                <th className="p-3">Details</th>
              </tr>
            </thead>
            <tbody>
              {initialTable.map(([product, detail], idx) => (
                <tr key={idx}>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">{product}</td>
                  <td className="border border-gray-300 px-4 py-2">{detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Size Sections */}
        {sections.map((section, index) => (
          <div key={index} className="mb-10">
            <h2 className="text-lg md:text-xl font-bold text-green-700 mb-3">{section.title}</h2>
            <table className="w-full border-collapse border border-gray-300 text-sm sm:text-base">
              <tbody>
                {section.data.map(([size, range], idx) => (
                  <tr key={idx}>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">{size}</td>
                    <td className="border border-gray-300 px-4 py-2">{range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SugarSpheresNps;
