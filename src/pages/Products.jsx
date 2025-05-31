"use client"

import { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import Footer from "../components/Footer"

const ProductItem = ({ imagePath, title, link }) => {
  const handleClick = () => {
    // Scroll to top when clicking the product
    window.scrollTo(0, 0)
  }

  return (
    <Link to={link} className="block relative group" onClick={handleClick}>
      <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <img
          src={imagePath || "/placeholder.svg"}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full p-3 bg-white bg-opacity-90">
            <h3 className="text-black text-center font-['Quicksand'] font-medium text-sm">{title}</h3>
          </div>
        </div>
      </div>
    </Link>
  )
}

const Products = () => {
  // Scroll to top on route change
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  // Product data with corrected links
  const products = [
    {
      imagePath: "/assets/products/gastroimage.png",
      title: "GASTRO INTESTINAL DRUGS & COMBINATIONS",
      link: "/productspage/Antibioticspage",
    },
    { imagePath: "/assets/products/antiinfective.png", title: "ANTI-INFECTIVE", link: "/productspage/Antiinfective" },
    {
      imagePath: "/assets/products/cardiovasculardrugs.png",
      title: "CARDIO VASCULAR",
      link: "/productspage/Cardiovascular",
    },
    { imagePath: "/assets/products/respiratorydrugs.png", title: "RESPIRATORY", link: "/productspage/Respiratory" },
    { imagePath: "/assets/products/anti-obesity.png", title: "ANTI-OBESITY", link: "/productspage/Antiobesity" },
    { imagePath: "/assets/products/anti-bph.png", title: "ANTI-BPH", link: "/productspage/AntiBPH" },
    {
      imagePath: "/assets/products/antidepressant.png",
      title: "ANTI DEPRESSANT",
      link: "/productspage/Antidepressant",
    },
    { imagePath: "/assets/products/anti-hiv.png", title: "ANTI HIV", link: "/productspage/Antihiv" },
    {
      imagePath: "/assets/products/NEUTRACEUTICALS.png",
      title: "NEUTRACEUTICALS",
      link: "/productspage/Neutraceuticals",
    },
    { imagePath: "/assets/products/NEW PRODUCTS.png", title: "NEW PRODUCTS", link: "/productspage/Newproducts" },
    {
      imagePath: "/assets/products/WHO - GMP PRODUCTS.png",
      title: "WHO - GMP PRODUCTS",
      link: "/productspage/WhoGmpProducts",
    },
    {
      imagePath: "/assets/products/VITAMINS AND MINERAL PREMIXES.png",
      title: "VITAMINS AND MINERAL PREMIXES",
      link: "/productspage/VitaminsAndMinerlsPremixes",
    },
    { imagePath: "/assets/products/SPASMOLYTIC.png", title: "SPASMOLYTIC", link: "/productspage/Spasmolytic" },
    {
      imagePath: "/assets/products/ANTI-COAGULANTS.png",
      title: "ANTI COAGULANTS",
      link: "/productspage/AntiCoagulants",
    },
    { imagePath: "/assets/products/ANTI-EPILEPTIC.png", title: "ANTI EPILEPTIC", link: "/productspage/AntiEpileptic" },
    {
      imagePath: "/assets/products/MUSCULAR RELAXER.png",
      title: "MUSCULAR RELAXER",
      link: "/productspage/MuscularRelaxer",
    },
    {
      imagePath: "/assets/products/ANTI-INFLAMMATORYANALGESICS.png",
      title: "ANTI INFLAMMATORY ANALGESICS",
      link: "/productspage/AntiInflammatoryAnalgesics",
    },
    { imagePath: "/assets/products/ANTI-EMETIC.png", title: "ANTI-EMETIC", link: "/productspage/AntiEmetic" },
    {
      imagePath: "/assets/products/ANTI-HYPERLIPIDEMIC.png",
      title: "ANTI HYPERLIPIDEMIC",
      link: "/productspage/AntiHyperlipidemic",
    },
    {
      imagePath: "/assets/products/IMMUNO SUPPRESSANT.png",
      title: "IMMUNO SUPPRESSANT",
      link: "/productspage/ImmunoSuppressant",
    },
    { imagePath: "/assets/products/ANTI- PSYCHOTIC.png", title: "ANTI PSYCHOTIC", link: "/productspage/AntiPsychotic" },
    { imagePath: "/assets/products/DC GRNULES.png", title: "DC GRANULES", link: "/productspage/DcGrnules" },
    {
      imagePath: "/assets/products/SUGAR SPHERES-NPS.png",
      title: "SUGAR SPHERES NPS",
      link: "/productspage/SugarSpheresNps",
    },
    {
      imagePath: "/assets/products/DIETARY SUPPLEMENTS.png",
      title: "DIETARY SUPPLEMENTS",
      link: "/productspage/DietarySupplements",
    },
    {
      imagePath: "/assets/products/VITAMINS & MINERALS PREMIX DC GRANULES.png",
      title: "VITAMINS & MINERALS PREMIX DC GRANULES",
      link: "/productspage/VitaminsAndMineralsPremixDcGranules",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div
        className="relative flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat w-full"
        style={{
          minHeight: "450px", // Base height for small screens
          backgroundImage:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.28) 0%, rgba(0, 0, 0, 0.28) 100%), url('/assets/products/productshero.png')",
          backgroundColor: "lightgray",
          backgroundPosition: "50%",
          backgroundSize: "cover",
        }}
      >
        {/* Heading */}
        <h1 className="text-white text-center font-['Quicksand'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight px-4 sm:px-6">
          Trusted Pharma Products
        </h1>
        {/* Paragraph */}
        <p className="text-white text-center font-['Roboto'] text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-normal mt-2 sm:mt-4 px-4 sm:px-6 max-w-3xl">
          Trusted formulations across multiple therapeutic categories.
        </p>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-green-700">Our Pharmaceutical Product Range</h2>
          <p className="text-gray-600 mt-2">
            From RTF pellets to finished dosages, our products are developed with precision and compliance.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductItem key={index} imagePath={product.imagePath} title={product.title} link={product.link} />
          ))}
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  )
}

export default Products
