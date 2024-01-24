
"use client";
import Footer from '@/components/common/Footer'
import Map from '@/components/common/Map';
import Navbar from '@/components/common/Navbar'
import AboutUs from '@/components/home/AboutUs'
import Band from '@/components/home/Band'
import BannerSection from '@/components/home/BannerSection'
import Collaboration from '@/components/home/Collaboration'
import Form from '@/components/home/Form'
import Gallery from '@/components/home/Gallery'
import Services from '@/components/home/Services'
import ServiceText from '@/components/home/Services-text'
import React from 'react'

const index = () => {
  return (
    <div>
     <Navbar/>
     <BannerSection/>
     <AboutUs/>
     <Services/>
     <ServiceText/>
     <Band/>
     {/* <Collaboration/> */}
     <Gallery/>
     {/* <Form/> */}
     <Map/>
     <Footer/>
    </div>
  )
}

export default index