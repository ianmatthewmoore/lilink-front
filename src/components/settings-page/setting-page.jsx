import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getUserById, updateData } from "../../api/user";
import './style.css';
import { CountryDropdown } from 'react-country-region-selector';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import * as yup from "yup";
let schema = yup
.object()
.shape({

  firstName: yup.string().required().min(3).max(16),
  lastName: yup.string().required().min(3).max(16),
  description: yup.string().required().min(6).max(100),
  bio: yup.string().required().min(6).max(500),

})
.required();

const SettingAccount = () =>{
    const [currUser,setcurrUser] = useState(null)
    const [country,setcountry] = useState(null)
    const [langOne,setlangOne] = useState(null)
    const [langSec,setlangSec] = useState(null)

      const {
          register,
          handleSubmit,
          formState: { errors },
        } = useForm({
          resolver: yupResolver(schema),
        });
      
    const { isLoading, data, isError, isFetching, refetch } = useQuery({
        queryKey: ["rzewrite"],
        queryFn: async () => {
            const user = await getUserById();
            setcurrUser(user)
            return user;
          
        },
        refetchOnWindowFocus: false,
      });

    const updateUserMutation = useMutation(updateData);

    async function modifyData(data){
        let newObj={
            ...data,
            country,
            language:[langOne,langSec]
        }
        updateUserMutation.mutate(newObj, {
            onSuccess: async (dataUser) => {
              console.log(dataUser)
            },
            onError: (err) => {
            },
        });

    }

    return(
        <div className="create-gig-prom mb-5">
                <div className="mt-5 mb-">
                    <p className="text-create-gig">Settings</p>
                </div>
                <div className="d-flex justify-content-center my-3">
                        <div className="form-width-section">
                            <form onSubmit={handleSubmit(modifyData) }>
                                <div className="card-section-create-user py-3">
                                    <p className="card-text-lable-user py-2">Account</p>
                                    <p className="desc-lable-about-text py-2">Change your Account Information. </p>
                                    <div className="py-2">
                                        <label for="name" id="lable-settings-about">First Name</label>
                                        <input className="text-area-title-settings"   placeholder={currUser?.firstName} {...register("firstName")} />
                                        {errors?.firstName?.type ===
                                                "required" && (
                                                <p className="text-err-submit">
                                                  This field is required
                                                </p>
                                              )}
                                              {errors?.firstName?.type ===
                                                "min" && (
                                                <p className="text-err-submit">
                                                  {" "}
                                                  First Name must be greater than
                                                  6
                                                </p>
                                              )}
                                              {errors?.firstName?.type ===
                                                "max" && (
                                                <p className="text-err-submit">
                                                  {" "}
                                                  First Name must be lower than
                                                  16
                                                </p>
                                              )}
                                    </div>
                                    <div className="py-2">
                                        <label for="name" id="lable-settings-about">Last Name</label>
                                        <input className="text-area-title-settings"   placeholder={currUser?.lastName} {...register("lastName")}/>
                                        {errors?.lastName?.type ===
                                                "required" && (
                                                <p className="text-err-submit">
                                                  This field is required
                                                </p>
                                              )}
                                              {errors?.lastName?.type ===
                                                "min" && (
                                                <p className="text-err-submit">
                                                  {" "}
                                                  Last Name must be greater than
                                                  6
                                                </p>
                                              )}
                                              {errors?.lastName?.type ===
                                                "max" && (
                                                <p className="text-err-submit">
                                                  {" "}
                                                  Last Name must be lower than
                                                  16
                                                </p>
                                              )}
                                    </div>
                                    <div className="py-2">
                                        <label for="name" id="lable-settings-about">Description</label>
                                        <input className="text-area-title-settings"  placeholder={currUser?.description} {...register("description")}/>
                                        {errors?.description?.type ===
                                                "required" && (
                                                <p className="text-err-submit">
                                                  This field is required
                                                </p>
                                              )}
                                              {errors?.description?.type ===
                                                "min" && (
                                                <p className="text-err-submit">
                                                  {" "}
                                                  Description must be greater than
                                                  6
                                                </p>
                                              )}
                                              {errors?.description?.type ===
                                                "max" && (
                                                <p className="text-err-submit">
                                                  {" "}
                                                  Description must be greater than
                                                  100
                                                </p>
                                              )}
                                    </div>
                                
                                    <div className="py-2">
                                        <label for="name" id="lable-settings-about">Bio</label>
                                        <textarea className="text-area-title-about" cols="30" rows="5" placeholder={currUser?.bio} {...register("bio")}></textarea>
                                        {errors?.bio?.type ===
                                                "required" && (
                                                <p className="text-err-submit">
                                                  This field is required
                                                </p>
                                              )}
                                              {errors?.bio?.type ===
                                                "min" && (
                                                <p className="text-err-submit">
                                                  {" "}
                                                  Bio must be greater than
                                                  6
                                                </p>
                                              )}
                                              {errors?.bio?.type ===
                                                "max" && (
                                                <p className="text-err-submit">
                                                  {" "}
                                                  Bio must be lower than
                                                  500
                                                </p>
                                              )}
                                    </div>
                                    <div className="py-2">
                                    <label for="name" id="lable-settings-about">Country</label>
                                    <CountryDropdown
                                    classes="text-area-title-settings"
                                        value={country}
                                        onChange={(val) => setcountry(val)} />
                                    </div>
                                    <div className="d-flex justify-content-between">
                                    <div className="py-2">
                                        <label for="name" id="lable-settings-about">Primary Language</label>
                                        <select className="text-area-title-settings" onChange={e => setlangOne(e.target.value)}>
                                            <option value="">Please your language</option>
                                            <option value="French">Français</option>
                                            <option value="English">English</option>
                                            <option value="Spanish">Spanish</option>
                                            <option value="Arabic">Arabic</option>
                                        </select>
                                    </div>
                                    <div className="py-2">
                                        <label for="name" id="lable-settings-about">Secondary Language</label>
                                        <select className="text-area-title-settings"  onChange={e => setlangSec(e.target.value)}>
                                            <option value="">Please your language</option>
                                            <option value="French">Français</option>
                                            <option value="English">English</option>
                                            <option value="Spanish">Spanish</option>
                                            <option value="Arabic">Arabic</option>
                                        </select>
                                    </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end">
                                    <div className="btn-save-settings-user">
                                        <button className="btn-send-save-settings" type="submit">Save</button>
                                    </div>
                                </div>
                            </form>
                            <div className="card-section-create-user py-3">
                                <p className="card-text-lable-user py-2">Security</p>
                                <p className="desc-lable-about-text py-2">Change your Account Password. </p>
                                <div className="py-2">
                                    <label for="name" id="lable-settings-about">Password</label>
                                    <input className="text-area-title-settings" placeholder="Gig Title..." />
                                </div>
                                <div className="py-2">
                                    <label for="name" id="lable-settings-about">Confirm Password</label>
                                    <input className="text-area-title-settings" placeholder="Gig Title..." />
                                </div>

                                
                            </div>
                            <div className="d-flex justify-content-end">
                                <div className="btn-save-settings-user">
                                    <button className="btn-send-save-settings">Save</button>
                                </div>
                            </div>
                        </div>
    
            </div>
        </div>
    )

}

export default SettingAccount;