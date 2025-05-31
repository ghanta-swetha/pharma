import React from "react";

const AboutHero = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        height: "416px",
        flexShrink: 0,
        backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.28) 0%, rgba(0, 0, 0, 0.28) 100%), url('/assets/aboutpage/abouthero.png')",
        backgroundColor: "lightgray",
        backgroundPosition: "50%",
        backgroundSize: "cover",
      }}
    >
      {/* Heading */}
      <h1 className="text-white text-center font-[Quicksand] text-[64px] font-bold leading-normal">
        About Us
      </h1>
      {/* Paragraph */}
      <p className="text-white text-center font-[Roboto] text-[24px] font-normal leading-normal self-stretch mt-2">
        Committed to Excellence in Pharmaceutical Manufacturing.
      </p>
    </div>
  );
};

export default AboutHero;