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
import { acceptProposal, createPropsal, rejectPropsal, uploadDeliveryFile } from "../../api/proposal";
import { Link, useFetcher, useParams } from "react-router-dom";
import { getUserByParams } from "../../api/user";
import { socket } from "../../utils/socket";
import { getConvUsers } from "../../api/conversation";
import moment from "moment";


  const Messenger = ( ) =>{
      
    const [toggleOneModal, setToggleOneModal] = useState(false);
    const [toggleTwoModal, setToggleTwoModal] = useState(false);
    const [isErr, setIsErr] = useState(false);
    const [gig,setGig]=useState(null)
    const [users,setusers]=useState(null)
    const [gigSelect,setgigSelect]=useState(null);
    const [deliveryDate,setDeliveryDate] = useState("")
    const [priceData,setPriceData] = useState("")
    const [messages,setMessages] = useState([])
    const [textInput,setTextInput] = useState("")
    const [convId,setConvId] = useState(null)
    const [object,setObject] = useState(null)
    const [successCreate,setSuccessCreate] = useState(false)
    
    const user = useSelector(state => state.user);
    const [
        descriptionCreateGig,setDescriptionCreateGig
    ] = useState("")
    let {id} = useParams()
    const { isLoading, data, isError, isFetching, refetch } = useQuery({
        queryKey: ["rzewrite"],
        queryFn: async () => {
            const userIO = await getUserByParams(id);
            setusers(userIO)
            return userIO;
          
        },
        refetchOnWindowFocus: false,
      });

      const { isLoading:loadingConv, data:dataConv, refetch:refetchUser } = useQuery({
        queryKey: ["rzewrdite"],
        queryFn: async () => {
        
            let userIO = await getConvUsers(JSON.stringify([user.user?._id,id]));
            if(userIO?.messages.length>0)
                setMessages(userIO?.messages )
            setConvId(userIO?._id)

            return userIO;
          
        },
        refetchOnWindowFocus: false,
        enabled:false
      });

      useEffect(()=>{
            refetch()
            refetchUser()
            
        },[id,user])
        


    const proposalMutation = useMutation(createPropsal)
    const addFile = useMutation(uploadDeliveryFile)

    const [array,setArryImage]=useState(null)
    
    function deliveryOrder(){
        
        let data = {
            customerId:users?._id,
            email:users?.email,
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
        

    };
    useEffect(()=>{
        socket.on("verify message",(data)=>{
            setMessages(msg => [...msg,data])
        })
    },[]);

    function uploadDeliveryFileTomsg(e){

        let formData = new FormData();
        
        formData.append('file',e.target.files[0])
        addFile.mutate(formData, {
            onSuccess: async (dataUser) => {
                setArryImage(dataUser.fileName)
              },
              onError: (err) => {
              },
          });
      } 
    useEffect(()=>{
        if(convId!= null)
        socket.emit('join-room',convId)
    },[convId])
    
    const getEmailSend = () =>{
        let data = {
            text:textInput,
          
            sender:{firstName:user.user?.firstName ,  id:user.user?._id,
            lastName:user.user?.lastName},
            receiver:id,
            convId,
            participants : [user.user?._id,id],
            file:array,
            photo:user.user?.photo,
        }
        let datas = {
            idOwner:user.user?._id,
            receivers:users._id,
            content:user.user?.firstName+ " " +user.user?.lastName+" Sent you a message",
            link:user.user?._id,
            type:"message",
            send_date:Date.now(),
        }
        socket.emit('new notif',datas)
        socket.emit('new message',data)
    }

    const accpetMutation = useMutation(acceptProposal);
    const rejectMutation = useMutation(rejectPropsal);
    
      
    

    function acceptOffer(id){
        accpetMutation.mutate(id, {
            onSuccess: async ({msg}) => {
                setSuccessCreate(true)
                setTimeout(()=>{
                    setSuccessCreate(false)
                    window.location.href ="/order/" + msg.reference
                },4000)
            },
            onError: (err) => {
                setIsErr(true)
            },
        });
    }

    function rejectOffer(id){
        rejectMutation.mutate(id, {
            onSuccess: async (dataUser) => {
                console.log('offer was rejected')
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
                            <div className="p-3 d-flex justify-content-start align-items-center"style={{width:"25%",borderBottom:"1px solid var(--color-grey)"}}> 
                                <p className="text-type-section">All Conversations</p>
                            </div>
                            <div className="" style={{width:"75%"}}>

                                <div className="messenger-text-box">
                                    <div className="d-flex align-items-center">
                                        <div className="">
                                            <img src={"http://localhost:3005/public/images/"+users?.photo} alt="" style={{width:"48px",height:"48px"}}/>
                                        </div>
                                        <div className="text-header-line ms-3">
                                    <p className="text-about-message-sender">{!isLoading && users && users?.firstName +" "+ users?.lastName}</p>
                                    <p style={{color:"var(--color-grey",fontWeight:"600"}} >{users?.country} </p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="d-flex">

                        <div className="width-box-message">
                            {
                                user.status=="succeeded" && user.user.convs.map(x=>{
                                    return(
                                        x.participants.map( y=>{
                                            return(
        
                                            <>
                                            
                                            { 
                                            y._id != user.user._id &&
                                            <Link to={"/message/"+y._id}>
                                            
                                             <div className="box-card-title-image" >
                                             <div className="me-2">
                                                 <img src={"http://localhost:3005/public/images/"+y.photo} alt="" style={{width:"64px",height:"64px",borderRadius:"50%"}}/>
                                             </div>
                                             <div className="">
                                                 <p className="text-image-box-message-name">{y.firstName+" "+y.lastName}</p>
                                                 <p className="text-image-box-message-content">{x.messages[0]?.text}</p>
                                             </div>
                                            </div>    
                                            </Link>
                                            }
                                           
                                            </>
                                            )
                                        })
                                    )
                                })
                                
                            }
                            

                        </div>
                        <div className="width-lg-box-message">
                            <div className="background-chat-message-box">
                                <div className="box-message pt-4">
                                    <div     className="user-message">
                                    {messages?.map(msg =>{
                                    return(
                                        <div>
                                            <div className="d-flex align-items-center px-3 py-2">
                                            <div className="">
                                                <img src={"http://localhost:3005/public/images/"+msg.photo} alt="" style={{height:"48ox",width:"48px"}}/>
                                            </div>
                                            <div className="text-header-line ms-3">
                                                <p className="text-username-own-message">{msg.sender?.firstName + " " + msg.sender?.lastName}</p>
                                                <p className="text-username-own-message-content">{msg.text}</p>
                                                <a target="_blank" href={"http://localhost:3005/public/files/"+msg.file} download={true}>{msg.file}</a>

                                            </div>
                                            </div>
                                        </div>
                                        
                                    )
                                    })}
                                   

                                    </div>
                                </div>
                                <div className="px-3" style={{position:"relative"}}>
                                    <input type="text" className="input-message-send-text-user" onChange={e => setTextInput(e.target.value)}/>
                                    <div className="pos-text-user-send-icon-svg" onClick={getEmailSend}>
                                        <img src={process.env.PUBLIC_URL+"/images/deliverymsg.svg"} alt="sned"/>
                                    </div>
                                    <input type="file" onChange={e => uploadDeliveryFileTomsg(e)} />

                                </div>
                                    
                                    
                                {
                                        user.type === "CONSULTANT" && 
                                        <div className="p-3 d-flex justify-content-end" style={{width:"100%"}}>
                                            <div style={{width:"50%"}} className="d-flex align-items-center justify-content-end">
                                            <p style={{fontSize:"16px",color:"var(--color-pink)"}} className="me-3"> {textInput.length}/2500</p>
                                            <button  className="btn-secnd-offer-to-user" onClick={() => setToggleOneModal(!toggleOneModal)}>Create Offer</button>
                                        </div> 
                                        </div>
                                        }
                                    
                                    
                                
                            </div>

                            <div className="">
                               

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
                            <div className="box-card-title-image" style={{width:"100%",display:"block"}}>
                                <div className="px-3">
                                        <p className="text-about-us-message">About {users?.firstName + " "+users?.lastName}</p>
                                        <div className="py-2">
                        <div className="main-data-user-ab ">
                            <div className="d-flex justify-content-between py-2" >
                                    <div className="pos-locate-user-seller ">
                                        <img src={process.env.PUBLIC_URL+"/images/liloc.svg"} alt="liloc.svg"  className="img-width me-1"/>
                                        <p className="ref-card-user">From</p>
                                    </div>
                                    <div className="loca-user-info-desc">
                                        <p className="text-ref-loca-user">{users?.country}</p>
                                    </div>
                            </div>
                        </div>
                        <div className="main-data-user-ab">
                            <div className="d-flex justify-content-between py-2">
                                    <div className="pos-locate-user-seller ">
                                        <img src={process.env.PUBLIC_URL+"/images/liuser.svg"} alt="liloc.svg"  className="img-width me-1"/>
                                        <p className="ref-card-user">Member since</p>
                                    </div>
                                    <p className="text-ref-loca-user">{moment(users?.createdAt).format("MMM Do YY")}</p>
                            </div>
                        </div>
                        <div className="main-data-user-ab">
                            <div className="d-flex justify-content-between py-2">
                                    <div className="pos-locate-user-seller ">
                                        <img src={process.env.PUBLIC_URL+"/images/deli.svg"} alt="liloc.svg"  className="img-width me-1"/>
                                        <p className="ref-card-user">Last devliery</p>
                                    </div>
                                    <p className="text-ref-loca-user">1 day</p>
                            </div>
                        </div>
                    </div>
                                </div>
                            </div>      
                            <div className="box-card-title-image">
                                <div style={{overflowY:"auto",width:"100%",height:"450px"}}>
                                {
                                successCreate && <div className="alert alert-success">
                                    Offer successfully Accepted
                                </div>
                                }
                                {user.user?.offers.length > 0 && user.user?.offers.map(x=>{
                                    return(
                                    
                                        <>
                                            {x.consultantId._id == id && user.user?._id == x.customerId._id  && x.status=="PENDING" && <div className="px-3">
                                                <div className="">
                                                    <div style={{width:"100%"}}>
                                                        <img src={'http://localhost:3005/public/images/'+x.gigs?.images[0]}  style={{width:"100%"}} />
                                                    </div>
                                                    <div className="py-2" >
                                                    
                                                    <p className="box-title-offer-about">{x.title}</p>
                                                    </div>

                                                </div>
                                                <div className="box-title-offer-about-2">
                                                    <p className="box-title-offer-about-2">{x.description}</p>
                                                </div>
                                                <div className="py-2">
                                                    <p className="text-offer-title-box"><span className="text-offer-title-box-pink" style={{fontWeight:"600"}}>Price :</span> ${x.price}</p>
                                                </div>
                                                <div className="py-2">
                                                    <p className="text-offer-title-box"><span className="text-offer-title-box-pink" style={{fontWeight:"600"}}>Dlivery Date : </span>  {x.delivery}</p>
                                                </div>
                                                    <div className="py-2">
                                                        <button style={{width:"100%"}} className="pink-bnt-accept"  onClick={e => acceptOffer(x._id)}>Accept</button>
                                                    </div>
                                                    <div className="py-2">
                                                        <button style={{width:"100%"}}  className="pink-bnt-reject" onClick={e => rejectOffer(x._id)}>Reject</button>
                                                    </div>
                                        
                                            </div> }
                                        </>
                                       
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