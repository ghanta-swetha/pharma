import React from "react";
import { motion } from "framer-motion";

const PharmacyServices = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0  md xl:gap-20 py-10 px-4 lg:px-9 xl:px-4 max-w-7xl mx-auto">
      {/* Left Section: Image with Stats */}
      <div className="relative w-full lg:w-auto mb-10 lg:mb-0 lg:mr-[100px]">
        {/* Stats Box Animation (Triggers on Scroll) */}
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="absolute md:right-[0px] right-[-5px] bottom-0 transform translate-x-1/3 bg-white  rounded-xl shadow-md ,  w-[300px] md:w-[350px] h-[90px] py-3 px-2 z-10 lg:right-[-30px] lg:bottom-1/4 lg:w-[350px] lg:h-[90px] md:w-[300px] md:h-[80px] md:right-0 md:bottom-[-40px] md:translate-x-0 sm:w-[280px] sm:h-[70px] sm:right-0  sm:translate-x-0"
        >
          <div className="flex items-center  justify-between">
            {/* Stat 1: Experience */}
            <div className="flex flex-col items-center flex-1">
              <span className="text-green-600 text-center font-[Quicksand] font-bold text-2xl lg:text-4xl md:text-3xl sm:text-2xl">25+</span>
              <span className="text-black text-center font-[Quicksand] font-bold text-xs lg:text-[16px] md:text-sm sm:text-xs">Experience</span>
            </div>

            {/* Stat 2: Clients */}
            <div className="flex flex-col items-center flex-1">
              <span className="text-green-600 text-center font-[Quicksand] font-bold text-2xl lg:text-4xl md:text-3xl sm:text-2xl">16+</span>
              <span className="text-black text-center font-[Quicksand] font-bold text-xs lg:text-[16px] md:text-sm sm:text-xs">Clients</span>
            </div>

            {/* Stat 3: Products */}
            <div className="flex flex-col items-center flex-1">
              <span className="text-green-600 text-center font-[Quicksand] font-bold text-2xl lg:text-4xl md:text-3xl sm:text-2xl">75+</span>
              <span className="text-black text-center font-[Quicksand] font-bold text-xs lg:text-[16px] md:text-sm sm:text-xs">Products</span>
            </div>
          </div>
        </motion.div>

        {/* Image Animation (Triggers on Scroll) */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="rounded-2xl overflow-hidden w-full lg:w-[515px] h-[320px] lg:h-[496px] md:h-[530px] sm:h-[300px]"
        >
          <img
            src="/assets/aboutpage/aboutimage1.png"
            alt="Pharmacy professional"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Right Section: Heading and Paragraph */}
      <div className="flex flex-col gap-6 w-full  lg:w-auto">
        {/* Heading */}
        <h2 className="font-bold text-3xl  font-[Quicksand] lg:text-5xl md:w-[700px] lg:w-[350px] xl:w-[600px] md:text-4xl leading-tight text-start lg:text-left">
          <div className="text-green-600">we are professional </div>
          <div className="text-green-600">pharmacy & medical services</div>
        </h2>

        {/* Paragraphs */}
        <div className="space-y-6">
          <p className="text-black text-base font-[Roboto] md:text-lg leading-relaxed text-start lg:text-left">
            Spansules started in 2000 & now it is one of the leading pellets manufacturing pharmaceutical company with manufacturing facilities and R&D facilities spearheading landmark research in the area of Formulation Development.
          </p>

          <p className="text-black text-base font-[Roboto] md:text-lg leading-relaxed text-start lg:text-left">
            Spansules is a WHO-GMP Certified Company with manufacturing practices and facilities that conform to that every Spansules product meets the most stringent quality standards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PharmacyServices;