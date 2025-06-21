import React from 'react';
import Footer from '../../components/Footer';

const Newproducts = () => {

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
            NEW PRODUCTS
          </h1>
          <p className="font-[Roboto] text-white mt-4 text-sm sm:text-base md:text-xl lg:text-[24px] font-bold">
            Discover our latest pharmaceutical formulations.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="max-w-6xl mx-auto mb-6 px-4 lg:mt-[50px]">
        <img
          src="/assets/products/new product copy.jpg"
          alt="New Products Visual"
          className="w-full rounded-lg shadow-md object-contain max-h-96"
        />
      </div>


      {/* Heading Section */}
      <div className="max-w-6xl mx-auto px-4 py-4 sm:py-6">
        <div className="bg-green-600 text-white text-center py-2 rounded-md mb-4">
          <h2 className="text-sm sm:text-base md:text-lg font-semibold font-quicksand">
            NEW PRODUCTS LIST
          </h2>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-xs sm:text-sm md:text-base">
            <tbody>
              {[
                // ['Aceclofenac SR', '50%'],
                // ['Allopurinol SR', '70%'],
                // ['Ciproflaxacin Hydrochloride', '20%'],
                // ['Clopidogrel', '40%'],
                // ['Clopidogrel', '70%'],
                // ['Cinitapride SR', '6%, 1.45%'],
                // ['Fenofibrate SR', '60%'],
                // ['Flunarizine', '5% & 10%'],
                // ['Isosorbide Mononitrife', '10%'],
                // ['Mesalazine', '70%'],
                // ['Metoprolol succinate SR', '30%'],
                // ['Metformin Hyrochoride SR', '96%, 60%, 65%, 70%, 90%'],
                // ['Phenytoin sodium SR', '37%'],
                // ['Pregabalin', '50%'],
                // ['Rosuvastatin', '20%, 7.5%, 15%, 10%, 11%, 12%, 21%'],
                // ['Tacrolimus', '0.5%'],
                // ['Tramadol Hydrochloride SR', '30% & 60%'],
                // ['Trospium Chloride', '16%'],
                // ['Alpha Lipoic acid', '100 mg, 57%, 80%, 90%'],
                // ['Gammalinolenic acid', '135 mg'],
                // ['Methyl Cobalamin', '1500 mcg'],
                // ['L-Methyl Folate', '1 mg'],
                // ['Pyridoxol-5-Phosphate', '3 mg'],
                // ['Methylcobalamin + Pyridoxine Hydrochloride IP', '1500 mcg + 5.0 mg'],
                // ['Benfotiamine + Folic acid IP + Alphalipoic acid USP + Biotin BP', '50 mg + 5.0 mg + 200 mg + 5.0 mg'],
                // ['Pantoprazole EC + Zinc Carnosine', '40 mg + 75 mg'],
                // ['Rabeprazole EC + Zinc Carnosine', '20 mg + 75 mg'],
                ['ALLOPURINOL', '70% w/w'],
                ['AZITHROMYCIN', '40% w/w'],
                ['CLARITHROMYCIN', '40% w/w'],
                ['CIPROFLOXACIN HCL', '20% & 40% w/w'],
                ['CARVEDILOL PHOSPHATE', '20% w/w'],
                ['CYCLOBENZAPRINE', '11% & 22%'],
                ['ERYTHROMYCIN', '50%'],
                ['FLUNARIZINE', '5%, 10% w/w'],
                ['FENOFIBRATE', '60%, 66.6% w/w'],
                ['GALANTAMINE', '8% & 10%'],
                ['GLIMEPIRIDE', '1%'],
                ['ISOSORBIDE MONONITRATE', '10% w/w'],
                ['MESALAZINE', '70% w/w'],
                ['METOPROLOL SUCCINATE', '30% w/w'],
                ['MEMANTINE', '70%'],
                ['TROSPIUM CHLORIDE IR','16% w/w'],
                ['NITROGLYCERIN', '2.4%'],
                ['SILDENAFIL CITRATE', '20%'],
                ['SERTRALINE', '20%'],
                ['TACROLIMUS', '0.5%, 1%, 5% w/w']
              ].map(([name, percentage], idx) => (
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

export default Newproducts;