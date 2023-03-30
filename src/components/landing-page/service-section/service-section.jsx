import React from "react";
import './style.css';

const ServiceProv = () =>{

    return(
        <div className="service-section">
            <div className="custom-container">
                <div className="row align-items-center">
                    <div className="col-5">
                        <div className="text-section">
                            <div className="title-section">
                                <p className="text-pro-title">Popular professional services</p>
                            </div>
                            <div className="text-description-title">
                                <p className="description-about-us">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                    quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="">
                            <img src={process.env.PUBLIC_URL+'/images/service.png'} alt="service" style={{width:"100%"}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ServiceProv;