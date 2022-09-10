import React from "react";
import Footer from "gatsby-theme-carbon/src/components/Footer";

const Content = ({ buildTime }) => (
  <>
    <p>Site build time: {buildTime}</p>
  </>
);

const links = {
  firstCol: [
    {
      href: "http://microsoft.com/en-us/research/",
      linkText: "Microsoft Research",
    },
    {
      href: "https://www.microsoft.com/en-us/research/lab/mixed-reality-ai-zurich/",
      linkText: "Microsoft Mixed Reality & AI Lab - Zurich",
    },
    {
      href: "https://docs.microsoft.com/en-us/windows/mixed-reality/",
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
      <img className={"logo"} src="/images/logo.svg" alt="Logo"></img>
    )}
  />
);

export default CustomFooter;
