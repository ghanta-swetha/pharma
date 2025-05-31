import React from 'react';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';

const ExpertisePage = () => {
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
          style={{ backgroundImage: "url('/assets/aboutpage/expertise image.jpg')" }}
        />
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Expertise</h1>
          <p className="text-base sm:text-lg lg:text-xl text-white max-w-2xl">
            Specialized pharmaceutical services tailored to meet your specific needs
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Contract Formulation Development */}
          <section className="mb-12 sm:mb-16">
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
              <div className="md:w-1/3">
                <div className="bg-green-50 p-6 rounded-xl flex justify-center items-center h-48 sm:h-64">
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 48 48" fill="none">
                    <path
                      d="M10 42H38M12 36H16M14 36V42M21 25L18 28M34 6L40 12M24 42C26.494 42.0002 28.9262 41.2234 30.9583 39.7774C32.9904 38.3315 34.5215 36.2883 35.3387 33.9319C36.1559 31.5756 36.2186 29.0232 35.5181 26.6295C34.8176 24.2359 33.3886 22.12 31.43 20.576M18 22L24 28L36 16L30 10L18 22Z"
                      stroke="#008000"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl sm:text-3xl font-bold text-green-700 mb-4">Contract Formulation Development</h2>
                <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                  Contract formulation development, product commercialization and manufacturing are focused business areas for Spansules. Spansules has long experience in providing its customers with a wide range of specialty products as well as formulation development services. Our services are tailored to meet each customer's specific expectations.
                </p>
                <p className="text-gray-700 mb-4 font-semibold text-sm sm:text-base">We also provide:</p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700 text-sm sm:text-base">
                  <li><span className="font-medium">COA & MOA of Active Raw Material</span> used in manufacturing of Pellets.</li>
                  <li><span className="font-medium">COA & MOA of supplied Pellets.</span></li>
                </ul>
                <p className="text-gray-700 text-sm sm:text-base">
                  Our facilities comply with the highest quality standards. The high quality of our service level and our flexible, service-oriented way of working make us your partner of choice.
                </p>
              </div>
            </div>
          </section>

          {/* R&D Service */}
          <section className="mb-12 sm:mb-16">
            <div className="flex flex-col md:flex-row-reverse gap-6 sm:gap-8">
              <div className="md:w-1/3">
                <div className="bg-green-50 p-6 rounded-xl flex justify-center items-center h-48 sm:h-64">
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 48 48" fill="none">
                    <path d="M12 12h24v8H12z" fill="#e6f7ff" stroke="#008000" strokeWidth="3" />
                    <path d="M16 20v16h16V20" stroke="#008000" strokeWidth="3" />
                    <path d="M20 8v4M28 8v4M24 28a4 4 0 100 8 4 4 0 000-8z" stroke="#008000" strokeWidth="3" />
                  </svg>
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl sm:text-3xl font-bold text-green-700 mb-4">R&D Service</h2>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Being an innovative R&D driven pharmaceutical company, Spansules has the required expertise and processes to Design & Development of Novel Controlled Drug Delivery System as per customer requirements. Our unique and flexible technology allows us to quickly develop complex delivery solutions considerably in a short time.
                </p>
              </div>
            </div>
          </section>

          {/* Analytical Services */}
          <section className="mb-12 sm:mb-16">
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
              <div className="md:w-1/3">
                <div className="bg-green-50 p-6 rounded-xl flex justify-center items-center h-48 sm:h-64">
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 48 48" fill="none">
                    <path d="M14 42h20M24 6v10M15 26l18 10M24 16a3 3 0 100 6 3 3 0 000-6z" stroke="#008000" strokeWidth="3" />
                    <path d="M33 26a3 3 0 100 6 3 3 0 000-6zM15 26a3 3 0 100 6 3 3 0 000-6z" stroke="#008000" strokeWidth="3" />
                  </svg>
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl sm:text-3xl font-bold text-green-700 mb-4">Analytical Services</h2>
                <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                  Our customers get to benefit from our analytical capabilities of the highest level required by the industry standards. Our skilled professionals utilizing modern techniques ensure the efficiency of the testing where the main focus is always on product quality and safety.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  It covers all areas like Process Validation, Analytical Method Development and Validation, Stability Study, Accelerated Stability Study, Compatibility Study, and more.
                </p>
              </div>
            </div>
          </section>

          {/* Regulatory Support */}
          <section className="mb-12 sm:mb-16">
            <div className="flex flex-col md:flex-row-reverse gap-6 sm:gap-8">
              <div className="md:w-1/3">
                <div className="bg-green-50 p-6 rounded-xl flex justify-center items-center h-48 sm:h-64">
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 48 48" fill="none">
                    <path d="M12 8h24v32H12z" fill="#e6f7ff" stroke="#008000" strokeWidth="3" />
                    <path d="M18 16h12M18 24h12M18 32h8" stroke="#008000" strokeWidth="3" />
                    <path d="M36 16h4v4h-4zM36 28h4v4h-4z" fill="#008000" />
                  </svg>
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl sm:text-3xl font-bold text-green-700 mb-4">Regulatory Support</h2>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  As a part of our chain, our customers can take benefit of our regulatory services. Our pharmaceutical regulatory services offer the best solutions to meet all kinds of challenges for the pharmaceutical filing process. We can provide the CTD (Common Technical Document) format as a part of Drug Product/ANDA filing with our products.
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

      
    </div>
  );
};

export default ExpertisePage;