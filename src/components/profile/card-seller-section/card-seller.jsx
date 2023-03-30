import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './style.css'

const CardSeller = (props) =>{

    const [nbReviews,setnbReviews] = useState(0)

    useEffect(()=>{

        if(props.user){
            console.log(props);
            props.user?.gigs?.map(x=>{
                console.log(x.reveiws?.length)
                setnbReviews(old => old+ x.reveiws?.length)
            })
        }
    },[props])
    

    return(
        <div className="card-pov-seller">
            <div className="">
                <div className="card-user-info">
                    <div className="d-flex">
                        <div className="mt-3">
                            <img src={process.env.PUBLIC_URL+'/images/current.png'} alt="current"/>
                        </div>
                        <div className="card-user-info-pov-seller">
                            <p className="user-title-heading-card  py-123">{props.user?.firstName +" " +props.user?.lastName || ""}</p>
                            <p className="user-desc-heading-card  py-123">
                                {props.user?.bio || "No description for this user"}
                            </p>
                            <div className="d-flex align-items-center py-123">
                                <div className="d-flex align-items-center">
                                        <img src={process.env.PUBLIC_URL+'/images/star.png'} alt="current"/>
                                    
                                        <img src={process.env.PUBLIC_URL+'/images/star.png'} alt="current"/>
                                    
                                        <img src={process.env.PUBLIC_URL+'/images/star.png'} alt="current"/>
                                    
                                        <img src={process.env.PUBLIC_URL+'/images/star.png'} alt="current"/>
                                    
                                        <img src={process.env.PUBLIC_URL+'/images/star.png'} alt="current"/>
                                    
                                </div>
                                <p className="user-rating-heading-card ms-1">{props.user?.rating || "5"}</p>
                                <p className="user-reveiew-heading-card ms-1">({nbReviews} Reviews)</p>
                            </div>
                        </div>
                    </div>
                    <div className="pov-contact-seller">
                        <Link to="/" className="btn-contact-me-pov">Contact Me</Link>
                    </div>
                    <div className="py-2">
                        <div className="main-data-user-ab ">
                            <div className="d-flex justify-content-between py-2">
                                    <div className="pos-locate-user-seller ">
                                        <img src={process.env.PUBLIC_URL+"/images/liloc.svg"} alt="liloc.svg"  className="img-width me-1"/>
                                        <p className="ref-card-user">From</p>
                                    </div>
                                    <div className="loca-user-info-desc">

                                        <p className="text-ref-loca-user">France</p>
                                    </div>
                            </div>
                        </div>
                        <div className="main-data-user-ab">
                            <div className="d-flex justify-content-between py-2">
                                    <div className="pos-locate-user-seller ">
                                        <img src={process.env.PUBLIC_URL+"/images/liuser.svg"} alt="liloc.svg"  className="img-width me-1"/>
                                        <p className="ref-card-user">Member since</p>
                                    </div>
                                    <p className="text-ref-loca-user">20 Fev 2015</p>
                            </div>
                        </div>
                        <div className="main-data-user-ab">
                            <div className="d-flex justify-content-between py-2">
                                    <div className="pos-locate-user-seller ">
                                        <img src={process.env.PUBLIC_URL+"/images/deli.svg"} alt="liloc.svg"  className="img-width me-1"/>
                                        <p className="ref-card-user">Last devliery</p>
                                    </div>
                                    <p className="text-ref-loca-user">1 day</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="card-user-info">
                        <div className="user-desc-card-seller">
                            <p className="text-title-card-seller-info-text py-2">Description</p>
                            <p className="text-desc-card-seller-info-text py-2">
                            I cumulate missions at French and French-Canadian agencies, arrived at a Some degree of mastery and experience, I continued as a consultant by chaining consultations to companies, working on projects overseas requiring digital mockups and a BIM process. I worked with various teams with experience, other experts, and I interact also with professionals as a certified Autodesk Trainer in Revit Architecture, Revit Structure, and other tools. I made Interventions with many types of projects and models (existing models, clash detection, point cloud, 4d, and 5d....)
                            </p>
                            <div className="sep-card-info-text-user">
                            </div>
                            <p className="text-title-card-seller-info-text py-2">Language</p>
                            <p className="text-desc-card-seller-info-text">
                                English
                            </p>
                            <p className="text-desc-card-seller-info-text">
                                French
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default CardSeller;