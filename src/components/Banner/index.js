import React from "react";

import ellipse3 from "../../assets/images2/Ellipse3_0.png";
import ellipse2 from "../../assets/images2/Ellipse2.png";
import layer3 from "../../assets/images2/Layer3.png";
import layer32 from "../../assets/images2/Layer3copy.png";
import LearnMore from "../../assets/images2/LearnMore.png";
import BUYNOW from "../../assets/images2/BUYNOW.png";
const Banner = () => {
  return (
    <div
      className="main-banner wow fadeIn"
      id="top"
      data-wow-duration="1s"
      data-wow-delay="0.5s"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div
                  className="left-content show-up header-text wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay="1s"
                  data-aos="fade-right"
                >
                  <div className="row">
                    <div className="col-lg-12">
                      <h2>FEATURES DEVELOPED EXCLUSIVELY FOR SPC HOLDERS</h2>
                      <p>
                        SpitzChain - Optimal development of NFT, GameFi
                        and DeFi for users in the SPC ecosystem
                      </p>
                    </div>
                    <div className="col-lg-12">
                      <div className="black-button first-button scroll-to-section">
                        <a href="#contact">
                        <img  src={LearnMore} alt="" />
                        </a>
                      </div>
                      <div className="white-button scroll-to-section">
                        <a href="#contact">
                        <img  src={BUYNOW} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="right-image wow fadeInRight"
                  // data-wow-duration="1s"
                  // data-wow-delay="0.5s"
                  data-aos="fade-left"
                >
                  <img className="image1" src={ellipse3} alt="" />
                  <img className="image2" src={ellipse2} alt="" />
                  <img className="image3" src={layer3} alt="" />
                  <img className="image4" src={layer32} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
