import React, {Component} from 'react';

class ApartmentItem extends Component {
    render() {

        const {image, title, description} = this.props

        return (
            <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="apartments-one__single">
                    <div className="apartments-one__img">
                        <img src={image} alt={title} style={{height: '520px',
                            objectFit: 'cover',
                            objectPosition: '50% 50%'}}/>
                        <div className="apartments-one__title-box">
                            <h3 className="apartments-one__title"><a href="">{title}</a></h3>
                        </div>
                        <div className="apartments-one__hover">
                            <h3 className="apartments-one__hover-title"><a href="">{title}</a>
                            </h3>
                            <p className="apartments-one__hover-text">{description}</p>
                            <div className="apartments-one__arrow">
                                <a href=""><span className="icon-right-arrow"></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ApartmentItem;