import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './style.css';

const LoggedHeader = () =>{

    const user = useSelector(state => state.user)
    const [logged,setlogged] = useState(null)
    useEffect(()=>{
        
        if(user.status ==="succeeded")
            setlogged(user.user)

    },[user])
    
    return(
        <div className="logged-header">
            <div className="custom-container">
                <div className="row">
                    <div className="col-6">
                        <div className="d-flex justify-content-start">
                            <div className="image-section">
                                <img src={process.env.PUBLIC_URL+"/images/white-logo.png"} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-6 d-flex align-items-center">
                        <div style={{width:"100%"}}>
                            <div className="d-flex justify-content-end align-items-center">
                                <ul className="list-navbar-text-logged" >
                                    <li className="list-nav-items-logged">
                                        <div className="d-flex">
                                            <Link to='/gig-active' className="list-nav-items-logged">
                                                Orders
                                            </Link>
                                        </div>
                                    </li>
                                    {user.type=="CONSULTANT" ?
                                    <>
                                    <li className="list-nav-items-logged">
                                        <div className="d-flex">
                                            <Link to='/earning' className="list-nav-items-logged">
                                                Earnings
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="list-nav-items-logged">
                                        <div className="d-flex">
                                            <Link to='/myGig' className="list-nav-items-logged">
                                                Gigs
                                            </Link>
                                        </div>
                                    </li>
                                    </>
                                    :
                                    <></>
                                    }
                                    


                                    <li className="list-nav-items-logged d-flex">
                                    <div className="separtor-section-logged mx-2"></div>
                                            <img src={process.env.PUBLIC_URL+"/images/lifav.svg"} alt="" className="navbar-img mx-2" />
                                            <img src={process.env.PUBLIC_URL+"/images/limsg.svg"} alt="" className="navbar-img mx-2" />
                                            <img src={process.env.PUBLIC_URL+"/images/linotif.svg"} alt="" className="navbar-img mx-2" />
                                        
                                    </li>
                                    <li className="list-nav-items-logged">
                                        <Link to={"/profile/"+logged?._id}>
                                            
                                            <img src={process.env.PUBLIC_URL+"/images/current.png"} alt="" />
                                        </Link>
                                        
                                    </li>
                                    <li className="list-nav-items-logged">
                                    <div class="dropdown">

                                            <a class="header-title dropdown-toggle" style={{textTransform:"capitalize"}} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {logged && logged?.firstName[0] +". "+ logged?.lastName}
                                           
                                            </a>
                                            <div class="dropdown-menu" >
                                                <Link class="dropdown-item  py-3" href="#" to='/settings-account'> <img src={process.env.PUBLIC_URL+"/images/conf.svg"} alt="" className=" pe-2"/>Account setting</Link>
                                                <a class="dropdown-item py-3" href="#"> <img src={process.env.PUBLIC_URL+"/images/out.svg"} alt="" className=" pe-2"/>Logout</a>
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

export default LoggedHeader;