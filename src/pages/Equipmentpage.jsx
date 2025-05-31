import { useEffect } from "react";
import Footer from "../components/Footer";

const Equipmentpage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the page loads
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-4"
        style={{
          height: "auto",
          minHeight: "370px",
          paddingTop: "60px",
          paddingBottom: "60px",
          backgroundImage:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/eqipment/heroimage.png')",
          backgroundColor: "lightgray",
        }}
      >
        <h1 className="text-white text-center font-[Quicksand] text-4xl sm:text-center md:text-5xl lg:text-6xl font-bold">
          Advanced Manufacturing Infrastructure
        </h1>
        <p className="text-white text-center font-[Roboto] text-base md:text-xl lg:text-2xl mt-2 max-w-3xl">
          Engineered for Efficiency, Designed for Quality
        </p>
      </div>

      {/* Manufacturing Facilities Section */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-36 py-12">
        <h2 className="text-center text-green-600 font-[Quicksand] text-2xl md:text-3xl lg:text-4xl font-bold">
          MANUFACTURING FACILITIES
        </h2>
        <p className="text-center text-sm md:text-base mb-8">
          75,000 Sq ft Production area, Processing rooms which are single pass air for making different products at the
          same time.
        </p>

        {/* Granulation & Pelletization */}
        <div className="flex flex-col md:flex-row mb-8">
          <div className="w-full md:w-2/3 pr-0 md:pr-6">
            <h3 className="text-green-600 font-[Quicksand] text-xl font-bold mb-3">Granulation & Pelletization</h3>
            <ul className="list-disc text-[Roboto] pl-5 space-y-1">
              <li>Fluid Bed Coater – 19 No's</li>
              <li>Mass mixer – 01 No</li>
              <li>Oscillating granulator – 01 No</li>
              <li>Multi mill - 01 No</li>
              <li>Octagonal Blender – 01 No's</li>
              <li>Tray Dryer – 15 No's</li>
              <li>Coating Pan – 13 No's</li>
              <li>Shifter – 10 No's</li>
              <li>Pulverizer – 05 No's</li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mt-4 md:mt-0">
            <img
              src="/assets/eqipment/image1.png"
              alt="FLUIDISED BED COATER /DOUBLE CONE BLENDER"
              className="w-full h-auto"
            />
            <p className="text-center text-xs mt-1">FLUIDISED BED COATER /DOUBLE CONE BLENDER</p>
          </div>
        </div>

        {/* Advanced equipment for Pelletization technology */}
        <div className="flex flex-col lg:mt-20 md:flex-row mb-8">
          <div className="w-full md:w-2/3 pr-0 md:pr-6">
            <h3 className="text-green-600 font-[Quicksand] text-xl font-bold mb-3">
              Advanced equipment for Pelletization technology
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Fluid Bed Processor-01</li>
              <li>Screw Extruder-01</li>
              <li>Spheronizer - 01</li>
              <li>Hot Melt extruder-01</li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mt-4 md:mt-0">
            <img
              src="/assets/eqipment/image2.png"
              alt="SCREW EXTRUDER & SPHERONIZER"
              className="w-full h-auto"
            />
            <p className="text-center text-xs mt-1">SCREW EXTRUDER & SPHERONIZER</p>
          </div>
        </div>

        {/* R&D Equipment */}
        <div className="mb-8 lg:mt-[-70px]">
          <h3 className="text-green-600 font-[Quicksand] text-xl font-bold mb-3">R&D Equipment</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Fluid Bed Coater – 01</li>
            <li>Coating Pan – 01</li>
            <li>Tray Dryer – 01</li>
          </ul>
        </div>

        {/* Tablet compression machine */}
        <div className="mb-8">
          <h3 className="text-green-600 font-[Quicksand] text-xl font-bold mb-3">Tablet compression machine</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Monolayer</li>
            <li>Mini tablet</li>
          </ul>
        </div>

        {/* Bottom sections with image */}
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 pr-0 md:pr-6">
            {/* Coating machine for */}
            <div className="mb-6">
              <h3 className="text-green-600 font-[Quicksand] text-xl font-bold mb-3">Coating machine for:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Film coating</li>
                <li>Solid drug layering</li>
              </ul>
            </div>

            {/* Blister packing */}
            <div className="mb-6">
              <h3 className="text-green-600 font-[Quicksand] text-xl font-bold mb-3">Blister packing</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>PVC, PVDC, Triplex with Aluminum as base foil</li>
              </ul>
            </div>

            {/* Alu/Alu Packing */}
            <div className="mb-6">
              <h3 className="text-green-600 font-[Quicksand] text-xl font-bold mb-3">Alu/Alu Packing</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Aluminum / Aluminum Cold formable</li>
              </ul>
            </div>

            {/* Strip Packing */}
            <div className="mb-6">
              <h3 className="text-green-600 font-[Quicksand] text-xl font-bold mb-3">Strip Packing</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Aluminum / Aluminum Hot formable</li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/3 mt-4 md:mt-0">
            <img
              src="/assets/eqipment/image3.png"
              alt="Coating and Packing Machines"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Equipmentpage;
