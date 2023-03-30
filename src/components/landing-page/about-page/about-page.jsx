import React from "react";
import './style.css'
const AboutUs = () =>{

    return(
        <div className="box-about-us">
            <div className="custom-container">
                <div className="row">
                    <div className="col-4">
                        <div className="img-background">
                            <div className="d-flex  justify-content-between">
                                <div className="">
                                    <img src={process.env.PUBLIC_URL+'/images/clock.png'} alt="think" />
                                </div>
                                <div className="wi-50">
                                    <h5 className="">Heading 5</h5>
                                    <p className="descr-size-about">Lorem ipsum dolor sit amet, consectetur aipiscing elit, sed do eiusmod tempor i</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="img-background">
                            <div className="d-flex justify-content-between">
                                <div className="">
                                    <img src={process.env.PUBLIC_URL+'/images/group.png'} alt="think" />
                                </div>
                                <div className="wi-50">
                                    <h5 className="">Heading 5</h5>
                                    <p className="descr-size-about">Lorem ipsum dolor sit amet, consectetur aipiscing elit, sed do eiusmod tempor i</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="img-background">
                            <div className="d-flex  justify-content-between">
                                <div className="">
                                    <img src={process.env.PUBLIC_URL+'/images/sheild.png'} alt="think" />
                                </div>
                                <div className="wi-50">
                                    <h5 className="">Heading 5</h5>
                                    <p className="descr-size-about">Lorem ipsum dolor sit amet, consectetur aipiscing elit, sed do eiusmod tempor i</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default AboutUs