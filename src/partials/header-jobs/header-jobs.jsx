import React, { useState } from "react";
import { Link } from "react-router-dom";
import './style.css';
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
const  HeaderJobs = () =>{

    const [value,setValueSearch] = useState(null)

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          // 👇 Get input value
          window.location.href="/search/"+value
        }
      };

    return(
        <div className="loop-bar-seach-header">
            <div className="custom-container">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="loop-search-bar">
                        <input className="input-search-loop" placeholder="What service are you looking for today ?"         onKeyDown={handleKeyDown} onChange={e => setValueSearch(e.target.value)} />
                        <div className="pos-image-loop">
                            <img src={process.env.PUBLIC_URL+"/images/loop.svg"} />
                        </div>
                    </div>
                    <div className="box-jobs-search">
                        <div className="box-search">
                            <ul className="navbar-seach-job">
                            {ARRAY_JOB.map(x=>{
                                    return(
                                        <li className="list-heading-navbar">
                                        <a href={"/search/"+x} className="heading-four"><p>{x}</p></a>
                                    </li>
                                    )
                                
                                })}
                               

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default HeaderJobs;

