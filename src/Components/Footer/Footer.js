import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="site-footer">
                    <div className="site-footer__top">
                        <div className="site-footer__shape-1 float-bob-x">
                            <img src="https://example.com/images/product_c.jpg" alt=""/>
                        </div>
                        <div className="container">
                            <div className="site-footer__top-inner">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                        <div className="footer-widget__column footer-widget__about">
                                            <div className="footer-widget__about-text-box">
                                                <p className="footer-widget__about-text">Aports find out all the ways to
                                                    enjoy
                                                    modern and luxury residential life around the world.</p>
                                            </div>
                                            <div className="site-footer__social">
                                                <a><i className="fab fa-twitter"></i></a>
                                                <a><i className="fab fa-facebook"></i></a>
                                                <a><i className="fab fa-pinterest-p"></i></a>
                                                <a href="https://facebook.com"><i className="fab fa-instagram"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                        <div className="footer-widget__column footer-widget__Explore">
                                            <div className="footer-widget__title-box">
                                                <h3 className="footer-widget__title">Explore</h3>
                                            </div>
                                            <ul className="footer-widget__Explore-list list-unstyled">
                                                <li><a href="about.html">About</a></li>
                                                <li><a href="contact.html">Contact</a></li>
                                                <li><a href="about.html">Custom Widget</a></li>
                                                <li><a href="about.html">Shortcodes</a></li>
                                                <li><a href="about.html">Blank page</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                        <div className="footer-widget__column footer-widget__find">
                                            <div className="footer-widget__title-box">
                                                <h3 className="footer-widget__title">Find</h3>
                                            </div>
                                            <p className="footer-widget__find-text">30 Broklyn Golden Street,
                                                New <br/> York United
                                                    States of <br/> America</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                        <div className="footer-widget__column footer-widget__Contact">
                                            <div className="footer-widget__title-box">
                                                <h3 className="footer-widget__title">Contact</h3>
                                            </div>
                                            <ul className="footer-widget__Contact-list list-unstyled">
                                                <li>
                                                    <div className="icon">
                                                        <span className="fas fa-phone-alt"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p><a href="tel:23425446680">+23 425 4466 80</a></p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="fas fa-clock"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p>Mon - Sun: 8AM - 8PM</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="fas fa-envelope"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p><a
                                                            href="mailto:needhelp@company.com">needhelp@company.com</a>
                                                        </p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="site-footer__bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="site-footer__bottom-inner">
                                        <p className="site-footer__bottom-text">© All Copyright 2022 by <a
                                            >Aports.com</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;