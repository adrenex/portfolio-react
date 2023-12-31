import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {

    const handImageUrl = process.env.PUBLIC_URL + 'assets/images/hand.png';
    const banneImageUrl = process.env.PUBLIC_URL + 'assets/images/banner-man-one.png';

    return (
        <section className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="banner__content">
                            <div className="section__heading">
                                <h4>Data Scientist | Software Developer</h4>
                                <h2>
                                    Hey! I am <img src={handImageUrl} alt="Nilesh Popli" loading="lazy" />
                                    <span className="color-red">Nilesh Popli</span>
                                </h2>
                                <p>I'm Coder based in Dehradun, and I'm very passsionate and dedicated to my work.</p>
                                <Link to='/book-appointment' className="banner__content-link">Connect with me</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="banner__thumbnail">
                            <img src={banneImageUrl} alt="Nilesh Popli" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;