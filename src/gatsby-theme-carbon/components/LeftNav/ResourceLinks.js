import React from "react";
import ResourceLinks from "gatsby-theme-carbon/src/components/LeftNav/ResourceLinks";

const links = [
  {
    title: "Hack Zurich 2022 Schedule",
    href: "https://www.hackzurich.com/schedule",
  },
  {
    title: "Swiss Re - Nat Cat",
    href: "https://www.swissre.com/campaigns/natcat-2020.html",
  },
  {
    title: "Swiss Re - FLOAT",
    href: "https://corporatesolutions.swissre.com/innovative-risk-solutions/weather-solutions/float.html",
  },
  {
    title: "Swiss Re - Risk Engineering Solutions",
    href: "https://corporatesolutions.swissre.com/insurance-solutions/services/risk-engineering-services.html",
  },
  {
    title: "Microsoft  - Mixed Reality",
    href: "https://docs.microsoft.com/en-us/windows/mixed-reality/discover/mixed-reality?ocid=AID3054426",
  },
  {
    title: "Microsoft.Source Newsletter",
    href: "https://aka.ms/hackzurich2022-newsletter",
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
