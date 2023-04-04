import React, { useEffect, useState } from "react";
import './style.css';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { gigCreate, uploadGigImage, uploadUser } from "../../api/gig";

let schema = yup
.object()
.shape({

  title: yup.string().required().min(3).max(200),
  price: yup.string().required().min(1),
  service: yup.string().required().min(3).max(200),
  descriptionService: yup.string().required().min(3).max(200),


})
.required();
const ARRAY_JOB =[ "Marketing consulting",
"Operations consulting",
 "Financial consulting",
"HR consulting",
"Compliance consulting",
"IT/ Technology consulting",
"Legal consultant ",
"Social media consultant",
"Sustainability consultant ",
"Sales consultant ",
"Wellness/Fitness consultant",
 "Growth Marketing consultant",
 "Career coaching consultancy ",
 "PR consultancy",
 "SEO consulting",
 "Leadership consulting",
 "Product development consulting",
 "Design consultant",
 "Strategy consulting"]
const CreateGig = () =>{

    const [value, setValue] = useState('');
    const [imageGig, setImageGig] = useState([]);
    const [arrayImage,setArryImage] = useState([]);
    const [cate,setCate]=useState('')
    const [deli,setDeli]=useState('')
    const [success,setSuccess]=useState(false)
    const [err,seterr]=useState(false)

 
    function uploadGigOneImg(e){

        setImageGig(old => [...old, URL.createObjectURL(e.target.files[0])]);
        let formData = new FormData();

        formData.append('file',e.target.files[0])
        addMutation.mutate(formData, {
            onSuccess: async (dataUser) => {
                setArryImage(old => [...old,dataUser.fileName])
            },
            onError: (err) => {
            },
        });
    } 

   const {
          register,
          handleSubmit,
          formState: { errors },
        } = useForm({
          resolver: yupResolver(schema),
        });

        const loginMutation = useMutation(gigCreate);
        const addMutation = useMutation(uploadGigImage);


    
        

        async function signUp(datas) {
    
            let newObj = {
                ...datas,
                description:value,
                images:arrayImage,
                delivery:deli,
                category:cate

            }
            
            loginMutation.mutate(newObj, {
                onSuccess: async (dataUser) => {
                    setSuccess(true)
                    setTimeout(()=>{
                        window.location.href="/myGig"
                        setSuccess(false)
                    },3000)
                },
                onError: (err) => {
                },
            });

        }
    

    return(
        <div className="create-gig-prom">
            <div className="my-5">
                <p className="text-create-gig">Gig Creation</p>
            </div>
            <div className="d-flex justify-content-center my-3">
                <div className="form-width-section">
                    <form onSubmit={handleSubmit(signUp)} >
                    <div className="card-section-create-user py-3">
                        <p className="card-text-lable-user py-2">Gig Title</p>
                        <p className="desc-lable-about-text py-2">As your Gig storefront, your title is the most important place to include keywords that buyers would likely use to search for a service like yours.</p>
                        <div className="py-2">
                            <textarea className="text-area-title-about" placeholder="Gig Title..." cols="30" rows="4" {...register("title")}></textarea>
                                            {errors?.title?.type ===
                                              "required" && (
                                              <p className="text-err-submit">
                                                This field is required
                                              </p>
                                            )}
                                            {errors?.title?.type ===
                                              "min" && (
                                              <p className="text-err-submit">
                                                Title maximum length is 
                                                3
                                              </p>
                                            )}
                                            {errors?.title?.type ===
                                              "max" && (
                                              <p className="text-err-submit">
                                                Title maximum length is 200
                                              </p>
                                            )}
                                            {errors?.tile?.type ===
                                              "pattern" && (
                                              <p className="text-err-submit">
                                                Alphabetical characters only
                                              </p>
                                              )}
                        </div>
                    </div>
                    <div className="card-section-create-user py-3">
                        <p className="card-text-lable-user py-2">Gig Category</p>
                        <p className="desc-lable-about-text py-2">Choose the category and sub-category most suitable for your Gig.</p>
                        <div className="py-2">
                            <select className="text-area-title-about-select" onChange={e => setCate(e.target.value)}>
                                <option className="list-navbar-section">Select a category</option>
                                {ARRAY_JOB.map(x=>{
                                    return(
                                        <option className="list-navbar-section">{x}</option>
                                    )
                                
                                })}
    
                            </select>
                        </div>
                    </div>
                    <div className="card-section-create-user py-3">
                        <p className="card-text-lable-user py-2">Gig Pricing</p>
                        <p className="desc-lable-about-text py-2">Some pricing options should be included/ excluded from your packages. If you’re unable to provide these services, we suggest moving your Gig to another category.</p>
                        <div className="price-container-create ">
                            <div className="border-width-box-gig-create">
                                Service
                            </div>
                            <div className="">
                                <input className="text-area-title-about" placeholder="Gig Title..." {...register("descriptionService")} />
                                {errors?.descriptionService?.type ===
                                              "required" && (
                                              <p className="text-err-submit">
                                                This field is required
                                              </p>
                                            )}
                                            {errors?.descriptionService?.type ===
                                              "min" && (
                                              <p className="text-err-submit">
                                                Service maximum length is 
                                                3
                                              </p>
                                            )}
                                            {errors?.descriptionService?.type ===
                                              "max" && (
                                              <p className="text-err-submit">
                                                Service maximum length is 16
                                              </p>
                                            )}
                                <textarea className="text-area-title-about" placeholder="Gig Title..." cols="30" rows="5" {...register("service")}></textarea>
                                {errors?.service?.type ===
                                              "required" && (
                                              <p className="text-err-submit">
                                                This field is required
                                              </p>
                                            )}
                                            {errors?.service?.type ===
                                              "min" && (
                                              <p className="text-err-submit">
                                                Service maximum length is 
                                                3
                                              </p>
                                            )}
                                            {errors?.service?.type ===
                                              "max" && (
                                              <p className="text-err-submit">
                                                Service maximum length is 16
                                              </p>
                                            )}

                            </div>
                            <div className="py-1">
                                <div className="d-flex align-items-center p-3">
                                    <p className="delivery-time-sect-about me-2">Delivery Time : </p>
                                    <select className="delivery-date-selct" onChange={e => setDeli(e.target.value)} >
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
                                
                            </div>
                            <div className="d-flex" style={{width:"100%"}}>
                                <div className="total-price-section">
                                    <p className="text-total-create-gig">TotalPrice</p>
                                </div> 
                                <div style={{width:"70%",border:"1px solid var(--color-grey)"}}>
                                    <input className="text-input-price-active-gig" placeholder="0$" {...register("price")}/>
  
                                            

                                </div>
                            </div>
                           
                        </div>
                        {errors?.price?.type ===
                                              "required" && (
                                              <p className="text-err-submit">
                                                This field is required
                                              </p>
                                            )}
                    </div>
                    <div className="card-section-create-user py-3">
                        <p className="card-text-lable-user py-2">Gig Description</p>
                        <p className="desc-lable-about-text py-2">Briefly Describe Your Gig</p>
                        <div className="py-2">
                        <ReactQuill theme="snow" value={value} onChange={e => setValue(e)} />

                        </div>
                    </div>
                    <div className="card-section-create-user py-3">
                        <p className="card-text-lable-user py-2">Showcase Your Services In A Gig Gallery (Up to 3 )</p>
                        <p className="desc-lable-about-text py-2">Encourage buyers to choose your Gig by featuring a variety of your work.</p>
                        <div className="row py-2">
                            {
                                imageGig.length<3 && <div className="col-4">
                                <div className="">
                                    <div className="card-image-upload-gig-create">
                                        <div className="d-card-create-image">
                                            <div className="text-center">
                                                <img src={process.env.PUBLIC_URL+"/images/card-up.png"} alt="public-image" className="pb-2"/>
                                                <p className="card-upload-image-text">Drag & drop a photo or </p>
                                                <p className="card-upload-image-text-red">Browse</p>
                                                <input className="inputfile" type="file" onChange={e => uploadGigOneImg(e)} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            }
                            
                            {imageGig.map(x=>{
                                return(
                                    <div className="col-4">
                                    <div className="d-card-create-image" style={{height:"250px"}}>
                                        <img src={imageGig.length > 0 ? x : ""} alt="img" style={{width:"100%",height:"100%"}}/>
                                    </div>
                                    </div>
                                )
                            })}
                           
                        </div>
                    </div>
                    {success && <div className="alert alert-success">
                        <p>Your gig was Successfully created ! Congratulation.</p>
                    </div>}
                    <div className="d-flex justify-content-end my-4" style={{width:"100%"}}>
                    <div style={{width:"30%"}}>
                        <button className="btn-auth-send" type="submit">Send</button>
                    </div>
                    </div>
                    
                    </form>
                    
                </div>
            </div>
        </div>
    )

}

export default CreateGig;