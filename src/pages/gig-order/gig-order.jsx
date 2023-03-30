
import React from "react";
import GigIntro from "../../components/active-gigs-page/gig-intro/gig-intro";
import GigSectionOrder from "../../components/active-gigs-page/gig-section-order/gig-section-order";
import Footer from "../../partials/footer/footer";

import HeaderJobs from "../../partials/header-jobs/header-jobs";
import LoggedHeader from "../../partials/header-logged/header-logged";

const GigOrders = () =>{
    return(
        <div className="">
            <LoggedHeader></LoggedHeader>
            <HeaderJobs></HeaderJobs>
            <div className="custom-container">
                <div className="row">
                    <div className="col-12">
                        <GigIntro></GigIntro>
                    </div>

                </div>
                <GigSectionOrder></GigSectionOrder>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default GigOrders;
