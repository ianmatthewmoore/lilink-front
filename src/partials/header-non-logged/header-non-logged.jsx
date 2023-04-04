import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Login from "../login/login";
import Register from "../register/register";
import './style.css'
const HeaderNotLogged = () =>{

    return(
        <div className="header-section m-0" style={{background:"var(--color-red)"}}>
            <div className="custom-container">
                <div className="row">
                    <div className="col-6">
                        <div className="d-flex justify-content-start">
                            <div className="image-section">
                                <img src={process.env.PUBLIC_URL+"/images/li.png"} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-6 d-flex align-items-center">
                        <div style={{width:"100%"}}>
                            <div className="d-flex justify-content-end align-items-center" style={{width:"100%"}}>
                                <ul className="list-navbar-text" style={{width:"60%"}}>
                                    <li className="list-nav-items">
                                        <div className="d-flex">
                                           
                                            English-EN
                                        </div>
                                    </li>
                                    <li className="list-nav-items">
                                        <div className="d-flex">
                                            <a href="/home" className="list-nav-items">

                                            HOME

                                            </a>
                                        </div>
                                    </li>
                                    <li className="list-nav-items">
                                        <div className="separtor-section">

                                        </div>
                                    </li>
                                    <li className="list-nav-items">
                                        <div className="">
                                        <button className="button-join" data-bs-toggle="modal" data-bs-target="#exampleModal">Sign in</button>
                                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog modal-dialog-centered">
                                                <div class="modal-content ">
                                                <div class="modal-body">
                                                    <Login></Login>
                                                </div>
                                            
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-nav-items">
                                        <div className="trans-msg">
                                            <button className="button-join" data-bs-toggle="modal" data-bs-target="#exampleModal2">Join</button>
                                            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-dialog-centered">
                                                    <div class="modal-content ">
                                                        <div class="modal-body">
                                                            <Register></Register>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default HeaderNotLogged;