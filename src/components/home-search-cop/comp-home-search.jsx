import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getGigByAll, getGigByByName } from "../../api/gig";
import CardWork from "../../partials/card-work/card";
import CardSeller from "../profile/card-seller-section/card-seller";
const HomeCompSearch = () =>{


    const {user} = useSelector (state => state.user)
    const {status} = useSelector (state => state.user)
    const {isConnected} = useSelector (state => state.user)
    const [gigs,setGigs ] = useState(null)
    let {id} = useParams()
    const { isLoading, data, isError, isFetching, refetch } = useQuery({
        queryKey: ["rewritse"],
        queryFn: async () => {

            const gig = await getGigByByName(id);
            setGigs(gig)
            return gig;
          
        },
        refetchOnWindowFocus: false,
    });
    return(
        <div className="home-compo-user-section">
            <div className="customer-container">

                <div className="continue-browsing-box-nob">
                    <div className="">
                        <p className="text-continue-browsing-header">Service you are looking for :</p>
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

            </div>
        </div>
    )

}

export default HomeCompSearch