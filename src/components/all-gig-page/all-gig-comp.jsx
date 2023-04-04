import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteGigCurr } from "../../api/gig";
import { fetchUserById } from "../../redux/user";
import './style.css';

const AllGigComp = () =>{

    const user = useSelector(state => state.user);
    const [currUser,setcurrUser] = useState([])
    const [id,setid] = useState(null)

    const dispatch = useDispatch()

    useEffect(()=>{
        if(user)
            setcurrUser(user.user?.gigs)

            console.log(user.user?.gigs)
    },[user])

    const { isLoading, data, isError, isFetching, refetch } = useQuery({
        queryKey: ["rzewrite",{id}],
        queryFn: async () => {
            const user = await deleteGigCurr(id);
            setcurrUser(current => current.filter(x => id != x._id))
            dispatch(fetchUserById())
            return user;
          
        },
        
        enabled: false,
        refetchOnWindowFocus: true,   
        retry:false,
            
      });
    
    function deletGig(id){
        setid(id)
    }

    useEffect(()=>{
        if(id)
        refetch()
    },[id])

    return(
        <div className="">
            <div className="mt-5 mb-">
                    <p className="text-create-gig">Gigs</p>
                </div>
            <div className="d-flex justify-content-center my-3">
                        <div className="form-width-section-earn">
                            <div className="">
                                <div className="red-box-edit-content d-flex justify-content-between align-items-center">
                                    Active Gigs
                                <Link to='/gig-creation' className="gig-create-select-btn">Create gig</Link>
                                </div>
                            </div>
                            {currUser?.map(x=>{
                                return(
                                <div className="d-flex justify-content-between align-items-center box-about-edit-gig-sec" >
                                <div className="ward-tex-edit">
                                    <div className="d-flex align-items-center">
                                        <div className="me-2">
                                            <img src={"http://localhost:3005/public/images/"+x.images[0]} style={{height:"56px",width:"75px"}}/>
                                        </div>
                                        <Link to={"/service/"+x._id} className="gig-text-edit-form">I will do {x.title}</Link>
                                    </div>
                                </div>
                                <div className="ward-tex-edit">
                                    <div className="d-flex justify-content-end" >
                                        <div className="d-flex justify-content-between" style={{width:"55%"}}>

                                            <div className="btn-sec-edit">
                                                <Link to={'/gig-update/'+x._id} className="btn-sec-edit-btn">Edit</Link>
                                            </div>
                                            <div className="btn-sec-edit">
                                                <button className="btn-sec-edit-pink-btn" onClick={e => deletGig(x._id)}>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                )
                            })}
                            
                        </div>
            </div>
        </div>
    )

}

export default AllGigComp;