import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function ContactUs() {


    useEffect(() => {

        AOS.init()

    }, [])


    window.scrollTo(0, 0)


    return (


        <>

            <main className="container" id="contact">

                <section className="section1">
                    <h2>Contact Kemach Customer Support</h2>
                    <p>If you have technical Kemach product concerns that your dealer can't resolve or other customer
                        service-related issues, please complete the form below.</p>
                </section>


                <section className="section2 ">

                    <form action="" className="contact-form">

                        <div className="row py-4 ">

                            <div className="form-group d-flex flex-column col-12 ">

                                <label data-aos="fade-up"><input type="checkbox" className="form-check-input me-2 " /> Backhoe
                                    Loaders</label>
                                <label data-aos="fade-up"><input type="checkbox" className="form-check-input me-2 " />
                                    Skid-Steer Loaders</label>
                                <label data-aos="fade-up"><input type="checkbox" className="form-check-input me-2 " /> Compact
                                    Track Loaders</label>
                                <label data-aos="fade-up"><input type="checkbox" className="form-check-input me-2 " /> Compact
                                    Excavators</label>
                                <label data-aos="fade-up"><input type="checkbox" className="form-check-input me-2 " /> Diesel
                                    Forklifts</label>
                                <label data-aos="fade-up"><input type="checkbox" className="form-check-input me-2 " /> Electric
                                    Forklifts</label>
                                <label data-aos="fade-up"><input type="checkbox" className="form-check-input me-2 " />
                                    Warehouse Equipment</label>
                                <label data-aos="fade-up"><input type="checkbox" className="form-check-input me-2 " /> Air
                                    Compressors</label>
                                <label data-aos="fade-up"><input type="checkbox" className="form-check-input me-2 " /> Lighting
                                    Systems</label>
                                <label data-aos="fade-up"><input type="checkbox" className="form-check-input me-2 " />
                                    Attachments</label>
                            </div>


                            <div className=" mt-4 col-sm-6" data-aos="fade-up">
                                <label>First Name</label>
                                <input type="text" className="form-control " placeholder="" name="" id="" />
                            </div>


                            <div className=" mt-4 col-sm-6" data-aos="fade-up">
                                <label>Second Name</label>
                                <input type="text" className="form-control " placeholder="" name="" id="" />
                            </div>


                            <div className=" mt-4 col-12" data-aos="fade-up">
                                <label>Company</label>
                                <input type="text" className="form-control " placeholder="" name="" id="" />
                            </div>


                            <div className=" mt-4 col-12" data-aos="fade-up">
                                <label>Street Address</label>
                                <input type="text" className="form-control " placeholder="" name="" id="" />
                            </div>


                            <div className=" mt-4 col-sm-6" data-aos="fade-up">
                                <label>City</label>
                                <input type="text" className="form-control " placeholder="" name="" id="" />
                            </div>

                            <div className=" mt-4 col-sm-6" data-aos="fade-up">
                                <label>Zip Code</label>
                                <input type="text" className="form-control " placeholder="" name="" id="" />
                            </div>


                            <div className=" mt-4 col-sm-6" data-aos="fade-up">
                                <label></label>
                                <select name="" id="" className="form-select ">
                                    <option className="form-control" value=""  >-----------</option>
                                    <option className="form-control" value="">Yes</option>
                                    <option className="form-control" value="">No </option>
                                </select>
                            </div>


                            <div className=" mt-4 col-sm-6" data-aos="fade-up">
                                <label></label>
                                <select name="" id="" className="form-select ">
                                    <option className="form-control" value="">-----------</option>
                                    <option className="form-control" value="">Yes</option>
                                    <option className="form-control" value="">No </option>
                                </select>
                            </div>


                            <div className=" mt-4 col-sm-6" data-aos="fade-up">
                                <label>Mobile/Phone Number</label>
                                <input type="text" className="form-control " placeholder="" name="" id="" />
                            </div>


                            <div className=" mt-4 col-sm-6" data-aos="fade-up">
                                <label>Email</label>
                                <input type="email" className="form-control " placeholder="" name="" id="" />
                            </div>


                            <div className=" mt-4 col-12" data-aos="fade-up">
                                <label>Have you discussed this with your Kemach dealer?</label>
                                <select name="" id="" className="form-select ">
                                    <option className="" value="">-----------</option>
                                    <option className="" value="">Yes</option>
                                    <option className="" value="">No </option>
                                </select>
                            </div>


                            <div className=" mt-4 col-12" data-aos="fade-up">
                                <label>Who is you Kemach dealer?</label>
                                <input type="text" className="form-control " placeholder="" name="" id="" />
                            </div>


                            <div className=" mt-4 col-12" data-aos="fade-up">
                                <label>Machine Serial Number</label>
                                <input type="text" className="form-control " placeholder="" name="" id="" />
                            </div>


                            <div className=" mt-4 col-12" data-aos="fade-up">
                                <label>How would you like to be contacted?</label>
                                <select name="" id="" className="form-select">
                                    <option className="form-control" value="" >-----------</option>
                                    <option className="form-control" value="">Phone</option>
                                    <option className="form-control" value="">Email </option>
                                </select>
                            </div>

                            <div className=" mt-4 col-12" data-aos="fade-up">
                                <label>Comments</label>
                                <textarea name="" className="form-control " id="" cols="30" rows="5"></textarea>
                            </div>


                            <div className=" mt-4 col-12" data-aos="fade-up">
                                <button className="btn sbtn">Submit <i className="fa-regular fa-paper-plane ms-3"></i></button>
                            </div>



                        </div>


                    </form>

                </section>


            </main>


        </>


    )





}

export default ContactUs