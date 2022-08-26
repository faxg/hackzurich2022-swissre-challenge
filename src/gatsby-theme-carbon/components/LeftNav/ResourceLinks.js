import React from "react";
import ResourceLinks from "gatsby-theme-carbon/src/components/LeftNav/ResourceLinks";

const links = [
  {
    title: "Hack Zurich 2022 Schedule",
    href: "https://www.hackzurich.com/schedule",
  },
  {
    title: "SwissRe - Nat Cat",
    href: "https://www.swissre.com/campaigns/natcat-2020.html",
  },
  {
    title: "Microsoft  - Mixed Reality",
    href: "https://docs.microsoft.com/en-us/windows/mixed-reality/discover/mixed-reality",
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
