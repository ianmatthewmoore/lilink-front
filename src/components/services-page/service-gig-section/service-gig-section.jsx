import React from "react";
import './style.css';
import Drawer from '@mui/material/Drawer';
import { Box, Divider, Icon, List } from "@mui/material";

const ServiceCard = (props) =>{

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box
          sx={{ width: 500 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className="box-get-order">
                <div className="d-flex justify-content-between">
                    <p className="order-text-box pb-5">Order Options</p>
                    <i class="fa-solid fa-xmark"></i>

                </div>
                <Divider />
                <div className="border-service-box pb-5 px-3">
                    <div className="d-flex justify-content-between py-3">
                        <p className="service-gig-price-box">{props.gig?.service}</p>

                        <p className="service-gig-price-box-text">US${props.gig?.price}</p>

                    </div>
                    <div className="pt-2 pb-5">
                        <p className="service-gig-desc">LoremLoremLoremL oremLor emLoremLoremL oremLoremLoremLoremL oremLoremL  oremLoremLoremLoremLo remLoremLoremLoremLoremL oremLorem LoremLoremLorem</p>
                    </div>
                </div>
                <div className="price-last-box-container">
                    <div className="py-3">
                    <p className="order-text-box" style={{fontSize:"26px"}}>US${props.gig?.price}</p>
                    <p className="single-order-text">Signle Order</p>
                    <div className="mt-3 mb-4" style={{height:"1px",width:"100%",background:"black"}}></div>
                    <div className="d-flex align-items-center">
                        <img src={process.env.PUBLIC_URL+"/images/clock.svg"} alt="clock" />
                        <p className="text-delivery-box-container">{props.gig?.delivery} Delivery</p>
                    </div>
                    </div>

                </div>
                <div className="continue-section-gig pt-2 mt-5">
                    <button className="continue-with-offer" onClick={toggleDrawer("right", true)}>Continue</button>
                </div>
            </div>
        </Box>
      );
    

    return(
        <div className="card-service-gigs-section">
            <div className="pb-2">
                <p className="service-gig-name">{props.gig?.service}</p>
            </div>
            <div className="py-2">
                <p className="service-gig-price">US${props.gig?.price}</p>
            </div>
            <div className="py-2">
                <p className="service-gig-desc">LoremLoremLoremL oremLor emLoremLoremL oremLoremLoremLoremL oremLoremL  oremLoremLoremLoremLo remLoremLoremLoremLoremL oremLorem LoremLoremLorem</p>
            </div>
            <div className="py-2">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <img src={process.env.PUBLIC_URL+"/images/deltime.svg"} alt="delt"/>
                    </div>
                    <p className="text-delivery-time">{props.gig?.delivery} Delivery</p>
                </div>

            </div>
            <div className="py-2">
                <p className="whatis-included">What is included ?</p>
            </div>
            <div className="continue-section-gig pt-2">

                <button className="continue-with-offer" onClick={toggleDrawer("right", true)}>Continue</button>
            </div>
            <Drawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
          >
            {list("right")}
          </Drawer>
        </div>
    )

}

export default ServiceCard;