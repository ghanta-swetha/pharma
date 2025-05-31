import React from 'react';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';

const RTFPelletsPage = () => {
  const navigate = useNavigate();

  // Handle contact button click with scroll to top
  const handleContactClick = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-700/70 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/assets/aboutpage/rtfimage.jpg')" }}
        />
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Ready to Fill (RTF) Pellets & Nutraceuticals</h1>
          <p className="text-base sm:text-lg lg:text-xl text-white max-w-2xl">
            Innovative pharmaceutical and nutraceutical solutions for enhanced efficiency and efficacy
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* RTF Pellets Section */}
          <section className="mb-12 sm:mb-16">
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
              <div className="md:w-1/3">
                <div className="bg-green-50 p-6 rounded-xl flex justify-center items-center h-48 sm:h-64">
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 48 48" fill="none">
                    <path
                      d="M12 12h24v8H12zM16 20v16h16V20M20 8v4M28 8v4M24 28a4 4 0 100 8 4 4 0 000-8z"
                      stroke="#008000"
                      strokeWidth="3"
                    />
                  </svg>
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl sm:text-3xl font-bold text-green-700 mb-4">Ready to Fill (RTF) Pellets</h2>
                <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                  Spansules provides pre-finished pharmaceuticals, including Ready to Fill (RTF) Pellets and Directly Compressible Granules (DCG), designed to minimize processing steps and reduce manufacturing costs. RTF Pellets have carved a significant niche in the pharmaceutical industry, offering Modified Release Dosage Forms such as Immediate Release (IR), Enteric Coated (EC), Sustain Release (SR), and MUPS (Multi Unit Particulate System).
                </p>
                <h3 className="text-xl sm:text-2xl font-semibold text-green-700 mb-4">Rationale for Choosing Pellets</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700 text-sm sm:text-base">
                  <li>Less susceptible to dose dumping.</li>
                  <li>Avoid high local concentration, minimizing local irritation in the G.I.T.</li>
                  <li>Reduce variation in gastric emptying rates.</li>
                  <li>Disperse freely in G.I.T., maximizing absorption.</li>
                  <li>Improve the safety and efficacy of bioactive agents.</li>
                  <li>Flexibility in dosage form design & development.</li>
                  <li>Controlled release/Modified release pellets can be manufactured.</li>
                  <li>Reduce inter & intra-subject variability.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Nutraceuticals Section */}
          <section className="mb-12 sm:mb-16">
            <div className="flex flex-col md:flex-row-reverse gap-6 sm:gap-8">
              <div className="md:w-1/3">
                <div className="bg-green-50 p-6 rounded-xl flex justify-center items-center h-48 sm:h-64">
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 48 48" fill="none">
                    <path
                      d="M14 42h20M24 6v10M15 26l18 10M24 16a3 3 0 100 6 3 3 0 000-6z"
                      stroke="#008000"
                      strokeWidth="3"
                    />
                    <path
                      d="M33 26a3 3 0 100 6 3 3 0 000-6zM15 26a3 3 0 100 6 3 3 0 000-6z"
                      stroke="#008000"
                      strokeWidth="3"
                    />
                  </svg>
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl sm:text-3xl font-bold text-green-700 mb-4">Nutraceuticals / Dietary Supplements</h2>
                <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                  A dietary supplement, also known as a food supplement or nutritional supplement, is designed to provide nutrients such as vitamins, minerals, fiber, fatty acids, or amino acids that may be missing or insufficient in a person's diet. Spansules offers a range of nutraceuticals, including stabilized vitamins in various dosage forms such as Pellets, MUPS, and Granules.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  We customize nutraceutical products to meet specific customer requirements, ensuring high quality and efficacy in every formulation.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="relative py-12 mb-5 sm:py-16">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/assets/wherearewe/becameapartner.png')" }}
        />
        <div className="absolute inset-0 bg-gray-900/50 z-10" />
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Ready to Partner with Spansules?</h2>
          <p className="text-base sm:text-lg text-white mb-8 max-w-2xl mx-auto">
            Contact our team today to learn more about our expertise and how we can help you achieve your pharmaceutical development goals.
          </p>
          <button
            className="bg-green-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
            onClick={handleContactClick}
          >
            Contact Us
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RTFPelletsPage;