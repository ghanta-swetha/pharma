import React from 'react'
import HeroPage from './Homepage/Heropage'
import AboutSpansules from './Homepage/Aboutspanules'
import CompanyInfoSections from './Homepage/CompanyInfoSections'
import FeaturedProducts from './Homepage/FeaturedProducts'
import CertificationsSection from './Homepage/CertificationsSection'
import LatestNewsEvents from './Homepage/Latestnews'
import ProductCard from './Homepage/ProductCard'
import Footer from '../components/Footer'
import TrustedClients from './Homepage/Ourclients'
import PharmaceuticalBanner from './Homepage/Equipment'

const Home = () => {
    return (
        <div>
            <HeroPage />
            <AboutSpansules />
            <CompanyInfoSections />
            <FeaturedProducts/>
            <CertificationsSection/>
            <ProductCard/>
            <TrustedClients/>
            <PharmaceuticalBanner/>
            <LatestNewsEvents/>
            <Footer/>
        </div>
    )
}

export default Home