import React from "react";

const TrustedClients = () => {
  const logos = [
    { src: "/assets/ourclients/image1.jpg", className: "brightness-110", alt: "Client 1 Logo" },
    { src: "/assets/ourclients/Picture1.jpg", className: "opacity-90", alt: "Client 2 Logo" },
    { src: "/assets/ourclients/image3.png", className: "rounded-lg", alt: "Client 3 Logo" },
    { src: "/assets/ourclients/Picture2.jpg", className: "scale-105", alt: "Client 4 Logo" },
    { src: "/assets/ourclients/image5.jpg", className: "w-[200px]", alt: "Client 5 Logo" },
    { src: "/assets/ourclients/image6.png", className: "scale-105", alt: "Client 6 Logo" },
    { src: "/assets/ourclients/image2.png", className: "scale-105", alt: "Client 7 Logo" },
    { src: "/assets/ourclients/Picture2.jpg", className: "scale-105", alt: "Client 8 Logo" },
    { src: "/assets/ourclients/Picture3.png", className: "scale-105", alt: "Client 9Logo" },
  ];

  return (
    <div className="w-full bg-white">
      <div className="flex flex-col items-center md:mt-[-60px] lg:mt-[-20px] xl:mt-[0px] py-16  max-w-[1440px] mx-auto px-6 ">
        <h2 className="text-[#008000] font-['Quicksand'] md:text-[42px] text-[30px] font-bold md:leading-[60px] text-center max-w-[1100px] mt-4">
          Our Clients
        </h2>
        <p className="text-black font-['Roboto'] text-[18px] font-normal leading-8 text-center md:w-[600px] lg:w-[900px] xl:w-[1200px] mt-8">
          We take pride in partnering with leading pharmaceutical companies worldwide, delivering high-quality formulations backed by innovation and strict regulatory compliance
        </p>

        {/* Scrolling Logo Section (Strictly Within 1440px) */}
        <div className="w-full max-w-[1400px] overflow-hidden relative mt-12  py-8">
          <div className="flex items-center animate-scroll w-max">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex justify-center items-center w-[250px] mx-0">
                <img src={logo.src} alt={logo.alt} className={`h-[105px] ${logo.className}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Tailwind Keyframe Animation */}
        <style>
          {`
            * {
              box-sizing: border-box;
            }
            @keyframes scroll {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
            .animate-scroll {
              animation: scroll 20s linear infinite;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default TrustedClients;