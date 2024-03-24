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
                                                <p className="footer-widget__about-text">
                                                Business House KG
                                                    <br/>
                                                    Высокая связь с городом
                                                </p>
                                            </div>
                                            <div className="site-footer__social">
                                                <a href=""><i className="fab fa-twitter"></i></a>
                                                <a href=""><i className="fab fa-facebook"></i></a>
                                                <a href=""><i className="fab fa-pinterest-p"></i></a>
                                                <a href="https://www.instagram.com/businesshouse.kg1/"><i className="fab fa-instagram"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                        <div className="footer-widget__column footer-widget__Explore">
                                            <div className="footer-widget__title-box">
                                                <h3 className="footer-widget__title">Страницы</h3>
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
                                                <h3 className="footer-widget__title">Адрес</h3>
                                            </div>
                                            <p className="footer-widget__find-text">
                                                Кыргызская Республика
                                                <br/>
                                                город Ош
                                                <br/>
                                                улица К. Датка 584
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                        <div className="footer-widget__column footer-widget__Contact">
                                            <div className="footer-widget__title-box">
                                                <h3 className="footer-widget__title">Контакты</h3>
                                            </div>
                                            <ul className="footer-widget__Contact-list list-unstyled">
                                                <li>
                                                    <div className="icon">
                                                        <span className="fas fa-phone-alt"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p><a href="tel:0558222333">+996 (558) 222-333</a></p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="fas fa-clock"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p>9:00 - 18:00 без выходных</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="fas fa-envelope"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p><a
                                                            href="mailto:businesshouse.kg">businesshouse.kg</a>
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
                                        <p className="site-footer__bottom-text">© All Copyright 2024 by <a href="/">businesshouse.kg</a>
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