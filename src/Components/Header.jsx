import React from 'react'
import { Link } from 'react-router-dom'

function Header() {


    return (



        <>

            <header className="top-header sticky-top shadow">

                <div className="sub-div container">

                    <div className="left-side">

                        <ul className='mb-0'>
                            <li>
                                <a href="https://wa.me/+919778412529" target='_blank'><i className="fa-solid fa-mobile"></i>+91 9778412529</a>
                            </li>

                            <li>
                                <a href="mailto:info@kemach.in" target='_blank'><i className="fa-solid fa-envelope"></i>info@kemach.in</a>
                            </li>

                        </ul>


                    </div>


                    <div className="right-side">

                        <ul className="mb-0">

                            <li><a href='' target='_blank'><i className="fa-brands fa-facebook"></i></a></li>
                            <li><a href='' target='_blank'><i className="fa-brands fa-instagram"></i></a></li>
                            <li><a href='' target='_blank'><i className="fa-brands fa-x-twitter"></i></a></li>
                            <li><a href='' target='_blank'><i className="fa-brands fa-linkedin"></i></a></li>
                            <li><a href='' target='_blank'><i className="fa-brands fa-youtube"></i></a></li>
                            <li><a href='' target='_blank'><i className="fa-brands fa-pinterest"></i></a></li>

                        </ul>

                    </div>


                </div>


                <nav className="navbar navbar-expand-lg navbar-dark sticky-top">

                    <div className="container">

                        <Link className="navbar-brand" to={'/'}>
                            <img src="/KEMACH LOGO web-01.png" width="200" alt='img-logo' />
                        </Link>


                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>


                        <div className="collapse navbar-collapse" id="navbarSupportedContent">


                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

                                <li className="nav-item">
                                    <Link className="nav-link" to={'/'}>Home</Link>
                                </li>


                                <div className="dropdown">


                                    <a className="nav-link dropdown-toggle" role="button" id="dropdownMenuLink"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Products &
                                        Services
                                    </a>


                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">

                                        <li><Link to={'/skidloader'} className="dropdown-item" >Skid-Steer Loaders</Link></li>
                                        <li><Link to={'/mini'} className="dropdown-item" >Mini Excavators</Link></li>
                                        <li><Link to={'/mini'} className="dropdown-item" >Backhoe Loaders</Link></li>
                                        <li><Link to={'/mini'} className="dropdown-item" >Rock Breakers </Link></li>
                                        <li><Link to={'/mini'} className="dropdown-item" >Hydraulic Attachments & Drill Bits</Link></li>
                                        <li><Link to={'/mini'} className="dropdown-item" >Electric Compressors</Link></li>
                                        <li><Link to={'/mini'} className="dropdown-item" >Service & Parts </Link></li>

                                    </ul>


                                </div>


                                <li className="nav-item">
                                    <Link className="nav-link" to={'/locator'} >Distributor
                                        Location</Link>
                                </li>


                                <li className="nav-item">
                                    <Link to={'/contact'} className="nav-link active" aria-current="page" href="contact.html">Contact Us</Link>
                                </li>


                            </ul>


                            <div className="search-box">
                                <button className="btn-search"><i className="fas fa-search"></i></button>
                                <input type="text" className="input-search" placeholder="Type to Search..." />
                            </div>


                        </div>


                    </div>
                </nav>

            </header>



        </>



    )




}

export default Header