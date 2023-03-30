import React from "react";
import './style.css';

const GigNoteSection = () =>{

    return(
        <div className="my-4">
            <div className="row">
                <div className="col-8">
                    <div className="border-box-container mt-5 mb-4">
                        <p className="started-order-text">Order Started</p>
                        <p className="text-started-order-about"><span className="user-seller-text">lanmoore281</span> sent all the information you need so you can start working on this order. You got this!</p>
                    </div>
                    <div className="border-box-note-container mb-4">
                        <div className="d-flex align-items-center">
                        <div className="me-2">
                            <img src={process.env.PUBLIC_URL+'/images/gig-user-prof.png'} alt="gig-user-prof" style={{width:"48px",height:"48px"}}/>
                        </div>
                        <p className="note-order-text">Shango</p>
                        </div>
                        <p className="note-text-leave  py-2">leave a note for your client</p>
                        <div className="py-2">
                            <textarea className="text-area-title-about" placeholder="Gig Title..." cols="30" rows="8"></textarea>
                        </div>
                            <div style={{width:"100%"}}>
                                <div className="d-flex justify-content-end"  style={{width:"100%"}}>
                                    <div className="box-btn-note-send">
                                        <button className="btn-send-note" >Send</button>
                                    </div>
                                </div>
                        </div>
                    </div>

                </div>
                <div className="col-4">
                    <div className="border-box-container-no-red mt-5 mb-1">
                        <div className="pb-3">
                            <p className="card-text-timing">Time left to next delivery</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-baseline px-3">
                            <div className="text-center">
                                <p className="text-timing-section-text">15</p>
                                <p className="text-timing-section-text-desc">Days</p>
                            </div>
                            <div className="sperator-div-class"></div>  
                            <div className="text-center">
                                <p className="text-timing-section-text">07</p>
                                <p className="text-timing-section-text-desc">Hours</p>
                            </div>
                            <div className="sperator-div-class"></div>
                            <div className="text-center">
                                <p className="text-timing-section-text">32</p>
                                <p className="text-timing-section-text-desc">Minutes</p>
                            </div>
                            <div className="sperator-div-class"></div>
                            <div className="text-center">
                                <p className="text-timing-section-text">55</p>
                                <p className="text-timing-section-text-desc">Seconds</p>
                            </div>
                        </div>
                        <div className="pt-4 pb-3">
                            <button className="continue-with-deliver">Confirm Delivery</button>
                        </div>
                    </div>
                    <div className="border-box-container-no-red mt-3 mb-1">
                        <div className="pb-3">
                            <p className="card-text-timing">Orders Details</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div style={{width:'30%'}}>
                                <img src={process.env.PUBLIC_URL + "/images/gig-title.png"} alt="ddd" style={{height:"72px",width:'100%'}}/>
                            </div>
                            <div style={{width:'70%'}} className="ps-3">
                                <p className="gig-name-oder-take">i will do home rework</p>
                                <p className="text-descr-status-delivery">done</p>
                            </div>  
                           

                        </div>
                        <div className="pt-3 pb-1">
                                <div className="d-flex justify-content-between py-1">
                                    <p className="descript-seller-gig-about">Seller name</p>
                                    <p className="seller-name-about-text">Shango</p>
                                </div>
                                <div className="d-flex justify-content-between py-1">
                                    <p className="descript-seller-gig-about">Final delivery date</p>
                                    <p className="seller-data-about-text">30 Mar, 23:42</p>
                                </div>
                                <div className="d-flex justify-content-between py-1">
                                    <p className="descript-seller-gig-about">Total price</p>
                                    <p className="seller-data-about-text">US$6500</p>
                                </div>
                                <div className="d-flex justify-content-between py-1">
                                    <p className="descript-seller-gig-about">Order number</p>
                                    <p className="seller-data-about-text">#Forazefsdf5645</p>
                                </div>
                            </div>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default GigNoteSection;