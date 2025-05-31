"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { useRef, useEffect } from "react"

const CompanyInfoSections = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const imageVariants = {
    hidden: { y: -150, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  }

  return (
    <div ref={ref} className="container mx-auto px-4 py-12">
      {/* Custom responsive grid layout:
          - Small screens: 1 column (stacked)
          - Medium screens: 2 columns on top, 1 below (as in the image)
          - Large screens: 3 columns in a row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {/* Our Vision Section */}
        <div className="flex flex-col items-center max-w-sm mx-auto">
          <h2 className="text-black text-center font-['Roboto'] text-2xl sm:text-[26px] md:text-[28px] font-semibold mb-3 sm:mb-4 self-stretch">
            Our Vision
          </h2>
          <p className="text-black text-center font-['Roboto'] text-sm sm:text-base font-normal leading-[20px] sm:leading-[22px] mb-5 sm:mb-6 self-stretch">
            The vision of Spansules is to acquire specializations in manufacture and marketplace of all segments of
            Generic Drugs that can include product...
          </p>
          <motion.div
            className="group relative overflow-hidden w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px] rounded-full"
            initial="hidden"
            animate={controls}
            variants={imageVariants}
          >
            <img
              src="/assets/homepage/company1.png"
              alt="Vision"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </motion.div>
        </div>

        {/* Why Spansules Section */}
        <div className="flex flex-col items-center max-w-sm mx-auto">
          <h2 className="text-black text-center font-['Roboto'] text-2xl sm:text-[26px] md:text-[28px] font-semibold mb-3 sm:mb-4 self-stretch">
            Why Spansules?
          </h2>
          <p className="text-black text-center font-['Roboto'] text-sm sm:text-base font-normal leading-[20px] sm:leading-[22px] mb-5 sm:mb-6 self-stretch">
            A wide variety of products.
            <br />
            Best quality
            <br />
            On time Delivery
            <br />
            Very competitive price
          </p>
          <motion.div
            className="group relative overflow-hidden w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px] rounded-full"
            initial="hidden"
            animate={controls}
            variants={imageVariants}
          >
            <img
              src="/assets/homepage/company2.png"
              alt="Why Spansules"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </motion.div>
        </div>

        {/* Our Mission Section - For medium screens, this will be centered below the first two */}
        <div className="flex flex-col items-center max-w-sm mx-auto md:col-span-2 lg:col-span-1 md:max-w-md lg:max-w-sm">
          <h2 className="text-black text-center font-['Roboto'] text-2xl sm:text-[26px] md:text-[28px] font-semibold mb-3 sm:mb-4 self-stretch">
            Our Mission
          </h2>
          <p className="text-black text-center font-['Roboto'] text-sm sm:text-base font-normal leading-[20px] sm:leading-[22px] mb-5 sm:mb-6 self-stretch">
            World leader in Pellet Technology.
            <br />
            Contributing towards superior healthcare through innovation.
            <br />
            Maximizing value for our customers.
          </p>
          <motion.div
            className="group relative overflow-hidden w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px] rounded-full"
            initial="hidden"
            animate={controls}
            variants={imageVariants}
          >
            <img
              src="/assets/homepage/company3.png"
              alt="Mission"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default CompanyInfoSections
