import React, { useState } from "react";

import SettingAccount from "../../components/settings-page/setting-page";
import UpdateGig from "../../components/update-gig/update-gig";
import Footer from "../../partials/footer/footer";
import HeaderJobs from "../../partials/header-jobs/header-jobs";
import LoggedHeader from "../../partials/header-logged/header-logged";

const SettingsUser = () =>{



    return(
        <div className="">
            <LoggedHeader></LoggedHeader>
            <HeaderJobs></HeaderJobs>
            <div className="custom-container">
                <div className="row">
                    <div className="col-12">
                        <UpdateGig></UpdateGig>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    )

}


export default SettingsUser;