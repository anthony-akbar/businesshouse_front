import React, {Component} from 'react';

class AboutOne extends Component {
    render() {
        return (
            <section className="about-one">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="about-one__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                                <div className="about-one__big-text">Apartments</div>
                                <div className="about-one__img-box">
                                    <div className="about-one__img-one">
                                        <img src="assets/images/resources/about-one-img-1.jpg" alt=""/>
                                    </div>
                                    <div className="about-one__img-two">
                                        <img src="assets/images/resources/about-one-img-2.jpg" alt=""/>
                                    </div>
                                    <div className="about-one__shape-1 float-bob-y"></div>
                                    <div className="about-one__shape-2">
                                        <img src="assets/images/shapes/about-one-shape-2.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="about-one__right">
                                <div className="section-title text-left">
                                    <span className="section-title__tagline">Наш продукт</span>
                                    <h2 className="section-title__title">Современные апартаменты премиум класса</h2>
                                </div>
                                <p className="about-one__text">Наша компания предлагает современные квартиры премиум класса
                                    с хорошей коммуникацией и благоустройством во всех частях гоорода.</p>
                                <ul className="list-unstyled about-one__points">
                                    <li>
                                        <div className="icon">
                                            <i className="fa fa-check"></i>
                                        </div>
                                        <div className="text">
                                            <p>Грузовые и пассажирские лифты в каждом подъезде</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fa fa-check"></i>
                                        </div>
                                        <div className="text">
                                            <p>Резервуары с водой на случай остановки водоснабжения</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fa fa-check"></i>
                                        </div>
                                        <div className="text">
                                            <p>Трансформаторы на случай отключения электрическтва</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fa fa-check"></i>
                                        </div>
                                        <div className="text">
                                            <p>Цифровое кабельное телевидение</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fa fa-check"></i>
                                        </div>
                                        <div className="text">
                                            <p>Домофоны в каждую квартиру и подъезд</p>
                                        </div>
                                    </li>
                                </ul>
                                <a href="/" className="thm-btn about-one__btn">Подробнее</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutOne;