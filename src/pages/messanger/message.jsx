import React from "react";
import Messenger from "../../components/messenger/messenger";
import Footer from "../../partials/footer/footer";
import HeaderJobs from "../../partials/header-jobs/header-jobs";
import LoggedHeader from "../../partials/header-logged/header-logged";

const MessagePage = () =>{
   
    return(
        <div className="">
            <LoggedHeader></LoggedHeader>
            <HeaderJobs></HeaderJobs>
            <div className="custom-container">
                <div className="row">
                    <div className="col-12">
                        <Messenger></Messenger>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    )

}

export default MessagePage;