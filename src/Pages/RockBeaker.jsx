import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function RockBeaker() {


    useEffect(() => {

        AOS.init()

    }, [])


    window.scrollTo(0, 0)



    return (


        <>

            <section className="productTopImage"
                style={{ backgroundImage: 'url("https://res.cloudinary.com/doosan-bobcat/image/upload/c_fill,f_auto,g_auto,h_480,q_auto,w_2048/v1671105824/bobcat-assets/alao-approved/in/products/skid-steer-loaders/category-image/20221214-in-ssl-herospot")' }}>
            </section>



            <main className="container" id="ForkLiftD">
                <section className="fork-s1">
                    <div className="row row1">
                        <h1>Rock Breakers </h1>
                        {/* <p>
                            <!-- Bobcat® Backhoe Loaders are versatile machines and can easily be configured for different applications by coupling with Bobcat optional attachments. Whatever your job - digging, trenching, breaking or material handling (to name but a few) - Bobcat Backhoe Loaders have the power to get it done efficiently. Under the hood, they have the best-in-className 100 hp engine to take on tough jobs with powerful performance and high fuel economy. -->
                        </p> */}
                    </div>
                    <div className="rock-seperation">
                        <h4 className='text-center fw-bold'>Saga Series</h4>
                    </div>
                    <div className="row row2 gx-4 gx-lg-3 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center  py-5 ">
                        <div className="col mb-3">
                            <a href="" className="text-decoration-none ">
                                <div className="card h-100" data-aos="fade-down">
                                    <img src="https://img.freepik.com/premium-photo/yellow-drilling-machine-drills-rock-quarry_278455-18281.jpg"
                                        className="img-fluid" alt="..." loading='lazy' />
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                SAGA 220
                                            </h5>
                                            <p className="card-text">

                                            </p>

                                            <a href="#" className=" d-flex justify-content-center align-items-center btn ">Learn More <i
                                                className="fa-solid ps-1 fa-right-long"></i></a>
                                        </div>
                                </div>
                            </a>
                        </div>
                        <div className="col mb-3">
                            <a href="" className="text-decoration-none ">
                                <div className="card h-100" data-aos="fade-down">
                                    <img src="https://img.freepik.com/premium-photo/yellow-drilling-machine-drills-rock-quarry_278455-18281.jpg"
                                        className="img-fluid" alt="..." loading='lazy' />
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Beta 240
                                            </h5>
                                            <p className="card-text">

                                            </p>

                                            <a href="#" className=" d-flex justify-content-center align-items-center btn ">Learn More <i
                                                className="fa-solid ps-1 fa-right-long"></i></a>
                                        </div>
                                </div>
                            </a>
                        </div>
                        <div className="col mb-3">
                            <a href="" className="text-decoration-none ">
                                <div className="card h-100" data-aos="fade-down">
                                    <img src="https://img.freepik.com/premium-photo/yellow-drilling-machine-drills-rock-quarry_278455-18281.jpg"
                                        className="img-fluid" alt="..." loading='lazy' />
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                SAGA 210
                                            </h5>
                                            <p className="card-text">

                                            </p>

                                            <a href="#" className=" d-flex justify-content-center align-items-center btn ">Learn More <i
                                                className="fa-solid ps-1 fa-right-long"></i></a>
                                        </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="rock-seperation">
                        <h4 className='text-center fw-bold'>MS series </h4>
                    </div>
                    <div className="row row2 gx-4 gx-lg-3 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center  py-5 ">
                        <div className="col mb-3">
                            <a href="" className="text-decoration-none ">
                                <div className="card h-100" data-aos="fade-down">
                                    <img src="https://img.freepik.com/premium-photo/yellow-drilling-machine-drills-rock-quarry_278455-18281.jpg"
                                        className="img-fluid" alt="..." loading='lazy' />
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                SAGA 220
                                            </h5>
                                            <p className="card-text">

                                            </p>

                                            <a href="#" className=" d-flex justify-content-center align-items-center btn ">Learn More <i
                                                className="fa-solid ps-1 fa-right-long"></i></a>
                                        </div>
                                </div>
                            </a>
                        </div>
                        
                        <div className="col mb-3">
                            <a href="" className="text-decoration-none ">
                                <div className="card h-100" data-aos="fade-down">
                                    <img src="https://img.freepik.com/premium-photo/yellow-drilling-machine-drills-rock-quarry_278455-18281.jpg"
                                        className="img-fluid" alt="..." loading='lazy' />
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Beta 240
                                            </h5>
                                            <p className="card-text">

                                            </p>

                                            <a href="#" className=" d-flex justify-content-center align-items-center btn ">Learn More <i
                                                className="fa-solid ps-1 fa-right-long"></i></a>
                                        </div>
                                </div>
                            </a>
                        </div>
                        <div className="col mb-3">
                            <a href="" className="text-decoration-none ">
                                <div className="card h-100" data-aos="fade-down">
                                    <img src="https://img.freepik.com/premium-photo/yellow-drilling-machine-drills-rock-quarry_278455-18281.jpg"
                                        className="img-fluid" alt="..." loading='lazy' />
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                SAGA 210
                                            </h5>
                                            <p className="card-text">

                                            </p>

                                            <a href="#" className=" d-flex justify-content-center align-items-center btn ">Learn More <i
                                                className="fa-solid ps-1 fa-right-long"></i></a>
                                        </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="rock-seperation">
                        <h4 className='text-center fw-bold'>RB Series</h4>
                    </div>
                    <div className="row row2 gx-4 gx-lg-3 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center  py-5 ">
                        <div className="col mb-3">
                            <a href="" className="text-decoration-none ">
                                <div className="card h-100" data-aos="fade-down">
                                    <img src="https://img.freepik.com/premium-photo/yellow-drilling-machine-drills-rock-quarry_278455-18281.jpg"
                                        className="img-fluid" alt="..." loading='lazy' />
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                SAGA 220
                                            </h5>
                                            <p className="card-text">

                                            </p>

                                            <a href="#" className=" d-flex justify-content-center align-items-center btn ">Learn More <i
                                                className="fa-solid ps-1 fa-right-long"></i></a>
                                        </div>
                                </div>
                            </a>
                        </div>
                        <div className="col mb-3">
                            <a href="" className="text-decoration-none ">
                                <div className="card h-100" data-aos="fade-down">
                                    <img src="https://img.freepik.com/premium-photo/yellow-drilling-machine-drills-rock-quarry_278455-18281.jpg"
                                        className="img-fluid" alt="..." loading='lazy' />
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Beta 240
                                            </h5>
                                            <p className="card-text">

                                            </p>

                                            <a href="#" className=" d-flex justify-content-center align-items-center btn ">Learn More <i
                                                className="fa-solid ps-1 fa-right-long"></i></a>
                                        </div>
                                </div>
                            </a>
                        </div>
                        <div className="col mb-3">
                            <a href="" className="text-decoration-none ">
                                <div className="card h-100" data-aos="fade-down">
                                    <img src="https://img.freepik.com/premium-photo/yellow-drilling-machine-drills-rock-quarry_278455-18281.jpg"
                                        className="img-fluid" alt="..." loading='lazy' />
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                SAGA 210
                                            </h5>
                                            <p className="card-text">

                                            </p>

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

export default RockBeaker