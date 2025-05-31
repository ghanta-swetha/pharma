import React from 'react';
import Footer from '../../components/Footer';

const WhoGmpProducts = () => {
  const products = [
    ['AMBROXOL HCL', '40% w/w'],
    ['DULOXETINE HCL', '17% w/w'],
    ['DOMPERIDONE', '30% w/w'],
    ['ITRACONAZOLE', '22% w/w'],
    ['LANSOPRAZOLE', '8.5% & 11.2% w/w'],
    ['OMEPRAZOLE', '8.5% w/w'],
    ['ORLISTAT', '50% w/w'],
    ['RABEPRAZOLE SODIUM', '85% w/w'],
    ['TAMSULOSIN HCL', '0.1% & 0.2% w/w'],
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
            WHO GMP PRODUCTS
          </h1>
          <p className="font-[Roboto] text-white mt-4 text-sm sm:text-base md:text-xl lg:text-[24px] font-bold">
            Discover our certified WHO GMP pharmaceutical formulations.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="max-w-6xl mx-auto mb-6 px-4 lg:mt-[50px]">
        <img
          src="/assets/products/WHO - GMP PRODUCTS.png" // Change or add this image to your assets folder
          alt="WHO GMP Products Visual"
          className="w-full rounded-lg shadow-md object-cover max-h-64 sm:max-h-72 md:max-h-96"
        />
      </div>

      {/* Heading Section */}
      <div className="max-w-6xl mx-auto px-4 py-4 sm:py-6">
        <div className="bg-green-600 text-white text-center py-2 rounded-md mb-4">
          <h2 className="text-sm sm:text-base md:text-lg font-semibold font-quicksand">
            WHO GMP PRODUCTS LIST
          </h2>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-xs sm:text-sm md:text-base">
            <tbody>
              {products.map(([name, percentage], idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="border border-gray-300 px-2 py-2 align-top">{name}</td>
                  <td className="border border-gray-300 px-2 py-2 align-top">{percentage}</td>
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

export default WhoGmpProducts;
