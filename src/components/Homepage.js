import React from "react";
import { HomepageBanner, HomepageCallout } from "gatsby-theme-carbon";
import HomepageTemplate from "gatsby-theme-carbon/src/templates/Homepage";
//import { calloutLink } from "./Homepage.module.scss";

import HL from "./hololens_1.png";

const FirstLeftText = () => <p>Welcome Hackers</p>;

const FirstRightText = () => (
  <>
    <p>
      This is the <b>Landing Page</b> for the HackZurich 2022 challenge by Swiss
      Re and Microsoft.
      {/* <a className={calloutLink} href="/getting-started">
      Start here →
    </a> */}
    </p>
    <p style={{ paddingTop: `1.5rem` }}>
      This page is still under construction, but you’ll already find helpful
      information to be best prepared for our challenge. We highly recommend to
      check out the learning paths. Enjoy and revisit this page during the
      HackZurich 2022 for more instructions on the challenge.
    </p>
  </>
);

// const SecondLeftText = () => <p>Callout component</p>;

// const SecondRightText = () => (
//   <p>
//     You can also not use these components at all by not providing the callout
//     props to the template or writing your own template.
//     <a
//       className={calloutLink}
//       href="https://github.com/carbon-design-system/gatsby-theme-carbon/blob/main/packages/example/src/gatsby-theme-carbon/templates/Homepage.js"
//     >
//       Homepage source →
//     </a>
//   </p>
// );

const BannerText = () => (
  <>
    {" "}
    <h1>HackZurich 2022</h1>
    Swiss Re + Microsoft Challenge
  </>
);

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={HL} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  // SecondCallout: (
  //   <HomepageCallout
  //     leftText={SecondLeftText}
  //     rightText={SecondRightText}
  //     color="white"
  //     backgroundColor="#061f80"
  //   />
  // ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
