import React, { useEffect } from "react";
import './style.css';
const { convert } = require('html-to-text');

const AboutGigSection = (props) =>{


    return(
        <div className="gigs-about-section">
            <div className="text-desc-preview">
                <p className="user-title-heading-card">About This Gig</p>
            </div>
            <div className="text-length-width-about py-3">
                <p className="text-about-gigs-creation">
                <div dangerouslySetInnerHTML={{ __html: props.gig?.description }} />         
                </p>
            </div>
        </div>
    )

}

export default AboutGigSection;