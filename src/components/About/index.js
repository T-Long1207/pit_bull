import React from "react";

import Layer13 from "../../assets/images2/layer_13.png";
import address from "../../assets/images2/Rectangle3.png"
import copy from "../../assets/images2/copy.png"
import safu from "../../assets/images2/SAFU.png"
import kyc from "../../assets/images2/KYC.png"
import audit from "../../assets/images2/AUDIT.png"

const About = (props) => {
  const { aboutRef } = props;
  return (
    <div id="about" ref={aboutRef} className="about-us section">
      <div className="container">
        <div class="container h-100">
          <div class="row align-items-center h-100">
            <div class="col-8 mx-auto">
              <div class="about-us-card h-100">
                {/* <img src={Layer13} alt="" /> */}
                <div className="row">
                  <div class="col-lg-4 mb-4">
                    <div class="text_contract">
                      <h2> Contract</h2>
                    </div>
                  </div>
                  <div class="col-lg-4 mb-4">
                    <div class="h-100">
                      <img src={address} />
                    </div>
                  </div>
                  <div class="col-lg-4 mb-4">
                    <div class="copy">
                      <img src={copy} />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div class="col-lg-6 mb-4">
                    <div class="about-us des">
                      <h2> SAFU, KYC & AUDIT</h2>
                      <h4> SECURITY AND SAFETY CERTIFICATION</h4>
                      <p>Our project is completely safe because we have audited
                        the project and KYC DEV Team by the leadin audit company</p>
                      <p>In particular, we have added a Safu badge to ensure extreme safety</p>
                    </div>
                    <div className="row">
                <div class="col-lg-4 mb-4">
                <img class="rounded mx-auto d-block" src={safu} />
                  </div>
                  <div class="col-lg-4 mb-4">
                  <img class="rounded mx-auto d-block" src={kyc} />
                  </div>
                  <div class="col-lg-4 mb-4">
                  <img class="rounded mx-auto d-block" src={audit} />
                  </div>
                </div>
                  </div>
                  <div class="col-lg-6 mb-4">
                    <div class="about-us-image">
                      <img class="rounded mx-auto d-block" src={Layer13} />
                    </div>
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

export default About;
