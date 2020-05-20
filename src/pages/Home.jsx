import React, {Component} from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Jumbotron from "../Components/Jumbotron";
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div>

                <Navbar />
                <Jumbotron />
                <div className={"container"}>
                    <h2>Some function demonstration below</h2>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home