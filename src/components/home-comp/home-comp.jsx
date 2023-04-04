import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getGigByAll } from "../../api/gig";
import CardWork from "../../partials/card-work/card";
import CardSeller from "../profile/card-seller-section/card-seller";
import './style.css'
const HomeComp = () =>{


    const {user} = useSelector (state => state.user)
    const {status} = useSelector (state => state.user)
    const {isConnected} = useSelector (state => state.user)
    const [gigs,setGigs ] = useState(null)
    const { isLoading, data, isError, isFetching, refetch } = useQuery({
        queryKey: ["rewritse"],
        queryFn: async () => {

            const gig = await getGigByAll();
            setGigs(gig)
            return gig;
          
        },
        refetchOnWindowFocus: false,
    });
    return(
        <div className="home-compo-user-section">
            <div className="customer-container">
                <div style={{width:"100%",height:"430px",position:"relative",margin:"3rem 0"}}>
                    <div style={{width:"100%",height:"100%"}}>
                        <img src={process.env.PUBLIC_URL+"/images/bannerhome.png"} alt="user" style={{width:"100%",height:"100%"}} />
                    </div>
                    <div className="post-text-home-page">
                        {isConnected ? <p className="text-home-page-header">Hi, {user?.firstName[0].toUpperCase() + ". "+user?.lastName}<br/> What service are <span className="text-home-page-header-pink">you</span> looking for today ?</p> : <p className="text-home-page-header">Hi,<br/> What service are <span className="text-home-page-header-pink">you</span> looking for today ?</p>}
                    </div>
                </div>
                <div className="continue-browsing-box">
                    <div className="">
                        <p className="text-continue-browsing-header">Continue Browsing</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="box-card-users">
                            
                        </div>
                    </div>
                </div>
                <div className="continue-browsing-box-nob">
                    <div className="">
                        <p className="text-continue-browsing-header">Recommended for you</p>
                    </div>
                    <div className="row">
                            {gigs?.map(x =>{
                                        return(
                                <div style={{width:"20%"}} className="py-2">
                                    <div className="box-card-users">
                                                <CardWork card={x}></CardWork>
                                    </div>
                                </div>
                                        )
                            })}

                    </div>
                </div>
                <div className="continue-browsing-box-nob">
                <div className="">
                        <p className="text-continue-browsing-header"> Gigs you may like</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="box-card-users">
                            
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )

}

export default HomeComp