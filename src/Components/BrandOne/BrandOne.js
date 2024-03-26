import React, {Component} from 'react';
import axios from "axios";
import SliderItem from "../Slider/SliderItem";

class BrandOne extends Component {

    state = {
        data: []

    }

    componentDidMount() {
        axios.get(process.env.REACT_APP_SERVER_URL + "/api/partner/").then((res) => {
            this.setState({data: res.data})
            if (res.data.next) {
                axios.get(res.data.next).then((ress) => {
                    this.setState(({data}) => {
                        return {data: [...data, ...ress.data.data]}
                    })
                })
            }
        })
    }

    render() {
        return (
            <section className="brand-one">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="brand-one__inner">
                                <div className="thm-swiper__slider swiper-container" data-swiper-options='{"spaceBetween": 100, "slidesPerView": 5, "autoplay": { "delay": 5000 }, "breakpoints": {
                        "0": {
                            "spaceBetween": 30,
                            "slidesPerView": 2
                        },
                        "375": {
                            "spaceBetween": 30,
                            "slidesPerView": 2
                        },
                        "575": {
                            "spaceBetween": 30,
                            "slidesPerView": 3
                        },
                        "767": {
                            "spaceBetween": 50,
                            "slidesPerView": 4
                        },
                        "991": {
                            "spaceBetween": 50,
                            "slidesPerView": 5
                        },
                        "1199": {
                            "spaceBetween": 100,
                            "slidesPerView": 6
                        }
                    }}'>
                                    <div className="swiper-wrapper align-items-center">

                                    {this.state.data.map((item)=>
                                            <div className="swiper-slide">
                                                <img style={{ maxWidth: '110px', margin: 'auto' }} src={ process.env.REACT_APP_SERVER_URL +'/storage/' + item.image } alt={ item.title }/>
                                            </div>

                                    )}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BrandOne;