import React from "react";
import AboutUs from "../../components/landing-page/about-page/about-page";
import FeedBackSection from "../../components/landing-page/feedback/feedback-section";
import IntroSection from "../../components/landing-page/intro-section/intron-section";
import OfferSection from "../../components/landing-page/offer-section/offer-section";
import PreFooterSection from "../../components/landing-page/pre-footer/pre-footer";
import ServiceProv from "../../components/landing-page/service-section/service-section";
import WorkingSection from "../../components/landing-page/working-section/wroking-section";
import CardWork from "../../partials/card-work/card";
import Footer from "../../partials/footer/footer";

const LandingPage=() =>{

    return(
        <div className="">
            <IntroSection></IntroSection>
            <AboutUs></AboutUs>
            <ServiceProv></ServiceProv>
            <OfferSection></OfferSection>
            <WorkingSection></WorkingSection>
            <FeedBackSection></FeedBackSection>
            <PreFooterSection></PreFooterSection>
            
            <Footer></Footer>
        </div>

    )

}

export default LandingPage;

/*<div className="my-5">
                <div className="custom-container">
                    <div className="row">
                        <div className="col-10">
                            <CardWork></CardWork>
                        </div>
                        <div className="col-10">
                            <CardWork></CardWork>
                        </div>
                        <div className="col-10">
                            <CardWork></CardWork>
                        </div>
                        <div className="col-10">
                            <CardWork></CardWork>
                        </div>

                        <div className="col-10">
                            <CardWork></CardWork>
                        </div>

                    </div>
                </div>
            </div>*/