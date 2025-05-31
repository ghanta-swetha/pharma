import React from "react";
import { motion } from "framer-motion";

export default function TrustSection() {
  return (
    <div className="bg-white p-4 lg:px-9  sm:p-6 font-sans max-w-6xl mx-auto relative overflow-hidden">
      <h2 className="text-2xl sm:text-3xl font-bold text-center font-[Quicksand] text-green-600 mb-6 sm:mb-8">
        Why Clients Trust Us
      </h2>

      {/* Desktop Layout (lg and above) */}
      <div className="hidden lg:flex relative flex-wrap md:flex-nowrap gap-6 sm:gap-10 md:gap-24 items-start">
        {/* Image section stays in front */}
        <div className="w-full md:w-1/3 z-20 relative">
          <div className="rounded-lg overflow-hidden group transition-transform duration-300">
            <motion.img
              src="/assets/aboutpage/clientstrustus.png"
              alt="Laboratory technician working"
              className="w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
            />
          </div>
        </div>

        {/* Right-side content animates from behind image */}
        <motion.div
          initial={{ x: -200, opacity: 0, zIndex: -10 }}
          whileInView={{ x: 0, opacity: 1, zIndex: 10 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-6 sm:gap-y-8 relative z-10"
        >
          {[
            {
              icon: "client1.png",
              title: "Strict Quality Control",
              desc: "We follow WHO-GMP and ISO 9001:2015 standards to ensure consistent product quality.",
            },
            {
              icon: "client2.png",
              title: "Global Reach",
              desc: "Trusted by pharmaceutical companies in over 30+ countries.",
            },
            {
              icon: "client3.png",
              title: "Advanced Manufacturing",
              desc: "State-of-the-art facilities equipped with modern technology and automation.",
            },
            {
              icon: "client4.png",
              title: "Custom Formulations",
              desc: "Flexible manufacturing for pellets, granules, and specialized drug delivery systems.",
            },
            {
              icon: "client5.png",
              title: "Proven Track Record",
              desc: "Years of experience serving leading pharmaceutical brands worldwide.",
            },
            {
              icon: "client6.png",
              title: "End-to-End Support",
              desc: "From R&D to formulation, we offer complete pharmaceutical manufacturing services.",
            },
          ].map((item, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-3 sm:gap-4 mb-2">
                <div
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gray-50 flex items-center justify-center shadow-md flex-shrink-0"
                  style={{
                    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                  }}
                >
                  <img
                    src={`/assets/aboutpage/${item.icon}`}
                    alt={item.title}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                </div>
                <h3 className="font-semibold font-[Quicksand] text-base sm:text-lg">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm font-[Roboto] text-gray-600">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Mobile and Medium Screen Layout (below lg) */}
      <div className="lg:hidden">
        {/* Image section on top */}
        <div className="w-full mb-8">
          <div className="rounded-lg overflow-hidden group transition-transform duration-300">
            <motion.img
              src="/assets/aboutpage/clientstrustus.png"
              alt="Laboratory technician working"
              className="w-full md:h-[500px] object-cover transform transition-transform duration-500 group-hover:scale-110"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
            />
          </div>
        </div>

        {/* Content section below image */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-1 px-3 md:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-6 sm:gap-y-8"
        >
          {[
            {
              icon: "client1.png",
              title: "Strict Quality Control",
              desc: "We follow WHO-GMP and ISO 9001:2015 standards to ensure consistent product quality.",
            },
            {
              icon: "client2.png",
              title: "Global Reach",
              desc: "Trusted by pharmaceutical companies in over 30+ countries.",
            },
            {
              icon: "client3.png",
              title: "Advanced Manufacturing",
              desc: "State-of-the-art facilities equipped with modern technology and automation.",
            },
            {
              icon: "client4.png",
              title: "Custom Formulations",
              desc: "Flexible manufacturing for pellets, granules, and specialized drug delivery systems.",
            },
            {
              icon: "client5.png",
              title: "Proven Track Record",
              desc: "Years of experience serving leading pharmaceutical brands worldwide.",
            },
            {
              icon: "client6.png",
              title: "End-to-End Support",
              desc: "From R&D to formulation, we offer complete pharmaceutical manufacturing services.",
            },
          ].map((item, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-3 sm:gap-4 mb-2">
                <div
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gray-50 flex items-center justify-center shadow-md flex-shrink-0"
                  style={{
                    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                  }}
                >
                  <img
                    src={`/assets/aboutpage/${item.icon}`}
                    alt={item.title}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                </div>
                <h3 className="font-semibold font-[Quicksand] text-base sm:text-lg">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm font-[Roboto] text-gray-600">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}