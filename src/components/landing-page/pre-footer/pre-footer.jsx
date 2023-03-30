import React from "react";
import './style.css';

const PreFooterSection = () =>{

    return(
        <div className="box-pre-footer">
            <div className="custom-container">
                <div className="prefooter-container">
                    <div className="pre-footer-section">
                        <div className="d-flex align-items-center justify-content-center" style={{height:'100%'}}>
                            <div className="">
                                <div className="text-align-pre">
                                    <p className="text-pre-main">Find the <span className="text-typo-drem">consultant</span> you needed to get your work done !</p>
                                </div>
                                <div className="py-4">
                                    <div className="wi-100">
                                        <button className="btn-pink-sec">Get Started</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default PreFooterSection;