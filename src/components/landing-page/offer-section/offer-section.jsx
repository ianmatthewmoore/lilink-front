import React from "react";
import './style.css';

const OfferSection = () =>{

    return(
        <div className="service-providing">
            <div className="custom-container">
                <div className="">
                    <div className="py-4">
                        <p className="text-presenting-tag">Popular professional services</p>
                    </div>
                    <div className="row mt-3">
                        <div className="col-6">
                            <div className="section-about-offer-prov">
                                <div className="d-flex justify-content-between " style={{padding:'2.5rem 2rem'}}>
                                    <div className="">
                                        <img src={process.env.PUBLIC_URL+'/images/think.png'} alt='provding' />
                                    </div>
                                    <div className="ms-3">
                                        <p className="text-offer-title">loremlorem loremlorem</p>
                                        <p className="text-offer-description">Biz məlumatların statistik təhlili üzrə sizlərə professional biznes xidmətlərimizi təklif edirik</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="section-about-offer-prov">
                                <div className="d-flex justify-content-between " style={{padding:'2.5rem 2rem'}}>
                                    <div className="">
                                        <img src={process.env.PUBLIC_URL+'/images/think.png'} alt='provding' />
                                    </div>
                                    <div className="ms-3">
                                        <p className="text-offer-title">loremlorem loremlorem</p>
                                        <p className="text-offer-description">Biz məlumatların statistik təhlili üzrə sizlərə professional biznes xidmətlərimizi təklif edirik</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="section-about-offer-prov">
                                <div className="d-flex justify-content-between " style={{padding:'2.5rem 2rem'}}>
                                    <div className="">
                                        <img src={process.env.PUBLIC_URL+'/images/think.png'} alt='provding' />
                                    </div>
                                    <div className="ms-3">
                                        <p className="text-offer-title">loremlorem loremlorem</p>
                                        <p className="text-offer-description">Biz məlumatların statistik təhlili üzrə sizlərə professional biznes xidmətlərimizi təklif edirik</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="section-about-offer-prov">
                                <div className="d-flex justify-content-between " style={{padding:'2.5rem 2rem'}}>
                                    <div className="">
                                        <img src={process.env.PUBLIC_URL+'/images/think.png'} alt='provding' />
                                    </div>
                                    <div className="ms-3">
                                        <p className="text-offer-title">loremlorem loremlorem</p>
                                        <p className="text-offer-description">Biz məlumatların statistik təhlili üzrə sizlərə professional biznes xidmətlərimizi təklif edirik</p>
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

export default OfferSection;