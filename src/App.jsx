import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import TopBar from "./components/TopBar"
import Header from "./components/Header"
import LiveChatWidget from "./components/LiveChatWidget"
import Home from "./pages/Home"
import About from "./pages/About"
import WhereWeAre from "./pages/WhereWeAre"
import Products from "./pages/Products"
import OnlineEnquiry from "./pages/OnlineEnquiry"
import Contact from "./pages/Contact"
import News from "./pages/News"
import Antibioticspage from "./pages/productspage/Antibioticspage"
import Antiinfective from "./pages/productspage/Antiinfective"
import Cardiovascular from "./pages/productspage/Cardiovascular"
import Respiratory from "./pages/productspage/Respiratory"
import Antiobesity from "./pages/productspage/Antiobesity"
import Antihiv from "./pages/productspage/Antihiv"
import Antidepressant from "./pages/productspage/Antidepressant"
import Orthopedics from "./pages/productspage/Orthopedics"
import Newproducts from "./pages/productspage/Newproducts"
import WhoGmpProducts from "./pages/productspage/WhoGmpProducts"
import VitaminsAndMinerlsPremixes from "./pages/productspage/VitaminsAndMinerlsPremixes"
import Spasmolytic from "./pages/productspage/Spasmolytic"
import NEUTRACEUTICALS from "./pages/productspage/NEUTRACEUTICALS"
import Antiallergic from "./pages/productspage/AntiEpileptic"
import Muscularrelaxer from "./pages/productspage/Muscularrelaxer"
import AntiInflammatoryanalgesics from "./pages/productspage/AntiInflammatoryanalgesics"
import AntiEmetic from "./pages/productspage/AntiEmetic"
import Antihyperlipidemic from "./pages/productspage/Antihyperlipidemic"
import ImmunoSuppressant from "./pages/productspage/ImmunoSuppressant"
import AntiPsychotic from "./pages/productspage/AntiPsychotic"
import DcGrnules from "./pages/productspage/DcGrnules"
import SugarSpheresNps from "./pages/productspage/SugarSpheresNps"
import VitaminsAndMineralsPremixDcGranules from "./pages/productspage/VitaminsAndMineralsPremixDcGranules"
import AntiBPH from "./pages/productspage/AntiBPH"
import AntiCoagulants from "./pages/productspage/AntiCoagulants"
import DietarySupplements from "./pages/productspage/DietarySupplements"
import Equipmentpage from "./pages/Equipmentpage"
import AntiEpileptic from "./pages/productspage/AntiEpileptic"

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen relative">
        <TopBar />
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/where-we-are" element={<WhereWeAre />} />
            <Route path="/products" element={<Products />} />
            <Route path="/enquiry" element={<OnlineEnquiry />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />
            <Route path="/productspage/Antibioticspage" element={<Antibioticspage />} />
            <Route path="/productspage/Antiinfective" element={<Antiinfective />} />
            <Route path="/productspage/Cardiovascular" element={<Cardiovascular />} />
            <Route path="/productspage/Respiratory" element={<Respiratory />} />
            <Route path="/productspage/Antiobesity" element={<Antiobesity />} />
            <Route path="/productspage/Antihiv" element={<Antihiv />} />
            <Route path="/productspage/AntiBPH" element={<AntiBPH />} />
            <Route path="/productspage/AntiCoagulants" element={<AntiCoagulants />} />
            <Route path="/productspage/Antidepressant" element={<Antidepressant />} />
            <Route path="/productspage/Orthopedics" element={<Orthopedics />} />
            <Route path="/productspage/Newproducts" element={<Newproducts />} />
            <Route path="/productspage/WhoGmpProducts" element={<WhoGmpProducts />} />
            <Route path="/productspage/VitaminsAndMinerlsPremixes" element={<VitaminsAndMinerlsPremixes/>} />
            <Route path="/productspage/Spasmolytic" element={<Spasmolytic />} />
            <Route path="/productspage/NEUTRACEUTICALS" element={<NEUTRACEUTICALS />} />
            <Route path="/productspage/Antiallergic" element={<Antiallergic />} />
            <Route path="/productspage/Muscularrelaxer" element={<Muscularrelaxer />} />
            <Route path="/productspage/AntiInflammatoryanalgesics" element={<AntiInflammatoryanalgesics />} />
            <Route path="/productspage/AntiEmetic" element={<AntiEmetic />} />
            <Route path="/productspage/Antihyperlipidemic" element={<Antihyperlipidemic />} />
            <Route path="/productspage/ImmunoSuppressant" element={<ImmunoSuppressant />} />
            <Route path="/productspage/AntiPsychotic" element={<AntiPsychotic />} />
            <Route path="/productspage/DcGrnules" element={<DcGrnules />} />
            <Route path="/productspage/SugarSpheresNps" element={<SugarSpheresNps />} />
            <Route path="/productspage/DietarySupplements" element={<DietarySupplements />} />
                        <Route path="/productspage/AntiEpileptic" element={<AntiEpileptic />} />

            <Route
              path="/productspage/VitaminsAndMineralsPremixDcGranules"
              element={<VitaminsAndMineralsPremixDcGranules />}
            />
            <Route path="/equipment" element={<Equipmentpage />} />
          </Routes>
        </main>

        {/* Live Chat Widget - Will appear on all pages */}
        {/* <LiveChatWidget /> */}
      </div>
    </Router>
  )
}

export default App
