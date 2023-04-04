import React from "react";
import AllGigComp from "../../components/all-gig-page/all-gig-comp";
import EarningComp from "../../components/earnings-page/earning-comp";
import HomeComp from "../../components/home-comp/home-comp";
import Footer from "../../partials/footer/footer";
import HeaderJobs from "../../partials/header-jobs/header-jobs";
import LoggedHeader from "../../partials/header-logged/header-logged";

const AllMyGig = () =>{

    return(
        <div className="">
            <LoggedHeader></LoggedHeader>
            <HeaderJobs></HeaderJobs>
            <div className="custom-container">
                <div className="row">
                    <div className="col-12">
                        <HomeComp></HomeComp>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    )

}


export default AllMyGig;