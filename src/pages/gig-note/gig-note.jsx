import React from "react";
import GigNoteSection from "../../components/gig-note-section/gig-note-section";
import Footer from "../../partials/footer/footer";
import HeaderJobs from "../../partials/header-jobs/header-jobs";
import LoggedHeader from "../../partials/header-logged/header-logged";

const GigNoteUser = () =>{

    return(
        <div className="">
            <LoggedHeader></LoggedHeader>
            <HeaderJobs></HeaderJobs>
            <div className="custom-container">
                <div className="row">
                    <div className="col-12">
                        <GigNoteSection></GigNoteSection>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    )

}


export default GigNoteUser;