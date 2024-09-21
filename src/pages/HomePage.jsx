import { Box } from "@chakra-ui/react";
import { WhatWeDo } from "../components/homePage/WhatWeDo.jsx";
import { SiteForYourBus } from "../components/homePage/SiteForYourBussiness.jsx";
import { Cases } from "../components/homePage/Cases.jsx";
import { Prices } from "../components/homePage/Prices.jsx";
import { Services } from "../components/homePage/Services.jsx";
import { Guarantees } from "../components/homePage/Guarantees.jsx";
import { FeedbackForm2 } from "../components/homePage/FeedbackForm2.jsx";
import { OurWork } from "../components/homePage/OurWork.jsx";
import { TopYourSite } from "../components/homePage/TopYourSite.jsx";
import { FAQ } from "../components/homePage/FAQ.jsx";
import { Description } from "../components/homePage/Description.jsx";

function filter(items) {
  return items.slice(0, 3);
}

const HomePage = () => {
  return (
    <Box>
      <Description />
      <WhatWeDo />
      <SiteForYourBus />
      <Cases />
      <Prices />
      <Services />
      <Guarantees />
      <FeedbackForm2 />
      <OurWork />
      <TopYourSite />
      <FAQ />
    </Box>
  );
};

export default HomePage;
