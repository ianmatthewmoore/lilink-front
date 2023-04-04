import moment from "moment";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loggout } from "../../redux/user";
import { socket } from "../../utils/socket";
import HeaderNotLogged from "../header-non-logged/header-non-logged";
import Header from "../header/header";
import './style.css';

const LoggedHeader = () =>{

    const user = useSelector(state => state.user)
    const [logged,setlogged] = useState(null)
    const [notif,setNotif] = useState([])
    useEffect(()=>{
        
        if(user.status ==="succeeded"){
            setlogged(user.user)
            setNotif(user.user?.notifications)
        }

    },[user])
    useEffect(()=>{

        socket.on('getNotfi',(res)=>{
            setNotif(old => [...old,res.data] )
            toast.success(res.data.content,{
                duration: 4000,
                position: 'top-right',
            })

        })
    },[])
    const disptach = useDispatch()
    function logout(){
        localStorage.removeItem('token')
        disptach(loggout())
        window.location.href="/home"
    }

    useEffect(()=>{
        console.log(notif)
    },[notif])

    return(
        <>
            {user?.isConnected ? 
        <div className="logged-header">
            <div className="custom-container">
                <div className="row">
                    <div className="col-6">
                        <div className="d-flex justify-content-start">
                            <div className="image-section">
                                <img src={process.env.PUBLIC_URL+"/images/white-logo.png"} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-6 d-flex align-items-center">
                        <div style={{width:"100%"}}>
                            <div className="d-flex justify-content-end align-items-center">
                                <ul className="list-navbar-text-logged" >
                                    <li className="list-nav-items-logged">
                                        <div className="d-flex">
                                            <a href='/gig-active' className="list-nav-items-logged">
                                                Orders
                                            </a>
                                        </div>
                                    </li>
                                    {user.type=="CONSULTANT" ?
                                    <>
                                    <li className="list-nav-items-logged">
                                        <div className="d-flex">
                                            <Link to='/earning' className="list-nav-items-logged">
                                                Earnings
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="list-nav-items-logged">
                                        <div className="d-flex">
                                            <Link to='/myGig' className="list-nav-items-logged">
                                                Gigs
                                            </Link>
                                        </div>
                                    </li>
                                    </>
                                    :
                                    <></>
                                    }
                                    


                                    <li className="list-nav-items-logged d-flex">
                                    <div className="separtor-section-logged mx-2"></div>
                                            <img src={process.env.PUBLIC_URL+"/images/lifav.svg"} alt="" className="navbar-img mx-2" />
                                            <div class="dropdown">

                                                <ul class="dropdown-menu mt-2">
                                                    {logged?.notifications.filter(x=>x.type=="message" ).reverse().splice(0,5).map(x=>{
                                                        return(
                                                            <>
                                                            <a href={"/message/"+x.link} className="d-flex align-items-center">
                                                                <i class="fa-solid fa-envelope fa-2x p-3 pe-0" style={{color:"#641b31"}}></i>
                                                            <div>

                                                                <a class="dropdown-item p-3" >{x.content}<br/><span className="text-nootif-time">{moment(x.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</span></a>
                                                                

                                                            </div>
                                                            </a>
                                                            <li><hr class="dropdown-divider m-0" /></li>

                                                            </>
                                                            
                                                        )
                                                    })}
                                             
                                             
                                                </ul>
                                                <a   role="button" data-bs-toggle="dropdown" aria-expanded="false"><img src={process.env.PUBLIC_URL+"/images/limsg.svg"} alt="" className="navbar-img mx-2" /></a>
                                            </div>
                                            <div class="dropdown">

                                                <ul class="dropdown-menu mt-2">
                                                    {notif?.filter(x=>x.type !=="message" ).reverse().splice(0,5).map(x=>{
                                                        return(
                                                            <>
                                                            <a href={"/order/"+x.link} className="d-flex align-items-center" > 
                                                            <i class="fa-solid fa-cube fa-2x p-3 pe-0" style={{color:"#641b31"}}></i>
                                                            <div>

                                                                <a class="dropdown-item p-3" >{x.content}<br/><span className="text-nootif-time">{moment(x.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</span></a>
                                                                

                                                            </div>
                                                            </a>
                                                            <li><hr class="dropdown-divider m-0" /></li>

                                                            </>
                                                            
                                                        )
                                                    })}
                                             
                                             
                                                </ul>
                                                <a  role="button" data-bs-toggle="dropdown" aria-expanded="false"><img src={process.env.PUBLIC_URL+"/images/linotif.svg"} alt="" className="navbar-img mx-2" /></a>
                                            </div>
                                        
                                    </li>
                                    <li className="list-nav-items-logged">
                                        <a href={"/profile/"+logged?._id}>
                                            
                                        <img src={"http://localhost:3005/public/images/" + logged?.photo } alt="img" style={{width:"54px",height:"54px",borderRadius:"50%"}} />
                                        </a>
                                        
                                    </li>
                                    <li className="list-nav-items-logged">
                                    <div class="dropdown">

                                            <a class="header-title dropdown-toggle" style={{textTransform:"capitalize"}}  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {logged && logged?.firstName[0] +". "+ logged?.lastName}
                                           
                                            </a>
                                            <div class="dropdown-menu" >
                                                <Link class="dropdown-item  py-3"  to='/settings-account'> <img src={process.env.PUBLIC_URL+"/images/conf.svg"} alt="" className=" pe-2"/>Account setting</Link>
                                                <a class="dropdown-item py-3" > <img src={process.env.PUBLIC_URL+"/images/out.svg"} alt="" className=" pe-2" onClick={logout}/>Logout</a>
                                            </div>                              
                                    </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>:
        <HeaderNotLogged></HeaderNotLogged> }
    
        </>
            
    )
}

export default LoggedHeader;