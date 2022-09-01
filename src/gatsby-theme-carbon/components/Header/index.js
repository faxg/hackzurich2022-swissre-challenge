import React from "react";
import Header from "gatsby-theme-carbon/src/components/Header";

const CustomHeader = (props) => (
  <Header isSwitcherEnabled={false}>
    HackZurich 2022&nbsp;<span>SwissRe + Microsoft</span>
  </Header>
);

export default CustomHeader;
