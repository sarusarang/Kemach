import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link, useNavigate } from 'react-router-dom'
import { Carousel } from 'react-bootstrap';

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


                            <div className="box shadow" onClick={() => { Navigate('/enquiry') }} style={{ cursor: 'pointer' }}>

                                <p>Book a Test Operation</p>
                                <img src="/testdrive.png" alt="slide-img" loading='lazy' />

                            </div>


                            <div className="box shadow" onClick={() => { Navigate('/book') }} style={{ cursor: 'pointer' }}>

                                <p>Service Appointment</p>
                                <img src="/worker.png" alt="slide-img" loading='lazy' />

                            </div>


                        </div>

                        <div className="col-md-6 right-1">

                            {/* <h3 className="text-center " data-aos="fade-up">Most Used earthmoving equipment in
                                <span>India </span>
                            </h3> */}

                            <p data-aos="zoom-in-up">
                                The second-generation transition in the business not only brings a captivating blend of
                                continuity and fresh perspectives, emphasizing our familial roots and a profound understanding
                                of core strengths but also introduces an enhanced knowledge base in the field. This added
                                expertise notches up our ability to propel the business forward with greater ease, creating a
                                compelling narrative for our future success.
                            </p>

                        </div>


                    </div>

                </section>

                <hr style={{ color: 'red' }} />


                <section className="s4">

                    <h3 class="pt-1 text-center text-capitalize fw-bold h5">The Most delivered equipments</h3>

                    <div className="row gx-4 gx-lg-3 row-cols-1 row-cols-sm-2 row-cols-xl-2 justify-content-center container">


                        <div className="col mb-3">

                            <Link ><div className="card shadow border-0" data-aos="fade-up">

                                <img src="/SQ 3.jpg" loading='lazy' alt="slide-img" />

                                <div className="card-img-overlay d-flex align-items-end mb-3 justify-content-center">
                                    <h4 className="card-title fw-bolder text-white ">Skid-Steer Loaders</h4>
                                </div>

                            </div></Link>


                        </div>


                        <div className="col mb-3">

                            <Link ><div className="card shadow border-0" data-aos="fade-down">

                                <img src="/SQ 5.jpg" loading='lazy' alt="slide-img" />

                                <div className="card-img-overlay d-flex align-items-end mb-3 justify-content-center">
                                    <h4 className="card-title fw-bolder text-white ">Mini Excavators</h4>
                                </div>

                            </div></Link>


                        </div>


                        <div className="col mb-3">

                            <Link ><div className="card shadow border-0" data-aos="fade-up">

                                <img src="/SQ1.jpg" loading='lazy' alt="slide-img" />

                                <div className="card-img-overlay d-flex align-items-end mb-3 justify-content-center">
                                    <h4 className="card-title fw-bolder text-white ">Backhoe Loaders</h4>
                                </div>

                            </div></Link>


                        </div>

                        <div className="col mb-3" data-aos="fade-up">

                            <Carousel id="carouselExampleIndicatorsCard1" className='border shadow' interval={3000} controls={false} indicators={false}>

                                <Carousel.Item>

                                    <img src="/SQ 4 A.jpg" loading="lazy" className="d-block w-100" alt="First slide" />

                                    <Carousel.Caption>
                                        <h4>Attachment & Accessories</h4>

                                    </Carousel.Caption>

                                </Carousel.Item>

                                <Carousel.Item>
                                    <img src="/SQ 4 B.jpg" loading="lazy" className="d-block w-100" alt="Second slide" />
                                    <Carousel.Caption>
                                        <h4>Attachment & Accessories</h4>


                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img src="/SQ 4 C.jpg" loading="lazy" className="d-block w-100" alt="Third slide" />
                                    <Carousel.Caption>
                                        <h4>Attachment & Accessories</h4>


                                    </Carousel.Caption>
                                </Carousel.Item>


                            </Carousel>


                        </div>


                    </div>

                </section>



                <section className="s5 py-3">

                    <div className="row">

                        <div className="col-md-8">

                            <h3 data-aos="fade-up">The Kemach</h3>
                            <p data-aos="fade-down" style={{ textAlign: 'justify' }}>

                                Kemach has been a trusted dealer of Bobcat heavy earth-moving equipment for the past 18 years, serving both Kerala and Tamil Nadu with a strong commitment to quality and customer satisfaction. The company offers a wide range of Bobcat machinery, including loaders, excavators, skid steer loaders, mini excavators, backhoe loaders, and compact equipment, catering to various construction, agricultural, and industrial needs. <br /> <br />

                                In addition to sales, Kemach provides comprehensive service-related solutions, ensuring top-notch maintenance, repairs, and support throughout the lifecycle of their equipment.Their service commitment extends to both preventive care and timely repairs, helping customers maximize the performance and longevity of their machines.

                                Kemach is led by KP Velumani, the Managing Director with over 30 years of expertise in the construction equipment industry. His leadership has been instrumental in establishing Kemach as a major player in the Kerala and Tamil Nadu markets.

                                Velumani’s journey began in the Product Support Department at ELGI Equipments Ltd, where he spent a decade specializing in Rotary Screw Compressors. His career evolved as Director of Ramsive Pneumatics and Marwell Enncon Tech, where he achieved significant growth and operational efficiency.

                                Under his visionary leadership, Kemach continues to innovate and deliver high-quality solutions, making it a go-to provider for Bobcat equipment and Indus Rock Breakers in the region.                </p>

                        </div>

                        <div className="col-md-4 d-flex flex-column align-content-center justify-content-center">
                            <img src="/IMG_7717.png" width="100%" alt="" />
                            <div className="img-box">
                                <p>K.P Velumani (Managing Director) </p>
                            </div>
                        </div>


                    </div>

                </section>




            </main>





        </>



    )






}

export default MostUsed