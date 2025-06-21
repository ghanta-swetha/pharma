import React from 'react';
import Footer from '../../components/Footer';

const DcGrnules = () => {
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
          src="/assets/products/DC GRNULES.png"
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

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-xs sm:text-sm md:text-base">
            <tbody>
              {[
                ['IBUPROFEN', '70% w/w'],
                ['METFORMIN', '60% w/w'],
                ['ATORVASTATIN', '10% w/w'],
                ['ROSUVASTATIN', '10% w/w'],
                ['CLOPIDOGREL', '75mg'],
                ['PARACETAMOL', '80% w/w'],
                ['SIMVASTATIN', '10, 20 mg'],
                ['FENOFIBRATE', '60% w/w'],
                ['LOSARTAN POTASSIUM', '25, 50, 100 mg'],
                ['EZETIMIBE', '10 mg'],
                ['AMLODEPINE', '5, 10 mg'],
                ['CIPROFLOXACIN', '250, 500 mg'],
                ['TELMISARTAN', '12.5 55% w/w'],
                ['MOXIFLOXACIN', '56% w/w'],
                ['MONTELUKAST+LEVOCETIRIZINE DI-HCL', '-'],
                ['SILDENAFIL', '25, 50, 100 mg'],
                ['TADALAFIL', '10, 20 mg'],
                ['TRIMEBUTINE MALEATE', '-'],
                ['VALSARTAN', '40, 80, 160 mg'],
                ['HCTZ', '12.5 mg'],
                ['METFORMIN + GLIMEPERIDE', '500+2 mg'],
                ['SIMVASTATIN AND EZETIMIBE', '-'],
                ['CANDESARTAN', '4, 8, 16 mg'],
                ['AZITHROMYCIN', '250, 500 mg'],
                ['LOPERAMIDE', '2 mg'],
                ['OLMESARTAN MEDOXOMIL + HYDROCHLOROTHIAZIDE', '20+12.5 mg'],
                ['CIPROFLOXACIN HCL', '65% w/w'],
                ['NAPROXEN SODIUM', '95% w/w'],
                ['CIPROFLOXACIN HCL', '20, 22.5 % w/w'],
                ['MEBEVERINE HCL', '35% w/w'],
                ['CLOPIDOGREL', '37.5% w/w'],
                ['ASPIRIN', '33, 33% w/w'],
                ['CEFUROXIME AXETIL', '20%, 60% w/w'],
                ['OMEPRAZOLE', '40, 0 mg'],
                ['VALSRTAN + HCTZ DC', '-'],
                ['GLIMEPERIDE', '2 mg']
              ].map(([name, composition], idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="border border-gray-300 px-2 py-2 align-top">{name}</td>
                  <td className="border border-gray-300 px-2 py-2 align-top">{composition}</td>
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