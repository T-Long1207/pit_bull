import React from "react";

import next from "../../assets/images2/next.png"

const Pricing = (props) => {
  const { pricingRef } = props;
  return (
    <div id="pricing" ref={pricingRef} className="pricing-tables">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-2">
            <div className="section-heading" data-aos="fade-up">
              <div className="col-lg-10">
                <div className="pricing-item-regular" data-aos="flip-right">

                  <div class="row">
                    <div class="col-sm-5 ">
                      <p class="princing_text">What is blockchain?</p>
                    </div>
                    <div class="col-sm-5 ">
                    <img  class="princing_img" src={next} alt="" />
                    </div>
                    {/* <div class = "divider"></div> */}
                  </div>
                  
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Pricing;
