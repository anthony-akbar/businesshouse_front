import React, {Component} from 'react';
import axios from "axios";
import AptItem from "./AptItem";
import {Link} from "react-router-dom";

class Apt extends Component {

    state = {
        data: []

    }

    componentDidMount() {
        axios.get( process.env.REACT_APP_SERVER_URL + "/api/apartment/").then((res) => {
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
            <>
                <section className="page-header">
                    <div className="page-header-bg"
                         style={{backgroundImage: 'url(assets/images/backgrounds/page-header-bg.jpg)'}}>
                    </div>
                    <div className="container">
                        <div className="page-header__inner">
                            <ul className="thm-breadcrumb list-unstyled">
                                <li><Link to="/">Главная</Link></li>
                                <li><span>/</span></li>
                                <li>Объекты</li>
                            </ul>
                            <h2>Наши объекты</h2>
                        </div>
                    </div>
                </section>

                <section className="apartments-page">
                    <div className="container">
                        <div className="row">
                            {this.state.data.map((item)=><AptItem key={item.id} {...item}/>)}
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Apt;