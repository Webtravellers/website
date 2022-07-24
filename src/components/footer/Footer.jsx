import React from "react";
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap'
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t, i18n } = useTranslation();

    return (
        <footer>
            <div className='bg-tranparent'>
                <div className='pt-1'>
                    <section >
                        <Container>
                            <div className='text-center'>
                                <div className="d-flex justify-content-between">
                                    <div className="logoname">
                                        Bi'Hatıra
                                    </div>
                                    <div className=''>
                                        <Link to="/suggestions" className='text-dark font-weight-light btn btn-link'>{t("footer.suggestions")}</Link>
                                        <Link to='/contact' className='text-dark font-weight-light btn btn-link'>{t("footer.contact")}</Link>
                                        <Link to='/blog' className='text-dark font-weight-light btn btn-link'>{t("footer.blog")}</Link>
                                        <Link to='/about-us' className='text-dark font-weight-light btn btn-link'>{t("footer.about-us")}</Link>

                                    </div>
                                </div>
                                <hr className="p-2 m-2" />
                                <div className="d-flex justify-content-between">
                                    <div className="points">
                                        ................................
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <p className='text-dark display-5'>
                                            &copy; {t("footer.rights")}
                                            <Link to="/" className="text-dark" >
                                                &nbsp;Powered by <span className='text-orange'>Webtravellers</span>
                                            </Link>
                                        </p>
                                    </div>
                                    <div className="d-flex flex-start">
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
                            </div>
                        </Container>

                    </section>
                </div>
            </div>
        </footer>
    )
}

export default React.memo(Footer)