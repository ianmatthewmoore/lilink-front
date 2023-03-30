import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getGigById } from "../../api/gig";
import { getUserById } from "../../api/user";
import SettingAccount from "../../components/settings-page/setting-page";
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
                        <SettingAccount></SettingAccount>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    )

}


export default SettingsUser;