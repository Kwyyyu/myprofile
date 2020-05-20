import React, {Component} from 'react';
import './Jumbotron.css';

class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid d-flex align-items-center min-vh-100">
                <div className="container text-center">
                    <h1 className="display-4">Your Dataset Bias Detector</h1>
                    <p className="lead">Helping our clients customize the process of finding image dataset bias using crowdsourcing.</p>
                </div>

            </div>
        );
    }
}

export default Jumbotron