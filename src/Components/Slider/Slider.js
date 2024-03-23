import React, {Component} from 'react';
import axios from "axios";
import SliderItem from "./SliderItem";

class Slider extends Component {

    state = {
        data: []

    }

    componentDidMount() {
        axios.get("https://admin.businesshouse.kg/api/slider/").then((res) => {
            console.log(res.data)
            this.setState({data: res.data})
            if (res.data.next) {
                axios.get(res.data.next).then((ress) => {
                    this.setState(({data}) => {
                        return {data: [...data, ...ress.data.data]}
                    })
                })
            }
        }).then(() => {
            console.log(this.state.data)
        })
    }

    render() {
        return (
            <section className="main-slider clearfix">
                <div className="swiper-container thm-swiper__slider" data-swiper-options='{"slidesPerView": 1, "loop": true,
                "effect": "fade",
                "pagination": {
                "el": "#main-slider-pagination",
                "type": "bullets",
                "clickable": true
                },
                "navigation": {
                "nextEl": "#main-slider__swiper-button-next",
                "prevEl": "#main-slider__swiper-button-prev"
                },
                "autoplay": {
                "delay": 5000
                }}'>
                    <div className="swiper-wrapper">
                        {this.state.data.map((item)=><SliderItem key={item.id} {...item}/>)}
            </div>


        <div className="main-slider__nav">
            <div className="swiper-button-prev" id="main-slider__swiper-button-next">
                <i className="icon-left-arrow"></i>
            </div>
            <div className="swiper-button-next" id="main-slider__swiper-button-prev">
                <i className="icon-right-arrow"></i>
            </div>
        </div>

    </div>
    </section>
    )
        ;
    }
}

export default Slider;
