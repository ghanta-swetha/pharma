import React from 'react';
import Footer from '../../components/Footer';

const DcGrnules = () => {
  const dcGranules = [
    "IBUPROFEN GRANULES",
    "METFORMIN GRANULES",
    "ATORVASTATIN GRANULES",
    "ROSUVASTATIN GRANULES",
    "CLOPIDOGREL GRANULES",
    "PARACETAMOL GRANULES",
    "SIMVASTATIN GRANULES",
    "FENOFIBRATE GRANULES",
    "LOSARTAN POTASSIUM GRANULES",
    "EZETIMIBE GRANULES",
    "AMLODEPINE GRANULES",
    "CIPROFLOXACIN GRANULES",
    "TELMISARTAN  GRANULES",
    "MOXIFLOXACIN GRANULES",
    "MONTELUKAST+LEVOCETIRIZINE DI-HCL GRANULES",
    "SILDENAFIL GRANULES",
    "TADALAFIL GRANULES",
    "TRIMEBUTINE MALEATE GRANULES",
    "VALSARTAN GRANULES",
    "HCTZ GRANULES",
    "METFORMIN + GLIMEPERIDE",
    "SIMVASTATIN AND EZETIMIBE GRANULES",
    "CANDESARTAN GRANULES",
    "AZITHROMYCIN GRANULES",
    "LOPERAMIDE GRANULES",
    "OLMESARTAN MEDOXOMIL + HYDROCHLOROTHIAZIDE GRANULES",
    "CIPROFLOXACIN HCL GRANULES",
    "NAPROXEN SODIUM GRANULES",
    "CIPROFLOXACIN HCL GRANULES",
    "MEBEVERINE HCL GRANULES",
    "CLOPIDOGREL GRANULES",
    "ASPIRIN GRANULES",
    "CEFUROXIME AXETIL GRANULES",
    "OMEPRAZOLE GRANULES",
    "VALSRTAN + HCTZ DC GRANULES",
    "GLIMEPERIDE GRANULES",
  ];

  return (
    <div className="font-roboto">
      {/* Hero Section */}
      <div className="relative w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[400px] mb-6">
        {/* Small Screen */}
        <div
          className="sm:hidden absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgba(0,0,0,0.28), rgba(0,0,0,0.28)), url('/assets/products/herosmall.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        {/* Medium Screen */}
        <div
          className="hidden sm:block lg:hidden absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgba(0,0,0,0.28), rgba(0,0,0,0.28)), url('/assets/products/heromedium.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        {/* Large Screen */}
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
            Trusted Pharma Products
          </h1>
          <p className='text-white mt-[30px] md:mt-[30px] lg:mt-[40px] text-sm sm:text-base md:text-xl lg:text-[24px] font-bold'>
            Trusted formulations across multiple therapeutic categories.
          </p>
        </div>
      </div>

      {/* Middle Image */}
      <div className="max-w-6xl mx-auto mb-6 px-4 lg:mt-[50px]">
        <img
          src="/assets/products/DC GRNULES.png" // Replace with specific image if needed
          alt="DC Granules Visual"
          className="w-full rounded-lg shadow-md object-cover max-h-64 sm:max-h-72 md:max-h-96"
        />
      </div>

      {/* Heading and Table */}
      <div className="max-w-6xl mx-auto px-4 py-4 sm:py-6">
        <div className="bg-green-600 text-white text-center py-2 rounded-md mb-4">
          <h2 className="text-sm sm:text-base md:text-lg font-semibold font-quicksand">
            DC GRANULES LIST
          </h2>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-xs sm:text-sm md:text-base">
            <tbody>
              {dcGranules.map((item, idx) => (
                <tr key={idx} className="border border-gray-300">
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

export default DcGrnules;
