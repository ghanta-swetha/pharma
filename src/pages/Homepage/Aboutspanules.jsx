import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const AboutSpansules = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 }); // Trigger when 20% of component is visible
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const imageVariants = {
    hidden: { scale: 0.4, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { x: "100vw", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <div ref={ref} className="container mx-auto px-4 mt-[40px] py-12">
      {/* For desktop (lg screens): Original layout */}
      {/* For medium and small screens: Content on top, image below */}
      <div className="flex flex-col-reverse lg:flex-row xl:gap-44 gap-24  items-center justify-center">
        {/* Image Section - Below on medium/small screens, left on desktop */}
        <motion.div
          className="w-full lg:w-auto flex-shrink-0 mt-8 lg:mt-0"
          initial="hidden"
          animate={controls}
          variants={imageVariants}
        >
          <div
            className="w-full h-[300px] mt-[-90px] lg:mt-0 sm:h-[400px] lg:w-[455px] lg:h-[455px] rounded-[12px] bg-cover bg-center bg-no-repeat bg-gray-300 mx-auto"
            style={{
              backgroundImage: "url('/assets/homepage/about.png')",
            }}
          ></div>
        </motion.div>

        {/* Text Section - On top for medium/small screens, right on desktop */}
        <motion.div
          className="flex flex-col max-w-full lg:max-w-[625px] text-center lg:text-left"
          initial="hidden"
          animate={controls}
          variants={textVariants}
        >
          <h2 className="text-[#008000] font-bold text-3xl md:text-4xl lg:text-[48px] font-['Quicksand'] self-stretch mb-4 whitespace-normal mx-auto lg:mx-0">
            About Spansules
          </h2>

          <p className="text-black font-['Roboto'] text-base sm:text-lg lg:text-[20px] font-normal leading-[24px] lg:leading-[26px] self-stretch mb-4">
            Established in 2000, Spansules is a fully integrated Pharmaceutical company present across the entire Pharmaceutical value chain firm for Ready to fill Pellets, MUPS (Multi Unit Particulate System)  and Directly Compressible Granules, distributing  entire country and overseas.
          </p>

          <p className="text-black font-['Roboto'] text-base sm:text-lg lg:text-[20px] font-normal leading-[24px] lg:leading-[26px] self-stretch mb-8">
            To be the Partner of choice for quality conscious
            Generic Manufacturers Globally, with best Quality products through Research & Development
          </p>

          {/* Certifications */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              {/* Replaced green circle with certification image */}
              <div className="w-7 h-7 lg:w-8 lg:h-8 aspect-square rounded-full overflow-hidden flex-shrink-0">
                <img
                  src="/assets/homepage/Quality (2).png"
                  alt="Certification Icon"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-black font-['Quicksand'] text-xl md:text-2xl font-bold capitalize">
                Certifications
              </h3>
            </div>

            <div className="flex flex-col gap-3 pl-2">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <div className="text-[#008000]">
                  <svg width="14" height="14" className="lg:w-[16px] lg:h-[16px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-black font-['Roboto'] text-sm lg:text-base">WHO-GMP Certified Company</p>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <div className="text-[#008000]">
                  <svg width="14" height="14" className="lg:w-[16px] lg:h-[16px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-black font-['Roboto'] text-sm lg:text-base">ISO 9001:2015 Certified Company</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSpansules;