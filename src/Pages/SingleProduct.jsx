import React from 'react'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Machineries } from '../Hooks/Machineries'


function SingleProduct() {



    // Getting id 
    const { id } = useParams()

    const { data, error, isLoading, isSuccess } = Machineries()

    const [ProductData, SetProductData] = useState({})

    const [ProductImage, SetProductImage] = useState({})

    const [AllProducts, SetAllProducts] = useState([])


    // Modal State
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);


    const [activeIndex, setActiveIndex] = useState(0); // Track active thumbnail index

    const handleThumbnailClick = (image, index) => {
        SetProductImage(image);
        setActiveIndex(index); // Set the active thumbnail index
    }


    useEffect(() => {

        if (data && isSuccess) {

            const res = data.find((item) => (item.id == id))

            const firstSixObjects = data.slice(0, 6)

            SetAllProducts(firstSixObjects)

            SetProductData(res)

            SetProductImage(res.image)
        }


        AOS.init()

        window.scrollTo(0, 0)

    }, [data, isSuccess,id])




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


            {

                isLoading && !ProductData && error ?

                    <div>
                        Loading...
                    </div>

                    :


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
                                        <ul>

                                            {ProductImage && (

                                                <li className="carousel-single__slide">
                                                    <figure>
                                                        <div>
                                                            <img
                                                                src={ProductImage}
                                                                alt=""
                                                                loading="lazy"
                                                                className='img-fluid'

                                                            />
                                                        </div>
                                                    </figure>
                                                </li>

                                            )}

                                        </ul>

                                        {/* Thumbnails */}
                                        <ul className="carousel-single__thumbnails">
                                            {ProductData.image && (
                                                <li
                                                    onClick={() => handleThumbnailClick(ProductData.image, 0)}
                                                    className={activeIndex === 0 ? "active" : ""}
                                                >
                                                    <label htmlFor="slide-1">
                                                        <img
                                                            src={ProductData.image}
                                                            loading="lazy"
                                                            alt="Thumbnail 1"
                                                        />
                                                    </label>
                                                </li>
                                            )}

                                            {ProductData.image2 && (
                                                <li
                                                    onClick={() => handleThumbnailClick(ProductData.image2, 1)}
                                                    className={activeIndex === 1 ? "active" : ""}
                                                >
                                                    <label htmlFor="slide-2">
                                                        <img
                                                            src={ProductData.image2}
                                                            loading="lazy"
                                                            alt="Thumbnail 2"
                                                        />
                                                    </label>
                                                </li>
                                            )}

                                            {ProductData.image3 && (
                                                <li
                                                    onClick={() => handleThumbnailClick(ProductData.image3, 2)}
                                                    className={activeIndex === 2 ? "active" : ""}
                                                >
                                                    <label htmlFor="slide-3">
                                                        <img
                                                            src={ProductData.image3}
                                                            loading="lazy"
                                                            alt="Thumbnail 3"
                                                        />
                                                    </label>
                                                </li>
                                            )}

                                            {ProductData.image4 && (
                                                <li
                                                    onClick={() => handleThumbnailClick(ProductData.image4, 3)}
                                                    className={activeIndex === 3 ? "active" : ""}
                                                >
                                                    <label htmlFor="slide-4">
                                                        <img
                                                            src={ProductData.image4}
                                                            loading="lazy"
                                                            alt="Thumbnail 4"
                                                        />
                                                    </label>
                                                </li>
                                            )}
                                        </ul>

                                    </div>

                                </div>

                                {/* Product Description */}
                                <div className="col-md-6 right" data-aos="zoom-in">

                                    <h1>{ProductData.name}</h1>


                                    <p>
                                        {ProductData.description}
                                    </p>


                                    <div className='row justify-content-center'>

                                        <div className='col-md-6 mt-3'>

                                            <a href='https://wa.me/+919778412529' target='_blank' className="btn btn2">
                                                Enquire Now
                                            </a>

                                        </div>

                                        <div className='col-md-6 mt-3'>

                                            <Link className="btn btn1" to={'/book'}>
                                                Connect with the sales Team
                                            </Link>

                                        </div>

                                        <div className='col-md-6 mt-3'>

                                            <Link onClick={handleShow} className="btn btn2">
                                                Download Brochure
                                            </Link>

                                        </div>


                                    </div>








                                </div>


                            </div>


                        </section>



                        {/* Other Products  */}
                        <section>


                            <Carousel responsive={responsive} className='pb-5'>


                                {

                                    AllProducts.map((item, index) => (
                                        <Link to={`/pro/${item.id}`} style={{textDecoration:'none'}}>
                                            <div className="card me-3  border-1 h-100" key={index}>
                                                <img
                                                    src={item.image}
                                                    className="img-fluid" alt="..." loading='lazy' />
                                                <div className="card-body">
                                                    <h5 className="card-title">
                                                        {item.name}
                                                    </h5>
                                                    <p className="card-text">
                                                        {item.sub_description}
                                                    </p>
                                                    <a target='_blank' className=" d-flex justify-content-start align-items-center btn btn-learn">Learn More <i
                                                        className="fa-solid ps-1 fa-right-long"></i></a>
                                                </div>

                                            </div>
                                        </Link>

                                    ))

                                }

                            </Carousel>



                        </section>



                    </main>

            }



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
                                    <embed src={ProductData.brochure} width="100%" height="600px" />
                                </div>


                                <div className="modal-footer">
                                    <a href={ProductData.brochure} download>
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