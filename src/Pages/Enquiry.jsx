import React from 'react'

function Enquiry() {


    window.scrollTo(0, 0)


    return (

        <>

            <main className="container d-flex justify-content-evenly align-items-center min-vh-100" id="Enquiry">

                <div className="form-div">

                    <form action="">

                        <div className="row gy-5">
                            
                            <div className="col-md-4"><label >Name</label><input placeholder="Name" type="text"
                                className="form-control w-100" /></div>
                            <div className="col-md-4"><label >Email</label><input placeholder="Email" type="text"
                                className="form-control w-100" /></div>
                            <div className="col-md-4"><label >Mobile</label><input placeholder="Mobile" type="text"
                                className="form-control w-100" /></div>
                            <div className="col-md-6">
                                <label >Machine</label>
                                <select className="form-select" name="" id="">
                                    <option value="">----------</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label >Location</label>
                                <select className="form-select" name="" id="">
                                    <option value="">----------</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <button className="btn sbtn">Submit <i className="fa-regular fa-paper-plane ms-3"></i></button>
                            </div>
                        </div>
                    </form>
                </div>

            </main>




        </>








    )





}

export default Enquiry