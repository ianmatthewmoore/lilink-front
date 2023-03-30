import React from "react";
import './style.css';


const Footer = () =>{

    return(
        <div className="footer-section">
            <div className="custom-container" style={{height:"100%"}}>
                <div className="footer-section-box">
                    <div className="row justify-content-center align-content-center flex-wrap" style={{height:"82%"}}>
                        <div className="col-8">
                            <div className="row">
                                <div className="col-4">
                                    <div className="footer-supp">
                                        <p className="footer-text-supp">Support</p>
                                        <ul className="footer-navbar-section">
                                            <li  className="footer-navbar-text">Help & Support</li>
                                            <li  className="footer-navbar-text">Trsut & Safety</li>
                                            <li  className="footer-navbar-text">Selling LiLink</li>
                                            <li  className="footer-navbar-text">Buying LiLink</li>
                                        </ul>
                                    </div>
                                    
                                </div>
                                <div className="col-4">
                                    <div className="footer-supp">
                                        <p className="footer-text-supp">About</p>
                                        <ul className="footer-navbar-section">
                                            <li  className="footer-navbar-text">About us</li>
                                            <li  className="footer-navbar-text">Confidentiality policy</li>
                                            <li  className="footer-navbar-text">Terms of use</li>
                                        </ul>
                                    </div>
                                    
                                </div>
                                <div className="col-4">
                                    <div className="footer-supp">
                                        <p className="footer-text-supp">Contact</p>
                                        <ul className="footer-navbar-section">
                                            <li  className="footer-navbar-text">Do not hesitate to contact us by phone or to send us a message.</li>
                                            <li  className="footer-navbar-text"><img src={process.env.PUBLIC_URL+"/images/msg.png"} className="me-2" /> Contact@LiLink.com</li>
                                            <li  className="footer-navbar-text"><img src={process.env.PUBLIC_URL+"/images/msg.png"} className="me-2" /> (+00) 000 0000 000</li>
                                        </ul>
                                    </div>
                                    
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="sep-text-footer"></div>
                        <div className="d-flex justify-content-between align-content-center flex-wrap"  style={{height:"18%"}}>
                            <div className="text-footer-copy">
                                <p className="text-copy-right">©Copyright 2022-2023 Lilink Limited All rights reserved | Designed by T.B.P</p>
                            </div>
                            <div className="d-flex">
                                <p className="text-copy-right">Enlgish - EN</p>
                                <div className="social-footer d-flex ms-4">
                                    <div className="me-2">
                                        <img src={process.env.PUBLIC_URL+'/images/ins.png'} alt="social"/>
                                    </div>
                                    <div className="me-2">
                                        <img src={process.env.PUBLIC_URL+'/images/fb.png'} alt="social"/>
                                    </div>
                                    <div className="me-2">
                                        <img src={process.env.PUBLIC_URL+'/images/in.png'} alt="social"/>
                                    </div>
                                    <div className="me-2">
                                        <img src={process.env.PUBLIC_URL+'/images/wh.png'} alt="social"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )

}

export default Footer