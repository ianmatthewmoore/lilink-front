import React from "react";
import './style.css';

const EarningComp = () =>{

    return(
        <div className="create-gig-prom mb-5">
                <div className="mt-5 mb-">
                    <p className="text-create-gig">Earning</p>
                    <p className="manage-payout-section ms-5"> Manage payout methods</p>
                </div>
                <div className="d-flex justify-content-center my-3">
                        <div className="form-width-section-earn">
                            <div className="card-section-create-earning">
                                <div className="d-flex justify-content-between">
                                    <div style={{width:"30%"}}>
                                        <p className="text-main-earnings">Available funds</p>
                                        <p className="sec-main-earnings">Balance available for use</p>
                                        <p className="text-earning-money">US$10,000</p>
                                        <div className="my-4" style={{width:'100%'}}>
                                            <button className="withdraw-money-account">Withdraw Balance</button>
                                        </div>
                                    </div>
                                    <div className="sep-height-earning"></div>
                                    <div style={{width:"30%"}}>
                                        <p className="text-main-earnings">Future payments</p>
                                        <p className="sec-main-earnings">Payments being cleared</p>
                                        <p className="text-earning-money">US$0</p>

                                    </div>
                                    <div className="sep-height-earning"></div>
                                    <div style={{width:"30%"}}>
                                        <p className="text-main-earnings">Earnings & expenses</p>
                                        <p className="sec-main-earnings">Earnings to date</p>
                                        <p className="text-earning-money">US$3,716.80</p>
                                        <p className="text-thrid-earning-money">Your earnings since joining.</p>
                                    </div>
                                </div>
                                
                            </div>

                        </div>
                        
            </div>
            <div className="d-flex justify-content-center my-3">
                        <div className="form-width-section-earn">
                            <table class="table mt-3 mb-5" style={{border:"1px solid var(--color-grey)"}}>
                            <thead style={{background:"#641B31"}}>
                                <tr>
                                <th className="td-body-earning" scope="col">Date</th>
                                <th className="td-body-earning" scope="col">Activity</th>
                                <th className="td-body-earning" scope="col">Description</th>
                                <th className="td-body-earning" scope="col">From</th>
                                <th className="td-body-earning" scope="col">Order</th>
                                <th className="td-body-earning" scope="col">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th className="th-body-earning">15/03/2023</th>
                                <td className="th-body-earning">Earning</td>
                                <td className="th-body-earning">Order</td>
                                <td className="th-body-earning"  style={{color:"var(--color-grey)"}}>@ianmoore281</td>
                                <td className="th-body-earning"   style={{textDecoration:"underline",fontWeight:"700"}}>FO157A8DC601</td>
                                <td className="th-body-earning" style={{color:"#19865A",fontWeight:"700"}}>US$420.00</td>
                                </tr>
                                <tr>
                                <th className="th-body-earning">15/03/2023</th>
                                <td className="th-body-earning">Withdrawal</td>
                                <td className="th-body-earning">Transferred successfully</td>
                                <td className="th-body-earning"  style={{color:"var(--color-grey)"}}>Payoneer</td>
                                <td className="th-body-earning"   style={{textDecoration:"underline",fontWeight:"700"}}></td>
                                <td className="th-body-earning" style={{color:"#C72F34",fontWeight:"700"}}>-US$420.00</td>
                                </tr>

                            </tbody>
                            </table>
                        </div>
                        </div>
        </div>
    )

}

export default EarningComp;