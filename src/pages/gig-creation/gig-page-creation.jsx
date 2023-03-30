import React from "react";
import CreateGig from "../../components/gig-creation/gig-creation";
import Footer from "../../partials/footer/footer";
import HeaderJobs from "../../partials/header-jobs/header-jobs";
import LoggedHeader from "../../partials/header-logged/header-logged";

const GigPageCreation = () =>{

    return(
        <div className="">
            <LoggedHeader></LoggedHeader>
            <HeaderJobs></HeaderJobs>
            <div className="custom-container">
                <div className="row">
                    <div className="col-12">
                        <CreateGig></CreateGig>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    )

}


export default GigPageCreation;