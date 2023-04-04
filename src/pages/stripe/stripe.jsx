
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGigById } from "../../api/gig";
import { Stripe } from "../../components/pay/stripeContainer";
import ReviewsComp from "../../components/profile/reviews-section/reviews-section";
import AboutGigSection from "../../components/services-page/about-gig-section/about-gig-section";
import AboutGigSellerBid from "../../components/services-page/about-gigs-seller/about-gigs-seller";
import PreviewSection from "../../components/services-page/prevew-image-section/preview-section";
import ServiceCard from "../../components/services-page/service-gig-section/service-gig-section";
import ReviewsCompService from "../../components/services-page/service-reviews";
import Footer from "../../partials/footer/footer";

import HeaderJobs from "../../partials/header-jobs/header-jobs";
import LoggedHeader from "../../partials/header-logged/header-logged";

const Service = () =>{

    let {id} = useParams()
    const [userData,setUserData]=useState({})
    const { isLoading, data, isError, isFetching, refetch } = useQuery({
        queryKey: ["rewritessc"],
        queryFn: async () => {
            const user = await getGigById(id);
            setUserData(user)
            return user;
          
        },
        refetchOnWindowFocus: false,
    });



    useEffect(()=>{
        refetch()
    },[id])


    return(
        
        <Stripe></Stripe>

    )
}

export default Service
