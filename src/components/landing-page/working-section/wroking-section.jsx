import React from "react";
import './style.css'
const WorkingSection = () =>{

    return (
        <div className="working-section">
            <div className="custom-container">
                <div className="py-5">
                        <div className="title-section" style={{width:"100%"}}>
                            <p className="text-pro-title" style={{color:"black!important",width:"50%"}}>Working with LiLink is very simple</p>
                        </div>
                        <div className="sections-box-work">
                            <div className="first-bar">
                                <div className="py-3">
                                    <img src={process.env.PUBLIC_URL+'/images/look.png'} alt="" />
                                    
                                </div>
                                <div className="py-3">
                                    <p className="card-working-title">Find Contractor !</p>
                                </div>
                                <div className="card-working-description">
                                    <p>Lorem ipsum dolor sit amet, consectetur aipiscing elit, sed do eiusmod tempor i Lorem ipsum dolor sit amet, consectetur aipiscing elit, sed do eiusmod tempor i </p>
                                    <p>Lorem ipsum dolor sit amet, consectetur aipiscing elit, sed do eiusmod tempor i Lorem ipsum dolor sit amet, consectetur aipiscing elit, sed do eiusmod tempor i </p>
                                    <p>Lorem ipsum dolor sit amet, consectetur aipiscing elit, sed do eiusmod tempor i Lorem ipsum dolor sit amet, consectetur aipiscing elit, sed do eiusmod tempor i </p>
                                </div>
                            </div>
                            <div className="image-down-work">
                                <img src={process.env.PUBLIC_URL+'/images/arrow-down.png'} alt="" />
                            </div>
                            <div className="second-bar">
                                <div className="py-3">
                                    <img src={process.env.PUBLIC_URL+'/images/look.png'} alt="" />
                                    
                                </div>
                                <div className="py-3">
                                    <p className="card-working-title">Find Contractor !</p>
                                </div>
                                <div className="card-working-description">
                                    <p>Lorem ipsum dolor sit amet, consectetur aipiscing elit, sed do eiusmod tempor i Lorem ipsum dolor sit amet, consectetur aipiscing elit, sed do eiusmod tempor i </p>
                                    <p>Lorem ipsum dolor sit amet, consectetur aipiscing elit, sed do eiusmod tempor i Lorem ipsum dolor sit amet, consectetur aipiscing elit, sed do eiusmod tempor i </p>
                                    <p>Lorem ipsum dolor sit amet, consectetur aipiscing elit, sed do eiusmod tempor i Lorem ipsum dolor sit amet, consectetur aipiscing elit, sed do eiusmod tempor i </p>
                                </div>
                            </div>
                            <div className="image-up-work">
                                <img src={process.env.PUBLIC_URL+'/images/arrow-up.png'} alt="" />
                            </div>
                            <div className="last-bar">
                                <div className="py-3">
                                    <img src={process.env.PUBLIC_URL+'/images/look.png'} alt="" />
                                    
                                </div>
                                <div className="py-3">
                                    <p className="card-working-title">Find Contractor !</p>
                                </div>
                                <div className="card-working-description">
                                    <p>Lorem ipsum dolor sit amet, consectetur aipiscing elit, sed do eiusmod tempor i Lorem ipsum dolor sit amet, consectetur aipiscing elit, sed do eiusmod tempor i </p>
                                    <p>Lorem ipsum dolor sit amet, consectetur aipiscing elit, sed do eiusmod tempor i Lorem ipsum dolor sit amet, consectetur aipiscing elit, sed do eiusmod tempor i </p>
                                    <p>Lorem ipsum dolor sit amet, consectetur aipiscing elit, sed do eiusmod tempor i Lorem ipsum dolor sit amet, consectetur aipiscing elit, sed do eiusmod tempor i </p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )

}

export default WorkingSection;