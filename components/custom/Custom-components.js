import React from "react";

// core components
import Banner2 from "../banner/Banner2";

// sections for this page
import BannerComponent from "./sections/bannercomponent";
import PortfolioComponent from "./sections/portfoliocomponent";
import TeamComponent from "./sections/teamcomponent";
import C2aComponent from "./sections/c2acomponent";
import ContactComponent from "./sections/contactcomponent";

const CustomComponents = () => {
  return (
    <div>
      <Banner2 />
      <BannerComponent />
      <PortfolioComponent />
      <TeamComponent />
      <C2aComponent />
      <ContactComponent />
    </div>
  );
};

export default CustomComponents;
