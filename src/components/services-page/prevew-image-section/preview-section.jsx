import React, { useEffect, useState } from "react";
import './style.css';


const PreviewSection = (props) =>{

    const [images,setImage] = useState([])
    const [user,setuser]=useState()
    useEffect(()=>{
            setImage(props.gig?.images)
            setuser(props?.gig)
        
        console.log(props.gig)
    },[props])

    return(
        <div className="preveiw-image-section">
            <div className="custom-container">
                <div className="text-desc-preview">
                    <p className="user-title-heading-card">I will do {user?.title}</p>
                </div>
                <div className="desc-prev-sec">
                    <div className="d-flex justify-content-center">
                        <div className="preview-section-image-carousel">
                            <div className="d-flex py-4">
                                <div className="me-2">
                                    <img src={process.env.PUBLIC_URL+"/images/rev.png"} />
                                </div>
                                <div className="d-flex align-items-baseline">

                                <p className="username-text-card"  style={{fontSize:"16px"}}> {user?.consultant_id?.firstName +" s"+ user?.consultant_id?.lastName}  </p>
                                <div className="">

                                    <img src={process.env.PUBLIC_URL+'/images/star.png'} alt="username" />
                                </div>
                                <p className="rating-yallow">4,9</p>
                                <p className="rating-grey">({user?.reveiws?.length} Reviews)</p>
                                </div>
                            </div>
                            <div style={{height:"500px",width:"100%"}}>
                                <img src={"http://localhost:3005/public/images/"+images[0]} alt="image" style={{height:"500px",width:"100%",objectFit:"fill"}}/> 
                            </div>
                            <div className="bg-select-image">
                                <div style={{width:"70%"}}>
                                    <div className="row justify-content-between">
                                        <div className="col-2">
                                            <div className="">
                                                <img src={process.env.PUBLIC_URL+"/images/11.png"} alt="image" style={{height:"auto",width:"100%"}}/> 

                                            </div>
                                        </div>
                                            <div className="col-2">
                                                <img src={process.env.PUBLIC_URL+"/images/11.png"} alt="image" style={{height:"auto",width:"100%"}}/> 

                                            </div>
                                            <div className="col-2">
                                                <img src={process.env.PUBLIC_URL+"/images/11.png"} alt="image" style={{height:"auto",width:"100%"}}/> 

                                            </div>
                                            <div className="col-2">
                                                <img src={process.env.PUBLIC_URL+"/images/11.png"} alt="image" style={{height:"auto",width:"100%"}}/> 

                                            </div>
                                            <div className="col-2">
                                                <img src={process.env.PUBLIC_URL+"/images/11.png"} alt="image" style={{height:"auto",width:"100%"}}/> 

                                            </div>
                                    </div>

                                </div>
                                            <div className="pos-left-elemnt">
                                                    <img src={process.env.PUBLIC_URL+"/images/left.png"}  className="pos-left-img"/>
                                                
                                                
                                            </div>
                                            <div className="pos-right-elemnt">

                                                    <img src={process.env.PUBLIC_URL+"/images/right.png"}  className="pos-right-img"/>
                                                
                                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default PreviewSection;