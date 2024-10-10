import React, { useEffect, useState } from 'react'
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import { Slider } from '../Hooks/Slider';

function HomeSlider() {


    // Slider Data
    const [SliderData, SetSliderData] = useState([])


    const { data, isLoading, isSuccess } = Slider()



    useEffect(() => {

        if (data && isSuccess) {

            SetSliderData(data)

        }

    }, [data, isSuccess])







    return (



        <>

            <section>


                {/* <Carousel controls={false}>

                    <Carousel.Item >

                        <Row>

                            <Col md={12} className="ps-0">


                                <div className='carousel-image-container'>

                                    <img
                                        className="d-block w-100 carousel-image"
                                        src="/Baner1.jpg"
                                        alt="First slide"
                                        loading='lazy'
                                       
                                    />

                                </div>

                                <div style={{
                                    position: 'absolute',
                                    top: '20%',
                                    left: '3%',
                                    color: 'white',
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                                    fontSize: '40px',
                                    textAlign: 'center',
                                    fontWeight: '700'
                                }} className='typing-animation'>

                                    When The Ground Needs Moving, <br /> We’ve Got The Power To <br /> Get It Done
                                </div>



                            </Col>


                        </Row>

                    </Carousel.Item>



                    <Carousel.Item >

                        <Row>

                            <Col md={12} className="ps-0">


                                <div>

                                    <img
                                        className="d-block w-100"
                                        src="/Baner2.jpg"
                                        alt="First slide"
                                        loading='lazy'
                                        
                                    />

                                </div>

                                <div style={{
                                    position: 'absolute',
                                    top: '25%',
                                    left: '3%',
                                    color: 'white',
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                                    fontSize: '40px',
                                    textAlign: 'center',
                                    fontWeight: '700'

                                }} className='typing-animation'>

                                    Transform Your Worksite With <br /> Force Of Our Heavy-Duty <br /> Machines
                                </div>



                            </Col>


                        </Row>

                    </Carousel.Item>




                    <Carousel.Item >

                        <Row>

                            <Col md={12} className="ps-0">


                                <div>

                                    <img
                                        className="d-block w-100"
                                        src="/Baner3.jpg"
                                        alt="First slide"
                                        loading='lazy'
                                       
                                    />

                                </div>

                                <div style={{
                                    position: 'absolute',
                                    top: '25%',
                                    left: '3%',
                                    color: 'white',
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                                    fontSize: '40px',
                                    textAlign: 'center',
                                    fontWeight: '700'
                                }} className='typing-animation'>

                                    Power And Precision In Every <br /> Move, Heavy Equipment For Your <br /> Next Big Project
                                </div>



                            </Col>


                        </Row>

                    </Carousel.Item>


                    <Carousel.Item >

                        <Row>

                            <Col md={12} className="ps-0">


                                <div>

                                    <img
                                        className="d-block w-100"
                                        src="/Baner4.jpg"
                                        alt="First slide"
                                        loading='lazy'
                                        
                                    />

                                </div>

                                <div style={{
                                    position: 'absolute',
                                    top: '25%',
                                    left: '3%',
                                    color: 'white',
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                                    fontSize: '40px',
                                    textAlign: 'center',
                                    fontWeight: '700'
                                }} className='typing-animation'>

                                    Paving The Way To Progress <br /> With Industry-Leading <br /> Technology
                                </div>



                            </Col>


                        </Row>

                    </Carousel.Item>




                </Carousel> */}

                <div id="carouselExampleAutoplaying" className="carousel slide main-carousel" data-bs-ride="carousel">

                    <div className="carousel-inner">

                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active"
                                aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="3"
                                aria-label="Slide 4"></button>
                        </div>


                        <div style={{backgroundImage:'url("/Baner1.jpg")'}} className="carousel-item active">
                            <div className="carousel-caption d-block fade-up ">
                                <h4 className="fw-bolder" data-aos="fade-up">When the ground needs moving,
                                    we’ve got the power to get it done</h4>
                            </div>
                        </div>

                        <div style={{backgroundImage:'url("/Baner2.jpg")'}}  className="carousel-item">
                            <div className="carousel-caption d-block fade-up">
                                <h4 className="fw-bolder">Transform your worksite with
                                    force of our heavy-duty machines</h4>
                            </div>
                        </div>


                        <div style={{backgroundImage:'url("/Baner3.jpg")'}}  className="carousel-item">
                            <div className="carousel-caption d-block fade-up">
                                <h4 className="fw-bolder">Power and precision in every move,
                                    heavy equipment for your next big project</h4>
                            </div>
                        </div>


                        <div style={{backgroundImage:'url("/Baner4.jpg")'}}  className="carousel-item">
                            <div className="carousel-caption d-block fade-up">
                                <h4 className="fw-bolder">Paving the way to progress with
                                    industry-leading technology</h4>
                            </div>
                        </div>


                    </div>
                </div>


            </section>


        </>

    )


}

export default HomeSlider