import React from "react";
import Header from "gatsby-theme-carbon/src/components/Header";

const CustomHeader = (props) => (
  <Header isSwitcherEnabled={false}>
    {console.log(props)}
    Hack Zurich 2022&nbsp;<span>SwissRe + Microsoft Challenge</span>
  </Header>
);

export default CustomHeader;
