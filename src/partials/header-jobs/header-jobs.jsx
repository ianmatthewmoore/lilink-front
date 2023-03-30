import React from "react";
import { Link } from "react-router-dom";
import './style.css';

const  HeaderJobs = () =>{

    return(
        <div className="loop-bar-seach-header">
            <div className="custom-container">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="loop-search-bar">
                        <input className="input-search-loop" placeholder="What service are you looking for today ?" />
                        <div className="pos-image-loop">
                            <img src={process.env.PUBLIC_URL+"/images/loop.svg"} />
                        </div>
                    </div>
                    <div className="box-jobs-search">
                        <div className="box-search">
                            <ul className="navbar-seach-job">
                                <li className="list-heading-navbar">
                                    <Link to="/" className="heading-four">Heading 4</Link>
                                </li>
                                <li className="list-heading-navbar">
                                    <Link to="/" className="heading-four">Heading 4</Link>

                                </li>
                                <li className="list-heading-navbar">
                                    <Link to="/" className="heading-four">Heading 4</Link>

                                </li>
                                <li className="list-heading-navbar">
                                    <Link to="/" className="heading-four">Heading 4</Link>

                                </li>
                                <li className="list-heading-navbar">
                                    <Link to="/" className="heading-four">Heading 4</Link>

                                </li>
                                <li className="list-heading-navbar">
                                    <Link to="/" className="heading-four">Heading 4</Link>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default HeaderJobs;

