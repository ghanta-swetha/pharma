
import React from 'react';
import Footer from '../../components/Footer';

const Antibioticspage = () => {
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
            Trusted Pharma Products
          </h1>
          <p className='font-[Roboto] text-white  mt-[30px] md:mt-[30px] lg:mt-[40px] text-sm sm:text-base md:text-xl lg:text-[24px] font-bold mt-2'>
            Trusted formulations across multiple therapeutic categories.
          </p>
        </div>
      </div>

      {/* Image */}
      <div className="max-w-6xl mx-auto mb-6 px-4 lg:mt-[50px]">
        <img
          src="/assets/products/gastroimage.png"
          alt="Gastro Visual"
          className="w-full rounded-lg shadow-md object-cover max-h-64 sm:max-h-72 md:max-h-96"
        />
      </div>

      {/* Heading */}
      <div className="max-w-6xl mx-auto px-4 py-4 sm:py-6">
        <div className="bg-green-600 text-white text-center py-2 rounded-md mb-4">
          <h2 className="text-sm sm:text-base md:text-lg font-semibold font-quicksand">
            GASTRO INTESTINAL DRUGS & COMBINATIONS
          </h2>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-xs sm:text-sm md:text-base">
           
            <tbody>
              {[
                // ['Omeprazole pellets', '7.5%,8.5%,10%,12%,14%,15%, 20%,22.5%'],
                // ['Lansoprazole pellets', '7.5%, 8.5%, 10%, 11.2%, 12% & 15%,20%'],
                // // ['Esomeprazole pellets', '8.5%, 10%, 15.5%, 17.5%, 22% & 22.5%'],
                // // ['Pantoprazole pellets', '11%, 15%, 20%, 21% & 22% & 8.5%,10%-22.5%,23.5%, 24%'],
                // ['Domperidone pellets', '10%, 17%, 20%, 27.5%, 30% & 40%'],
                // ['Domperidone Maleate SR pellets', '28%, 30% & 40%'],
                // ['Rabeprazole pellets', '7.5%, 8.5%, 10%, 12.5%, 13.2%, 20%, 11.9% &13%'],
                // ['Itopride pellets', '50%, 60% &70%'],
                // ['Omeprazole + Domperidone SR', '20 mg + 30 mg'],
                // ['Omeprazole + Domperidone', '20 mg + 10 mg'],
                // ['Rabeprazole + Domperidone SR', '20 mg + 30 mg'],
                // ['Rabeprazole + Domperidone', '20 mg + 10 mg'],
                // ['Pantoprazole + Domperidone SR', '40 mg + 30 mg'],
                // ['Lansoprazole + Domperidone SR', '40 mg + 30 mg'],
                // ['Pantoprazole + Domperidone', '20 mg + 10 mg'],
                // ['Rabeprazole + Diclofenac sodium SR', '20 mg + 100 mg'],
                // ['Rabeprazole + Diclofenac sodium SR', '10 mg + 50 mg'],
                // ['Rabeprazole + Itopride SR', '20 mg + 150 mg'],
                // ['Pantoprazole + Itopride SR', '40 mg + 150 mg'],

                 ['Omeprazole', '3%, 7.5%, 8.5%, 10%, 12%, 12.5%, 14%, 20% w/w'],
  ['Lansoprazole', '3%, 6.5%, 7.5%, 8.5%, 10.5%, 11.2%, 12%, 14%, 15% w/w'],
  ['Rabeprazole Sodium', '7.5%, 8.5% 10%, 12.5%, 13.2%, 15%, 20%, 11.9%, 13% w/w'],
  ['Esomeprazole', '8.5%, 10%, 11.5%, 15.5%, 17.5%, 22.5%, 30% w/w'],
  ['Pantoprazole', '11%, 15%, 17%, 20%, 21%, 22% w/w'],
  ['Domperidone', '10%, 17%, 20%, 27.5%, 30%, 40% w/w'],
  ['Domperidone Maleate', '28%, 30%, 40% w/w'],
  ['Itopride HCL', '50%, 60%, 70% w/w'],
  ['Dexlansoprazole', '8.5%, 15%, 17%, 20% w/w'],
  ['Dexrabeprazole', '6%, 20% w/w'],
  ['Cinitapride', '1.45% w/w']
              ].map(([medicine, dosage], index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-2 py-2 align-top">{medicine}</td>
                  <td className="border border-gray-300 px-2 py-2 align-top">{dosage}</td>
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

export default Antibioticspage;