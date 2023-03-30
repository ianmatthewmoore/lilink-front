import React, { useState } from "react";
import './style.css';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../api/auth";

let schema = yup
  .object()
  .shape({

    email: yup.string().email().required(),
    password: yup.string().required().min(6).max(16),

  })
  .required();

const Login = () =>{

    const [isErr,setIsErr] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });
    
    const loginMutation = useMutation(login);
    
    async function signUp(datas) {
        loginMutation.mutate(datas, {
            onSuccess: async (dataUser) => {
                console.log(dataUser)
                localStorage.setItem("token",dataUser.token)
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
                            <p className="text-sign-in">Sign in to</p>
                            <p className="text-sign-lilink">LiLink</p>
                        </div>
                    </div>

                    <form  onSubmit={handleSubmit(signUp) }>
                        {isErr && <div className="alert alert-danger" style={{fontSize:"14px"}}>
                            Failed to login, please verify your information !
                        </div>}
                        <div className="py-3">
                            <input placeholder="Email" className="input-auth"  type="text" {...register("email")}/>
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
                            <input placeholder="Email" className="input-auth" type="password"   {...register("password")}/>
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
                        <div className="">
                            <button className="btn-auth-send" type="submit">Continue</button>
                        </div>
                        <div className="my-3">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex align-items-center">
                                    <input type="checkbox" />
                                <label for="label" className="label-remember ms-2">Rememeber Me</label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="joind-yet-auth">
                <p className="text-under-auth">Not a memeber yet ? <span className="join-now-text">Join Now</span></p>
            </div>
        </div>
    )
}

export default Login