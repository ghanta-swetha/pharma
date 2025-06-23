"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom" // Changed from next/navigation

function HeroPage() {
  const navigate = useNavigate() // Changed from useRouter
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [nextImageIndex, setNextImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [currentImages, setCurrentImages] = useState([])

  // Image sets for different breakpoints
  const imageSets = {
    desktop: ["/assets/Heropage/image1.png", "/assets/Heropage/image2.png", "/assets/Heropage/image3.png"],
    medium: ["/assets/Heropage/mediumimage1.png", "/assets/Heropage/mediumimage2.png", "/assets/Heropage/mediumimage3.png"],
    small: ["/assets/Heropage/smallimage1.png", "/assets/Heropage/smallimage2.png", "/assets/Heropage/smallimage3.png"],
  }

  // Content for each slide
  const slideContent = [
    {
      heading: "Precision in Pharmaceutical Manufacturing, Excellence in Every Dose.",
      paragraph:
        "Committed to delivering high-quality, GMP-certified pharmaceutical solutions that meet global healthcare standards.",
    },
    {
      heading: "Advanced Research & Development, Innovative Healthcare Solutions.",
      paragraph: "Pioneering pharmaceutical breakthroughs with cutting-edge research and development capabilities.",
    },
    {
      heading: "Quality Assurance in Every Step, Safety in Every Product.",
      paragraph:
        "Rigorous testing and quality control processes ensure the highest standards in pharmaceutical manufacturing.",
    },
  ]

  // Determine the appropriate image set based on screen size
  const updateImageSet = () => {
    const width = window.innerWidth
    if (width >= 1024) {
      setCurrentImages(imageSets.desktop)
    } else if (width >= 768) {
      setCurrentImages(imageSets.medium)
    } else {
      setCurrentImages(imageSets.small)
    }
  }

  // Initial image set and resize listener
  useEffect(() => {
    updateImageSet()
    window.addEventListener("resize", updateImageSet)
    return () => window.removeEventListener("resize", updateImageSet)
  }, [])

  // Preload images
  useEffect(() => {
    setIsLoading(true)

    const imagePromises = currentImages.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = src
        img.onload = resolve
        img.onerror = reject
        img.crossOrigin = "anonymous" // Avoid CORS issues
      })
    })

    Promise.all(imagePromises)
      .then(() => {
        setImagesLoaded(true)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error("Error preloading images:", error)
        setIsLoading(false) // Still show content even if some images fail
      })
  }, [currentImages])

  // Handle smooth image transitions
  const transitionToNextImage = (nextIndex) => {
    setNextImageIndex(nextIndex)
    setIsTransitioning(true)

    // After transition completes, update current image
    setTimeout(() => {
      setCurrentImageIndex(nextIndex)
      setIsTransitioning(false)
    }, 10) // Match this with the CSS transition duration
  }

  // Set up the image rotation interval after images are loaded
  useEffect(() => {
    if (!imagesLoaded) return

    const interval = setInterval(() => {
      const nextIndex = (currentImageIndex + 1) % currentImages.length
      transitionToNextImage(nextIndex)
    }, 5000)

    return () => clearInterval(interval)
  }, [imagesLoaded, currentImageIndex, currentImages])

  // Handle manual navigation
  const goToSlide = (index) => {
    if (index === currentImageIndex || isTransitioning) return
    transitionToNextImage(index)
  }

  // Handle navigation to contact page
  const handleContactNavigation = () => {
    navigate('/contact') // Changed from router.push
  }

  if (isLoading) {
    return (
      <div className="relative flex justify-center items-center h-[500px] md:h-[600px] lg:h-[744px] bg-gray-100">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-700 text-sm md:text-base lg:text-lg">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full">
      <div className="relative h-[500px] md:h-[600px] lg:h-[744px] overflow-hidden">
        {/* Current Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${currentImages[currentImageIndex]})`,
            opacity: isTransitioning ? 0 : 1,
            transition: "opacity 1s ease-in-out",
          }}
        />

        {/* Next Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${currentImages[nextImageIndex]})`,
            opacity: isTransitioning ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        />

        {/* Overlay to darken the image */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Content */}
        <div className="relative z-20 flex justify-center items-center h-full">
          <div className="flex flex-col items-center max-w-6xl px-4">
            <h1
              className="text-white text-center font-bold text-3xl md:text-4xl lg:text-5xl"
              style={{
                fontFamily: "Roboto",
                fontWeight: "800",
                alignSelf: "stretch",
                transition: "opacity 0.5s ease-in-out",
                opacity: isTransitioning ? 0 : 1,
              }}
            >
              {slideContent[currentImageIndex].heading}
            </h1>
            <p
              className="text-white text-center mt-4 text-lg md:text-xl lg:text-2xl max-w-full"
              style={{
                fontFamily: "Roboto",
                fontWeight: "500",
                width: "100%",
                maxWidth: "lg:725px md:600px",
                transition: "opacity 0.5s ease-in-out",
                opacity: isTransitioning ? 0 : 1,
              }}
            >
              {slideContent[currentImageIndex].paragraph}
            </p>
          </div>
        </div>

        {/* WhatsApp Icon */}
        <div
          className="absolute bottom-16 right-4 md:bottom-20 md:right-6 lg:bottom-20 lg:right-6 z-20"
          style={{
            width: "36px",
            height: "36px",
            aspectRatio: "1/1",
          }}
        >
          <a href="https://wa.me/+917032731444" target="_blank" rel="noopener noreferrer">
            <div className="w-[36px] h-[36px] md:w-[40px] md:h-[40px] lg:w-[48px] lg:h-[48px] aspect-square rounded-full bg-[#25D366] flex items-center justify-center hover:opacity-90 transition-opacity">
              <svg
                width="24"
                height="24"
                md:width="26"
                md:height="26"
                lg:width="28"
                lg:height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 md:w-7 md:h-7 lg:w-7 lg:h-7"
              >
                <path
                  d="M23.7063 4.29375C21.1125 1.69375 17.6312 0.25 13.9562 0.25C6.39375 0.25 0.2375 6.40625 0.2375 13.9688C0.2375 16.4062 0.9125 18.7812 2.1875 20.8438L0.125 28L7.425 25.9688C9.4125 27.125 11.6562 27.7375 13.95 27.7375H13.9562C21.5125 27.7375 27.75 21.5812 27.75 14.0188C27.75 10.3438 26.3 6.89375 23.7063 4.29375ZM13.9562 25.4188C11.9 25.4188 9.88125 24.8312 8.1125 23.7188L7.7 23.4688L3.35625 24.6875L4.59375 20.4375L4.31875 20.0125C3.09375 18.175 2.45 16.1 2.45 13.9688C2.45 7.68125 7.66875 2.46875 13.9625 2.46875C16.9875 2.46875 19.8375 3.6875 21.9625 5.81875C24.0875 7.95 25.3 10.8 25.2938 13.9688C25.2938 20.2625 20.2438 25.4188 13.9562 25.4188ZM20.2625 16.9C19.925 16.7312 18.2312 15.9 17.9188 15.7938C17.6063 15.6812 17.3813 15.6312 17.1563 15.975C16.9313 16.3188 16.2688 17.0875 16.075 17.3125C15.8875 17.5312 15.6938 17.5625 15.3563 17.3938C13.3938 16.4125 12.1188 15.6375 10.8375 13.4188C10.4875 12.8125 11.2 12.8688 11.8625 11.5438C11.9688 11.3188 11.9188 11.125 11.8375 10.9562C11.7563 10.7875 11.0625 9.09375 10.7875 8.41875C10.5188 7.7625 10.2438 7.85 10.0438 7.8375C9.85625 7.825 9.63125 7.825 9.40625 7.825C9.18125 7.825 8.81875 7.90625 8.50625 8.25C8.19375 8.59375 7.325 9.425 7.325 11.1188C7.325 12.8125 8.53125 14.4562 8.69375 14.6812C8.8625 14.9062 11.05 18.2625 14.3875 19.7625C16.5875 20.7812 17.4625 20.8688 18.5688 20.6875C19.2438 20.575 20.6063 19.8375 20.8813 19.05C21.1563 18.2625 21.1563 17.5875 21.075 17.4375C21 17.275 20.775 17.1875 20.4375 17.0188L20.2625 16.9Z"
                  fill="white"
                />
              </svg>
            </div>
          </a>
        </div>

        {/* Chat/Support Icon (white circle) - Updated with navigation */}
        <div
          className="absolute bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-6 lg:right-6 z-20"
          style={{
            width: "36px",
            height: "36px",
            aspectRatio: "1/1",
          }}
        >
          <button
            onClick={handleContactNavigation}
            className="w-[36px] h-[36px] md:w-[40px] md:h-[40px] lg:w-[48px] lg:h-[48px] aspect-square rounded-full bg-white flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer"
            aria-label="Navigate to contact page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 48 48"
              fill="none"
              className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
            >
              <path
                d="M21.75 24C21.75 24.5967 21.9871 25.169 22.409 25.591C22.831 26.0129 23.4033 26.25 24 26.25C24.5968 26.25 25.1691 26.0129 25.591 25.591C26.013 25.169 26.25 24.5967 26.25 24C26.25 23.4033 26.013 22.831 25.591 22.409C25.1691 21.9871 24.5968 21.75 24 21.75C23.4033 21.75 22.831 21.9871 22.409 22.409C21.9871 22.831 21.75 23.4033 21.75 24ZM31.125 24C31.125 24.5967 31.3621 25.169 31.784 25.591C32.206 26.0129 32.7783 26.25 33.375 26.25C33.9718 26.25 34.5441 26.0129 34.966 25.591C35.388 25.169 35.625 24.5967 35.625 24C35.625 23.4033 35.388 22.831 34.966 22.409C34.5441 21.9871 33.9718 21.75 33.375 21.75C32.7783 21.75 32.206 21.9871 31.784 22.409C31.3621 22.831 31.125 23.4033 31.125 24ZM12.375 24C12.375 24.5967 12.6121 25.169 13.034 25.591C13.456 26.0129 14.0283 26.25 14.625 26.25C15.2218 26.25 15.7941 26.0129 16.216 25.591C16.638 25.169 16.875 24.5967 16.875 24C16.875 23.4033 16.638 22.831 16.216 22.409C15.7941 21.9871 15.2218 21.75 14.625 21.75C14.0283 21.75 13.456 21.9871 13.034 22.409C12.6121 22.831 12.375 23.4033 12.375 24ZM43.3688 15.8625C42.3094 13.3453 40.7906 11.0859 38.8547 9.14531C36.9323 7.21597 34.6502 5.68234 32.1375 4.63125C29.5594 3.54844 26.8219 3 24 3H23.9063C21.0656 3.01406 18.3141 3.57656 15.7266 4.68281C13.2355 5.74468 10.9747 7.28103 9.07033 9.20625C7.15315 11.1422 5.64846 13.3922 4.60783 15.9C3.52971 18.4969 2.98596 21.2578 3.00002 24.0984C3.01593 27.3538 3.78608 30.5611 5.25002 33.4688V40.5938C5.25002 41.1656 5.4772 41.7141 5.88157 42.1185C6.28595 42.5228 6.8344 42.75 7.40627 42.75H14.536C17.4436 44.2139 20.6509 44.9841 23.9063 45H24.0047C26.8125 45 29.536 44.4562 32.1 43.3922C34.6 42.3537 36.8736 40.8379 38.7938 38.9297C40.7297 37.0125 42.2531 34.7719 43.3172 32.2734C44.4235 29.6859 44.986 26.9344 45 24.0938C45.0141 21.2391 44.461 18.4688 43.3688 15.8625ZM36.286 36.3938C33 39.6469 28.6406 41.4375 24 41.4375H23.9203C21.0938 41.4234 18.286 40.7203 15.8063 39.3984L15.4125 39.1875H8.81252V32.5875L8.60158 32.1937C7.27971 29.7141 6.57658 26.9062 6.56252 24.0797C6.54377 19.4062 8.32971 15.0187 11.6063 11.7141C14.8781 8.40937 19.2516 6.58125 23.925 6.5625H24.0047C26.3485 6.5625 28.6219 7.01719 30.7641 7.91719C32.8547 8.79375 34.7297 10.0547 36.3422 11.6672C37.95 13.275 39.2156 15.1547 40.0922 17.2453C41.0016 19.4109 41.4563 21.7078 41.4469 24.0797C41.4188 28.7484 39.586 33.1219 36.286 36.3938Z"
                fill="black"
              />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 md:bottom-6 lg:bottom-6"
          style={{
            display: "flex",
            height: "32px",
            padding: "6px 12px",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50px",
            background: "#FFF",
          }}
        >
          <div className="flex gap-2">
            {Array.from({ length: 3 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                style={{
                  width: index === currentImageIndex ? "32px" : "8px",
                  height: "8px",
                  borderRadius: "999px",
                  backgroundColor: index === currentImageIndex ? "#4CAF50" : "#D9D9D9",
                  transition: "all 0.3s ease",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                }}
                className="md:w-[index === currentImageIndex ? '36px' : '10px'] md:h-[10px] lg:w-[index === currentImageIndex ? '40px' : '12px'] lg:h-[12px]"
                aria-label={`Go to slide ${index + 1}`}
                disabled={isTransitioning}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroPage