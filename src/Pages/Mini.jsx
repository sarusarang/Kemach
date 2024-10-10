import React from 'react'
import { useState, useEffect } from 'react'
import { Machineries } from '../Hooks/Machineries'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'

function Mini() {


    window.scrollTo(0, 0)



    const { data, error, isLoading, isSuccess } = Machineries()

    const [ProductData, SetProductData] = useState([])



    useEffect(() => {

        AOS.init()

        if (data && isSuccess) {

            const res = data.filter((item) => (item.category === "Mini_Excavators"))

            SetProductData(res)
        }


        window.scrollTo(0, 0)

    }, [data, isSuccess])


    console.log(data);



    return (



        <>

            <section className="productTopImage"
                style={{ backgroundImage: 'url("/skidstrip.jpg")' }}>
            </section>


            <main className="container" id="ForkLiftD">

                <section className="fork-s1">

                    <div className="row row1">
                        <h1>Mini Excavators</h1>
                        <p>
                            Our most compact machine are amazingly nimble, versatile and reliable machines that can work just about anywhere while packing a surprising amount of power, rivalling bigger competitors.
                        </p>
                    </div>


                    <div className="row">


                        <div className="col-md-12">

                            <div className="row row2 gx-4 gx-lg-3 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center ">


                                {

                                    isLoading ?

                                        <div>
                                            Loading..?
                                        </div>

                                        :

                                        ProductData.map((item, index) => (

                                            <div className="col mb-3" key={index}>
                                                <Link to={`/pro/${item.id}`} className="text-decoration-none ">
                                                    <div className="card h-100" data-aos="fade-down">
                                                        <img src={item.image}
                                                            className="img-fluid" alt="..." loading='lazy' />
                                                        <div className="card-body">
                                                            <h5 className="card-title">
                                                                {item.name}
                                                            </h5>
                                                            <p className="card-text" style={{ textAlign: 'justify' }}>
                                                                {item.description}
                                                            </p>

                                                            <a href="#" className=" d-flex justify-content-center align-items-center btn ">Learn More <i
                                                                className="fa-solid ps-1 fa-right-long"></i></a>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>

                                        ))

                                }

                            </div>

                        </div>


                    </div>


                </section>


                <section className="fork-s2">
                    <div className="row seperation" data-aos="fade-up">
                        <h1>Attachments</h1>
                    </div>
                </section>


                <section className="fork-s1">
                    <div className="row row2 gx-4 gx-lg-3 row-cols-1 row-cols-sm-2 row-cols-xl-6 justify-content-center ">
                        <div className="col mb-3">
                            <a href="" className="text-decoration-none ">
                                <div className="card h-100" data-aos="fade-down">
                                    <img src="https://res.cloudinary.com/doosan-bobcat/image/upload/ar_1.5,c_fill,f_auto,g_auto,q_auto,w_480/v1680947772/bobcat-assets/alao-approved/in/products/attachments/images/20230406-bobcat-in-auger"
                                        className="img-fluid" alt="..." loading='lazy' />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Auger - 15C
                                        </h5>
                                        <a href="#" className=" d-flex justify-content-center align-items-center btn ">Learn More <i
                                            className="fa-solid ps-1 fa-right-long"></i></a>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col mb-3">
                            <a href="" className="text-decoration-none ">
                                <div className="card h-100" data-aos="fade-down">
                                    <img src="https://res.cloudinary.com/doosan-bobcat/image/upload/ar_1.5,c_fill,f_auto,g_auto,q_auto,w_480/v1680947772/bobcat-assets/alao-approved/in/products/attachments/images/20230406-bobcat-in-auger"
                                        className="img-fluid" alt="..." loading='lazy' />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Auger - 15H
                                        </h5>
                                        <a href="#" className=" d-flex justify-content-center align-items-center btn ">Learn More <i
                                            className="fa-solid ps-1 fa-right-long"></i></a>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col mb-3">
                            <a href="" className="text-decoration-none ">
                                <div className="card h-100" data-aos="fade-down">
                                    <img src="https://res.cloudinary.com/doosan-bobcat/image/upload/ar_1.5,c_fill,f_auto,g_auto,q_auto,w_480/v1680947772/bobcat-assets/alao-approved/in/products/attachments/images/20230406-bobcat-in-auger"
                                        className="img-fluid" alt="..." loading='lazy' />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Auger - 30C
                                        </h5>
                                        <a href="#" className=" d-flex justify-content-center align-items-center btn ">Learn More <i
                                            className="fa-solid ps-1 fa-right-long"></i></a>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col mb-3">
                            <a href="" className="text-decoration-none ">
                                <div className="card h-100" data-aos="fade-down">
                                    <img src="https://res.cloudinary.com/doosan-bobcat/image/upload/ar_1.5,c_fill,f_auto,g_auto,q_auto,w_480/v1680947772/bobcat-assets/alao-approved/in/products/attachments/images/20230406-bobcat-in-auger"
                                        className="img-fluid" alt="..." loading='lazy' />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Auger - 30H
                                        </h5>
                                        <a href="#" className=" d-flex justify-content-center align-items-center btn ">Learn More <i
                                            className="fa-solid ps-1 fa-right-long"></i></a>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
            </main>




        </>





    )





}

export default Mini