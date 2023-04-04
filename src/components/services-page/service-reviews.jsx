import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getGigById } from "../../api/gig";
import ReviewsCard from "../../partials/reviews-card-section/reviews-card-section";


const ReviewsCompService =(props) =>{
    const [getAllReview,setgetAllReview] = useState([])
    let {id} =useParams()
    const { isLoading, data, isError, isFetching, refetch } = useQuery({
        queryKey: ["rzewrite"],
        queryFn: async () => {
            const user = await getGigById(id);
            console.log(user)
            setgetAllReview(user.reveiws)
            return user;
          
        },
        refetchOnWindowFocus: false,
      });
      useEffect(()=>{
        console.log(getAllReview)
      },[getAllReview])
    return (
        <div className="card-pov-seller">
            <div className="current-user-gig">
                <p className="current-gig-for-user">Reviews</p>
            </div>
            <div className="row py-4">
                {getAllReview?.map(x=>{
                    return(<div className="col-12">
                        <ReviewsCard review={x}></ReviewsCard>
                    </div>)
                    
                }
                )}

        </div>
    </div>
    )
}

export default ReviewsCompService ;