import React, { useState } from 'react'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
import { Machineries } from '../Hooks/Machineries'

export default function Skid() {




    const { data, error, isLoading, isSuccess } = Machineries()

    const [ProductData, SetProductData] = useState([])



    useEffect(() => {

        AOS.init()

        if (data && isSuccess) {

            const res = data.filter((item) => (item.category === "Skid_Steer_Loaders"))

            SetProductData(res)
        }


        window.scrollTo(0, 0)

    }, [data, isSuccess])








    return (


        <>


            <section className="productTopImage"
                style={{ backgroundImage: 'url("https://res.cloudinary.com/doosan-bobcat/image/upload/c_fill,f_auto,g_auto,h_480,q_auto,w_2048/v1671105824/bobcat-assets/alao-approved/in/products/skid-steer-loaders/category-image/20221214-in-ssl-herospot")' }}>
            </section>


            <main className="container" id="ForkLiftD">

                <section className="fork-s1">

                    <div className="row row1">
                        <h1>Bobcat Skid-Steer Loaders</h1>
                        <p>
                            Here at Bobcat®, we make the world's n° 1 skid-steer loader! The Bobcat Company invented the compact
                            skid-steer loader back in 1958. Ever since, Bobcat has celebrated a history of value, performance
                            and reliability. As your versatile partner with more than a dozen models and a range of genuine
                            Bobcat® attachments to suit all your applications, we can help you complete even the toughest jobs.
                        </p>
                    </div>


                    <div className="row">




                        <div className="col-md-12">

                            <div className="row row2 gx-4 gx-lg-3 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center ">

                                {


                                    isLoading ?

                                        <div>
                                            Loading...?
                                        </div>

                                        :

                                        ProductData.map((item, index) => (

                                            <div className="col mb-3 mt-3" key={index}>

                                                <Link to={`/pro/${item.id}`} className="text-decoration-none ">
                                                    <div className="card h-100" data-aos="fade-down">
                                                        <img src={item.image}
                                                            className="img-fluid" alt="..." loading='lazy' />
                                                        <div className="card-body">
                                                            <h5 className="card-title">
                                                                {item.name}
                                                            </h5>
                                                            <p className="card-text" style={{textAlign:'justify'}}>
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
                                    <img src="https://res.cloudinary.com/doosan-bobcat/image/upload/ar_1.5,c_fill,f_auto,g_auto,q_auto,w_480/v1680947784/bobcat-assets/alao-approved/in/products/attachments/images/20230406-bobcat-in-brushcat-rotary-cutter"
                                        className="img-fluid" alt="..." loading='lazy' />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Brushcat - 66", Standard Flow
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
                                    <img src="https://res.cloudinary.com/doosan-bobcat/image/upload/ar_1.5,c_fill,f_auto,g_auto,q_auto,w_320/v1680947784/bobcat-assets/alao-approved/in/products/attachments/images/20230406-bobcat-in-brushcat-rotary-cutter"
                                        className="img-fluid" alt="..." loading='lazy' />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Brushcat - 72", High Flow
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
                                    <img src="https://res.cloudinary.com/doosan-bobcat/image/upload/ar_1.5,c_fill,f_auto,g_auto,q_auto,w_320/v1680947784/bobcat-assets/alao-approved/in/products/attachments/images/20230406-bobcat-in-brushcat-rotary-cutter"
                                        className="img-fluid" alt="..." loading='lazy' />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Brushcat - 72", Standard Flow
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
                                    <img src="https://res.cloudinary.com/doosan-bobcat/image/upload/ar_1.5,c_fill,f_auto,g_auto,q_auto,w_320/v1680947784/bobcat-assets/alao-approved/in/products/attachments/images/20230406-bobcat-in-brushcat-rotary-cutter"
                                        className="img-fluid" alt="..." loading='lazy' />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Brushcat - 80", High Flow
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
