"use client"
import { motion } from "framer-motion"

const SpansulesPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-9 xl:px-4 py-6 sm:py-8 flex flex-col gap-8 sm:gap-12">
      {/* Our Vision Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
        {/* Left Image (slide from left) */}
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="w-full md:w-1/2"
        >
          <div className="rounded-2xl overflow-hidden h-56 sm:h-64 md:h-80">
            <img
              src="/assets/aboutpage/visionimage.png"
              alt="Laboratory microscope"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <h2 className="text-green-600 font-bold text-2xl sm:text-3xl font-[Quicksand] md:text-4xl mb-3 sm:mb-4">
            Our Vision
          </h2>
          <p className="text-black text-sm sm:text-base md:text-lg font-[Roboto] leading-relaxed">
           To be the most admired company for manufacturing of Ready To fill Pellets and Directly Compressible Granules in various therapeutic segments  contributing towards superior health care at affordable cost.
          By delivering products of  superior quality through Novel technology which contributes significantly through process excellence.

          </p>
        </div>
      </div>

      {/* Why Spansules Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
        {/* Left Content - Order changes on mobile */}
        <div className="w-full md:w-1/2 order-2 md:order-1 mt-4 md:mt-0">
          <h2 className="text-green-600 font-bold text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">Why Spansules?</h2>
          <ul className="list-none font-[Roboto] space-y-1 sm:space-y-2 text-sm sm:text-base">
            {[
              "A wide range of products",
              "Best quality",
              "On time Delivery",
              "Very competitive prices",
              "100% responsibility to our product supplies",
              "Full Technical / Regulatory support to customer",
              "24 hours a day, 7 days a week services.",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5 sm:mt-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image (slide from right) */}
        <motion.div
          initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="w-full md:w-1/2 order-1 md:order-2"
        >
          <div className="rounded-2xl overflow-hidden h-56 sm:h-64 md:h-80">
            <img
              src="/assets/aboutpage/spansulesimage.png"
              alt="Pharmaceutical pills and capsules"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Our Mission Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
        {/* Left Image (slide from left) */}
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="w-full md:w-1/2"
        >
          <div className="rounded-2xl overflow-hidden h-56 sm:h-64 md:h-80">
            <img src="/assets/aboutpage/image3.png" alt="Laboratory equipment" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <h2 className="text-green-600 font-bold text-2xl sm:text-3xl font-[Quicksand] md:text-4xl mb-3 sm:mb-4">
            Our Mission
          </h2>
          <ul className="list-none font-[Roboto] space-y-1 sm:space-y-2 text-sm sm:text-base">
            {[
              "World leader in Pellet Technology",
              "Contributing towards superior healthcare through innovation",
              "Maximizing value for our customers",
              "Delivering high quality Pharmaceuticals",
              "Innovation in Drug Formulations",
              "Sustainability & Ethical Practices",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5 sm:mt-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SpansulesPage
