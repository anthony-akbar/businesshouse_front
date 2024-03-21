import React, {Component} from 'react';

class Nabvar extends Component {
    render() {
        return (
            <>
                <header className="main-header">
                    <div className="main-header__top">
                        <div className="main-header__top-inner">
                            <div className="main-header__top-left">
                                <ul className="list-unstyled main-header__contact-list">
                                    <li>
                                        <div className="icon">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div className="text">
                                            <p>г. Ош, ул. К. Датка 584</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <div className="text">
                                            <p><a href="mailto:business.house.kg@mail.ru">business.house.kg@mail.ru</a>
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="main-header__top-right">
                                <div className="main-header__top-time">
                                    <p>9:00 - 18:00 без выходных</p>
                                </div>
                                <div className="main-header__social">
                                    {/*<a href="index.html"><i className="fab fa-twitter"></i></a>*/}
                                    {/*<a href="index.html"><i className="fab fa-facebook"></i></a>*/}
                                    {/*<a href="index.html"><i className="fab fa-pinterest-p"></i></a>*/}
                                    <a href="https://www.instagram.com/businesshouse.kg1/"><i
                                        className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav className="main-menu">
                        <div className="main-menu__wrapper">
                            <div className="main-menu__wrapper-inner">
                                <div className="main-menu__left">
                                    <div className="main-menu__logo">
                                        <a href="/"><img style={{maxWidth: '250px'}}
                                                         src="assets/images/resources/logo-1.png" alt="Logo"/></a>
                                    </div>
                                </div>
                                <div className="main-menu__main-menu-box">
                                    <a  className="mobile-nav__toggler"><i className="fa fa-bars"></i></a>
                                    <ul className="main-menu__list">
                                        <li className="dropdown current">
                                            <a href="/">Главная</a>
                                        </li>
                                        <li>
                                            <a href="">О нас</a>
                                        </li>
                                        <li className="dropdown">
                                            <a href="index.html">Объекты</a>
                                            <ul className="shadow-box">
                                                <li><a href="apartments.html">Apartments</a></li>
                                                <li><a href="apartment-details.html">Apartment Details</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <a href="index.html">Новости</a>
                                            <ul className="shadow-box">
                                                <li><a href="news.html">News</a></li>
                                                <li><a href="news-details.html">News Details</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="contact.html">Контакты</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="main-menu__right">
                                    <div className="main-menu__search-btn-box">
                                        <div className="main-menu__search-box">
                                            <a 
                                               className="main-menu__search search-toggler icon-magnifying-glass"></a>
                                        </div>
                                        <div className="main-menu__btn-box">
                                            <a href="tel:0558222333" className="thm-btn main-menu__btn">Связаться</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>

                <div className="stricky-header stricked-menu main-menu">
                    <div className="sticky-header__content"></div>
                </div>
            </>
        );
    }
}

export default Nabvar;