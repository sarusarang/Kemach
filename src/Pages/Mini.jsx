import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'

export default function Mini() {



    useEffect(() => {

        AOS.init()

    }, [])

    window.scrollTo(0, 0)

    return (


        <>


            <section class="productTopImage"
                style={{ backgroundImage: 'url("https://res.cloudinary.com/doosan-bobcat/image/upload/c_fill,f_auto,g_auto,h_480,q_auto,w_2048/v1671105824/bobcat-assets/alao-approved/in/products/skid-steer-loaders/category-image/20221214-in-ssl-herospot")' }}>
            </section>


            <main class="container" id="ForkLiftD">


                <section class="fork-s1">


                    <div class="row row1">
                        <h1>Mini Excavators</h1>
                        <p>
                            Our most compact machine are amazingly nimble, versatile and reliable machines that can work just
                            about anywhere while packing a surprising amount of power, rivalling bigger competitors.
                        </p>
                    </div>


                    <div class="row">


                        <div class="col-md-12">

                            <div class="row row2 gx-4 gx-lg-3 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center ">
                                <div class="col mb-3">

                                    <Link to={'/pro/1'} class="text-decoration-none ">
                                        <div class="card h-100" data-aos="fade-down">
                                            <img src="https://res.cloudinary.com/doosan-bobcat/image/upload/ar_1.5,c_fill,f_auto,g_auto,q_auto,w_480/v1670594325/bobcat-assets/alao-approved/in/products/excavators/models/e20z/20221209-in-e20z-studio"
                                                class="img-fluid" alt="..." />

                                            <div class="card-body">
                                                <h5 class="card-title">
                                                    E20z Mini Excavator
                                                </h5>
                                                <p class="card-text" style={{textAlign:'justify'}}>
                                                    The Bobcat® E20z compact excavator (mini excavator) delivers impressive performance
                                                    in confined spaces with the need for only minimal repositioning.
                                                </p>

                                                <a href="#" class=" d-flex justify-content-start align-items-center btn btn-learn ">Learn More <i
                                                    class="fa-solid ps-1 fa-right-long"></i></a>


                                            </div>


                                        </div>
                                    </Link>

                                </div>


                                <div class="col mb-3">
                                    <Link to={'/pro/1'}  class="text-decoration-none ">
                                        <div class="card h-100" data-aos="fade-down">
                                            <img src="https://res.cloudinary.com/doosan-bobcat/image/upload/ar_1.5,c_fill,f_auto,g_auto,q_auto,w_480/v1670594356/bobcat-assets/alao-approved/in/products/excavators/models/e27/20221209-in-e27-studio"
                                                class="img-fluid" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">
                                                    E27 Mini Excavator
                                                </h5>
                                                <p class="card-text" style={{textAlign:'justify'}}>
                                                    The Bobcat® E27 mini excavator introduces an in-class unique combination of superior
                                                    stability, class leading digging performance and breakout forces.
                                                </p>
                                                <a href="#" class=" d-flex justify-content-start align-items-center btn btn-learn">Learn More <i
                                                    class="fa-solid ps-1 fa-right-long"></i></a>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div class="col mb-3">
                                    <Link to={'/pro/1'}  class="text-decoration-none ">
                                        <div class="card h-100" data-aos="fade-down">
                                            <img src="https://res.cloudinary.com/doosan-bobcat/image/upload/ar_1.5,c_fill,f_auto,g_auto,q_auto,w_480/v1672332149/bobcat-assets/alao-approved/in/products/excavators/models/e30/20221229-bobcat-in-e30-studio"
                                                class="img-fluid" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">
                                                    E30 Mini Excavator
                                                </h5>
                                                <p class="card-text" style={{textAlign:'justify'}}>
                                                    The Bobcat® E30 Mini Excavator offers a great mix of performance, stability, and
                                                    operator comfort with conventional tail swing.
                                                </p>
                                                <a href="#" class=" d-flex justify-content-start align-items-center btn btn-learn">Learn More <i
                                                    class="fa-solid ps-1 fa-right-long"></i></a>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div class="col mb-3">
                                    <Link to={'/pro/1'}  class="text-decoration-none ">
                                        <div class="card h-100" data-aos="fade-down">
                                            <img src="https://res.cloudinary.com/doosan-bobcat/image/upload/ar_1.5,c_fill,f_auto,g_auto,q_auto,w_480/v1672332157/bobcat-assets/alao-approved/in/products/excavators/models/e37ultra/20221229-bobcat-in-e37-ultra-studio"
                                                class="img-fluid" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">
                                                    E37 Ultra HD Mini Excavator
                                                </h5>
                                                <p class="card-text" style={{textAlign:'justify'}}>
                                                    Get the best possible mixture of operating range, stability, compactness, and
                                                    comfort with the Bobcat E37 Ultra HD Mini Excavator.
                                                </p>
                                                <a href="#" class=" d-flex justify-content-start align-items-center btn btn-learn">Learn More <i
                                                    class="fa-solid ps-1 fa-right-long"></i></a>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div class="col mb-3">
                                    <Link to={'/pro/1'}  class="text-decoration-none ">
                                        <div class="card h-100" data-aos="fade-down">
                                            <img src="https://res.cloudinary.com/doosan-bobcat/image/upload/ar_1.5,c_fill,f_auto,g_auto,q_auto,w_480/v1676466650/bobcat-assets/alao-approved/in/products/excavators/models/e37xtra/20230215-bobcat-alao-in-e37-xtra-hd"
                                                class="img-fluid" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">
                                                    E37 Xtra HD Mini Excavator
                                                </h5>
                                                <p class="card-text">
                                                    With superior stability and performance, excellent ergonomics and easy maintenance,
                                                    this mini excavator will be a great asset to your arsenal.
                                                </p>
                                                <a href="#" class=" d-flex justify-content-start align-items-center btn btn-learn">Learn More <i
                                                    class="fa-solid ps-1 fa-right-long"></i></a>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                        </div>


                        <section class="fork-s2">

                            <div class="row seperation" data-aos="fade-up">
                                <h1 className='mb-0'>Attachments</h1>
                            </div>

                        </section>



                        <section class="fork-s1">

                            <div class="row row2 gx-4 gx-lg-3 row-cols-1 row-cols-sm-2 row-cols-xl-6 justify-content-center ">
                                <div class="col mb-3">
                                    <a href="" class="text-decoration-none ">
                                        <div class="card h-100" data-aos="fade-down">
                                            <img src="https://res.cloudinary.com/doosan-bobcat/image/upload/ar_1.5,c_fill,f_auto,g_auto,q_auto,w_480/v1680947772/bobcat-assets/alao-approved/in/products/attachments/images/20230406-bobcat-in-auger"
                                                class="img-fluid" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">
                                                    Auger - 15C
                                                </h5>
                                                <a href="#" class=" d-flex justify-content-start align-items-center">Learn More <i
                                                    class="fa-solid ps-1 fa-right-long"></i></a>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col mb-3">
                                    <a href="" class="text-decoration-none ">
                                        <div class="card h-100" data-aos="fade-down">
                                            <img src="https://res.cloudinary.com/doosan-bobcat/image/upload/ar_1.5,c_fill,f_auto,g_auto,q_auto,w_480/v1680947772/bobcat-assets/alao-approved/in/products/attachments/images/20230406-bobcat-in-auger"
                                                class="img-fluid" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">
                                                    Auger - 15H
                                                </h5>
                                                <a href="#" class=" d-flex justify-content-start align-items-center ">Learn More <i
                                                    class="fa-solid ps-1 fa-right-long"></i></a>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col mb-3">
                                    <a href="" class="text-decoration-none ">
                                        <div class="card h-100" data-aos="fade-down">
                                            <img src="https://res.cloudinary.com/doosan-bobcat/image/upload/ar_1.5,c_fill,f_auto,g_auto,q_auto,w_480/v1680947772/bobcat-assets/alao-approved/in/products/attachments/images/20230406-bobcat-in-auger"
                                                class="img-fluid" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">
                                                    Auger - 30C
                                                </h5>
                                                <a href="#" class=" d-flex justify-content-start align-items-center ">Learn More <i
                                                    class="fa-solid ps-1 fa-right-long"></i></a>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col mb-3">
                                    <a href="" class="text-decoration-none ">
                                        <div class="card h-100" data-aos="fade-down">
                                            <img src="https://res.cloudinary.com/doosan-bobcat/image/upload/ar_1.5,c_fill,f_auto,g_auto,q_auto,w_480/v1680947772/bobcat-assets/alao-approved/in/products/attachments/images/20230406-bobcat-in-auger"
                                                class="img-fluid" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">
                                                    Auger - 30H
                                                </h5>
                                                <a href="#" class=" d-flex justify-content-start align-items-center ">Learn More <i
                                                    class="fa-solid ps-1 fa-right-long"></i></a>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                        </section>

                    </div>
                </section>


            </main>




        </>


    )


}
