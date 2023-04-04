import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './style.css';

const GigSectionOrder = () =>{

    const [oders,setOrder] = useState(null)
    const [type,setType] = useState(null)
    const user=useSelector(state => state.user);

    useEffect(()=>{
        if(user && user.type=="CONSULTANT"){
            let newArr=user.user?.orders.filter(x => x.status != "PENDING")
            setOrder(newArr)
            setType(true)
        }
        if(user && user.type=="CUSTOMER"){
            let newArr=user.user?.offers.filter(x => x.status != "PENDING")
            setOrder(newArr)
            setType(false)

        }
    },[user])

    useEffect(()=>{
        console.log(user)
    },[oders])

    useEffect(()=>{
   
    },[user.type])

    return(
        <div className="py-5">

            <div className="image-section-container-gigs">

                <div className="row">
                    <div className="col-3">
                    <div className="card-pov-sellers">
            <div className="">
                <div className="card-user-info">
                    <div className="d-flex">
                        <div className="">
                            <img src={process.env.PUBLIC_URL+'/images/current.png'} alt="current"/>
                        </div>
                        <div className="card-user-info-pov-seller p-0">
                            <p className="user-title-heading-card  py-123">{user.user?.firstName +" "+user.user?.lastName}</p>
                            <p className="user-desc-heading-card  py-123" style={{fontSize:"12px"}}>
                                {user.user?.description}
                            </p>
                            <div className="d-flex align-items-center py-123">
                                <div className="d-flex align-items-center">
                                        <img src={process.env.PUBLIC_URL+'/images/star.png'} alt="current"/>
                                    
                                        <img src={process.env.PUBLIC_URL+'/images/star.png'} alt="current"/>
                                    
                                        <img src={process.env.PUBLIC_URL+'/images/star.png'} alt="current"/>
                                    
                                        <img src={process.env.PUBLIC_URL+'/images/star.png'} alt="current"/>
                                    
                                        <img src={process.env.PUBLIC_URL+'/images/star.png'} alt="current"/>
                                    
                                </div>
                                <p className="user-rating-heading-card ms-1">4.9</p>
                                <p className="user-reveiew-heading-card ms-1">(45 reviews)</p>
                            </div>
                        </div>
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
                </div>
                </div>
                    </div>
                    <div className="col-9">
                        <div className="">
                            <p className="welcome-text-desc-gig-title">Welcome, Dear {type ? "Consultant":"Customer"}</p>
                            <p className="welcome-text-desc-gig" >Find important messages, tips, and links to helpful resources here:</p>
                        </div>
                        <div className="red-order-bar-bpx">
                            <p className="description-inside-bar-order">Active Order</p>
                        </div>
                        {
                            type ?   <div className="">
                            {oders?.map(x=>{
                                return(
                                    <div className="d-card-gig-flex">
                                    <div className="width-text-desc-gig-active">
                                        <img src={"http://localhost:3005/public/images/"+x.gigs?.images[0]}  alt="ff" style={{width:"75px",height:"50px"}} />
                                    </div>
                                    <div className="width-text-desc-gig-active-user-card-more">
                                        <div className="">
                                            <img src={process.env.PUBLIC_URL+"/images/gig-user-prof.png"} alt="text" style={{width:"44px",height:"44px"}}/>
                                        </div>
                                        <p className="text-image-gig-owner">{x.customerId.firstName+" "+x.customerId.lastName}</p>
                                    </div>
                                    <div className="width-text-desc-gig-active">
                                        <p className="text-desc-gig-active-order-title">Price</p>
                                        <p className="text-desc-gig-active-order-des">{x?.price}$</p>
                                    </div>
                                    <div className="width-text-desc-gig-active">
                                    <p className="text-desc-gig-active-order-title">Due</p>
                                        <p className="text-desc-gig-active-order-des">{x.endDate?.split(',')[0]}</p>
                                    </div>
                                    <div className="width-text-desc-gig-active">
                                    <p className="text-desc-gig-active-order-title">Status</p>
                                             {x.statusWork == "in progress" && <p className="text-desc-gig-active-order-des-card-red" style={{textTransform:"capitalize"}}>{x.statusWork}</p>}
                                            {x.statusWork == "delivered" && <p className="text-desc-gig-active-order-des-card-pink" style={{textTransform:"capitalize"}}>{x.statusWork}</p>}
                                            {x.statusWork == "accpeted" && <p className="text-desc-gig-active-order-des-card-green" style={{textTransform:"capitalize"}}>{x.statusWork}</p>}
                                            {x.statusWork == "in cancled" && <p className="text-desc-gig-active-order-des-card-redDark" style={{textTransform:"capitalize"}}>{x.statusWork}</p>}
                                        
                                    </div>
                                    <div className="width-text-desc-gig-active">
                                        <Link to={"/order/"+x.reference} className="text-desc-gig-active-order-des-red-link">view</Link>
                                    </div>
                                </div>
                                )
                            })}
                          

                            </div>:
                            <div className="">
                            {oders?.map(x=>{
                                 return(
                                     <div className="d-card-gig-flex">
                                     <div className="width-text-desc-gig-active">
                                         <img src={"http://localhost:3005/public/images/"+x.gigs?.images[0]}  alt="ff" style={{width:"75px",height:"50px"}} />
                                     </div>
                                     <div className="width-text-desc-gig-active-user-card-more">
                                         <div className="">
                                             <img src={process.env.PUBLIC_URL+"/images/gig-user-prof.png"} alt="text" style={{width:"44px",height:"44px"}}/>
                                         </div>
                                         {user?.type =="CUSTOMER" ? <p className="text-image-gig-owner">{x.consultantId.firstName+" "+ x.consultantId.lastName}</p> : <p className="text-image-gig-owner">{x.customerId.firstName+" "+ x.customerId.lastName}</p>}
                                         
                                     </div>
                                     <div className="width-text-desc-gig-active">
                                         <p className="text-desc-gig-active-order-title">Price</p>
                                         <p className="text-desc-gig-active-order-des">{x?.price}$</p>
                                     </div>
                                     <div className="width-text-desc-gig-active">
                                     <p className="text-desc-gig-active-order-title">Due</p>
                                         <p className="text-desc-gig-active-order-des">{x.endDate?.split(',')[0]}</p>
                                     </div>
                                     <div className="width-text-desc-gig-active">
                                     <p className="text-desc-gig-active-order-title">Status</p>
                                         {x.statusWork == "in progress" && <p className="text-desc-gig-active-order-des-card-red" style={{textTransform:"capitalize"}}>{x.statusWork}</p>}
                                         {x.statusWork == "accpeted" && <p className="text-desc-gig-active-order-des-card-green" style={{textTransform:"capitalize"}}>{x.statusWork}</p>}
                                         {x.statusWork == "in cancled" && <p className="text-desc-gig-active-order-des-card-redDark" style={{textTransform:"capitalize"}}>{x.statusWork}</p>}
                                         {x.statusWork == "delivered" && <p className="text-desc-gig-active-order-des-card-pink" style={{textTransform:"capitalize"}}>{x.statusWork}</p>}
                                     </div>
                                     <div className="width-text-desc-gig-active">
                                         <Link to={"/order/"+x.reference} className="text-desc-gig-active-order-des-red-link">view</Link>
                                     </div>
                                 </div>
                                 )
                             })}
                           
    
                             </div> 
                          
                        }

    
                    </div>
                </div>
            </div>
        </div>
    )

}


export default GigSectionOrder;