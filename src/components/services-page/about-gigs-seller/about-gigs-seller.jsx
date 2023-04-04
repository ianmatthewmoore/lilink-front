import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUserByParams } from "../../../api/user";
import './style.css';
import moment from 'moment';

const AboutGigSellerBid=(props) =>{

    const [nbReviews,setnbReviews] = useState(0)
    const [user,setuser] = useState(0)
    
    const { isLoading, data, isError, isFetching, refetch } = useQuery({
        queryKey: ["rewritse"],
        queryFn: async () => {
            console.log(props.gig)
            const user = await getUserByParams(props.gig?.consultant_id?._id);
            setuser(user)
            user?.gigs?.map(x=>{
                setnbReviews(old => old + x.reveiws?.length)
            })
            
            return user;
          
        },
        refetchOnWindowFocus: false,
    });
    
    useEffect(()=>{
        
        refetch()
    },[])

    useEffect(()=>{
    },[data])

    return(
        
        <div className="gigs-about-section">
            <div className="text-desc-preview mb-4">
                <p className="user-title-heading-card">About This Seller</p>
            </div>
            
            <div className="box-width-card-about">
                <div className="d-flex"   style={{width:'100%'}}>
                    <div className="me-3    ">
                        <img src={"http://localhost:3005/public/images/"+user?.photo} className="img-round"/>
                    </div>
                    <div className=""   style={{width:'100%'}}>
                        <div className=""  style={{width:'100%'}}>

                            <p className="user-service-about-title py-2">{user?.firstName + " " +user?.lastName}</p>
                            <p className="user-service-about-desc py-2">{user?.description || "No data here"}</p>
                            <div className="d-flex align-items-center py-2">

                                    <div className="">

                                        <img src={process.env.PUBLIC_URL+'/images/star.png'} alt="username" />
                                    </div>
                                    <p className="rating-yallow-card">4,9</p>
                                    <p className="rating-grey-card">({nbReviews}) Reviews</p>
                                    </div>
                                    <div className="contact-seller-page">
                                        <Link to={"/message/"+user?._id} className="contact-seller-page-sec">
                                            Contact Me
                                        </Link>
                                    </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                        <div className="border-section-card-seller">
                            <div className="d-flex justify-content-between">
                                <div className="box-con-card">
                                    <div className="d-flex">
                                        <div className="me-2">
                                            <img src={process.env.PUBLIC_URL + "/images/liloc.svg"} alt="loc"/>
                                        </div>
                                        <p className="desc-service-gig-sec">Form</p>
                                    </div>
                                    <div className="">
                                        <p className="text-desc-info-seller">{user?.country}</p>
                                    </div>
                                </div>
                                <div className="box-con-card">
                                    <div className="d-flex">
                                        <div className="me-2">
                                            <img src={process.env.PUBLIC_URL + "/images/liuser.svg"} alt="loc"/>
                                        </div>
                                        <p className="desc-service-gig-sec">Member since</p>
                                    </div>
                                    <div className="">
                                        <p className="text-desc-info-seller">{moment(user?.createdAt).format("MMM Do YY")}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="box-con-card">
                                    <div className="d-flex">
                                        <p className="desc-service-gig-sec">Languages</p>
                                    </div>
                                    <div className="">
                                        <p className="text-desc-info-seller">
                                            {
                                                user?.language?.map(
                                                    x=> <span>{x} </span>
                                                )
                                            }
                                        </p>
                                    </div>
                                </div>
                                <div className="box-con-card">
                                    <div className="d-flex">
                                        <div className="me-2">
                                            <img src={process.env.PUBLIC_URL + "/images/deli.svg"} alt="loc"/>
                                        </div>
                                        <p className="desc-service-gig-sec">Last Delivery</p>
                                    </div>
                                    <div className="">
                                        <p className="text-desc-info-seller">{user?.lastDelivery || "No deliveries yet"}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="sep-line-grey my-3">
                            </div>

                                <div className="d-flex">
                                        <p className=" text-desc-info-seller">Bio</p>
                                    </div>
                                    <div className="">
                                        <p className="desc-service-gig-sec">{user?.bio || "No data here"}</p>
                                    </div>
                        </div>
                </div>
            </div>
        </div>
    )

}

export default AboutGigSellerBid;