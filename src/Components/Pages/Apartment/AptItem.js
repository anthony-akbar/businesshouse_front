import React, {Component} from 'react';

class AptItem extends Component {
    render() {
        const {id, title, image} = this.props;
        return (
            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={id + '00ms'}>
                <div className="apartments-two__single">
                    <div style={{height: '260px'}} className="apartments-two__img">
                        <img style={{height: '100%'}} src={image} alt=""/>
                    </div>
                    <div className="apartments-two__content">
                        <div className="apartments-two__content-left">
                            <h3 className="apartments-two__title"><a href="apartment-details.html">{title}</a></h3>
                            <p className="apartments-two__tagline">Подробнее</p>
                        </div>
                        <div className="apartments-two__content-right">
                            <a href="apartment-details.html" className="apartments-two__btn thm-btn">Подробнее</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AptItem;