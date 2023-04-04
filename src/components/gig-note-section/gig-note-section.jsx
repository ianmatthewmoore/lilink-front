import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { acceptDelivery, getGigByRef, rejectDelivery, sendDeliveryOrder, uploadDeliveryFile } from "../../api/proposal";
import './style.css';
import moment from 'moment';
import { useSelector } from "react-redux";
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';
import { Rating } from "@mui/material";
import { feedbackCreate } from "../../api/feedback";
import { socket } from "../../utils/socket";
const GigNoteSection = () =>{
    const [toggleOneModal, setToggleOneModal] = useState(false);
    const [toggleTwoModal, setToggleTwoModal] = useState(false);
    const [toggleOneModal2, setToggleOneModal2] = useState(false);
    const [toggleTwoModal2, setToggleTwoModal2] = useState(false);
    let [order,setOrder]=useState(null);
    let [value,setValue]=useState(null);
    let [feedback,setFeedback]=useState(null);
    let [valueFeed,setValueFeed]=useState(null);
    let [delivery,setDelivery]=useState(null);
    const user = useSelector(state => state.user);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [arryImage, setArryImage] = useState("");
    const [description, setDescription] = useState("");
    
    let {id} = useParams()

    const { isLoading, data, isError, isFetching, refetch } = useQuery({
        queryKey: ["rzewrsite"],
        queryFn: async () => {
                const orderClient = await getGigByRef(id);
                let deli = moment(orderClient.endDate,'MMMM Do YYYY, h:mm:ss a').format('YYYY-MM-DD HH:mm:ss');
                setDelivery(deli);
                setOrder(orderClient);
            return orderClient;
          
        },
        refetchOnWindowFocus: false,
      });

      const addFile = useMutation(uploadDeliveryFile)
      
      function uploadGigOneImg(e){

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
    
    const sendData = useMutation(sendDeliveryOrder)
    
    
    function addDelivery(){

        let newData = {
            description:description,
            consultant_id:order?.consultantId._id,
            order_ref:order?.reference,
            order_id:order?._id,
            gig_id:order?.gigs?._id,
            files:arryImage,
            status:"DELIVERED"
        }

        sendData.mutate(newData, {
            onSuccess: async (dataUser) => {
                setToggleOneModal(!toggleOneModal);
                let datas = {
                    idOwner:order?.consultantId._id,
                    receivers:order?.customerId._id,
                    content:order?.consultantId.firstName+ " " +order?.consultantId.lastName+" Just Deliver his project !",
                    link:order?.reference,
                    type:"order",
                    send_date:Date.now(),
                }
                socket.emit('new notif',datas)
                setTimeout(() => {
                  setToggleTwoModal(!toggleTwoModal);
                  window.location.href="/order/"+id
                }, 500);

            },
            onError: (err) => {
            },
        });
    } 
    const sendDataFeed = useMutation(feedbackCreate)

    function sendFeed(values){

        let newData = {
            communication_rating:value,
            service_rating:valueFeed,
            message:feedback,
            order_ref:id,
            gig_id:values
        }

        sendDataFeed.mutate(newData, {
            onSuccess: async (dataUser) => {
                let datas = {
                    idOwner:order?.customerId._id,
                    receivers:order?.consultantId._id,
                    content:order?.customerId.firstName+ " " +order?.customerId.lastName+" Just left a feedback ! Check it out.",
                    link:order?.reference,
                    type:"order",
                    send_date:Date.now(),
                }
                socket.emit('new notif',datas)
                window.location.href="/order/"+id
            },
            onError: (err) => {
            },
        });
    } 


    const rejectDataDelivery = useMutation(rejectDelivery);
    const accpetDataDelivery = useMutation(acceptDelivery);

    function rejectDeliveryByid(id){
        rejectDataDelivery.mutate(id, {
            onSuccess: async (dataUser) => {
                setToggleOneModal(!toggleOneModal);
                if(user.type=="CONSULTANT"){

                    let datas = {
                        idOwner:order?.consultantId._id,
                        receivers:order?.customerId._id,
                        content:order?.customerId.firstName+ " " +order?.customerId.lastName+" Refused your delivery. Contact him for more information!",
                        link:order?.reference,
                        type:"order",
                        send_date:Date.now(),
                    }
                    socket.emit('new notif',datas)
                }else{
                    let datas = {
                        idOwner:order?.customerId._id,
                        receivers:order?.consultantId._id,
                        content:order?.customerId.firstName+ " " +order?.customerId.lastName+" Refused your delivery. Contact him for more information!",
                        link:order?.reference,
                        type:"order",
                        send_date:Date.now(),
                    }
                    socket.emit('new notif',datas)
                }
                setTimeout(() => {
                  setToggleTwoModal(!toggleTwoModal);
                }, 500);
            },
            onError: (err) => {
            },
        });
    }

    function acceptDeliveryByid(id){
        accpetDataDelivery.mutate({id,ref:order?.reference}, {
            onSuccess: async (dataUser) => {
                setToggleOneModal(!toggleOneModal);
                let datas = {
                    idOwner:order?.customerId._id,
                    receivers:order?.consultantId._id,
                    content:user.user?.firstName+ " " +user.user?.lastName+" Accepted your delivery. Contact him for more information!",
                    link:order?.reference,
                    type:"order",
                    send_date:Date.now(),
                }
                socket.emit('new notif',datas)
                setTimeout(() => {
                  setToggleTwoModal(!toggleTwoModal);
                }, 500);
            },
            onError: (err) => {
            },
        });
    }

    useEffect(()=>{
        refetch()
    },[id])

    const getTime = () => {
        const time = Date.parse(moment(order?.endDate,'MMMM Do YYYY, h:mm:ss a').format('YYYY-MM-DD HH:mm:ss')) - Date.now();
    
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
      };

      useEffect(() => {
          const interval = setInterval(() => getTime(moment(order?.endDate,'MMMM Do YYYY, h:mm:ss a').format('YYYY-MM-DD HH:mm:ss')), 1000);
          return () => clearInterval(interval);

    
      }, [order]);

    useEffect(()=>{
        console.log(data)
    },[data])

    return(
        <div className="my-4">
            <div className="row">
                <div className="col-8">
                    <div className="border-box-container mt-5 mb-4">
                        <p className="started-order-text">Order Started</p>
                        <p className="text-started-order-about"><span className="user-seller-text">lanmoore281</span> sent all the information you need so you can start working on this order. You got this!</p>
                    </div>
                    {order?.deliveries?.status !== "ACCEPTED" ? 
                    <div className="border-box-note-container mb-4">
                        <div className="d-flex align-items-center">
                        <div className="me-2">
                            <img src={process.env.PUBLIC_URL+'/images/gig-user-prof.png'} alt="gig-user-prof" style={{width:"48px",height:"48px"}}/>
                        </div>
                        <p className="note-order-text">Shango</p>
                        </div>
                        <p className="note-text-leave  py-2">leave a note for your client</p>
                        <div className="py-2">
                            <textarea className="text-area-title-about" placeholder="Gig Title..." cols="30" rows="8" ></textarea>
                        </div>
                            <div style={{width:"100%"}}>
                                <div className="d-flex justify-content-end"  style={{width:"100%"}}>
                                    <div className="box-btn-note-send">
                                        <button className="btn-send-note" >Send</button>
                                    </div>
                                </div>
                        </div>
                    </div> 
                :
                <>   
                <>
                {user.type=="CUSTOMER" && user.user?.custumer_review?.find( x=> x.order_ref === id ) ? 
                   <div className="border-box-note-container mb-4">
               <div className="py-3"> 
                   <p className="note-text-leave py-2" style={{fontSize:"26px"}}>This is order is completed ! </p>
               </div>
                   <div className="alert alert-success">
                       <p>Congratulation ! this offer was successfully completed and reviewed </p>
                   </div>
                       
                   </div>
                   :  
                   <>
                   {user.type=="CUSTOMER" && <div className="border-box-note-container mb-4">
                   <div className="py-3"> 
                       <p className="note-text-leave py-2" style={{fontSize:"26px"}}>Rate your clients :</p>
                   </div>
   
                           <div style={{width:"100%"}}>
                           <div className="pb-1">
                               <p className="id-rate-offer-pointes">Communication :</p>
   
                               <Rating
                                   name="simple-controlled"
                                   value={value}
                                   onChange={(event, newValue) => {
                                       setValue(newValue);
                                   }}
                               />
                           </div>
                               
                               <div className="py-3">
                               <p className="id-rate-offer-pointes">Service as described :</p>
   
                                   <Rating
                                       name="simple-controlled"
                                       value={valueFeed}
                                       onChange={(event, newValue) => {
                                           setValueFeed(newValue);
                                       }}
                                   />
                               </div>
                               
   
                               <div className="py-2">
                                   <p className="id-rate-offer-pointes">Say something to your client :</p>
                                   <textarea className="text-area-title-about" placeholder="Gig Title..." cols="30" rows="8" onChange={e=> setFeedback(e.target.value)}></textarea>
                               </div>
                               <div className="py-2">
                                   <div className="d-flex justify-content-end">
                                       <div style={{width:"30%"}}>
                                           <button className="continue-with-deliver" onClick={e=> sendFeed(order?.gigs?._id)}>Send your feedback</button>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>}
                   </>
                   
               }
               {user.type=="CONSULTANT" && user.user?.custumer_review?.find( x=> x.order_ref === id ) ? 
                   <div className="border-box-note-container mb-4">
               <div className="py-3"> 
                   <p className="note-text-leave py-2" style={{fontSize:"26px"}}>This is order is completed ! </p>
               </div>
                   <div className="alert alert-success">
                       <p>Congratulation ! this offer was successfully completed and reviewed </p>
                   </div>
                       
                   </div>
                   :
                   <>
                     {user.type=="CONSULTANT" &&  <div className="border-box-note-container mb-4">
                    
                    <div className="py-3"> 
                        <p className="note-text-leave py-2" style={{fontSize:"26px"}}>Rate your clients :</p>
                    </div>
    
                            <div style={{width:"100%"}}>
                            <div className="pb-1">
                                <p className="id-rate-offer-pointes">Communication :</p>
    
                                <Rating
                                    name="simple-controlled"
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                />
                            </div>
                                
                                <div className="py-3">
                                <p className="id-rate-offer-pointes">Service as described :</p>
    
                                    <Rating
                                        name="simple-controlled"
                                        value={valueFeed}
                                        onChange={(event, newValue) => {
                                            setValueFeed(newValue);
                                        }}
                                    />
                                </div>
                                
    
                                <div className="py-2">
                                    <p className="id-rate-offer-pointes">Say something to your client :</p>
                                    <textarea className="text-area-title-about" placeholder="Gig Title..." cols="30" rows="8" onChange={e=> setFeedback(e.target.value)}></textarea>
                                </div>
                                <div className="py-2">
                                    <div className="d-flex justify-content-end">
                                        <div style={{width:"30%"}}>
                                            <button className="continue-with-deliver" onClick={e=> sendFeed(order?.gigs?._id)}>Send your feedback</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
}
                   </>
                    
               }
               </>
                </>
             
               
                
                }
                    

                </div>
                <div className="col-4">
                    <div className="border-box-container-no-red mt-5 mb-1">
                        
                        <div className="pt-4 pb-3">

                                    {user?.type == "CONSULTANT" ? 
                                    <>
                                        {order?.deliveries && order?.deliveries?.status === "DELIVERED" && <p className="continue-with-deliver"> Already Delivered</p>} 
                                        {order?.deliveries && order?.deliveries?.status === "ACCEPTED" && <div className="text-center alert  alert-success" style={{fontWeight:"700"}}>Order Completed</div> }
                                        {order?.deliveries && order?.deliveries?.status === "REFUSED" && <div className="text-center alert  alert-warning" style={{fontWeight:"700"}}>Order Rejected</div> }
                                        {order?.deliveries && order?.deliveries?.status === "PENDING" && <>
                                        <div className="pb-3">
                            <p className="card-text-timing">Time left to next delivery :</p>
                                        </div>
                        <div className="d-flex justify-content-between align-items-baseline px-3">
                            <div className="text-center">
                                <p className="text-timing-section-text">{days}</p>
                                <p className="text-timing-section-text-desc">Days</p>
                            </div>
                            <div className="sperator-div-class"></div>  
                            <div className="text-center">
                                <p className="text-timing-section-text">{hours}</p>
                                <p className="text-timing-section-text-desc">Hours</p>
                            </div>
                            <div className="sperator-div-class"></div>
                            <div className="text-center">
                                <p className="text-timing-section-text">{minutes}</p>
                                <p className="text-timing-section-text-desc">Minutes</p>
                            </div>
                            <div className="sperator-div-class"></div>
                            <div className="text-center">
                                <p className="text-timing-section-text">{seconds}</p>
                                <p className="text-timing-section-text-desc">Seconds</p>
                            </div>
                        </div><button className="continue-with-deliver" onClick={() => setToggleOneModal(!toggleOneModal)}>Deliver Now</button> 
                                        </>}
                                        {!order?.deliveries && <>
                                        <div className="pb-3">
                                            <p className="card-text-timing">Time left to next delivery :</p>
                                                        </div>
                                        <div className="d-flex justify-content-between align-items-baseline px-3">
                                            <div className="text-center">
                                                <p className="text-timing-section-text">{days}</p>
                                                <p className="text-timing-section-text-desc">Days</p>
                                            </div>
                                            <div className="sperator-div-class"></div>  
                                            <div className="text-center">
                                                <p className="text-timing-section-text">{hours}</p>
                                                <p className="text-timing-section-text-desc">Hours</p>
                                            </div>
                                            <div className="sperator-div-class"></div>
                                            <div className="text-center">
                                                <p className="text-timing-section-text">{minutes}</p>
                                                <p className="text-timing-section-text-desc">Minutes</p>
                                            </div>
                                            <div className="sperator-div-class"></div>
                                            <div className="text-center">
                                                <p className="text-timing-section-text">{seconds}</p>
                                                <p className="text-timing-section-text-desc">Seconds</p>
                                            </div>
                                        </div><button className="continue-with-deliver" onClick={() => setToggleOneModal(!toggleOneModal)}>Deliver Now</button> 
                                        </>}
                                    </>
                                     : 
                                     <>
                                        {
                                        order?.deliveries && order?.deliveries?.status === "DELIVERED" && <button className="continue-with-deliver" onClick={() => {
                                            
                                            setTimeout(() => {
                                                setToggleOneModal2(!toggleOneModal2)
                                            },300)
                                                
                                        }}>Confirm Delivery</button> 
                                        }

                                     {order?.deliveries && order?.deliveries?.status === "PENDING" && <>
                                     <div className="pb-3">
                            <p className="card-text-timing">Time left to next delivery :</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-baseline px-3">
                            <div className="text-center">
                                <p className="text-timing-section-text">{days}</p>
                                <p className="text-timing-section-text-desc">Days</p>
                            </div>
                            <div className="sperator-div-class"></div>  
                            <div className="text-center">
                                <p className="text-timing-section-text">{hours}</p>
                                <p className="text-timing-section-text-desc">Hours</p>
                            </div>
                            <div className="sperator-div-class"></div>
                            <div className="text-center">
                                <p className="text-timing-section-text">{minutes}</p>
                                <p className="text-timing-section-text-desc">Minutes</p>
                            </div>
                            <div className="sperator-div-class"></div>
                            <div className="text-center">
                                <p className="text-timing-section-text">{seconds}</p>
                                <p className="text-timing-section-text-desc">Seconds</p>
                            </div>
                            </div>
                            <button className="continue-with-deliver" onClick={() => setToggleOneModal(!toggleOneModal)}>Not yet Delivered</button>
                                     </> 
                                      }
                                      {!order?.deliveries && <>
                                     <div className="pb-3">
                            <p className="card-text-timing">Time left to next delivery :</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-baseline px-3">
                            <div className="text-center">
                                <p className="text-timing-section-text">{days}</p>
                                <p className="text-timing-section-text-desc">Days</p>
                            </div>
                            <div className="sperator-div-class"></div>  
                            <div className="text-center">
                                <p className="text-timing-section-text">{hours}</p>
                                <p className="text-timing-section-text-desc">Hours</p>
                            </div>
                            <div className="sperator-div-class"></div>
                            <div className="text-center">
                                <p className="text-timing-section-text">{minutes}</p>
                                <p className="text-timing-section-text-desc">Minutes</p>
                            </div>
                            <div className="sperator-div-class"></div>
                            <div className="text-center">
                                <p className="text-timing-section-text">{seconds}</p>
                                <p className="text-timing-section-text-desc">Seconds</p>
                            </div>
                            </div>
                            <button className="continue-with-deliver" onClick={() => setToggleOneModal(!toggleOneModal)}>Not yet Delivered</button>
                                     </> 
                                      }

                                        {order?.deliveries && order?.deliveries?.status === "ACCEPTED" && <div className="text-center alert  alert-success " style={{fontWeight:"700"}}>Order Completed</div> }
                                        {order?.deliveries && order?.deliveries?.status === "REFUSED" && <div className="text-center alert  alert-warning" style={{fontWeight:"700"}}>Order Rejected</div> }
                                     </>

                                    }

                                <MDBModal show={toggleOneModal} setShow={setToggleOneModal} tabIndex='-1' >
                                <MDBModalDialog size="lg" centered>
                                    <MDBModalContent>
                                    <MDBModalHeader className="header-color-red-modal align-items-center">
                                    <div className="py-2">
                                            <p style={{fontSize:"20px"}}>Deliver your project</p>
                                        </div>
                                       
                                    </MDBModalHeader>
                                    <MDBModalBody>
                                        <div className="box-boder-mdb-container">
                                            <div className="p-3">
                                            <textarea className="text-area-title-about" placeholder="Describe your delivery..." cols="30" rows="4" onChange={e => setDescription(e.target.value)}></textarea>
                                            </div>
                                            <div className="p-3">
                                                <input type="file" className="text-area-title-about" onChange={uploadGigOneImg}/>
                                            </div>
                                            <div className="p-3">
                                            <div className="py-3">
                                                <button className="continue-with-deliver" onClick={e=>{
                                                        addDelivery()
                                    
                                                }}>Confirm Delivery</button>
                                            </div>
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
                                            <p style={{fontSize:"20px"}}>Order Delivered </p>

                                        </div>
                                       
                                    </MDBModalHeader>
                                    <MDBModalBody>
                                            <div className="my-4">
                                                <div className="alert alert-success">
                                                    <p style={{fontSize:'20px',fontWeight:"600"}}>You Order Was Successfully Submitted ! You did very well</p>
                                                </div>
                                            </div>
                                    </MDBModalBody>
                                    <MDBModalFooter>
                                        <button className="pink-btn-offer-sec" style={{background:"var(--color-red)"}}
                                        onClick={() => {
                                            setTimeout(() => {
                                                
                                                setToggleTwoModal(!toggleTwoModal);
                                            }, 400);

                                        }}
                                        >
                                        Exit
                                        </button>
                                    </MDBModalFooter>
                                    </MDBModalContent>
                                </MDBModalDialog>
                                </MDBModal>

                                <MDBModal show={toggleOneModal2} setShow={setToggleOneModal2} tabIndex='-1' >
                                <MDBModalDialog size="lg" centered>
                                    <MDBModalContent>
                                    <MDBModalHeader className="header-color-red-modal align-items-center">
                                    <div className="py-2">
                                            <p style={{fontSize:"20px"}}>View Your delivery</p>
                                        </div>
                                       
                                    </MDBModalHeader>
                                    <MDBModalBody>
                                        <div className="box-boder-mdb-container">
                                            <div className="py-2 px-3">
                                            <p className="delivery-section-description-modal">Delivery Description :</p>
                                            </div>
                                            <div className="py-2 px-3">
                                                <p className="text-delivery-op-box">{order?.deliveries?.description}</p>
                                            </div>
                                            <div className="py-2 px-3">
                                                <p className="text-delivery-op-box-attached-file">Attached File</p>
                                                <a href={"http://localhost:3005/public/files/"+order?.deliveries?.files} target="_blank" download> {order?.deliveries?.files}  </a>

                                            </div>
                                            <div className="p-3">
                                                <div className="d-flex justify-content-between">
                                                    <div className="w-45">
                                                        <button className="continue-with-deliver" onClick={e => acceptDeliveryByid(order?.deliveries?._id)} >Confirm Delivery</button>
                                                    </div>
                                                    <div className="w-45">
                                                        <button className="continue-with-deliver" onClick={e => rejectDeliveryByid(order?.deliveries?._id)} >Cancle Delivery</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </MDBModalBody>
                                    </MDBModalContent>
                                </MDBModalDialog>
                                </MDBModal>

                                <MDBModal show={toggleTwoModal2} setShow={setToggleTwoModal2} tabIndex='-1'>
                                <MDBModalDialog centered size="lg">
                                    <MDBModalContent>
                                    <MDBModalHeader className="header-color-red-modal align-items-center">
                                        <div className="py-2">
                                            <p style={{fontSize:"20px"}}>Order Delivered </p>

                                        </div>
                                       
                                    </MDBModalHeader>
                                    <MDBModalBody>
                                            <div className="my-4">
                                                <div className="alert alert-success">
                                                    <p style={{fontSize:'20px',fontWeight:"600"}}>You Order Was Successfully Submitted ! You did very well</p>
                                                </div>
                                            </div>
                                    </MDBModalBody>
                                    <MDBModalFooter>
                                        <button className="pink-btn-offer-sec" style={{background:"var(--color-red)"}}
                                        onClick={() => {
                                            setTimeout(() => {
                                                
                                                setToggleTwoModal2(!toggleTwoModal2);
                                            }, 400);

                                        }}
                                        >
                                        Exit
                                        </button>
                                    </MDBModalFooter>
                                    </MDBModalContent>
                                </MDBModalDialog>
                                </MDBModal>
                        </div>
                    </div>
                    <div className="border-box-container-no-red mt-3 mb-1">
                        <div className="pb-3">
                            <p className="card-text-timing">Orders Details</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div style={{width:'30%'}}>
                                <img src={"http://localhost:3005/public/images/"+order?.gigs?.images[0]} alt="ddd" style={{height:"72px",width:'100%'}}/>
                            </div>
                            <div style={{width:'70%'}} className="ps-3">
                                <p className="gig-name-oder-take">i will do {order?.gigs.title}</p>
                                <p className="text-descr-status-delivery">{order?.statusWork}</p>
                            </div>  
                           

                        </div>
                        <div className="pt-3 pb-1">
                                <div className="d-flex justify-content-between py-1">
                                    <p className="descript-seller-gig-about">Seller name</p>
                                    <p className="seller-name-about-text">{order?.consultantId.firstName + " "+order?.consultantId.lastName}</p>
                                </div>
                                <div className="d-flex justify-content-between py-1">
                                    <p className="descript-seller-gig-about">Final delivery date</p>
                                    <p className="seller-data-about-text">{order?.endDate.split(',')[0]}</p>
                                </div>
                                <div className="d-flex justify-content-between py-1">
                                    <p className="descript-seller-gig-about">Total price</p>
                                    <p className="seller-data-about-text">US${order?.price}</p>
                                </div>
                                <div className="d-flex justify-content-between py-1">
                                    <p className="descript-seller-gig-about">Order number</p>
                                    <p className="seller-data-about-text">#{order?.reference}</p>
                                </div>
                            </div>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default GigNoteSection;