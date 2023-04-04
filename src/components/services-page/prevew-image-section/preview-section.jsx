import React, { useEffect, useState } from "react";
import './style.css';


const PreviewSection = (props) =>{

    const [images,setImage] = useState([])
    const [user,setuser]=useState()
    const[index,setindex] = useState(0)
    useEffect(()=>{
            setImage(props.gig?.images)
            setuser(props?.gig)
        
        console.log(props.gig)
    },[props])

    function goLeft(){

        if(index >0){
            setindex(old => old -1)
        }
    }
    function goRight(){
        if(index <3){
            setindex(old => old + 1)
        }        
    }

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
                                <img src={"http://localhost:3005/public/images/"+user?.consultant_id?.photo} style={{width:"56px",height:"56px",borderRadius:"50%"}}/>
                                </div>
                                <div className="d-flex align-items-baseline">
                                <div>
                                <p className="username-text-card p-0"  style={{fontSize:"16px",height:"0!important"}}> {user?.consultant_id?.firstName +" s"+ user?.consultant_id?.lastName}  </p>
                                <p className="rating-grey">({user?.reveiws?.length} Reviews)</p>
                                </div>

                                <div className="">

                                    <img src={process.env.PUBLIC_URL+'/images/star.png'} alt="username" />
                                </div>
                                <div>
                                    <p className="rating-yallow">{user?.rating?.slice(0,5)}</p>
                                    
                                </div>
                                </div>
                            </div>
                            <div style={{height:"500px",width:"100%"}}>
                                <img src={"http://localhost:3005/public/images/"+images[index]} alt="image" style={{height:"500px",width:"100%",objectFit:"fill"}}/> 
                            </div>
                            <div className="bg-select-image">
                                <div style={{width:"70%"}}>
                                    <div className="row justify-content-between">
                                    {images.map(x=>{
                                            return(

                                                <div className="col-4">
                                                    <div className="">
                                                        <img src={"http://localhost:3005/public/images/"+x} alt="image" style={{height:"auto",width:"100%"}}/> 

                                                    </div>
                                                </div>
                                            )
                                        })}

                                    </div>

                                </div>
                                            <div className="pos-left-elemnt">
                                                    <img src={process.env.PUBLIC_URL+"/images/left.png"} onClick={goLeft} className="pos-left-img"/>
                                                
                                                
                                            </div>
                                            <div className="pos-right-elemnt">

                                                    <img src={process.env.PUBLIC_URL+"/images/right.png"} onClick={goRight} className="pos-right-img"/>
                                                
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