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

                                            <div style={{
                                                position: 'absolute',
                                                top: '30%',
                                                left: '3%',
                                                color: 'white',
                                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                                                fontSize: '2.1rem'
                                            }} className='typing-animation'>
                                                {Item.caption}
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