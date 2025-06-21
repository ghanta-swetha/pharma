import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LatestNewsEvents() {
  const navigate = useNavigate();

  const newsCards = [
    {
      id: 1,
      image: "/assets/homepage/newsimage1.png",
      title: "5 Essential Nutrients To Boost Your Daily Energy Levels",
      admin: "Store Admin",
      date: "31 May 2021"
    },
    {
      id: 2,
      image: "/assets/news/image1.jpeg",
      title: "5 Essential Nutrients To Boost Your Daily Energy Levels",
      admin: "Store Admin",
      date: "31 May 2021"
    },
    {
      id: 3,
      image: "/assets/news/image2.jpeg",
      title: "5 Essential Nutrients To Boost Your Daily Energy Levels",
      admin: "Store Admin",
      date: "31 May 2021"
    }
  ];

  return (
    <div className="flex flex-col  items-center bg-[#F2F2F2] max-w-[1440px] mx-auto py-10 px-5 md:px-6 lg:px-16">
      {/* Header */}
      <div className="w-full mb-8 md:mb-10">
        <h2 className="text-[#008000] font-['Quicksand'] text-3xl md:text-4xl lg:text-5xl font-bold capitalize">
          Latest News & Events
        </h2>
        <p className="text-black font-['Roboto'] text-base md:text-lg lg:text-xl font-normal leading-normal md:leading-[26px] capitalize mt-2">
          We Bring You The Latest In Healthcare Trends, Medical Research, And Wellness Advice. Browse Our Blog And Empower Yourself With Knowledge.
        </p>
      </div>

      {/* Layout Wrapper */}
      <div className="w-full">
        {/* For large screens: 3 cards in a row with larger sizes and better spacing */}
        <div className="hidden lg:grid grid-cols-3 gap-8 max-w-[1280px] mx-auto">
          {newsCards.map((card) => (
            <Card key={card.id} card={card} navigate={navigate} isLgScreen={true} />
          ))}
        </div>

        {/* For medium screens: 2 cards on top row, 1 centered below */}
        <div className="hidden md:flex lg:hidden flex-wrap justify-center gap-4">
          {/* First two cards side-by-side */}
          {newsCards.slice(0, 2).map((card) => (
            <div key={card.id} className="w-[48%]">
              <Card card={card} navigate={navigate} isLgScreen={false} />
            </div>
          ))}
          {/* Third card centered below */}
          <div className="w-[60%] mt-4">
            <Card card={newsCards[2]} navigate={navigate} isLgScreen={false} />
          </div>
        </div>

        {/* For mobile screens: stack all vertically */}
        <div className="flex flex-col gap-4 md:hidden">
          {newsCards.map((card) => (
            <Card key={card.id} card={card} navigate={navigate} isLgScreen={false} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Reusable Card component
const Card = ({ card, navigate, isLgScreen }) => (
  <div className={`flex flex-col bg-white rounded-2xl shadow p-5 ${isLgScreen ? 'gap-4' : 'gap-3'}`}>
    {/* Image */}
    <div className={`w-full ${isLgScreen ? 'h-[250px]' : 'h-[197px]'} rounded-xl overflow-hidden mb-1`}>
      <img
        src={card.image}
        alt="News"
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
    </div>

    {/* Info */}
    <div className="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width={isLgScreen ? "24" : "20"} height={isLgScreen ? "24" : "20"} fill="none" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C13.3132..." fill="black" />
      </svg>
      <span className={`text-xs ${isLgScreen ? 'font-bold' : 'font-semibold'} ml-1`}>{card.admin}</span>
      <span className="mx-2 text-xs">•</span>
      <span className={`text-xs ${isLgScreen ? 'font-bold' : 'font-semibold'}`}>{card.date}</span> 
    </div>

    {/* Title */}
    <h3 className={`font-semibold capitalize ${isLgScreen ? 'text-2xl' : 'text-lg md:text-xl'}`}>
      {card.title}
    </h3>

    {/* Button */}
    <button
      onClick={() => navigate('/news')}
      className={`w-full ${isLgScreen ? 'py-4' : 'py-3'} rounded-lg bg-[#008000] text-white font-['Roboto'] font-medium text-center mt-1 hover:bg-[#006800]`}
    >
      Know More
    </button>
  </div>
);