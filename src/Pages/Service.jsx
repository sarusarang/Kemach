import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'


function Service() {



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

                <section className="fork-s2">

                    <div className="row seperation" data-aos="fade-up">
                        <h1>Service</h1>
                    </div>

                    <div className="row service" data-aos="fade-down">
                        <p>we pride ourselves on delivering high-quality products and services with a strong focus on reliability and
                            precision. Our commitment to excellence ensures that every solution we provide meets the highest industry
                            standards, while our emphasis on timely delivery keeps your operations running smoothly and efficiently.
                        </p>
                    </div>
                    <div className="row text-center s2" data-aos="zoom-in">
                        <h3>To Access Our Services Contact Now!</h3>
                    </div>
                    <div className="row serv3 gx-4 gx-lg-3 row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-xl-2 justify-content-center">
                        <div className="col mb-3">
                            <div className="card serv-card h-100" data-aos="zoom-in-up">
                                <div className="card-body">
                                    <h5 className="card-title">Kannur, <br />
                                        Kasargod
                                    </h5>
                                    <p className="card-text">+91 93429 44925</p>
                                    <a href="#" className="btn " data-bs-toggle="modal" data-bs-target="#ServiceModal1" >enquire now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-3">
                            <div className="card serv-card h-100" data-aos="zoom-in-up">
                                <div className="card-body">
                                    <h5 className="card-title">Calicut,
                                        Malappuram,
                                        Wayanad</h5>
                                    <p className="card-text"> +91 89433 40261
                                    </p>
                                    <a href="#" className="btn " data-bs-toggle="modal" data-bs-target="#ServiceModal2" >enquire now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-3">
                            <div className="card serv-card h-100" data-aos="zoom-in-up">
                                <div className="card-body">
                                    <h5 className="card-title">Ernakulam,
                                        Thrissur, <br />
                                        Palakkad
                                    </h5>
                                    <p className="card-text">+91 7034600 888</p>
                                    <a href="#" className="btn " data-bs-toggle="modal" data-bs-target="#ServiceModal3" >enquire now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade servmodal" id="ServiceModal1" tabIndex="-1" aria-labelledby="ServiceModal1Label" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title " id="ServiceModal1Label">enquire now</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <a target="_blank" href="https://wa.me/+918943340261"><i className="pe-2 fa-brands fa-whatsapp"></i>+91 89433 40261</a>
                                    <a target="_blank" href="tel:+918943340261"><i className="pe-2 fa-solid fa-phone"></i>+91 89433 40261</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade servmodal" id="ServiceModal2" tabIndex="-1" aria-labelledby="ServiceModal2Label" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title " id="ServiceModal2Label">enquire now</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <a target="_blank" href="https://wa.me/+917034600888"><i className="pe-2 fa-brands fa-whatsapp"></i>+91 7034600 888</a>
                                    <a target="_blank" href="tel:+917034600888"><i className="pe-2 fa-solid fa-phone"></i>+91 7034600 888</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade servmodal" id="ServiceModal3" tabIndex="-1" aria-labelledby="ServiceModal3Label" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title " id="ServiceModal3Label">enquire now</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <a target="_blank" href="https://wa.me/+919342944925"><i className="pe-2 fa-brands fa-whatsapp"></i>+91 93429 44925</a>
                                    <a target="_blank" href="tel:+919342944925"><i className="pe-2 fa-solid fa-phone"></i>+91 93429 44925</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="fork-s2">
                    <div className="row seperation" data-aos="fade-up">
                        <h1>Parts</h1>
                    </div>
                </section>
                <section className="fork-s1">
                    <div className="row row2 gx-4 gx-lg-3 row-cols-1 row-cols-sm-2 row-cols-xl-6 justify-content-center ">
                        <div className="col mb-3">
                            <a href="" className="text-decoration-none " >
                                <div className="card" data-aos="fade-down">
                                    <img
                                        src="https://res.cloudinary.com/doosan-bobcat/image/upload/ar_1.5,c_fill,f_auto,g_auto,q_auto,w_480/v1680947781/bobcat-assets/alao-approved/in/products/attachments/images/20230406-bobcat-in-angle-broom"
                                        className="img-fluid" alt="..." loading='lazy' />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Angle Broom - 64"
                                        </h5>
                                        <p className="card-text">
                                            Dirt, dried mud, light snow and other debris are quickly and efficiently swept away with this hydraulically driven attachment.
                                        </p>
                                        <a href="#" className=" d-flex justify-content-start align-items-center ">Learn More <i
                                            className="fa-solid ps-1 fa-right-long"></i></a>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col mb-3">
                            <a href="" className="text-decoration-none " >
                                <div className="card" data-aos="fade-down">
                                    <img
                                        src="https://res.cloudinary.com/doosan-bobcat/image/upload/ar_1.5,c_fill,f_auto,g_auto,q_auto,w_480/v1680947781/bobcat-assets/alao-approved/in/products/attachments/images/20230406-bobcat-in-angle-broom"
                                        className="img-fluid" alt="..." loading='lazy' />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Angle Broom - 64"
                                        </h5>
                                        <p className="card-text">
                                            Dirt, dried mud, light snow and other debris are quickly and efficiently swept away with this hydraulically driven attachment.
                                        </p>
                                        <a href="#" className=" d-flex justify-content-start align-items-center ">Learn More <i
                                            className="fa-solid ps-1 fa-right-long"></i></a>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col mb-3">
                            <a href="" className="text-decoration-none " >
                                <div className="card" data-aos="fade-down">
                                    <img
                                        src="https://res.cloudinary.com/doosan-bobcat/image/upload/ar_1.5,c_fill,f_auto,g_auto,q_auto,w_480/v1680947781/bobcat-assets/alao-approved/in/products/attachments/images/20230406-bobcat-in-angle-broom"
                                        className="img-fluid" alt="..." loading='lazy' />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Angle Broom - 64"
                                        </h5>
                                        <p className="card-text">
                                            Dirt, dried mud, light snow and other debris are quickly and efficiently swept away with this hydraulically driven attachment.
                                        </p>
                                        <a href="#" className=" d-flex justify-content-start align-items-center ">Learn More <i
                                            className="fa-solid ps-1 fa-right-long"></i></a>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col mb-3">
                            <a href="" className="text-decoration-none " >
                                <div className="card" data-aos="fade-down">
                                    <img
                                        src="https://res.cloudinary.com/doosan-bobcat/image/upload/ar_1.5,c_fill,f_auto,g_auto,q_auto,w_480/v1680947781/bobcat-assets/alao-approved/in/products/attachments/images/20230406-bobcat-in-angle-broom"
                                        className="img-fluid" alt="..." loading='lazy' />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Angle Broom - 64"
                                        </h5>
                                        <p className="card-text">
                                            Dirt, dried mud, light snow and other debris are quickly and efficiently swept away with this hydraulically driven attachment.
                                        </p>
                                        <a href="#" className=" d-flex justify-content-start align-items-center ">Learn More <i
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

export default Service