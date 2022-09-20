import React from "react";
import HeadingLineDec from "../../assets/images/heading-line-dec.png";
import main from "../../assets/images2/main.png";
import chain from '../../assets/images2/chain.png'
import Newchainforallyounee from '../../assets/images2/Newchainforallyounee.png'
import OPENDDAP from '../../assets/images2/OPENDDAP.png'

import icon1 from '../../assets/images2/icon1.png'
import icon3 from '../../assets/images2/icon3.png'
import icon4 from '../../assets/images2/icon4.png'
import icon5 from '../../assets/images2/icon5.png'
import icon6 from '../../assets/images2/icon6.png'


const Services = (props) => {
  const { servicesRef } = props;
  return (
    <div id="services" ref={servicesRef} className="services section">
      <img className="main" src={main} alt="main" />
      <div className="container">
        <div className="row">

          <div class="col-lg-6 mb-4">
            <div class="h-100">
              <a href="#"><img class="image_service" src={chain} alt="" /></a>
            </div>
          </div>
          <div class="col-lg-6 mb-4">
            <div class="new_chain h-100">
              {/* <h2 class="text_chain card-text">New chain For</h2>
              <h2 class="card-text">ALl YOU NEED</h2> */}
              <img class="rounded mx-auto d-block" src={Newchainforallyounee} />
              <p>SPC is the future of meme coins and has long surpassrd Dogecoin in terms of capitalization and token features.
                However, that is not enough for a top 10 token by capitalization. Therefore, SpitzChain was born to create a
                support system for NFT projects, Gamefi, and DeFi with the network main token SPC, thereby increasing the value for SPC holders.
              </p>
              <img class="open_dapp rounded mx-auto d-block" src={OPENDDAP} />
            </div>
          </div>
        </div>

      </div>
      <div className="container">
        <div className="row">
          <div class="col-lg-6 mb-4">
            <div class="card_item h-100">
              <div class="row">
                <div class="col-md-3">
                  <img src={icon1} alt="" />
                </div>
                <div class="col-md-9">
                  <div class="row">
                    <h4> The platform for NFT and GameFi </h4>
                    <p>SpitzChain offering an excellent
                      platform for NFT and GameFi development and an easy launching process for NFT, GameFi or DeFi. $SPC holders are prioritized to join these quality projects early</p>
                  </div>
                </div>
              </div>


            </div>
          </div>
          <div class="col-lg-6 mb-4">
            <div class="card_item h-100">
              <div class="row">
                <div class="col-md-3">
                  <img src={icon1} alt="" />
                </div>
                <div class="col-md-9">
                  <div class="row">
                    <h4> Huge Community </h4>
                    <p>Spitz Chain has been attracting great attention from the dog lover community on telegram and twitter.
                      Especially from meme coin lovers, like Pitbull Inu, Shiba, Chiahuahua...</p>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>

        <div className="row">
          <div class="col-lg-6 mb-4">
            <div class="card_item h-100">
              <div class="row">
                <div class="col-md-3">
                  <img src={icon3} alt="" />
                </div>
                <div class="col-md-9">
                  <div class="row">
                    <h4>$SPC is Gas on SpitzChain</h4>
                    <p>Gas pay by SPC is the best way to increase the value of this token. Part of the gas will be burned, and SPC will increase in price</p>
                  </div>
                </div>
              </div>


            </div>
          </div>
          <div class="col-lg-6 mb-4">
            <div class="card_item h-100">
              <div class="row">
                <div class="col-md-3">
                  <img src={icon4} alt="" />
                </div>
                <div class="col-md-9">
                  <div class="row">
                    <h4>SHIB Bounty Hunt & Airdrop </h4>
                    <p>Earn $SPC by participating in the bounty campaign of SpitzChain. The Blockchain Interactions crypto rewards event brings the important mission of scalability and sustainability of the SpitzChain Network</p>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>

        <div className="row">
          <div class="col-lg-6 mb-4">
            <div class="card_item h-100">
              <div class="row">
                <div class="col-md-3">
                  <img src={icon5} alt="" />
                </div>
                <div class="col-md-9">
                  <div class="row">
                    <h4>Cheapest fee and 50,000 TPS</h4>
                    <p>SpitzChain improves scalability by using blockchain's underlying proof-of-stake (PoS)
consensus. The fee estimated is only 0.1$, and the System currently supports 50,000
TPS (Transactions per second)</p>
                  </div>
                </div>
              </div>


            </div>
          </div>
          <div class="col-lg-6 mb-4">
            <div class="card_item h-100">
              <div class="row">
                <div class="col-md-3">
                  <img src={icon6} alt="" />
                </div>
                <div class="col-md-9">
                  <div class="row">
                    <h4>Administration via DAO Voting</h4>
                    <p>With the mission of empowering chain governance to the community, SpitzChain builds smart DAO, allowing users to participate in voting for each decision, ensuring complete decentralization.</p>
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

export default Services;
