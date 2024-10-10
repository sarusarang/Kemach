import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
import { Machineries } from '../Hooks/Machineries'


function DrillsBits() {

    const { data, error, isLoading, isSuccess } = Machineries()


    const [Attachments, SetAttachments] = useState([])

    const [Bits, SetBits] = useState([])


    useEffect(() => {

        AOS.init()

        if (data && isSuccess) {

            const res = data.filter((item) => (item.sub_category === "hydraulic_Attachments"))

            const res1 = data.filter((item) => (item.sub_category === "drill_Bits"))

            SetAttachments(res)

            SetBits(res1)

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
                        <h1>Hydraulic Attachments & Drill Bits </h1>
                        {/* <p>
                             Bobcat® Backhoe Loaders are versatile machines and can easily be configured for different applications by coupling with Bobcat optional attachments. Whatever your job - digging, trenching, breaking or material handling (to name but a few) - Bobcat Backhoe Loaders have the power to get it done efficiently. Under the hood, they have the best-in-className 100 hp engine to take on tough jobs with powerful performance and high fuel economy. 
                        </p> */}
                    </div>


                    <div className="rock-seperation">
                        <h4 className='text-center fw-bold'>Hydraulic Attachments</h4>
                    </div>


                    <div className="row row2 gx-4 gx-lg-3 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center  py-5 ">


                        {

                            isLoading ?

                                <div>
                                    loading...
                                </div>

                                :

                                Attachments.length > 0 ?

                                    Attachments.map((item, index) => (


                                        <div className="col mb-3" key={index}>

                                            <Link to={`/pro/${item.id}`} className="text-decoration-none ">

                                                <div className="card h-100" data-aos="fade-down">

                                                    <img src={item.image}
                                                        className="img-fluid" alt="..." loading='lazy' />


                                                    <div className="card-body">
                                                        <h5 className="card-title">
                                                            {item.name}
                                                        </h5>
                                                        <p className="card-text">
                                                            {item.sub_description}
                                                        </p>

                                                        <a href="#" className=" d-flex justify-content-center align-items-center btn ">Learn More <i
                                                            className="fa-solid ps-1 fa-right-long"></i></a>
                                                    </div>

                                                </div>

                                            </Link>

                                        </div>


                                    ))

                                    :

                                    <div>No products Avalabile</div>


                        }



                    </div>


                    <div className="rock-seperation">
                        <h4 className='text-center fw-bold'>Drill Bits</h4>
                    </div>


                    <div className="row row2 gx-4 gx-lg-3 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center  py-5 ">


                        {

                            isLoading ?

                                <div>
                                    loading...
                                </div>

                                :

                                Bits.length > 0 ?

                                    Bits.map((item, index) => (


                                        <div className="col mb-3" key={index}>

                                            <Link to={`/pro/${item.id}`} className="text-decoration-none ">

                                                <div className="card h-100" data-aos="fade-down">

                                                    <img src={item.image}
                                                        className="img-fluid" alt="..." loading='lazy' />


                                                    <div className="card-body">
                                                        <h5 className="card-title">
                                                            {item.name}
                                                        </h5>
                                                        <p className="card-text">
                                                            {item.sub_description}
                                                        </p>

                                                        <a href="#" className=" d-flex justify-content-center align-items-center btn ">Learn More <i
                                                            className="fa-solid ps-1 fa-right-long"></i></a>
                                                    </div>

                                                </div>

                                            </Link>

                                        </div>


                                    ))

                                    :

                                    <div>No products Avalabile</div>


                        }


                    </div>

                </section>


            </main>




        </>







    )






}

export default DrillsBits