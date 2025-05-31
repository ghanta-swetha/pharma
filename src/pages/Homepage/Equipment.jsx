import { Link } from "react-router-dom"

const PharmaceuticalBanner = () => {
  return (
    <div className="w-full mb-6 md:mb-10">
      {/* Desktop Layout (xl and above) - Exactly as original */}
      <div
        className="hidden xl:flex mx-auto"
        style={{
          width: "1440px",
          padding: "0px 160px",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#F2F2F2",
        }}
      >
        {/* Left Section */}
        <div
          style={{
            display: "flex",
            padding: "0px 40px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            flex: "1 0 0",
            alignSelf: "stretch",
            background: "#008000",
          }}
        >
          <h1 className="text-5xl font-bold text-white text-center">Excellence in Pharmaceutical Manufacturing</h1>
          <p className="text-xl text-white text-center">
            From formulation to packaging, our manufacturing facilities are built to meet WHO-GMP and international
            benchmarks. Discover how our process ensures reliability at every step.
          </p>
          <Link to="/equipment">
            <button className="bg-white text-green-600 font-semibold py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300">
              Explore Our Facilities
            </button>
          </Link>
        </div>

        {/* Right Section */}
        <div>
          <img
            src="/assets/eqipment/homeimage.png"
            alt="Pharmaceutical Manufacturing"
            style={{
              width: "529px",
              height: "680px",
              aspectRatio: "529/680",
            }}
          />
        </div>
      </div>

      {/* Large Desktop Layout (lg to xl) - Updated for no gaps */}
      <div className="hidden lg:flex xl:hidden w-full bg-gray-50">
        <div className="flex-1 bg-green-600 px-12 py-16 flex flex-col justify-center items-center gap-6">
          <h1 className="text-4xl font-bold text-white text-center leading-tight">
            Excellence in Pharmaceutical Manufacturing
          </h1>
          <p className="text-lg text-white text-center leading-relaxed">
            From formulation to packaging, our manufacturing facilities are built to meet WHO-GMP and international
            benchmarks. Discover how our process ensures reliability at every step.
          </p>
          <Link to="/equipment">
            <button className="bg-white text-green-600 font-semibold py-3 px-6 rounded-full hover:bg-gray-200 transition duration-300">
              Explore Our Facilities
            </button>
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img
            src="/assets/eqipment/homeimage.png"
            alt="Pharmaceutical Manufacturing"
            className="w-full h-full object-cover"
            style={{ maxHeight: "600px" }}
          />
        </div>
      </div>

      {/* Medium Screen Layout (md to lg) - Updated for no gaps */}
      <div className="hidden md:flex lg:hidden w-full bg-gray-50">
        <div className="flex-1 bg-green-600 px-8 py-12 flex flex-col justify-center items-center gap-5">
          <h1 className="text-3xl font-bold text-white text-center leading-tight">
            Excellence in Pharmaceutical Manufacturing
          </h1>
          <p className="text-base text-white text-center leading-relaxed">
            From formulation to packaging, our manufacturing facilities are built to meet WHO-GMP and international
            benchmarks. Discover how our process ensures reliability at every step.
          </p>
          <Link to="/equipment">
            <button className="bg-white text-green-600 font-semibold py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300">
              Explore Our Facilities
            </button>
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img
            src="/assets/eqipment/homeimage.png"
            alt="Pharmaceutical Manufacturing"
            className="w-full h-full object-cover"
            style={{ maxHeight: "500px" }}
          />
        </div>
      </div>

      {/* Small Screen Layout (sm to md) - Kept as is */}
      <div className="hidden sm:block md:hidden w-full max-w-2xl mx-auto bg-gray-50">
        <div className="bg-green-600 px-6 py-10 text-center">
          <h1 className="text-2xl font-bold text-white mb-4 leading-tight">
            Excellence in Pharmaceutical Manufacturing
          </h1>
          <p className="text-sm text-white mb-6 leading-relaxed">
            From formulation to packaging, our manufacturing facilities are built to meet WHO-GMP and international
            benchmarks. Discover how our process ensures reliability at every step.
          </p>
          <Link to="/equipment">
            <button className="bg-white text-green-600 font-semibold py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300">
              Explore Our Facilities
            </button>
          </Link>
        </div>
        <div className="flex justify-center p-4">
          <img
            src="/assets/eqipment/homeimage.png"
            alt="Pharmaceutical Manufacturing"
            className="w-full max-w-xs h-auto object-cover rounded-lg"
            style={{ aspectRatio: "529/680", maxHeight: "400px" }}
          />
        </div>
      </div>

      {/* Mobile Layout (below sm) - Kept as is */}
      <div className="block sm:hidden w-full mx-auto bg-gray-50">
        <div className="bg-green-600 px-4 py-8 text-center">
          <h1 className="text-xl font-bold text-white mb-3 leading-tight">
            Excellence in Pharmaceutical Manufacturing
          </h1>
          <p className="text-xs text-white mb-5 leading-relaxed px-2">
            From formulation to packaging, our manufacturing facilities are built to meet WHO-GMP and international
            benchmarks. Discover how our process ensures reliability at every step.
          </p>
          <Link to="/equipment">
            <button className="bg-white text-green-600 font-semibold py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300">
              Explore Our Facilities
            </button>
          </Link>
        </div>
        <div className="flex justify-center p-3">
          <img
            src="/assets/eqipment/homeimage.png"
            alt="Pharmaceutical Manufacturing"
            className="w-full max-w-xs h-auto object-cover rounded-lg"
            style={{ aspectRatio: "529/680", maxHeight: "350px" }}
          />
        </div>
      </div>
    </div>
  )
}

export default PharmaceuticalBanner
