import React from "react"
import { Suspense, lazy } from "react"
import { Routes, Route } from "react-router-dom"


const Landing = lazy(() => import('./Pages/Landing'))
const Footer = lazy(() => import('./Components/Footer'))
const Header = lazy(() => import('./Components/Header'))
const Contact= lazy(() => import('./Pages/ContactUs'))
const Locator= lazy(() => import('./Pages/Locator'))
const SkidLoader= lazy(() => import('./Pages/SkidLoader'))




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

          <Route path="/skidloader" element={<SkidLoader />} />

        </Routes>


      </Suspense>



      <Suspense>

        <Footer />

      </Suspense>


    </>



  )
}

export default App
