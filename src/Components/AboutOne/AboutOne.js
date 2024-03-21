import React, {Component} from 'react';

class AboutOne extends Component {
    render() {
        return (
            <section class="about-one">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6">
                            <div class="about-one__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                                <div class="about-one__big-text">Apartments</div>
                                <div class="about-one__img-box">
                                    <div class="about-one__img-one">
                                        <img src="assets/images/resources/about-one-img-1.jpg" alt=""/>
                                    </div>
                                    <div class="about-one__img-two">
                                        <img src="assets/images/resources/about-one-img-2.jpg" alt=""/>
                                    </div>
                                    <div class="about-one__shape-1 float-bob-y"></div>
                                    <div class="about-one__shape-2">
                                        <img src="assets/images/shapes/about-one-shape-2.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <div class="about-one__right">
                                <div class="section-title text-left">
                                    <span class="section-title__tagline">Наш продукт</span>
                                    <h2 class="section-title__title">Современные апартаменты премиум класса</h2>
                                </div>
                                <p class="about-one__text">Наша компания предлагает современные квартиры премиум класса
                                    с хорошей коммуникацией и благоустройством во всех частях гоорода.</p>
                                <ul class="list-unstyled about-one__points">
                                    <li>
                                        <div class="icon">
                                            <i class="fa fa-check"></i>
                                        </div>
                                        <div class="text">
                                            <p>Грузовые и пассажирские лифты в каждом подъезде</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <i class="fa fa-check"></i>
                                        </div>
                                        <div class="text">
                                            <p>Резервуары с водой на случай остановки водоснабжения</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <i class="fa fa-check"></i>
                                        </div>
                                        <div class="text">
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
                                <a  class="thm-btn about-one__btn">Подробнее</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutOne;