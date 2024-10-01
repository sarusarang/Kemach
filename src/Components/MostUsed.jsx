import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link, useNavigate } from 'react-router-dom'

function MostUsed() {


    useEffect(() => {

        AOS.init()

    }, [])


    const Navigate = useNavigate()


    return (



        <>


            <main className='container'>


                <section className="py-3 text-capitalize s3">

                    <div className="row">

                        <div className="col-md-6 items-col d-flex justify-content-center align-items-center ">


                            <div className="box" onClick={()=>{Navigate('/enquiry')}} style={{cursor:'pointer'}}>

                                <p>Book a Test Operation</p>
                                <img src="/testdrive.png" alt="slide-img" loading='lazy' />

                            </div>


                            <div className="box" onClick={()=>{Navigate('/book')}} style={{cursor:'pointer'}}>

                                <p>Service Appointment</p>
                                <img src="/service.png" alt="slide-img" loading='lazy' />

                            </div>


                        </div>

                        <div className="col-md-6">
                            <h3 className="text-center" data-aos="fade-up">Most Used earthmoving equipment in
                                <span> India</span>
                            </h3>
                            <p data-aos="zoom-in-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                                perspiciatis mollitia amet obcaecati minus
                                nulla fugit explicabo maiores voluptatum, accusamus
                                voluptates numquam iusto tempore vero quos eum
                                inventore adipisci doloremque assumenda eveniet fuga?
                                Deleniti, dicta est excepturi provident quam iure
                                veritatis unde fuga voluptatem cumque quasi obcaecati
                                itaque, et dignissimos harum repudiandae fugit!
                                Soluta cupiditate est temporibus quisquam, voluptatem
                                eius.
                            </p>
                        </div>


                    </div>

                </section>



                <section className="s4">

                    <div className="row gx-4 gx-lg-3 row-cols-1 row-cols-sm-2 row-cols-xl-2 justify-content-center container">


                        <div className="col mb-3">

                            <Link ><div className="card" data-aos="fade-up">

                                <img src="/bi1.jpg" loading='lazy' alt="slide-img" />

                                <div class="card-img-overlay d-flex align-items-end mb-3 justify-content-center">
                                    <h4 class="card-title fw-bolder text-white ">Skid-Steer Loaders</h4>
                                </div>

                            </div></Link>


                        </div>


                        <div className="col mb-3">

                            <Link ><div className="card" data-aos="fade-down">

                                <img src="/bi2.jpg" loading='lazy' alt="slide-img" />

                                <div class="card-img-overlay d-flex align-items-end mb-3 justify-content-center">
                                    <h4 class="card-title fw-bolder text-white">Mini Excavators</h4>
                                </div>

                            </div></Link>


                        </div>


                        <div className="col mb-3">

                            <Link ><div className="card" data-aos="fade-up">

                                <img src="/bi3.jpg" loading='lazy' alt="slide-img" />

                                <div class="card-img-overlay d-flex align-items-end mb-3 justify-content-center">
                                    <h4 class="card-title fw-bolder text-white ">Backhoe Loaders</h4>
                                </div>

                            </div></Link>


                        </div>

                        <div className="col mb-3">

                            <Link ><div className="card" data-aos="fade-down">

                                <img src="/bi4.jpg" loading='lazy' alt="slide-img" />

                                <div class="card-img-overlay d-flex align-items-end mb-3 justify-content-center">
                                    <h4 class="card-title text-white fw-bolder ">Hydraulic Attachments & Drill Bits</h4>
                                </div>

                            </div></Link>


                        </div>


                    </div>

                </section>



                <section className="s5 py-3">
                    <div className="row " >
                        <h3 data-aos="fade-up">The Kemach</h3>
                        <p data-aos="fade-down">
                            Kemach has been a trusted dealer of Bobcat heavy earth-moving equipment for the past 18 years,
                            serving both Kerala and Tamil Nadu with a strong commitment to quality and customer satisfaction. As
                            a leading provider in the industry, Kemach offers a wide range of Bobcat machinery, including
                            loaders, excavators, and compact equipment, catering to various construction, agricultural, and
                            industrial needs. In addition to sales, Kemach provides comprehensive service-related solutions,
                            ensuring that their customers receive top-notch maintenance, repairs, and support throughout the
                            lifecycle of their equipment
                        </p>
                        <p data-aos="fade-down">
                            KP Velumani is a highly accomplished leader with over 30 years of expertise in the construction
                            equipment industry. With a robust presence in the Kerala market for the past 15 years, he has
                            consistently demonstrated a deep understanding of market trends and customer needs. A graduate with
                            a strong technical background, he began his career in the Product Support Department at ELGI
                            Equipments Ltd, where he specialized in Rotary Screw Compressors for a decade (1986-1996).
                        </p>
                        <p data-aos="fade-down">
                            Velumani's leadership track record includes serving as Director of Ramsive Pneumatics Pvt Ltd and
                            Marwell Enncon Tech Pvt Ltd, where he drove significant growth and operational efficiency.
                            Currently, as the Managing Director of Kemach Equipments, a trusted dealer for Bobcat and Indus
                            Rock, he continues to steer the company towards innovation and excellence. His visionary leadership,
                            coupled with a commitment to delivering high-quality solutions, makes him a driving force in the
                            industry and a valuable asset to any enterprise.
                        </p>
                    </div>

                </section>


            </main>





        </>



    )






}

export default MostUsed