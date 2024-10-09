import React from 'react'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { Link } from 'react-router-dom'


function SingleProduct() {


    useEffect(() => {

        AOS.init()

    }, [])


    // Modal State
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);


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

            <main className="container single" id="single">
                <section className="ss1">
                    <div className="row row1">
                        <div className="col-md-6 left">
                            <div className="carousel-single">


                                {/* Carousel Inputs */}
                                <input type="radio" name="slides" id="slide-1" defaultChecked />
                                <input type="radio" name="slides" id="slide-2" />
                                <input type="radio" name="slides" id="slide-3" />
                                <input type="radio" name="slides" id="slide-4" />
                                <input type="radio" name="slides" id="slide-5" />
                                <input type="radio" name="slides" id="slide-6" />

                                {/* Carousel Slides */}
                                <ul className="carousel-single__slides">


                                    <li className="carousel-single__slide" data-aos="fade-up">
                                        <figure>
                                            <div>
                                                <img
                                                    src="https://res.cloudinary.com/doosan-bobcat/image/upload/b_transparent,c_pad,dpr_2.0,f_auto,g_center,h_594,q_auto,w_1300/c_pad,h_594,w_1300/v1/bobcat-assets/alao-approved/in/products/skid-steer-loaders/models/s70/20221209-in-s70-studio?pgw=1"
                                                    alt=""
                                                    loading="lazy"
                                                />
                                            </div>
                                        </figure>
                                    </li>


                                    <li className="carousel-single__slide">
                                        <figure>
                                            <div>
                                                <img
                                                    src="https://res.cloudinary.com/doosan-bobcat/image/upload/b_transparent,c_pad,dpr_2.0,f_auto,g_center,h_594,q_auto,w_1300/c_pad,h_594,w_1300/v1/bobcat-assets/alao-approved/in/products/skid-steer-loaders/models/s70/20221209-in-s70-gallery-1?pgw=1"
                                                    alt=""
                                                    loading="lazy"
                                                />
                                            </div>
                                        </figure>
                                    </li>


                                    <li className="carousel-single__slide">
                                        <figure>
                                            <div>
                                                <img
                                                    src="https://res.cloudinary.com/doosan-bobcat/image/upload/b_transparent,c_pad,dpr_2.0,f_auto,g_center,h_594,q_auto,w_1300/c_pad,h_594,w_1300/v1/bobcat-assets/alao-approved/in/products/skid-steer-loaders/models/s70/20221209-in-s70-gallery-2?pgw=1"
                                                    alt=""
                                                    loading="lazy"
                                                />
                                            </div>
                                        </figure>
                                    </li>


                                    <li className="carousel-single__slide">
                                        <figure>
                                            <div>
                                                <img
                                                    src="https://res.cloudinary.com/doosan-bobcat/image/upload/b_transparent,c_pad,dpr_2.0,f_auto,g_center,h_594,q_auto,w_1300/c_pad,h_594,w_1300/v1/bobcat-assets/alao-approved/in/products/skid-steer-loaders/models/s70/20221209-in-s70-gallery-3?pgw=1"
                                                    alt=""
                                                    loading="lazy"
                                                />
                                            </div>
                                        </figure>
                                    </li>



                                </ul>

                                {/* Thumbnails */}
                                <ul className="carousel-single__thumbnails">



                                    <li data-aos="fade-down">
                                        <label htmlFor="slide-1">
                                            <img
                                                src="https://res.cloudinary.com/doosan-bobcat/image/upload/b_transparent,c_pad,dpr_2.0,f_auto,g_center,h_594,q_auto,w_1300/c_pad,h_594,w_1300/v1/bobcat-assets/alao-approved/in/products/skid-steer-loaders/models/s70/20221209-in-s70-studio?pgw=1"
                                                alt=""
                                                loading="lazy"
                                            />
                                        </label>
                                    </li>


                                    <li data-aos="fade-down">
                                        <label htmlFor="slide-2">
                                            <img
                                                src="https://res.cloudinary.com/doosan-bobcat/image/upload/b_transparent,c_pad,dpr_2.0,f_auto,g_center,h_594,q_auto,w_1300/c_pad,h_594,w_1300/v1/bobcat-assets/alao-approved/in/products/skid-steer-loaders/models/s70/20221209-in-s70-gallery-1?pgw=1"
                                                alt=""
                                                loading="lazy"
                                            />
                                        </label>
                                    </li>


                                    <li data-aos="fade-down">
                                        <label htmlFor="slide-3">
                                            <img
                                                src="https://res.cloudinary.com/doosan-bobcat/image/upload/b_transparent,c_pad,dpr_2.0,f_auto,g_center,h_594,q_auto,w_1300/c_pad,h_594,w_1300/v1/bobcat-assets/alao-approved/in/products/skid-steer-loaders/models/s70/20221209-in-s70-gallery-2?pgw=1"
                                                alt=""
                                                loading="lazy"
                                            />
                                        </label>
                                    </li>


                                    <li data-aos="fade-down">
                                        <label htmlFor="slide-4">
                                            <img
                                                src="https://res.cloudinary.com/doosan-bobcat/image/upload/b_transparent,c_pad,dpr_2.0,f_auto,g_center,h_594,q_auto,w_1300/c_pad,h_594,w_1300/v1/bobcat-assets/alao-approved/in/products/skid-steer-loaders/models/s70/20221209-in-s70-gallery-3?pgw=1"
                                                alt=""
                                                loading="lazy"
                                            />
                                        </label>
                                    </li>


                                </ul>
                            </div>
                        </div>

                        {/* Product Description */}
                        <div className="col-md-6 right" data-aos="zoom-in">

                            <h1>S70 Skid-Steer Loader</h1>
                            <p>
                                The Bobcat® S70 skid-steer loader is small enough to get in the tight spots, yet tough enough to get you out. This agile little workhorse is only 6 ft. tall and 3 ft. wide — the ideal size for quickly moving through narrow doorways, corridors, aisles, alleys and gates, and for working under low ceilings. It's the perfect skid steer loader whenever the job is too big for a shovel or the space is too small for a larger machine.
                            </p>

                            <Link to={'/locator'} className="btn btn2">
                                Enquire Now
                            </Link>


                            <Link onClick={handleShow} className="btn btn2">
                                Download Brochure
                            </Link>

                            <Link  className="btn btn1">
                                Connect with the sales Team
                            </Link>

                        </div>


                    </div>


                </section>



                {/* Other Products  */}
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
                                <a href="#" target='_blank' className=" d-flex justify-content-start align-items-center btn btn-learn">Learn More <i
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
                                <a href="#" target='_blank' className=" d-flex justify-content-start align-items-center btn btn-learn">Learn More <i
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
                                <a href="#" target='_blank' className=" d-flex justify-content-start align-items-center btn btn-learn">Learn More <i
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
                                <a href="#" target='_blank' className=" d-flex justify-content-start align-items-center btn btn-learn">Learn More <i
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
                                <a href="#" target='_blank' className=" d-flex justify-content-start align-items-center btn btn-learn">Learn More <i
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
                                <a href="#" target='_blank' className=" d-flex justify-content-start align-items-center btn btn-learn">Learn More <i
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
                                <a href="#" target='_blank' className=" d-flex justify-content-start align-items-center btn btn-learn">Learn More <i
                                    className="fa-solid ps-1 fa-right-long"></i></a>
                            </div>


                        </div>

                    </Carousel>



                </section>



            </main>





            {/* Modak */}
            <div className="col-md-6 col-sm-12 mb-4 mb-md-0">


                {/* Modal */}
                {showModal && (
                    <div
                        className="modal fade show"
                        tabIndex="-1"
                        style={{ display: 'block' }}
                        role="dialog"
                    >
                        <div className="modal-dialog modal-dialog-scrollable modal-xl" role="document">

                            <div className="modal-content">

                                <div className="modal-header">
                                    <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
                                </div>

                                <div className="modal-body">
                                    <embed src="/docschatbot.pdf" width="100%" height="600px" />
                                </div>


                                <div className="modal-footer">
                                    <a href="/docschatbot.pdf" download>
                                        <button type="button" className="btn btn-outline-success" onClick={handleClose}>
                                            Download
                                        </button>
                                    </a>
                                </div>


                            </div>
                        </div>
                    </div>
                )}

                {/* Overlay */}
                {showModal && <div className="modal-backdrop fade show" onClick={handleClose}></div>}


            </div>



        </>


    )


}

export default SingleProduct