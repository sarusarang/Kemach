import React from 'react'
import { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {


    useEffect(() => {

        AOS.init()

    }, [])

    
    return (


        <>

            <main className='container'>


                <section className="s1">


                    <div className="row">

                        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center"
                            data-aos-duration="1000" data-aos="fade-up">
                            <h3 className="text-center">About</h3>
                            <p>Kemach Equipments Pvt Ltd is a leading dealer of Bobcat and Indus Rock Tools,
                                providing a comprehensive range of high-quality construction and industrial machinery.
                                Specializing in reliable Bobcat equipment and durable Indus Rock Tools,
                                we offer efficient, performance-driven solutions that meet the
                                toughest demands of the construction industry.
                            </p>
                        </div>

                        <div className="col-md-6 d-flex justify-content-center align-items-center" data-aos-duration="1000"
                            data-aos="fade-down">
                            <img src="/logo.jpg" loading='lazy' alt="img" />
                        </div>


                    </div>


                </section>



                {/* About Slider */}
                <section className="s2">

                    <div className="row gx-4 gx-lg-3 row-cols-1 row-cols-sm-3 row-cols-xl-3 justify-content-center container">


                        {

                            Array.from({ length: 3 }).map((item,index) => (

                                <div className="col mb-5" key={index}>
                                    <div className="card" data-aos="fade-up">
                                        <Carousel id="carouselExampleIndicatorsCard1" interval={3000} controls={false} indicators={true}>
                                            <Carousel.Item>
                                                <img src="/sam1.jpg" loading="lazy" className="d-block w-100" alt="First slide" />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img src="/sam2.jpg" loading="lazy" className="d-block w-100" alt="Second slide" />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img src="/sam3.jpg" loading="lazy" className="d-block w-100" alt="Third slide" />
                                            </Carousel.Item>
                                        </Carousel>
                                    </div>
                                </div>


                            ))

                        }


                    </div>

                </section>


            </main>

        </>






    )




}

export default About