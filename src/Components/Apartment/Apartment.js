import React, {Component} from 'react';
import axios from "axios";
import ApartmentItem from "./ApartmentItem";

class Apartment extends Component {

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
            <section className="apartments-one mt-5">
                <div className="container">
                    <div className="section-title text-center">
                        <span className="section-title__tagline">Business House kG</span>
                        <h2 className="section-title__title">Наши Объекты</h2>
                    </div>
                    <div className="row">
                        {this.state.data.map((item)=><ApartmentItem key={item.id} {...item}/>)}
                    </div>
                </div>
            </section>
        );
    }
}

export default Apartment;