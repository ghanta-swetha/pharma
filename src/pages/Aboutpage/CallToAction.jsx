import React from "react";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <div
      className="relative flex flex-col mb-[20px] items-center justify-center bg-cover bg-center bg-no-repeat px-4 sm:px-6"
      style={{
        height: "416px",
        flexShrink: 0,
        backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.28) 0%, rgba(0, 0, 0, 0.28) 100%), url('/assets/aboutpage/contact us button.png')",
        backgroundColor: "lightgray",
        backgroundPosition: "50%",
        backgroundSize: "cover",
      }}
    >
      {/* Heading */}
      <h2 className="text-white text-center font-[Quicksand] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold leading-normal">
        Looking for a Reliable Manufacturing Partner?
      </h2>
      {/* Paragraph */}
      <p className="text-white text-center font-[Roboto] text-sm sm:text-base md:text-lg lg:text-[24px] font-normal leading-normal mt-4 max-w-4xl">
        Join hands with a WHO-GMP certified manufacturer trusted worldwide.
      </p>
      {/* Button */}
      <button
        onClick={handleContactClick}
        className="mt-6 px-4 py-2 sm:px-6 sm:py-3 bg-white text-[#008000] font-[Roboto] font-medium rounded-lg text-sm sm:text-base transition-colors hover:bg-gray-100"
      >
        Contact Us
      </button>
    </div>
  );
};

export default CallToAction;