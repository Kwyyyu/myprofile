import React, {Component} from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import './Home.css'
import './About.css'

class About extends Component {
    render() {
        return (
            <div>
                <Navbar />

                <div className={"section"}>
                    <div className={"section-about-us"}>
                        <h2>About Avixe</h2>
                        <p>
                            Avixe is the pioneer in detecting image dataset bias using crowdsourcing method. We are the
                            Crowdsourcing Team of <a href="https://www.cam2project.net">Purdue CAM2 Research
                            Group</a>, established in 2019 Spring semester, dedicating to find the
                            crowdsourcing approaches for biased image database problem.
                        </p>
                        <hr />
                        <p>
                            Team member:
                            <a href="https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=3355">Yung-Hsiang Lu (professor)</a>,
                            <a href="https://www.cs.purdue.edu//people/faculty/mingyin/">Ming Yin (professor)</a>,
                            <a href="https://purduehelps.org/people.html#crowdsourcing-for-data-bias"
                               >Gore Kao(leader), Kaiwen Yu(co-leader), Xiao Hu, Haobo Wang, Anirudh
                                Vegesana, Yukyung Lee, Esteban Gorostiaga, Phillip Andrew Archuleta, Tianhui Chen, Moya Zhu, Weiyan Hu. </a>
                        </p>
                        <hr />
                        <p>
                            Research focus: Detect and report the biased attributes in the image
                            datasets by utilizing crowdsourcing.
                        </p>
                        <hr />
                        <p>
                            Publication: <b>Discovering Biases in Image Datasets with the
                            Crowd</b><br />
                            <div>Accepted by <a
                                href="https://www.humancomputation.com">2019
                                Human Computation and Crowdsourcing
                                Conference(2019HCOMP)</a> Work-in-progress track.
                            </div>
                        </p>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default About