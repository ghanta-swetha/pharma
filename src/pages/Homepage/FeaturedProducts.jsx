"use client"

import React, { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"

const FeaturedProducts = () => {
  // Product data array
  const products = [
    {
      id: 1,
      name: "GASTRO INTESTINAL DRUGS & COMBINATIONS",
      image: "/assets/homepage/feauture1.png",
    },
    {
      id: 2,
      name: "ANTI - INFECTIVE",
      image: "/assets/homepage/feauture2.png",
    },
    {
      id: 3,
      name: "CARDIO VASCULAR DRUGS",
      image: "/assets/homepage/feauture3.png",
    },
    {
      id: 4,
      name: "RESPIRATORY DRUGS",
      image: "/assets/homepage/feauture4.png",
    },
  ]

  // State to store the width of each image
  const [imageWidths, setImageWidths] = useState({})

  // Carousel state
  const carouselRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const [isLgScreen, setIsLgScreen] = useState(false)

  // Refs for each image to measure its width
  const imageRefs = useRef(products.map(() => React.createRef()))

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1024)
      setIsLgScreen(window.innerWidth >= 1024 && window.innerWidth < 1280)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => {
      window.removeEventListener("resize", checkScreenSize)
    }
  }, [])

  // Measure the width of each image on mount and resize
  useEffect(() => {
    const updateImageWidths = () => {
      const widths = {}
      imageRefs.current.forEach((ref, index) => {
        if (ref.current) {
          const img = ref.current
          const containerWidth = img.getBoundingClientRect().width
          const containerHeight = img.getBoundingClientRect().height

          // Get natural dimensions of the image
          const naturalWidth = img.naturalWidth
          const naturalHeight = img.naturalHeight

          // Calculate the aspect ratio of the image and the container
          const imageAspectRatio = naturalWidth / naturalHeight
          const containerAspectRatio = containerWidth / containerHeight

          let displayedWidth
          if (imageAspectRatio > containerAspectRatio) {
            // Image is wider than the container: width is constrained by height
            displayedWidth = containerHeight * imageAspectRatio
          } else {
            // Image is taller than the container: width is constrained by width
            displayedWidth = containerWidth
          }

          // Adjust for object-contain scaling (remove transparent padding)
          const scale = Math.min(containerWidth / naturalWidth, containerHeight / naturalHeight)
          displayedWidth = naturalWidth * scale

          widths[index] = displayedWidth * 0.95 // Reduce width by 5% for overlay
        }
      })
      setImageWidths(widths)
    }

    // Initial measurement (with a slight delay to ensure images are loaded)
    const timer = setTimeout(() => {
      updateImageWidths()
    }, 100)

    // Update on window resize
    window.addEventListener("resize", updateImageWidths)

    // Cleanup
    return () => {
      clearTimeout(timer)
      window.removeEventListener("resize", updateImageWidths)
    }
  }, [])

  // Mouse-driven carousel handlers
  const handleMouseDown = (e) => {
    if (!isSmallScreen) return

    setIsDragging(true)
    setStartX(e.pageX - carouselRef.current.offsetLeft)
    setScrollLeft(carouselRef.current.scrollLeft)
    carouselRef.current.style.cursor = "grabbing"
    carouselRef.current.style.userSelect = "none"
  }

  const handleMouseMove = (e) => {
    if (!isDragging || !isSmallScreen) return

    const x = e.pageX - carouselRef.current.offsetLeft
    const walk = (x - startX) * 2 // Scroll speed multiplier
    carouselRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    if (!isSmallScreen) return

    setIsDragging(false)
    carouselRef.current.style.cursor = "grab"
    carouselRef.current.style.removeProperty("user-select")
  }

  const handleMouseLeave = () => {
    if (isDragging && isSmallScreen) {
      setIsDragging(false)
      carouselRef.current.style.cursor = "grab"
      carouselRef.current.style.removeProperty("user-select")
    }
  }

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    if (!isSmallScreen) return

    setIsDragging(true)
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft)
    setScrollLeft(carouselRef.current.scrollLeft)
  }

  const handleTouchMove = (e) => {
    if (!isDragging || !isSmallScreen) return

    const x = e.touches[0].pageX - carouselRef.current.offsetLeft
    const walk = (x - startX) * 2
    carouselRef.current.scrollLeft = scrollLeft - walk
  }

  const handleTouchEnd = () => {
    if (!isSmallScreen) return
    setIsDragging(false)
  }

  return (
    <div className="flex flex-col items-start gap-10 py-10 px-4 sm:px-6 max-w-[1440px] mx-auto md:px-10 lg:px-20 xl:px-40 self-stretch bg-[#54AA54]">
      {/* Heading Section */}
      <div className="flex flex-col gap-4 self-stretch">
        <h2 className="text-white font-['Quicksand'] text-center text-3xl sm:text-4xl md:text-[36px] font-bold capitalize self-stretch">
          Featured Products categories
        </h2>
        <p className="text-white font-['Roboto'] text-center text-base sm:text-[20px] font-normal leading-[26px] capitalize self-stretch">
          At The Forefront Of Pharmaceutical Innovation, Our Featured Products Are Designed To Deliver Reliable,
          Effective, And High-Performance Solutions For Healthcare Professionals And Consumers Alike. With A Commitment
          To Quality, We Offer A Diverse Portfolio That Caters To A Wide Range Of Therapeutic Needs.
        </p>
      </div>

      {/* Products Grid for large screens / Carousel for medium and small screens */}
      <div
        ref={carouselRef}
        className={`w-full ${
          isSmallScreen
            ? "flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        }`}
        style={{
          cursor: isSmallScreen ? "grab" : "default",
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`flex flex-col justify-end items-center mt-10 h-[240px] pt-8 gap-10 xl:gap-2 ${
              isSmallScreen ? "min-w-[85%] sm:min-w-[45%] md:min-w-[40%] snap-center px-2" : "w-full"
            }`}
          >
            {/* Image Container with Hover Effect */}
            <div className="relative flex justify-center items-end h-[240px] group w-full">
              <img
                ref={imageRefs.current[index]}
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="h-[240px] w-full object-contain"
              />
              {/* Text Overlay */}
              <div
                className={`absolute rounded-[10px] h-[50px] bg-white bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 ease-in-out left-1/2 -translate-x-1/2 ${
                  isLgScreen ? "bottom-[22px]" : "bottom-0 mb-[11px] md:mb-[-1px]"
                }`}
                style={{
                  width: imageWidths[index] ? `${imageWidths[index]}px` : "95%",
                  maxWidth: "95%",
                }}
              >
                <span className="text-black font-['Roboto'] text-xs sm:text-sm font-medium uppercase text-center px-2">
                  {product.name}
                </span>
              </div>
            </div>
            <div className="h-4"></div> {/* Spacer */}
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center w-full mt-[-50px] lg:mt-3">
        <Link to="/products">
          <button className="flex w-[168px] px-5 py-4 justify-center items-center gap-2.5 rounded-lg bg-white">
            <span className="text-[#008000] font-['Montserrat'] text-base font-semibold capitalize">View All</span>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default FeaturedProducts



