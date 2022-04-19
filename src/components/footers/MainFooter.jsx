import React from "react";
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap'
import Brand from '../brands/Brand'
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"

const MainFooter = () => {
    return (
        <footer>
            <div className='bg-tranparent fixed-bottom'>
                <div className='pt-1'>
                    <section >
                        <Container>
                            <div className='text-center'>
                                <div className="d-flex justify-content-between">
                                    <Brand bold />
                                    <div className=''>
                                        <Link to="#" className='text-dark font-weight-light btn btn-link'>Main Page</Link>
                                        <Link to="#" className='text-dark font-weight-light btn btn-link'>Suggestions</Link>
                                        <Link to='#' className='text-dark font-weight-light btn btn-link'>Contact</Link>
                                        <Link to='#' className='text-dark font-weight-light btn btn-link'>Blog</Link>
                                        <Link to='#' className='text-dark font-weight-light btn btn-link'>About Us</Link>

                                    </div>
                                </div>
                                <hr className="p-2 m-2" />
                                <div className="d-flex justify-content-center position-relative">
                                    <p className='text-dark display-5'>
                                        &copy; 2022 All rights reserved.
                                        <Link to="/" className="text-dark" >
                                            &nbsp;Powered by <span className='text-orange'>Webtravellers</span>
                                        </Link>
                                    </p>
                                    <div className="socials">
                                        < FaTwitter className="mx-3 mb-2">
                                            <link href="#"></link>
                                        </FaTwitter>
                                        < FaInstagram className="mx-3 mb-2">
                                            <link href="#"></link>
                                        </FaInstagram>
                                        < FaFacebook className="mx-3 mb-2">
                                            <link href="#"></link>
                                        </FaFacebook>
                                    </div>
                                </div>
                            </div>
                        </Container>

                    </section>
                </div>
            </div>
        </footer>
    )
}

export default React.memo(MainFooter)