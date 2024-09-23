import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

function Locator() {


    useEffect(() => {

        AOS.init()

    }, [])

    window.scrollTo(0, 0)


    // Slider Responsive
    const responsive = {

        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }

    return (


        <>

            <main className='container'>


                <section

                    className="row store-locator gx-4 gx-lg-3 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div className="col mb-3">


                        <div className="card h-100" data-aos="fade-up">
                            <div className="card-body">
                                <h5 className="card-title">KEMACH Equipments Pvt Ltd.</h5>
                                <a href="https://maps.app.goo.gl/Hw1GwqdpBZt3b9Hn8" target='_blank' className="card-text"> <i
                                    className="fa-solid fa-location-dot"></i>
                                    15/340A, Swalih Plaza,Karikkode, <br />
                                    Okkal Post, Ernakulam – 683550
                                </a> <br />
                                <a href="tel:9342944900" target='_blank' className="card-text text-decoration-none">
                                    <strong>Contact No:</strong> +91 93429 44900
                                </a>
                            </div>
                        </div>

                    </div>


                    <div className="col mb-3">
                        <div className="card h-100" data-aos="fade-up">
                            <div className="card-body">
                                <h5 className="card-title">KEMACH Equipments Pvt Ltd.</h5>
                                <a href="https://maps.app.goo.gl/G6mmQJzdCTgFxe377" target='_blank' className="card-text"> <i
                                    className="fa-solid fa-location-dot"></i>
                                    3/647, 3/648 Kannadi Panchayath,<br />
                                    3rd Ward, Kannadi 1, Palakkad - 678701.
                                </a> <br />
                                <a href="tel:9778412521" target='_blank' className="card-text text-decoration-none">
                                    <strong>Contact No:</strong> +91 97784 12521
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="col mb-3">
                        <div className="card h-100" data-aos="fade-up">
                            <div className="card-body">
                                <h5 className="card-title">KEMACH Equipments Pvt Ltd.</h5>
                                <a href="https://maps.app.goo.gl/iGoAPerNX8mLky6b7" target='_blank' className="card-text"> <i
                                    className="fa-solid fa-location-dot"></i>
                                    Door No.13/585, AIRPORT ROAD, <br />
                                    Ramanattukara, Calicut - 673633.
                                </a> <br />
                                <a href="tel:8943340268" target='_blank' className="card-text text-decoration-none">
                                    <strong>Contact No:</strong> +91 89433 40268
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="col mb-3">
                        <div className="card h-100" data-aos="fade-up">
                            <div className="card-body">
                                <h5 className="card-title">KEMACH Equipments Pvt Ltd.</h5>
                                <a className="card-text"> <i className="fa-solid fa-location-dot"></i>
                                    Door No:5/483 E,Ambalachal, <br />
                                    Near By Kambalakkad Police station,
                                    Kambalakkad PO, Wayanad - 673122.
                                </a> <br />
                                <a href="tel:9342987603" target='_blank' className="card-text text-decoration-none">
                                    <strong>Contact No:</strong> +91 93429 87603
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="col mb-3">
                        <div className="card h-100" data-aos="fade-up">
                            <div className="card-body">
                                <h5 className="card-title">KEMACH Equipments Pvt Ltd.</h5>
                                <a href="https://maps.app.goo.gl/Ds7G1gcGiNZw6mN57" target='_blank' className="card-text"> <i
                                    className="fa-solid fa-location-dot"></i>
                                    No:2188-13, Hazat Palaza, Thavakkara, <br />
                                    Near Kannur University, Kannur - 670002.
                                </a> <br />
                                <a href="tel:8943010333" target='_blank' className="card-text text-decoration-none">
                                    <strong>Contact No:</strong> +91 89430 10333
                                </a>
                            </div>
                        </div>
                    </div>

                </section>


                <section>

                    <Carousel responsive={responsive} className='pb-5'>

                        <div className="card me-3  border-1">
                            <img
                                src="https://res.cloudinary.com/doosan-bobcat/image/upload/ar_1.5,c_fill,f_auto,g_auto,q_auto,w_320/v1702831690/bobcat-assets/alao-approved/in/products/material-handling/diesel-forklifts/diesel-forklifts-3-5-to-5-5t-5-series/20231217-bobcat-alao-in-diesel-forklifts-d50c-5-studio-1"
                                className="img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">
                                    Diesel Forklifts 4 to 5.5t, 9 Series
                                </h5>
                                <p className="card-text">
                                    Unleash the power and value of the 9 Series forklifts designed for productivity and user safety. These
                                    forklifts exceed expectations.
                                </p>
                                <a href="#" target='_blank' className=" d-flex justify-content-start align-items-center text-danger text-decoration-none">Learn More <i
                                    className="fa-solid ps-1 fa-right-long"></i></a>
                            </div>


                        </div>


                        <div className="card me-3  border-1">
                            <img
                                src="https://res.cloudinary.com/doosan-bobcat/image/upload/ar_1.5,c_fill,f_auto,g_auto,q_auto,w_320/v1702831690/bobcat-assets/alao-approved/in/products/material-handling/diesel-forklifts/diesel-forklifts-3-5-to-5-5t-5-series/20231217-bobcat-alao-in-diesel-forklifts-d50c-5-studio-1"
                                className="img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">
                                    Diesel Forklifts 4 to 5.5t, 9 Series
                                </h5>
                                <p className="card-text">
                                    Unleash the power and value of the 9 Series forklifts designed for productivity and user safety. These
                                    forklifts exceed expectations.
                                </p>
                                <a href="#" target='_blank' className=" d-flex justify-content-start align-items-center text-danger text-decoration-none">Learn More <i
                                    className="fa-solid ps-1 fa-right-long"></i></a>
                            </div>
                        </div>


                        <div className="card me-3  border-1">
                            <img
                                src="https://res.cloudinary.com/doosan-bobcat/image/upload/ar_1.5,c_fill,f_auto,g_auto,q_auto,w_320/v1702831690/bobcat-assets/alao-approved/in/products/material-handling/diesel-forklifts/diesel-forklifts-3-5-to-5-5t-5-series/20231217-bobcat-alao-in-diesel-forklifts-d50c-5-studio-1"
                                className="img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">
                                    Diesel Forklifts 4 to 5.5t, 9 Series
                                </h5>
                                <p className="card-text">
                                    Unleash the power and value of the 9 Series forklifts designed for productivity and user safety. These
                                    forklifts exceed expectations.
                                </p>
                                <a href="#" target='_blank' className=" d-flex justify-content-start align-items-center text-danger text-decoration-none ">Learn More <i
                                    className="fa-solid ps-1 fa-right-long"></i></a>
                            </div>
                        </div>



                        <div className="card me-3 border-1">
                            <img
                                src="https://res.cloudinary.com/doosan-bobcat/image/upload/ar_1.5,c_fill,f_auto,g_auto,q_auto,w_320/v1702831690/bobcat-assets/alao-approved/in/products/material-handling/diesel-forklifts/diesel-forklifts-3-5-to-5-5t-5-series/20231217-bobcat-alao-in-diesel-forklifts-d50c-5-studio-1"
                                className="img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">
                                    Diesel Forklifts 4 to 5.5t, 9 Series
                                </h5>
                                <p className="card-text">
                                    Unleash the power and value of the 9 Series forklifts designed for productivity and user safety. These
                                    forklifts exceed expectations.
                                </p>
                                <a href="#" target='_blank' className=" d-flex justify-content-start align-items-center text-danger text-decoration-none">Learn More <i
                                    className="fa-solid ps-1 fa-right-long"></i></a>
                            </div>
                        </div>


                        <div className="card me-3 border-1">
                            <img
                                src="https://res.cloudinary.com/doosan-bobcat/image/upload/ar_1.5,c_fill,f_auto,g_auto,q_auto,w_320/v1702831690/bobcat-assets/alao-approved/in/products/material-handling/diesel-forklifts/diesel-forklifts-3-5-to-5-5t-5-series/20231217-bobcat-alao-in-diesel-forklifts-d50c-5-studio-1"
                                className="img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">
                                    Diesel Forklifts 4 to 5.5t, 9 Series
                                </h5>
                                <p className="card-text">
                                    Unleash the power and value of the 9 Series forklifts designed for productivity and user safety. These
                                    forklifts exceed expectations.
                                </p>
                                <a href="#" target='_blank' className=" d-flex justify-content-start align-items-center text-danger text-decoration-none">Learn More <i
                                    className="fa-solid ps-1 fa-right-long"></i></a>
                            </div>
                        </div>


                        <div className="card me-3  border-1">
                            <img
                                src="https://res.cloudinary.com/doosan-bobcat/image/upload/ar_1.5,c_fill,f_auto,g_auto,q_auto,w_320/v1702831690/bobcat-assets/alao-approved/in/products/material-handling/diesel-forklifts/diesel-forklifts-3-5-to-5-5t-5-series/20231217-bobcat-alao-in-diesel-forklifts-d50c-5-studio-1"
                                className="img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">
                                    Diesel Forklifts 4 to 5.5t, 9 Series
                                </h5>
                                <p className="card-text">
                                    Unleash the power and value of the 9 Series forklifts designed for productivity and user safety. These
                                    forklifts exceed expectations.
                                </p>
                                <a href="#" target='_blank' className=" d-flex justify-content-start align-items-center text-danger text-decoration-none">Learn More <i
                                    className="fa-solid ps-1 fa-right-long"></i></a>
                            </div>
                        </div>


                        <div className="card me-3  border-1">


                            <img
                                src="https://res.cloudinary.com/doosan-bobcat/image/upload/ar_1.5,c_fill,f_auto,g_auto,q_auto,w_320/v1702831690/bobcat-assets/alao-approved/in/products/material-handling/diesel-forklifts/diesel-forklifts-3-5-to-5-5t-5-series/20231217-bobcat-alao-in-diesel-forklifts-d50c-5-studio-1"
                                className="img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">
                                    Diesel Forklifts 4 to 5.5t, 9 Series
                                </h5>
                                <p className="card-text">
                                    Unleash the power and value of the 9 Series forklifts designed for productivity and user safety. These
                                    forklifts exceed expectations.
                                </p>
                                <a href="#" target='_blank' className=" d-flex justify-content-start align-items-center text-danger text-decoration-none">Learn More <i
                                    className="fa-solid ps-1 fa-right-long"></i></a>
                            </div>


                        </div>

                    </Carousel>


                </section>



                <section class="s4 mt-3">

                    <div class="row gx-4 gx-lg-3 row-cols-1 row-cols-sm-2 row-cols-xl-2 justify-content-center container">


                        <div class="col mb-3">
                            <a href="">
                                <div class="card" data-aos="fade-up">
                                    <img src="/bi1.jpg" alt='slide-img'/>
                                </div>
                            </a>
                        </div>


                        <div class="col mb-3">
                            <a href="">
                                <div class="card" data-aos="fade-down">
                                    <img src="/bi2.jpg" alt='slide-img'/>
                                </div>
                            </a>
                        </div>


                        <div class="col mb-3">
                            <a href="">
                                <div class="card" data-aos="fade-up">
                                    <img src="/bi3.jpg" alt='slide-img'/>
                                </div>
                            </a>
                        </div>


                        <div class="col mb-3">
                            <a href="">
                                <div class="card" data-aos="fade-down">
                                    <img src="/bi4.jpg" alt='slide-img'/>
                                </div>
                            </a>
                        </div>


                    </div>
                </section>



            </main>


        </>


    )


}

export default Locator