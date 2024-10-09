import React from 'react'

function Enquiry() {


    window.scrollTo(0, 0)


    return (

        <>

            <main className="container p-5" id="contact">
                <section className="section1">
                    <h2>Book for Test Operation / Equipment Enquiry</h2>
                    <p>Submit the Form or Direct Contact</p>
                </section>
                <section className="section2 ">
                    <form action="" className="contact-form">
                        <div className="row py-4 ">
                            <div className=" mt-4 col-sm-4" data-aos="fade-up">
                                <label for="">Name</label>
                                <input type="text" className="form-control " placeholder="" name="" id="" />
                            </div>
                            <div className=" mt-4 col-sm-4" data-aos="fade-up">
                                <label for="">Mobile/Phone Number</label>
                                <input type="text" className="form-control " placeholder="" name="" id="" />
                            </div>
                            <div className=" mt-4 col-sm-4" data-aos="fade-up">
                                <label for="">Email</label>
                                <input type="email" className="form-control " placeholder="" name="" id="" />
                            </div>
                            <div className=" mt-4 col-sm-6" data-aos="fade-up">
                                <label for="">Machine/Equipment Model</label>
                                <select name="" id="" className="form-select ">
                                    <option className="" value="" selected>-----------</option>
                                    <option className="" value="">Equipment1</option>
                                    <option className="" value="">Equipment2</option>
                                    <option className="" value="">Equipment3</option>
                                    <option className="" value="">Equipment4</option>
                                </select>
                            </div>
                            <div className=" mt-4 col-sm-6" data-aos="fade-up">
                                <label for="">Nearest Showroom</label>
                                <select name="" id="" className="form-select">
                                    <option className="form-control" value="" selected>-----------</option>
                                    <option className="form-control" value="">Showroom1</option>
                                    <option className="form-control" value="">Showroom2</option>
                                    <option className="form-control" value="">Showroom3</option>
                                    <option className="form-control" value="">Showroom4</option>
                                </select>
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

export default Enquiry