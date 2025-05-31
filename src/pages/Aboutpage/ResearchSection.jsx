import React from "react";
import { motion } from "framer-motion";

const ResearchSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 py-10 max-w-7xl mx-auto px-4 lg:px-9 xl:px-4
                    md:gap-16 lg:flex-row lg:gap-30 xl:gap-36">
      {/* Image Section: Appears first on small/medium screens, right on large screens */}
      <motion.div
        className="order-1 lg:order-2"
        initial={{ x: 150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <div
          className="rounded-[24px] bg-cover bg-center bg-no-repeat w-[315px] h-[303px] 
                     md:w-[700px] md:h-[400px] lg:w-[515px] lg:h-[496px]"
          style={{
            flexShrink: 0,
            backgroundImage: "url('/assets/aboutpage/researchimage.png')",
            backgroundColor: "lightgray",
            backgroundPosition: "50%",
            backgroundSize: "cover",
          }}
        />
      </motion.div>

      {/* Paragraph Section: Appears below image on small/medium screens, left on large screens */}
      <div className="flex flex-col max-w-md md:max-w-[700px] lg:max-w-[800px] text-start order-2 lg:order-1 lg:text-left">
        <p className="text-black font-[Roboto] text-[16px] leading-[22px] md:text-[18px] md:leading-[22px]">
          With all manufacturing facilities being supported by excellent infrastructure and compliance to the GMP requirements, Spansules has crossed numerous milestones in a comparatively short period of time.
          <br /><br />
          With a positive vision, focused approach, innovative ideas and team work, Spansules had put its active presence in the national and international market for its products.
          <br /><br />
          As a part of research, we continue to invest in the development and application of novel drug delivery technologies to meet future challenges.
          <br /><br />
          As a part of pharmaceutical chain and business strategy, we support the companies to launch new products within short period of time, by using expertise & innovative technologies.
        </p>
      </div>
    </div>
  );
};

export default ResearchSection;