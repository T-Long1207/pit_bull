import React from "react";

import Banner from "../../components/Banner";
import Services from "../../components/Services";
import About from "../../components/About";
import Clients from "../../components/Clients";
import Pricing from "../../components/Pricing";
import Information from "../../components/Information/information";

const Home = (props) => {
  const { servicesRef, aboutRef, pricingRef } = props;
  return (
    <>
      <Banner />
      <Services servicesRef={servicesRef} />
      <About />
      {/* <Clients />
      <Pricing pricingRef={pricingRef} /> */}
      <Information />
    </>
  );
};

export default Home;
