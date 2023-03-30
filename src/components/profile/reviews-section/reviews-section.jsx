import React from "react";
import { Link } from "react-router-dom";
import ReviewsCard from "../../../partials/reviews-card-section/reviews-card-section";

const ReviewsComp =(props) =>{
    return (
        <div className="card-pov-seller">
            <div className="current-user-gig">
                <p className="current-gig-for-user">Reviews</p>
            </div>
            <div className="row py-4">
                {props.gig?.reveiws?.map(x=>
                    <div className="col-12">
                        <Link to={"/service/"+x._id}>
                            <ReviewsCard review={x}></ReviewsCard>
                        </Link>
                    </div>
                )}

        </div>
    </div>
    )
}

export default ReviewsComp ;