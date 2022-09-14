import React from "react";
import Footer from "gatsby-theme-carbon/src/components/Footer";
import { withPrefix } from "gatsby";

const Content = ({ buildTime }) => (
  <>
    <p>Site build time: {buildTime}</p>
  </>
);

const links = {
  firstCol: [
    {
      href: "http://microsoft.com/en-us/research/?ocid=AID3054426",
      linkText: "Microsoft Research",
    },
    {
      href: "https://www.microsoft.com/en-us/research/lab/mixed-reality-ai-zurich/?ocid=AID3054426",
      linkText: "Microsoft Mixed Reality & AI Lab - Zurich",
    },
    {
      href: "https://docs.microsoft.com/en-us/windows/mixed-reality/?ocid=AID3054426",
      linkText: "Mixed Reality documentation",
    },
  ],
  secondCol: [],
};

const CustomFooter = () => (
  <Footer
    links={links}
    Content={Content}
    Logo={() => (
      <img
        className={"logo"}
        src={withPrefix("/images/logo.svg")}
        alt="Logo"
      ></img>
    )}
  />
);

export default CustomFooter;
