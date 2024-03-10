import React, {Component} from 'react';

class SliderItem extends Component {
    render() {
        const {title, image} = this.props
        return (
            <div className="swiper-slide">
                <div className="image-layer" style={{backgroundImage: 'url(http://admin.businesshouse.kg/storage/' + image + ')', backgroundPosition: 'center'}}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="main-slider__content">
                                <h2 className="main-slider__title">{title}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SliderItem;