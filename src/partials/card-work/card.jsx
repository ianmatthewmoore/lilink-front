import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './style.css';

const CardWork = (props) =>{

    let [reviewsPerGig,setreviewsPerGig] = useState(0)

    useEffect(()=>{
        console.log(props.card)
        if(props){
            props.card?.reveiws?.map(x=>{
                console.log(x)
                return (setreviewsPerGig(reviewsPerGig + x.avrage_rating ))
            })
        }
    },[])

    return (
        
        <div className="card-user p-0">
            <Link to={"/service/"+props.card?._id}>
                <div className="card-header p-0">
                <img src={"http://localhost:3005/public/images/"+props.card?.images[0]} alt="username" style={{width:"100%",height:"160px"}}/>
                </div>
                <div className="card-body p-0">
                    <div className="py-2  px-2">
                        <div className="d-flex  justify-content-between align-items-center" >
                            <div className="d-flex align-items-center">
                                <div>
                                    <img src={"http://localhost:3005/public/images/"+props.card?.consultant_id?.photo} alt="username" style={{width:"48px",height:"48px"}}/>
                                </div>
                                <p className="username-text-card"> {props.card?.consultant_id?.firstName + " " + props.card?.consultant_id?.lastName} </p>
                            </div>
                            <div className="d-flex align-items-center">

                                <div className="">

                                    <img src={process.env.PUBLIC_URL+'/images/star.png'} alt="username" />
                                </div>
                                <p className="rating-yallow">{
                                reviewsPerGig / props.card?.reveiws?.length
                                }</p>
                                <p className="rating-grey">({
                                props.card?.reveiws?.length
                                } )</p>
                            </div>
                        </div>
                        <div className=" px-2">
                            <p className="gigis-description">
                                I will {props.card?.title}
                            </p>
                        </div>
                        <div className="borde-text-price px-2">
                            <p className="starting-price">STARTING  AT <span className="price-card"> US ${props.card?.price}</span></p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )

}

export default CardWork;