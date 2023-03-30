import React from "react";
import { useSelector } from "react-redux";
import CardWork from "../../../partials/card-work/card";
import './style.css';

const GigsCard=(props) =>{

    

    return (
        <div className="card-pov-seller">
            <div className="current-user-gig">
                <p className="current-gig-for-user">{props.user?.firstName+" "+props.user?.lastName}'s Gigs</p>
            </div>
            <div className="row">
                {props.user?.gigs?.map(x => {
                    
                    return <div className="col-4 py-4">
                                <CardWork card={x}></CardWork>
                            </div>
                })}
                

        </div>
    </div>
    )
}

export default GigsCard;