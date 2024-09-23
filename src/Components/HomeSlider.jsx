import React from 'react'
import { Carousel, Container, Row, Col } from 'react-bootstrap';

function HomeSlider() {




    return (



        <>





            <section>




                <Carousel controls={false}>


                    <Carousel.Item>


                        <Row>

                            <Col md={12} className="ps-0">


                                <div>

                                    <img
                                        className="d-block w-100"
                                        src="/slide1.jpg"
                                        alt="First slide"
                                        loading='lazy'
                                    />

                                </div>

                            </Col>


                        </Row>


                    </Carousel.Item>




                    <Carousel.Item>


                        <Row>

                            <Col md={12} className="ps-0">


                                <div>

                                    <img
                                        className="d-block w-100"
                                        src="/slide2.jpg"
                                        alt="First slide"
                                        loading='lazy'
                                    />

                                </div>

                            </Col>


                        </Row>


                    </Carousel.Item>




                    <Carousel.Item>


                        <Row>

                            <Col md={12} className="ps-0">


                                <div>

                                    <img
                                        className="d-block w-100"
                                        src="/slide3.jpg"
                                        alt="First slide"
                                        loading='lazy'
                                    />

                                </div>

                            </Col>


                        </Row>


                    </Carousel.Item>







                </Carousel>







            </section>









        </>





    )






}

export default HomeSlider