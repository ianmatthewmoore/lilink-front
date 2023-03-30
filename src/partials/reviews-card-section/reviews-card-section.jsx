import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './style.css';

const ReviewsCard = (props) =>{

    useEffect(()=>{
        console.log(props)
    },[])

    return(
        <div className="reviews-card-section">
            <Link to={"/service/"+props._id}>
                <div className="card-comp-section">
                    <div className="header-reveiw">
                        <div className="me-3">
                            <img src={process.env.PUBLIC_URL + "/images/rev.png"} />
                        </div>
                        <div className="">
                            <div className="d-flex align-items-center">
                                <p className="title-prod me-2">{props.review?.consultant_id?.firstName + " " +props.review?.consultant_id?.lastName}</p>
                                <div className="d-flex align-items-center me-2">
                                    
                                    <img src={process.env.PUBLIC_URL + "/images/star.png"} />
                                    <img src={process.env.PUBLIC_URL + "/images/star.png"} />
                                    <img src={process.env.PUBLIC_URL + "/images/star.png"} />
                                    <img src={process.env.PUBLIC_URL + "/images/star.png"} />
                                    <img src={process.env.PUBLIC_URL + "/images/star.png"} />
                                </div>
                                <p className="review-rating-style me-2">{props.review?.avrage_rating}</p>
                            </div>
                            <div className="loca-review-card">
                                <p>{props.review?.consultant_id?.country}</p>
                            </div>
                            <div className="review-content-card">
                                <p>{props.review?.message}</p>
                            </div>
                            <div className="date-last-review-card">
                                <p>{props.review?.createdAt}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )

}

export default ReviewsCard;