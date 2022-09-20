import React from "react";

import HeadingLineDec from "../../assets/images/heading-line-dec.png";
import Quote from "../../assets/images/quote.png";
import ClientImg from "../../assets/images/client-image.jpg";
import tokennomics from "../../assets/images2/tokennomics.png";

const Clients = () => {
  return (
    <div id="clients" className="the-clients">
      <div className="container">
        <div className="row">
        <div className="col-lg-12">
            <div className="naccs" data-aos="fade-up">
              <div className="grid">
                <div className="row">
                  <div className="col-lg-12 align-self-center">
                  <img  src={tokennomics} alt="" />
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

export default Clients;
