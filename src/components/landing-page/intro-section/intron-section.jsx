import React from "react";
import Header from "../../../partials/header/header";
import './style.css';

const IntroSection = () =>{

    return(
        <div className="intro-section-part">
            <div className="position-rec-aboslute">
                <img src={process.env.PUBLIC_URL+"/images/sec.png"} alt="sec" className="img-posi"/>
            </div>
            <div className="">
                <Header></Header>
            </div>
            <div className="section-intro-container">
                <div className=" section-intro-box">
                    <div className="custom-container">
                        <div className="row align-content-center">
                            <div className="col-6 d-flex align-items-center">
                                <div className="d-flex justify-content-center">
                                    <div className="">
                                        
                                        <p className="header-text">
                                            Find The Perfect <span className="text-consultant">Consultant</span> Services For Yourself
                                        </p>
                                        <div className="btn-section-all">
                                            <a to="/" className="btn-pink-white">How it work</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex justify-content-center">
                                    <div className="text-center">
                                        <img src={process.env.PUBLIC_URL+"/images/section-box.png"} alt="sec" style={{width:"95%"}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default IntroSection;