import React from "react"
import { Suspense, lazy } from "react"
import { Routes, Route } from "react-router-dom"


const Landing = lazy(() => import('./Pages/Landing'))
const Footer = lazy(() => import('./Components/Footer'))
const Header = lazy(() => import('./Components/Header'))
const Contact= lazy(() => import('./Pages/ContactUs'))
const Locator= lazy(() => import('./Pages/Locator'))
const Skid= lazy(() => import('./Pages/Skid'))
const Mini= lazy(() => import('./Pages/Mini'))
const DrillsBits= lazy(() => import('./Pages/DrillsBits'))
const RockBeaker= lazy(() => import('./Pages/RockBeaker'))
const Enquiry= lazy(() => import('./Pages/Enquiry'))
const Service= lazy(() => import('./Pages/Service'))
const SingleProduct= lazy(() => import('./Pages/SingleProduct'))
const Booking= lazy(() => import('./Pages/Booking'))
const Terms= lazy(() => import('./Pages/Terms'))
const Policy= lazy(() => import('./Pages/Policy'))




function App() {




  return (


    <>


      <Suspense>

        <Header />


      </Suspense>


      <Suspense>


        <Routes>

          <Route path="/" element={<Landing />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/locator" element={<Locator />} />

          <Route path="/skid" element={<Skid />} />

          <Route path="/mini" element={<Mini />} />

          <Route path="/drills" element={<DrillsBits />} />

          <Route path="/rock" element={<RockBeaker />} />

          <Route path="/enquiry" element={<Enquiry />} />

          <Route path="/service" element={<Service />} />

          <Route path="/pro/:id" element={<SingleProduct />} />

          <Route path="/book" element={<Booking />} />

          <Route path="/terms" element={<Terms />} />

          <Route path="/policy" element={<Policy />} />


        </Routes>


      </Suspense>



      <Suspense>

        <Footer />

      </Suspense>


    </>



  )
}

export default App
