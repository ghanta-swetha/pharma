import React from 'react';
import Footer from '../../components/Footer';

const VitaminsAndMinerlsPremixes = () => {
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

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center max-w-5xl mx-auto">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold font-quicksand leading-snug">
            VITAMINS AND MINERALS PREMIXES
          </h1>
          <p className="mt-3 max-w-3xl text-white text-xs sm:text-sm md:text-base font-light font-roboto">
            We offer a diverse range of Vitamins and Minerals Premixes tailored to meet various nutritional requirements. Our premixes combine essential vitamins and minerals in precise formulations to support health, wellness, and dietary needs across different industries.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="max-w-6xl mx-auto mb-6 px-4">
        <img
          src="/assets/products/VITAMINS AND MINERAL PREMIXES.png"
          alt="Vitamins And Minerals Premixes Visual"
          className="w-full rounded-lg shadow-md object-cover max-h-64 sm:max-h-72 md:max-h-96 mx-auto"
          style={{ objectPosition: 'center' }}
        />
      </div>

      {/* Heading */}
      <div className="max-w-6xl mx-auto px-4 py-4 sm:py-6">
        <div className="bg-green-600 text-white text-center py-2 rounded-md mb-4">
          <h2 className="text-sm sm:text-base md:text-lg font-semibold font-quicksand">
            VITAMINS AND MINERALS PREMIXES
          </h2>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full border border-gray-300 text-xs sm:text-sm md:text-base border-collapse">
            <tbody>
              {[
                ['Dried Ferrous Sulphate (SR) + Folic Acid', '150mg + 0.5mg'],
                ['Dried Ferrous Sulphate (SR) + Zinc Sulphate Monohydrate + Folic Acid', '150mg + 61.8mg + 0.5mg'],
                ['Ferrous Fumarate (SR) + Zinc Sulphate Monohydrate + Folic Acid', '185mg + 41.2mg + 0.5mg'],
                ['Carbonyl Iron + Zinc Sulphate Monohydrate + Folic Acid', '50mg + 61.8mg + 0.5mg'],
                ['Carbonyl Iron + Folic Acid + Selenium + Vitamin E Acetate + Vitamin B12', '62mg + 1mg + 60mcg + 15IU + 5mcg'],
                ['Carbonyl Iron + Folic Acid + Selenium + Vitamin E Acetate + Vitamin B12', '100mg + 1mg + 60mcg + 15IU + 5mcg'],
                ['Carbonyl Iron + Zinc Sulphate Monohydrate + Folic Acid + Vitamin B12', '100mg + 22.5mg + 1.5mg + 15mcg'],
                ['Carbonyl Iron + Zinc Sulphate Monohydrate + Folic Acid + Vitamin "C"', '100mg + 41.2mg + 1mg + 150mg'],
                ['Carbonyl Iron + Zinc Sulphate Monohydrate + Folic Acid', '100mg + 61.8mg + 0.5mg'],
                ['Carbonyl Iron + Zinc Sulphate Monohydrate + Folic Acid + Pyridoxine HCl', '50mg + 41.2mg + 1.5mg + 3mg'],
                ['Carbonyl Iron + Zinc Sulphate Monohydrate + Folic Acid +Vitamin B12+ Vitamin "C"', '100mg + 61.8mg + 1mg +15 mcg + 150mg'],
                ['Ferrous ascorbate + Folic acid', '100mg + 1.5mg'],
                ['Ferrous ascorbate + Folic acid', '50mg + 0.5mg'],
              ].map(([item, value], idx) => (
                <tr key={idx} className="border border-gray-300">
                  <td className="border border-gray-300 px-2 py-2 align-top">{item}</td>
                  <td className="border border-gray-300 px-2 py-2 align-top">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bullet Points */}
        <div className="text-gray-800 max-w-6xl mx-auto px-4">
          <ul className="list-none space-y-2">
            {[
              'Alpha lipoic acid 100mg and methylcobalamin 0.5mg',
              'Alpha lipoic acid 100/200mg, methylcobalamin 1500 mcg, folic acid 3/1.5mg and pyridoxine 1.5/3mg',
              'Carbonyl iron 100mg, zinc sulphate 61.8mg, folic acid 1.5mg and methylcobalamin 25mcg',
              'Carbonyl iron 100mg, zinc sulphate monohydrate 61.8mg, folic acid 1.5mg and vitamin b12 15 mcg',
              'Carbonyl iron 100mg, zinc 61.8 mg, folic acid 1.5mg, vitamin b12 15mcg and vitamin c 50mg',
              'Carbonyl iron 50mg, zinc sulphate monohydrate 61.8 mg, folic acid 0.5mg',
              'Carbonyl iron 50mg, zinc sulphate monohydrate 61.8 mg, folic acid 0.5mg + vitamin c 50mg +vit b1 2mg+ vit b2 2mg +vit b6 1mg + niacinamide 10mg blend pellets',
              'Ferrous gluconate 30 mg+folic acid 0.5 mg +vitamin b12 2.5 mcg+zinc sulphate 33 mg+di-basic calcium phosphate 100 mg pellets blend',
              'Ferrous glycine sulphate 45mg, zinc sulphate 12mg, folic acid 400mcg,vitamin c 60mg,vitamin b6 5mg,vitamin b12 10mcg and copper sulphate',
              'Ferrous fumarate 300mg and folic acid 1.5mg',
              'Ferrous fumarate 300mg+zinc sulphate 100mg+folic acid 1mg+vit b12 15mcg+vit c 100mg+vit b6 3mg+magnesium sulphate 50mcg+manganese sulphate 50mcg+copper sulphate 50mcg pellets blend',
              'Ferrous fumarate 24mg+zinc sulphate 12mg+copper sulphate 2mg+ floic acid 500mcg+vit b6 5mg +vit b12 10 mcg',
              'Ginseng, lycopene, benfotiamine, vitamin b6 & b12, zinc, wheat germ oil, chromium and selenium',
              'Multivitamins and premixes',
            ].map((point, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-green-600 mr-2 text-xl leading-none">➤</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default VitaminsAndMinerlsPremixes;
