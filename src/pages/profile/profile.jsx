import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserById, getUserByParams } from "../../api/user";
import CardSeller from "../../components/profile/card-seller-section/card-seller";
import GigsCard from "../../components/profile/gigs-cards/gigs-cards";
import ReviewsComp from "../../components/profile/reviews-section/reviews-section";
import Footer from "../../partials/footer/footer";
import HeaderJobs from "../../partials/header-jobs/header-jobs";
import LoggedHeader from "../../partials/header-logged/header-logged";

const Profile = () =>{

    const {id} = useParams()
    const { isLoading, data, isError, isFetching, refetch } = useQuery({
        queryKey: ["rzewrite"],
        queryFn: async () => {
            const user = await getUserByParams(id);
    
            return user;
          
        },
        refetchOnWindowFocus: false,
      });

      useEffect(()=>{
        refetch()
      },[id])

    return(
        <div className="">
            <LoggedHeader></LoggedHeader>
            <HeaderJobs></HeaderJobs>
            {!isLoading &&  data &&
            <div className="custom-container">
            <div className="row">
                <div className="col-8">
                   <GigsCard user={data }></GigsCard>
                    <ReviewsComp user={data }></ReviewsComp>
                </div>
                <div className="col-4">
                    <CardSeller user={data }></CardSeller>
                </div>

            </div>
        </div>
            }
            
            <Footer></Footer>
        </div>
    )
}

export default Profile;