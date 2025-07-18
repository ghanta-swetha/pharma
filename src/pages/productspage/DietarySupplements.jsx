import React from 'react';
import Footer from '../../components/Footer';

const Dietarysupplements = () => {
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
            Dietary Supplements
          </h1>
          <p className='font-[Roboto] text-white mt-[30px] md:mt-[30px] lg:mt-[40px] text-sm sm:text-base md:text-xl lg:text-[24px] font-bold mt-2'>
            High-quality nutritional support for daily wellness.
          </p>
        </div>
      </div>

      {/* Middle Image */}
      <div className="max-w-6xl mx-auto mb-6 px-4 lg:mt-[50px]">
        <img
          src="/assets/products/DIETARY SUPPLEMENTS.png" // Replace with actual image path
          alt="Dietary Supplements Visual"
          className="w-full rounded-lg shadow-md object-cover max-h-64 sm:max-h-72 md:max-h-96"
        />
      </div>

      {/* Heading */}
      <div className="max-w-6xl mx-auto px-4 py-4 sm:py-6">
        <div className="bg-green-600 text-white text-center py-2 rounded-md mb-4">
          <h2 className="text-sm sm:text-base md:text-lg font-semibold font-quicksand">
            DIETARY SUPPLEMENTS LIST
          </h2>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-xs sm:text-sm md:text-base">
            <tbody>
              {[
                "Vitamin B12 Gelatin Triturate 1%",
                "Vitamin B12 Gelatin Triturate 0.1%",
                "1.0% Vitamin B12 WS (in citrate Buffered Dextrin Base)",
                "% Vitamin B12 WS (In citrate Buffered Dextrin Base)",
                "% Vitamin B12 Triturate in DCP",
                "% Vitamin B12 Triturate in DCP",
                "Vitamin D3 Stabilized 0.2 MIU/gm",
                "Vitamin D3 Stabilized 0.1 MIU/gm"
              ].map((item, idx) => (
                <tr key={idx}>
                  <td className="border border-gray-300 px-2 py-2">{item}</td>
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

export default Dietarysupplements;
