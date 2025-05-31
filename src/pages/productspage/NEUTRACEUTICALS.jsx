import React from 'react';
import Footer from '../../components/Footer';

const NEUTRACEUTICALS = () => {
  // Data for the tables from NEUTRACEUTICALS page
  const aminoAcids = [
    'L - PHENYL ALANINE',
    'L - THREONINE',
    'L - TRYPTOPHAN',
    '5 – HYDROXY ANTHRONILIC ACID',
    'DL - METHEONINE',
    'L - ARGININE HCL',
    'L - GLYCINE',
    'L - LEUCINE',
    'L - LYSINE HCL',
    'L - PROLINE',
    'L - TYROSINE',
    'L – VALINE',
    'L - ISO LEUCINE',
  ];

  const stabilizedVitamins = [
    'VITAMIN D3 (COLICALCIFEROL)',
    'VITAMIN B6 (PYRIDOXOL 5 PHOSPHATE)',
    'VITAMIN B3 (NICOTINAMIDE)',
    'VITAMIN C (ASCORBIC ACID)',
    'VITAMIN C SR PELLETS 70%, 80%, 85% pellets',
    'VITAMIN C IR 50%, 90% pellets',
    'VITAMIN C chewable granules',
    'VITAMIN B1 (THIAMIN MONONITRATE)',
    'VITAMIN B2 (RIBOFLAVIN)',
    'VITAMIN B5 (CALCIUM PANTOTHENATE)',
    'VITAMIN E (ALPHA TOCOPHEROL)',
    'VITAMIN B12 (CYANOCOBALAMIN)',
    'VITAMIN B12 (METHYLCOBALAMIN)',
    'VITAMIN B7 (BIOTIN)',
    'VITAMIN K1',
  ];

  const minerals = [
    'CARBONYL IRON',
    'ZINC SULPHATE MONONITRATE',
    'BORON',
    'CHROMIUM',
    'IODINE',
    'SELENIUM',
    'DRIED FERROUS SULPHATE',
    'FERROUS FUMARATE',
    'FERROUS ASCORBATE',
  ];

  const specialities = [
    'ALPHALIPOIC ACID',
    'ALPHALIPOIC ACID GRANULES',
    'VITAMIN C GRANULES',
    'GAMMALINOLENIC ACID',
    'BENFOTHIAMINE',
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
            NEUTRACEUTICALS
          </h1>
          <p className="font-[Roboto] text-white mt-[30px] md:mt-[30px] lg:mt-[40px] text-sm sm:text-base md:text-xl lg:text-[24px] font-bold mt-2">
            Comprehensive range of amino acids, vitamins, minerals and specialties.
          </p>
        </div>
      </div>

      {/* Image */}
      <div className="max-w-6xl mx-auto mb-6 px-4 lg:mt-[50px]">
        <img
          src="/assets/products/NEUTRACEUTICALS.png"
          alt="Neutraceuticals Visual"
          className="w-full rounded-lg shadow-md object-cover max-h-64 sm:max-h-72 md:max-h-96"
        />
      </div>

      {/* Amino Acids Section */}
      <div className="max-w-6xl mx-auto px-4 py-4 sm:py-6">
        <div className="bg-green-600 text-white text-center py-2 rounded-md mb-4">
          <h2 className="text-sm sm:text-base md:text-lg font-semibold font-quicksand">AMINO ACIDS</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-xs sm:text-sm md:text-base border-collapse">
            <tbody>
              {aminoAcids.map((item, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-2 py-2 align-top">{item}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Stabilized Vitamins Section */}
      <div className="max-w-6xl mx-auto px-4 py-4 sm:py-6">
        <div className="bg-green-600 text-white text-center py-2 rounded-md mb-4">
          <h2 className="text-sm sm:text-base md:text-lg font-semibold font-quicksand">STABILIZED VITAMINS</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-xs sm:text-sm md:text-base border-collapse">
            <tbody>
              {stabilizedVitamins.map((item, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-2 py-2 align-top">{item}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Minerals Section */}
      <div className="max-w-6xl mx-auto px-4 py-4 sm:py-6">
        <div className="bg-green-600 text-white text-center py-2 rounded-md mb-4">
          <h2 className="text-sm sm:text-base md:text-lg font-semibold font-quicksand">MINERALS</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-xs sm:text-sm md:text-base border-collapse">
            <tbody>
              {minerals.map((item, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-2 py-2 align-top">{item}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Specialities Section */}
      <div className="max-w-6xl mx-auto px-4 py-4 sm:py-6">
        <div className="bg-green-600 text-white text-center py-2 rounded-md mb-4">
          <h2 className="text-sm sm:text-base md:text-lg font-semibold font-quicksand">SPECIALITIES</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-xs sm:text-sm md:text-base border-collapse">
            <tbody>
              {specialities.map((item, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-2 py-2 align-top">{item}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Note */}
      <div className="max-w-6xl mx-auto px-4 mt-6 mb-2 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-900 p-4 rounded-md">
        <p className="text-sm md:text-base font-medium">
          NOTE: THE ABOVE PRODUCTS WILL BE SUPPLIED INDIVIDUALLY AND IN BLEND FORM AS PER THE CUSTOMER REQUIREMENT.
        </p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NEUTRACEUTICALS;
