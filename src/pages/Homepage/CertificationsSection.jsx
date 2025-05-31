"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function CertificationsSection() {
  // State to track which image is clicked (for mobile/tablet)
  const [clickedImage, setClickedImage] = useState(null)
  const [screenSize, setScreenSize] = useState("xl")

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth >= 1280) {
        setScreenSize("xl")
      } else if (window.innerWidth >= 1024) {
        setScreenSize("lg")
      } else {
        setScreenSize("md")
      }
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => {
      window.removeEventListener("resize", checkScreenSize)
    }
  }, [])

  // Animation variants for the image slide-in effect
  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1, // Slow animation (1 second)
        ease: "easeOut",
      },
    },
  }

  // Animation variants for the text fade-in effect (after image animation)
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5, // Fade in over 0.5 seconds
        delay: 1, // Start after the image animation (1 second)
        ease: "easeIn",
      },
    },
  }

  // Handle image click for mobile/tablet
  const handleImageClick = (index) => {
    if (clickedImage === index) {
      setClickedImage(null) // Toggle off if already selected
    } else {
      setClickedImage(index) // Set as selected
    }
  }

  return (
    <>
      {/* Desktop Layout - lg and above */}
      <div className="hidden lg:flex flex-row justify-between items-center w-full py-10 lg:px-[50px]  xl:max-w-[1440px] mx-auto bg-white">
        {/* Left side content */}
        <div className="w-1/2 lg:pr-8 xl:pr-12">
          <h2
            className="text-5xl font-bold mb-6"
            style={{
              color: "#008000",
              fontFamily: "Quicksand",
              fontSize: screenSize === "xl" ? "48px" : "40px",
              fontWeight: 700,
              lineHeight: "normal",
            }}
          >
            OUR CERTIFICATIONS
          </h2>
          <p
            className="text-black"
            style={{
              color: "#000",
              fontFamily: "Roboto",
              fontSize: screenSize === "xl" ? "20px" : "18px",
              fontWeight: 400,
              lineHeight: "26px",
            }}
          >
            Our commitment to quality and excellence is backed by globally recognized certifications. We adhere to the
            highest industry standards to ensure safety, efficacy, and compliance in every product we manufacture.
          </p>
        </div>

        {/* Right side images - displayed side by side with animations */}
        <div className="flex justify-center lg:justify-end lg:space-x-3 xl:space-x-4">
          {/* First certificate image with slide-in animation and hover effect */}
          <motion.div
            className="flex-shrink-0 relative group"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <img
              src="/assets/homepage/certificate1.png"
              alt="FSSAI Certificate"
              className="lg:w-56 xl:w-64 h-auto object-contain"
            />
            {/* Text that appears after the image animation */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            ></motion.div>
            {/* Lighter black blur overlay on hover */}
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 filter blur-[4px]" />
          </motion.div>

          {/* Second certificate image with slide-in animation and hover effect */}
          <motion.div
            className="flex-shrink-0 relative group"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <img
              src="/assets/homepage/certificate2.png"
              alt="ISO 9001:2015 Certificate"
              className="lg:w-56 xl:w-64 h-auto object-contain"
            />
            {/* Text that appears after the image animation */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            ></motion.div>
            {/* Lighter black blur overlay on hover */}
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 filter blur-[4px]" />
          </motion.div>
        </div>
      </div>

      {/* Medium Screen Layout - md to lg */}
      <div className="hidden md:flex lg:hidden flex-col w-full py-12 px-6 bg-white">
        {/* Content section */}
        <div className="w-full mb-12 text-center">
          <h2
            className="text-4xl font-bold mb-6"
            style={{
              color: "#008000",
              fontFamily: "Quicksand",
              fontWeight: 700,
              lineHeight: "normal",
            }}
          >
            OUR CERTIFICATIONS
          </h2>
          <p
            className="text-black text-lg max-w-4xl mx-auto"
            style={{
              fontFamily: "Roboto",
              fontWeight: 400,
              lineHeight: "26px",
            }}
          >
            Our commitment to quality and excellence is backed by globally recognized certifications. We adhere to the
            highest industry standards to ensure safety, efficacy, and compliance in every product we manufacture.
          </p>
        </div>

        {/* Images section - centered with proper spacing */}
        <div className="w-full flex justify-center items-center space-x-8">
          {/* First certificate image */}
          <motion.div
            className="flex-shrink-0 relative cursor-pointer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
            onClick={() => handleImageClick(0)}
          >
            <img
              src="/assets/homepage/certificate1.png"
              alt="GMP Certificate"
              className="w-72 h-auto object-contain border border-gray-200"
            />
            {/* Overlay that appears on click */}
            <div
              className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                clickedImage === 0 ? "opacity-30 backdrop-blur-[2px]" : "opacity-0"
              }`}
            />
          </motion.div>

          {/* Second certificate image */}
          <motion.div
            className="flex-shrink-0 relative cursor-pointer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
            onClick={() => handleImageClick(1)}
          >
            <img
              src="/assets/homepage/certificate2.png"
              alt="ISO 9001:2015 Certificate"
              className="w-72 h-auto object-contain border border-gray-200"
            />
            {/* Overlay that appears on click */}
            <div
              className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                clickedImage === 1 ? "opacity-30 backdrop-blur-[2px]" : "opacity-0"
              }`}
            />
          </motion.div>
        </div>
      </div>

      {/* Small Screen Layout - below md */}
      <div className="flex md:hidden flex-col w-full py-12 px-4 sm:px-6 bg-white">
        {/* Content section */}
        <div className="w-full  mb-8">
          <h2
            className="text-3xl text-center sm:text-4xl font-bold mb-4"
            style={{
              color: "#008000",
              fontFamily: "Quicksand",
              fontWeight: 700,
              lineHeight: "normal",
            }}
          >
            OUR CERTIFICATIONS
          </h2>
          <p
            className="text-black text-base sm:text-lg"
            style={{
              fontFamily: "Roboto",
              fontWeight: 400,
              lineHeight: "1.3",
            }}
          >
            Our commitment to quality and excellence is backed by globally recognized certifications. We adhere to the
            highest industry standards to ensure safety, efficacy, and compliance in every product we manufacture.
          </p>
        </div>

        {/* Images section - stacked vertically */}
        <div className="w-full flex flex-col space-y-6">
          {/* First certificate image */}
          <motion.div
            className="relative cursor-pointer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
            onClick={() => handleImageClick(0)}
          >
            <img
              src="/assets/homepage/certificate1.png"
              alt="GMP Certificate"
              className="w-full h-auto object-contain border border-gray-200"
            />
            {/* Overlay that appears on click */}
            <div
              className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                clickedImage === 0 ? "opacity-30 backdrop-blur-[2px]" : "opacity-0"
              }`}
            />
          </motion.div>

          {/* Second certificate image */}
          <motion.div
            className="relative cursor-pointer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
            onClick={() => handleImageClick(1)}
          >
            <img
              src="/assets/homepage/certificate2.png"
              alt="ISO 9001:2015 Certificate"
              className="w-full h-auto object-contain border border-gray-200"
            />
            {/* Overlay that appears on click */}
            <div
              className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                clickedImage === 1 ? "opacity-30 backdrop-blur-[2px]" : "opacity-0"
              }`}
            />
          </motion.div>
        </div>
      </div>
    </>
  )
}
