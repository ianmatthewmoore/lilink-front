import React, { useEffect, useState } from "react";
import './style.css';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';

import { useSelector } from "react-redux";
import { useMutation, useQuery } from "@tanstack/react-query";
import { acceptProposal, createPropsal, rejectPropsal } from "../../api/proposal";
import { useParams } from "react-router-dom";
import { getUserByParams } from "../../api/user";
  const Messenger = ( ) =>{
      
    const [toggleOneModal, setToggleOneModal] = useState(false);
    const [toggleTwoModal, setToggleTwoModal] = useState(false);
    const [isErr, setIsErr] = useState(false);
    const [gig,setGig]=useState(null)
    const [users,setusers]=useState(null)
    const [gigSelect,setgigSelect]=useState(null);
    const [deliveryDate,setDeliveryDate] = useState("")
    const [priceData,setPriceData] = useState("")
    
    const [
        descriptionCreateGig,setDescriptionCreateGig
    ] = useState("")
    let {id} = useParams()
    const { isLoading, data, isError, isFetching, refetch } = useQuery({
        queryKey: ["rzewrite"],
        queryFn: async () => {
            const userIO = await getUserByParams(id);
            setusers(userIO)
            console.log(userIO)
            return user;
          
        },
        refetchOnWindowFocus: false,
      });

      useEffect(()=>{
        refetch()
      },[id])

    const user = useSelector(state => state.user);
    const proposalMutation = useMutation(createPropsal)
    
    function deliveryOrder(){
        
        let data = {
            customerId:"641dd73e285d91fffd578825",
            email:"alatouatiii123@gmail.com",
            title:gigSelect.title,
            description:descriptionCreateGig,
            services:gigSelect.service,
            delivery:deliveryDate,
            price:priceData,
            gigId:gigSelect._id
        }     

        proposalMutation.mutate(data, {
                onSuccess: async (dataUser) => {
                    console.log("dataUser");
                },
                onError: (err) => {
                    setIsErr(true)
                },
            });
        

    }

    const sendMessage = () =>{
        
    }

    const accpetMutation = useMutation(acceptProposal);
    const rejectMutation = useMutation(rejectPropsal);
    
      
    

    function acceptOffer(id){
        accpetMutation.mutate(id, {
            onSuccess: async ({msg}) => {
                
            },
            onError: (err) => {
                setIsErr(true)
            },
        });
    }

    function rejectOffer(id){
        rejectMutation.mutate(id, {
            onSuccess: async (dataUser) => {
                alert('offer was rejected')
            },
            onError: (err) => {
                setIsErr(true)
            },
        });
    }

    useEffect(()=>{
        if(user)
            setGig(user.user)
        console.log(user)
    },[user])
         
    return(
        <div className="">
            <div className="d-flex">
                <div className="all-conv-message">
                    <div className="d-flex">
                            <div className="p-3"style={{width:"25%",borderBottom:"1px solid var(--color-grey)"}}> 
                                <p className="text-type-section">All Conversations</p>
                            </div>
                            <div className="" style={{width:"75%"}}>
                              
                                <div className="messenger-text-box">
                                    <div className="d-flex align-items-center">
                                        <div className="">
                                            <img src={process.env.PUBLIC_URL+"/images/Ellipse 45.png"} alt=""/>
                                        </div>
                                        <div className="text-header-line ms-3">
                                    <p>{!isLoading && users && users?.firstName +" "+ users?.lastName}</p>
                                    <p>Your Time : </p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="d-flex">

                        <div className="width-box-message">
                            
                            <div className="box-card-title-image">
                                <div className="me-2">
                                    <img src={process.env.PUBLIC_URL + '/images/user-image.png'} alt="" style={{width:"64px",height:"64px",borderRadius:"50%"}}/>
                                </div>
                                <div className="">
                                    <p className="text-image-box-message-name">Christopher Campbell</p>
                                    <p className="text-image-box-message-content">In front of the Bar, about whicsdsdsdsdscsds dssdsdsd sd</p>
                                </div>
                            </div>
                            <div className="box-card-title-image">
                                <div className="me-2">
                                    <img src={process.env.PUBLIC_URL + '/images/user-image.png'} alt="" style={{width:"64px",height:"64px",borderRadius:"50%"}}/>
                                </div>
                                <div className="">
                                    <p className="text-image-box-message-name">Christopher Campbell</p>
                                    <p className="text-image-box-message-content">In front of the Bar, about whicsdsdsdsdscsds dssdsdsd sd</p>
                                </div>
                            </div>
                            <div className="box-card-title-image">
                                <div className="me-2">
                                    <img src={process.env.PUBLIC_URL + '/images/user-image.png'} alt="" style={{width:"64px",height:"64px",borderRadius:"50%"}}/>
                                </div>
                                <div className="">
                                    <p className="text-image-box-message-name">Christopher Campbell</p>
                                    <p className="text-image-box-message-content">In front of the Bar, about whicsdsdsdsdscsds dssdsdsd sd</p>
                                </div>
                            </div>
                        </div>
                        <div className="width-lg-box-message">
                            <div className="background-chat-message-box">
                                <div className="box-message pt-4">
                                    <div className="user-message">
                                    <div className="d-flex align-items-center px-3 py-2">
                                        <div className="">
                                            <img src={process.env.PUBLIC_URL+"/images/Ellipse 45.png"} alt=""/>
                                        </div>
                                        <div className="text-header-line ms-3">
                                            <p className="text-username-own-message">Usama</p>
                                            <p className="text-username-own-message-content">Your Time : </p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center px-3 py-2">
                                        <div className="">
                                            <img src={process.env.PUBLIC_URL+"/images/Ellipse 45.png"} alt=""/>
                                        </div>
                                        <div className="text-header-line ms-3">
                                            <p className="text-username-ext-message">Usama</p>
                                            <p className="text-username-ext-message-content">Your Time : </p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="px-3" style={{position:"relative"}}>
                                    <input type="text" className="input-message-send-text-user" />
                                    <div className="pos-text-user-send-icon-svg">
                                        <img src={process.env.PUBLIC_URL+"/images/deliverymsg.svg"} alt="sned"/>
                                    </div>
                                </div>
                            </div>

                            <div className="">
                                {
                                    user.type === "CONSULTANT" && <button  className="btn-secnd-offer-to-user" onClick={() => setToggleOneModal(!toggleOneModal)}>OPEN FIRST MODAL</button>
                                    
                                }

                                <MDBModal show={toggleOneModal} setShow={setToggleOneModal} tabIndex='-1' >
                                <MDBModalDialog size="lg" centered>
                                    <MDBModalContent>
                                    <MDBModalHeader className="header-color-red-modal align-items-center">
                                        <div className="py-2">
                                            <p style={{fontSize:"20px"}}>Select a Gig</p>
                                        </div>
                                       
                                    </MDBModalHeader>
                                    <MDBModalBody>
                                        <div className="box-boder-mdb-container">
                                            <div className="row p-3">
                                                {
                                                    gig?.gigs?.map(x=>{
                                                        return(
                                                            <div className="col-6" onClick={() => {
                                                                setgigSelect(x)
                                                                setToggleOneModal(!toggleOneModal);
                                                                setTimeout(() => {
                                                                setToggleTwoModal(!toggleTwoModal);
                                                                }, 400);
                                                            }}>
                                                                <div className="card-image box-coibtainer-gig">
                                                                    <div className="img-gig-selection-sec">
                                                                        <img src={"http://localhost:3005/public/images/"+x.images[0]} alt="alt" style={{height:"230px",width:"100%"}}/>
                                                                    </div>
                                                                    <div className="py-3">
                                                                        <p style={{fontSize:"20px",fontWeight:"700",color:"#000"}}>I will {x.title}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </MDBModalBody>
                                    </MDBModalContent>
                                </MDBModalDialog>
                                </MDBModal>

                                <MDBModal show={toggleTwoModal} setShow={setToggleTwoModal} tabIndex='-1'>
                                <MDBModalDialog centered size="lg">
                                    <MDBModalContent>
                                    <MDBModalHeader className="header-color-red-modal align-items-center">
                                        <div className="py-2">
                                            <p style={{fontSize:"20px"}}>Select a Gig</p>

                                        </div>
                                       
                                    </MDBModalHeader>
                                    <MDBModalBody>
                                            <div style={{width:"100%"}}>
                                                <div className="p-3">
                                                    <p style={{fontSize:"24px",fontWeight:"700",color:"#000"}}>I will {gigSelect?.title}</p>
                                                </div>
                                                <div className="p-3">
                                                    <textarea className="text-area-mange-describe" placeholder="Describe your offer" rows="5" onChange={e => setDescriptionCreateGig(e.target.value)}></textarea>
                                                </div>
                                                <div className="p-3 pb-1">
                                                    <p className="set-payment-offer">Set up a single payment offer </p>
                                                </div>
                                                <div className="px-3 pt-1 pb-3">
                                                    <p className="define-text">Define the terms of your offer and what it includes.</p>
                                                </div>
                                                <div className="header-color-red-modal p-3 my-2">
                                                    <div className="d-flex align-items-center justify-content-between" style={{width:"100%"}}>
                                                        <div className="w-45">
                                                            <p className="text-delivery-white">Delivery</p>
                                                            <select className="price-offred-op" onChange={e => setDeliveryDate(e.target.value)}>
                                                                <option className="delivery-date-selct-item">1 DAY</option>
                                                                <option className="delivery-date-selct-item">2 DAYS</option>
                                                                <option className="delivery-date-selct-item">3 DAYS</option>
                                                                <option className="delivery-date-selct-item">4 DAYS</option>
                                                                <option className="delivery-date-selct-item">5 DAYS</option>
                                                                <option className="delivery-date-selct-item">6 DAYS</option>
                                                                <option className="delivery-date-selct-item">7 DAYS</option>
                                                                <option className="delivery-date-selct-item">8 DAYS</option>
                                                                <option className="delivery-date-selct-item">9 DAYS</option>
                                                                <option className="delivery-date-selct-item">10 DAYS</option>
                                                                <option className="delivery-date-selct-item">14 DAYS</option>
                                                                <option className="delivery-date-selct-item">30 DAYS</option>
                                                                <option className="delivery-date-selct-item">60 DAYS</option>
                                                            </select>
                                                        </div>
                                                        <div  className="w-45">
                                                            <p className="text-delivery-white">Price</p>
                                                            <input type="text" className="price-offred-op"  onChange={e => setPriceData(e.target.value)}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    </MDBModalBody>
                                    <MDBModalFooter>
                                        <button className="pink-btn-offer-sec"
                                        onClick={() => {
                                            deliveryOrder()
                                            setTimeout(() => {
                                                
                                                setToggleTwoModal(!toggleTwoModal);
                                            }, 1500);

                                        }}
                                        >
                                        Send Offer
                                        </button>
                                    </MDBModalFooter>
                                    </MDBModalContent>
                                </MDBModalDialog>
                                </MDBModal>

                            </div>
                        </div>
                        <div className="width-box-message">
                            <div className="box-card-title-image">
                                <div className="px-3">
                                        <p className="text-about-us-message">About usama</p>
                                        <div className="box-conx-card">
                                            <div className="d-flex">
                                                <p className="desc-service-gig-sec-msg">Languages</p>
                                            </div>
                                            <div className="">
                                                <p className="text-desc-info-seller-msg">French,English</p>
                                            </div>
                                        </div>
                                        <div className="box-conx-card">
                                            <div className="d-flex">
                                                <div className="me-2">
                                                    <img src={process.env.PUBLIC_URL + "/images/deli.svg"} alt="loc"/>
                                                </div>
                                                <p className="desc-service-gig-sec-msg">Last Delivery</p>
                                            </div>
                                            <div className="">
                                                <p className="text-desc-info-seller-msg">About 4 hours</p>
                                            </div>
                                        </div>
                                </div>
                            </div>      
                            <div className="box-card-title-image">
                                <div style={{overflowY:"auto",width:"100%",height:"450px"}}>
                                {user.user?.orders.length > 0 && user.user?.orders.map(x=>{
                                    return(
                                        
                                        <div className="px-3">
                                            <div className="d-flex justify-content-between">
                                                <div style={{width:"30%"}}>
                                                    <img   />
                                                </div>
                                                <div className="">
                                                
                                                {x.title}
                                                </div>

                                            </div>
                                            <div className="">
                                                <p>{x.description}</p>
                                            </div>
                                            <div className="">
                                                <p>${x.price}</p>
                                            </div>
                                            <div className="">
                                                <p>{x.delivery}</p>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <div className="w-45">
                                                    <button style={{width:"100%"}} onClick={e => acceptOffer(x._id)}>Accept</button>
                                                </div>
                                                <div className="w-45">
                                                    <button style={{width:"100%"}} onClick={e => rejectOffer(x._id)}>Reject</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                                }
                                </div>
                               
                                
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Messenger;