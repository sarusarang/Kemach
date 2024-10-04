import React, { useEffect, useState } from 'react'
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import { Slider } from '../Hooks/Slider';

function HomeSlider() {


    // Slider Data
    const [SliderData, SetSliderData] = useState([])


    const { data, isLoading, isSuccess, isError } = Slider()



    useEffect(() => {

        if (data && isSuccess) {

            SetSliderData(data)

        }

    }, [data, isSuccess])






    return (



        <>

            <section>


                <Carousel controls={false}>


                    {

                        isLoading ?

                            <div>
                                Loading...
                            </div>

                            :

                            SliderData.map((Item, index) => (

                                <Carousel.Item key={index}>

                                    <Row>

                                        <Col md={12} className="ps-0">


                                            <div>

                                                <img
                                                    className="d-block w-100"
                                                    src={Item.image}
                                                    alt="First slide"
                                                    loading='lazy'
                                                />

                                            </div>

                                        </Col>


                                    </Row>

                                </Carousel.Item>

                            ))

                    }




                </Carousel>

            </section>


        </>

    )


}

export default HomeSlider