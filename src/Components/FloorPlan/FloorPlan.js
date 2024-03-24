import React, {Component} from 'react';

class FloorPlan extends Component {
    render() {
        return (
            <section className="floor-plan">
                <div className="container">
                    <div className="section-title text-center">
                        <span className="section-title__tagline">Интерьер</span>
                        <h2 className="section-title__title">Планировки квартир</h2>
                        <p className="floor-plan__text">Retro four loko ethical, distillery lomo meh mixtape vice plaid palo
                            santo
                            live-edge ugh banjo marfa lyft. <br/> Pour-over distillery keytar activated charcoal. Snackwave
                                blue
                                bottle bespoke af farm-to-table <br/> 3 wolf moon, beard helvetica godard hell of. Schli hot
                                    chicken
                                    kombucha.</p>
                    </div>
                    <div className="floor-plan__main-tab-box tabs-box">
                        <ul className="tab-buttons clearfix list-unstyled">
                            <li data-tab="#penthouse" className="tab-btn active-btn"><span>Penthouse</span></li>
                            <li data-tab="#stuido" className="tab-btn"><span>Stuido</span></li>
                            <li data-tab="#duplex" className="tab-btn"><span>Duplex</span></li>
                        </ul>
                        <div className="tabs-content">

                            <div className="tab active-tab" id="penthouse">
                                <div className="floor-plan__tab-content-inner">
                                    <div className="floor-plan__tab-content-left">
                                        <ul className="list-unstyled floor-plan__tab-content-details">
                                            <li>
                                                <p>Total area</p>
                                                <span>2800 Sq. Ft</span>
                                            </li>
                                            <li>
                                                <p>Floor no.</p>
                                                <span>2nd</span>
                                            </li>
                                            <li>
                                                <p>Current status</p>
                                                <span>Available</span>
                                            </li>
                                            <li>
                                                <p>No. of rooms</p>
                                                <span>04</span>
                                            </li>
                                            <li>
                                                <p>Parking available</p>
                                                <span>Yes</span>
                                            </li>
                                            <li>
                                                <p>Price from</p>
                                                <span>$4500</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="floor-plan__tab-content-righ">
                                        <img src="assets/images/resources/floor-plan-tab-content-img-1.png" alt=""/>
                                    </div>
                                </div>
                            </div>

                            <div className="tab " id="stuido">
                                <div className="floor-plan__tab-content-inner">
                                    <div className="floor-plan__tab-content-left">
                                        <ul className="list-unstyled floor-plan__tab-content-details">
                                            <li>
                                                <p>Total area</p>
                                                <span>2800 Sq. Ft</span>
                                            </li>
                                            <li>
                                                <p>Floor no.</p>
                                                <span>2nd</span>
                                            </li>
                                            <li>
                                                <p>Current status</p>
                                                <span>Available</span>
                                            </li>
                                            <li>
                                                <p>No. of rooms</p>
                                                <span>04</span>
                                            </li>
                                            <li>
                                                <p>Parking available</p>
                                                <span>Yes</span>
                                            </li>
                                            <li>
                                                <p>Price from</p>
                                                <span>$4500</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="floor-plan__tab-content-righ">
                                        <img src="assets/images/resources/floor-plan-tab-content-img-1.png" alt=""/>
                                    </div>
                                </div>
                            </div>

                            <div className="tab " id="duplex">
                                <div className="floor-plan__tab-content-inner">
                                    <div className="floor-plan__tab-content-left">
                                        <ul className="list-unstyled floor-plan__tab-content-details">
                                            <li>
                                                <p>Total area</p>
                                                <span>2800 Sq. Ft</span>
                                            </li>
                                            <li>
                                                <p>Floor no.</p>
                                                <span>2nd</span>
                                            </li>
                                            <li>
                                                <p>Current status</p>
                                                <span>Available</span>
                                            </li>
                                            <li>
                                                <p>No. of rooms</p>
                                                <span>04</span>
                                            </li>
                                            <li>
                                                <p>Parking available</p>
                                                <span>Yes</span>
                                            </li>
                                            <li>
                                                <p>Price from</p>
                                                <span>$4500</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="floor-plan__tab-content-righ">
                                        <img src="assets/images/resources/floor-plan-tab-content-img-1.png" alt=""/>
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

export default FloorPlan;