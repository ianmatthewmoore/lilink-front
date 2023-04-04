import React, { useState } from "react";
import './style.css';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Signup } from "../../api/auth";
import { useMutation } from "@tanstack/react-query";

let schema = yup
  .object()
  .shape({
    firstName: yup.string().required().min(4).max(16),
    lastName: yup.string().required().min(4).max(16),
    email: yup.string().email().required(),
    password: yup.string().required().min(6).max(16),
  })
  .required();


const Register = () =>{
    
    const [isErr,setIsErr] = useState(false)
    const [type,setType] = useState(null)

    const {
        register,
        handleSubmit,
        
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });
      const registerMutation = useMutation(Signup);

      const registerClient = (data) =>{
        let newObj = {
            ...data,
            type
        }
            registerMutation.mutate(newObj, {
                onSuccess: async (dataUser) => {
                    setIsErr(false)
                },
                onError: (err) => {
                    setIsErr(true)
                },
            });
        
      } 

    return(
        <div className="login-component">
            <div className="d-flex justify-content-center">
                <div className="box-auth">
                    <div className="auth-type-text">
                        <div className="text-center">
                            <p className="text-sign-in">Sign up to</p>
                            <p className="text-sign-lilink">LiLink</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(registerClient)}>
                        <div className="py-3">
                        {isErr && <div className="alert alert-danger" style={{fontSize:"14px"}}>
                            Failed to register, please verify your information !
                        </div>}
                            <input placeholder="First Name" className="input-auth" {...register("firstName")}/>
                            {errors?.firstName?.type ===
                                              "required" && (
                                              <p className="text-err-submit">
                                                This field is required
                                              </p>
                                            )}
                        </div>
                        <div className="py-3">
                            <input placeholder="Last Name" className="input-auth" {...register("lastName")}/>
                            {errors?.lastName?.type ===
                                              "required" && (
                                              <p className="text-err-submit">
                                                This field is required
                                              </p>
                                            )}
                        </div>
                        <div className="py-3">
                            <input placeholder="Email" className="input-auth" {...register("email")}/>
                            {errors?.email?.type ===
                                                "required" && (
                                                <p className="text-err-submit">
                                                  This field is required
                                                </p>
                                              )}
                                              {errors?.email?.type ===
                                                "email" && (
                                                <p className="text-err-submit">
                                                  Please Write a valid Email
                                                </p>
                                              )}
                       
                        </div>
                        <div className="py-3">
                            <input placeholder="Password" className="input-auth" {...register("password")}/>
                            {errors?.password?.type ===
                                                "required" && (
                                                <p className="text-err-submit">
                                                  This field is required
                                                </p>
                                              )}
                                              {errors?.password?.type ===
                                                "min" && (
                                                <p className="text-err-submit">
                                                  {" "}
                                                  Password must be greater than
                                                  6
                                                </p>
                                              )}
                        </div>
                        <div className="py-3">
                            <select className="input-auth" onChange={e => setType(e.target.value)}>
                                
                                <option  value="none" >- Select your profile type -</option>
                                <option  value="customer">Customer</option>
                                <option  value="consultant">Consultant</option>
                            </select>
                        </div>
                        <div className="">
                            <button className="btn-auth-send" type="submit">Continue</button>
                        </div>
                        <div className="d-flex justify-content-center my-2">
                            <p className="text-email-font">By joining I agree to receive emails from Lilink</p>
                        </div>
                    </form>
                </div>
            </div>
            <div className="joind-yet-auth mt-4     ">
                <p className="text-under-auth">Not a memeber yet ? <span className="join-now-text">Join Now</span></p>
            </div>
        </div>
    )
}

export default Register;