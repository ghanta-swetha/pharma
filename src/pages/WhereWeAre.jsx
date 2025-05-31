import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

// Contact Page Component
const Contact = () => (
  <div className="flex flex-col items-center py-6 sm:py-8 lg:py-10 w-full bg-white">
    <h1 className="text-[#008000] text-center font-['Quicksand'] text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold sm:text-center">
      Contact Us
    </h1>
    <p className="text-black text-center font-['Roboto'] text-base sm:text-lg md:text-xl lg:text-[20px] mt-2 sm:mt-4">
      Reach out to discuss partnership opportunities or inquiries.
    </p>
    <div className="mt-6 sm:mt-8 w-full max-w-sm sm:max-w-md px-4 sm:px-0">
      <div className="flex flex-col gap-3 sm:gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-2 sm:p-3 border rounded-[8px] font-['Roboto'] text-sm sm:text-base lg:text-[16px]"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-2 sm:p-3 border rounded-[8px] font-['Roboto'] text-sm sm:text-base lg:text-[16px]"
        />
        <textarea
          placeholder="Your Message"
          className="p-2 sm:p-3 border rounded-[8px] font-['Roboto'] text-sm sm:text-base lg:text-[16px] h-24 sm:h-32"
        ></textarea>
        <button
          type="button"
          onClick={() => alert("Form submission is not implemented in this demo.")}
          className="px-4 sm:px-6 py-2 sm:py-3 bg-[#008000] text-white rounded-[8px] font-['Montserrat'] text-sm sm:text-base lg:text-[16px] font-semibold"
        >
          Send Message
        </button>
      </div>
    </div>
    <div className="w-full mt-8 sm:mt-10">
      <Footer />
    </div>
  </div>
);

// Main App Component
const App = () => {
  const navigate = useNavigate();
  const cardsData = [
    {
      title: "30+ Countries Served",
      description: "Delivering pharmaceutical solutions across Asia, Europe, the Middle East, and beyond",
      icon: "/assets/wherearewe/cardimage1.png",
    },
    {
      title: "5 Global Manufacturing Sites",
      description: "Strategically located facilities ensure efficient production and global supply chain coverage",
      icon: "/assets/wherearewe/cardimage2.png",
    },
    {
      title: "100+ B2B Clients Worldwide",
      description: "Trusted by leading pharma brands for consistent quality and regulatory compliance",
      icon: "/assets/wherearewe/cardimage3.png",
    },
  ];

  const generalCountries = [
    { name: "Algeria", flag: "/assets/wherearewe/algeria.png" },
    { name: "Bangladesh", flag: "/assets/wherearewe/bangladesh.png" },
    { name: "Brazil", flag: "/assets/wherearewe/brazil.png" },
    { name: "Dubai", flag: "/assets/wherearewe/dubai.png" },
    { name: "France", flag: "/assets/wherearewe/france.png" },
    { name: "GCC", flag: "/assets/wherearewe/gcc.png" },
    { name: "Guatemala", flag: "/assets/wherearewe/guatemala.png" },
    { name: "Iran", flag: "/assets/wherearewe/iran.png" },
    { name: "Nigeria", flag: "/assets/wherearewe/nigeria.png" },
    { name: "Pakistan", flag: "/assets/wherearewe/pakisthan.png" },
    { name: "Syria", flag: "/assets/wherearewe/syria.png" },
    { name: "Tunisia", flag: "/assets/wherearewe/tunisia.png" },
    { name: "Kenya", flag: "/assets/wherearewe/kenya.png" },
  ];

  const southEastAsiaCountries = [
    { name: "Indonesia", flag: "/assets/wherearewe/indonesia.png" },
    { name: "Malaysia", flag: "/assets/wherearewe/malaysia.png" },
    { name: "Myanmar", flag: "/assets/wherearewe/myanmar.png" },
    { name: "Philippines", flag: "/assets/wherearewe/philippines.png" },
    { name: "Thailand", flag: "/assets/wherearewe/thailand.png" },
    { name: "Vietnam", flag: "/assets/wherearewe/vietnam.png" },
  ];

  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <div
        className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[416px] flex flex-col items-center justify-center"
        style={{
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.28), rgba(0, 0, 0, 0.28)), url(/assets/wherearewe/heroimage.png) center/cover no-repeat",
        }}
      >
        <h1 className="text-white text-center font-['Quicksand'] text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold sm:text-center">
          GLOBAL PRESENCE, LOCAL IMPACT
        </h1>
        <p className="text-white text-center font-['Roboto'] text-base sm:text-lg md:text-xl lg:text-[24px] mt-2 sm:mt-4">
          DELIVERING TRUSTED PHARMACEUTICAL SOLUTIONS ACROSS BORDERS
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col items-center py-6 sm:py-8 lg:py-10  bg-white w-full">
        <h2 className="text-[#008000] text-center font-['Quicksand'] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold sm:text-center">
          GLOBAL STRENGTH, PROVEN EXCELLENCE
        </h2>
        <p className="text-black text-center font-['Roboto'] text-base sm:text-lg md:text-xl lg:text-[20px] mt-2 sm:mt-4 max-w-2xl">
          Our worldwide decades of experience power our commitment to quality manufacturing
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-4 xl:gap-8 mt-6 sm:mt-10 px-4 sm:px-10 md:px-6  flex-nowrap justify-center">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 sm:p-8 md:p-6 lg:p-10 rounded-[24px] bg-white shadow-md md:shadow-lg w-full md:w-[224px] lg:w-[320px] gap-3 md:gap-4 lg:gap-4 border md:border-gray-200"
            >
              <div className="w-12 sm:w-16 md:w-20 lg:w-[68px] h-12 sm:h-16 md:h-20 lg:h-[68px] bg-[#F8F8F8] rounded-full flex items-center justify-center shadow">
                <img src={card.icon} alt="icon" className="w-6 sm:w-8 md:w-10 lg:w-[32px] h-6 sm:h-8 md:h-10 lg:h-[32px]" />
              </div>
              <h5 className="text-black text-center font-['Quicksand'] text-base sm:text-lg md:text-lg lg:text-[20px] font-bold">
                {card.title}
              </h5>
              <p className="text-black text-center font-['Roboto'] text-sm sm:text-base md:text-sm lg:text-[16px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Where We Are Section */}
      <div className="flex flex-col items-center py-6 sm:py-8 lg:py-10 w-full">
        <h2 className="text-[#008000] text-center font-['Quicksand'] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold sm:text-center">
          WHERE WE ARE
        </h2>
        <div
          className="flex flex-col px-4 mt-[20px] sm:px-8 md:px-20 xl:px-[160px] py-20 sm:py-40 md:py-60 lg:py-[300px] gap-6 sm:gap-8 w-full"
          style={{
            background:
              "url(/assets/wherearewe/backgroundmap.png) center/cover no-repeat",
          }}
        >
          {/* General Countries */}
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 md:mt-[-150px] ml-0 lg:ml-[80px] xl:ml-[100px] justify-center">
            {generalCountries.map((country, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row lg:items-center p-3 sm:p-4 rounded-[8px] bg-[rgba(255,255,255,0.40)] backdrop-blur-[2px] w-full max-w-[140px] sm:max-w-[160px] lg:max-w-[180px] gap-2 sm:gap-4 items-center"
              >
                <div
                  className="w-12 sm:w-16 lg:w-[63px] h-6 sm:h-8 lg:h-[34px]"
                  style={{
                    background: `url(${country.flag}) center/cover no-repeat`,
                  }}
                />
                <p className="text-black font-['Roboto'] text-xs sm:text-base lg:text-[16px] text-center whitespace-nowrap">
                  {country.name}
                </p>
              </div>
            ))}
          </div>

          {/* South East Asia Countries */}
          <h3 className="text-[#004600] text-center font-['Quicksand'] text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-bold mt-6 sm:mt-8 sm:text-center">
            SOUTH EAST ASIA COUNTRIES
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 ml-0 lg:ml-[80px] xl:ml-[100px] justify-center">
            {southEastAsiaCountries.map((country, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row lg:items-center p-3 sm:p-4 rounded-[8px] bg-[rgba(255,255,255,0.40)] backdrop-blur-[2px] w-full max-w-[140px] sm:max-w-[160px] lg:max-w-[180px] gap-2 sm:gap-4 items-center"
              >
                <div
                  className="w-12 sm:w-16 lg:w-[63px] h-6 sm:h-8 lg:h-[34px]"
                  style={{
                    background: `url(${country.flag}) center/cover no-repeat`,
                  }}
                />
                <p className="text-black font-['Roboto'] text-xs sm:text-base lg:text-[16px] text-center whitespace-nowrap">
                  {country.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Become a Partner Section */}
      <div
        className="flex flex-col sm:flex-row justify-center items-center px-4 sm:px-10 md:px-20 lg:px-[205px] pt-20 sm:pt-24 md:pt-32 lg:pt-[143px] pb-16 sm:pb-20 md:pb-24 lg:pb-[117px] w-full"
        style={{
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.24), rgba(0, 0, 0, 0.24)), url(/assets/wherearewe/becameapartner.png) center/cover no-repeat",
        }}
      >
        <div className="flex flex-col items-center text-center">
          <h2 className="text-white text-center font-['Quicksand'] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold sm:text-center">
            WANT TO PARTNER IN YOUR COUNTRY?
          </h2>
          <p className="text-white text-center font-['Roboto'] text-base sm:text-lg md:text-xl lg:text-[20px] mt-2 sm:mt-4">
            We’re expanding rapidly and open to trusted collaborations.
          </p>
          <button
            className="px-4 sm:px-6 py-2 sm:py-3 mt-4 sm:mt-6 bg-white rounded-[8px]"
            onClick={() => navigate('/contact')}
          >
            <span className="text-[#008000] font-['Montserrat'] text-sm sm:text-base lg:text-[16px] font-semibold capitalize">
              Become a Partner
            </span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full mt-4">
        <Footer />
      </div>
    </div>
  );
};

// Router Setup
const MainApp = () => (
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);

export default MainApp;