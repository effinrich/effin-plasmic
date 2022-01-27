// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: veLEhZEbNdx4Wx5Pkd8v3H
// Component: BAzpkHn5aaPnS
import * as React from "react";
import Head from "next/head";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: Yqi64NZIIlAYY/component
import TopSection from "../../TopSection"; // plasmic-import: OnjbqnrOaenk7/component
import Section from "../../Section"; // plasmic-import: ZAGCSnG5W1QgT/component
import FeatureCard from "../../FeatureCard"; // plasmic-import: LNfhq3Dc6yaZu/component
import Testimonial from "../../Testimonial"; // plasmic-import: uiZsnTOFJEtBF4/component
import HomeCta from "../../HomeCta"; // plasmic-import: 7vtDOH-RWmgiV/component
import Footer from "../../Footer"; // plasmic-import: vhK2wJcBviyx9/component
import { useScreenVariants as useScreenVariants_1WPgHaFkIlcF2N } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 1wPgHaFkIlcF2N/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: veLEhZEbNdx4Wx5Pkd8v3H/projectcss
import sty from "./PlasmicHome.module.css"; // plasmic-import: BAzpkHn5aaPnS/css
import LightningIcon from "./icons/PlasmicIcon__Lightning"; // plasmic-import: 3AKQ9oXyMwjZPv/icon
import HammerIcon from "./icons/PlasmicIcon__Hammer"; // plasmic-import: bMMsqel-eewU2u/icon
import PencilIcon from "./icons/PlasmicIcon__Pencil"; // plasmic-import: bo9V4utyTdh4oN/icon
import SwapIcon from "./icons/PlasmicIcon__Swap"; // plasmic-import: TNTHyjNKMc7gpD/icon
import SlotIcon from "./icons/PlasmicIcon__Slot"; // plasmic-import: FwDV0OYSSqrMXS/icon
import CycleIcon from "./icons/PlasmicIcon__Cycle"; // plasmic-import: E5-JeXaq7i-VaB/icon
import FacebookLogoIcon from "./icons/PlasmicIcon__FacebookLogo"; // plasmic-import: KFjveCqcsx5voW/icon
import TinderLogoIcon from "./icons/PlasmicIcon__TinderLogo"; // plasmic-import: 7HP_Apd8aTo9d6/icon
import AirbnbLogoIcon from "./icons/PlasmicIcon__AirbnbLogo"; // plasmic-import: _seL24Uzib5cgR/icon
import HubspotLogoIcon from "./icons/PlasmicIcon__HubspotLogo"; // plasmic-import: 1Dn14SqBYMpmhA/icon
import AmazonLogoIcon from "./icons/PlasmicIcon__AmazonLogo"; // plasmic-import: 5S43A3NrAB9T01/icon

export const PlasmicHome__VariantProps = new Array();

export const PlasmicHome__ArgProps = new Array("profileMeta");

function PlasmicHome__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_1WPgHaFkIlcF2N()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{"Home...."}</title>
        <meta key="og:title" property="og:title" content={"Home...."} />

        <meta
          key="og:image"
          property="og:image"
          content={
            "https://site-assets.plasmic.app/086a7899888a1576f59851762dab3447.png"
          }
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___40Xm)}
          >
            <Header
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              className={classNames("__wab_instance", sty.header)}
            />

            <TopSection
              data-plasmic-name={"topSection"}
              data-plasmic-override={overrides.topSection}
              className={classNames("__wab_instance", sty.topSection)}
            />

            <Section
              className={classNames("__wab_instance", sty.section__twrTu)}
              subtitle={
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
              }
              title={"Explore the solutions"}
            />

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___0ZPh0)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__s1ZCj)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__eDisb
                  )}
                >
                  {"Powerful suite of tools"}
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__uS7R
                  )}
                >
                  {
                    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa."
                  }
                </div>

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__rT0Ef
                  )}
                  description={
                    "Taking collaboration to the next level with security and administrative features built for teams"
                  }
                  iconBack={
                    <LightningIcon
                      className={classNames(projectcss.all, sty.svg__dpjCk)}
                      role={"img"}
                    />
                  }
                  long={true}
                  title={"Building the Simple ecosystem"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__kNnuo
                  )}
                  description={
                    "Taking collaboration to the next level with security and administrative features built for teams"
                  }
                  iconBack={
                    <HammerIcon
                      className={classNames(projectcss.all, sty.svg__vH8Md)}
                      role={"img"}
                    />
                  }
                  long={true}
                  title={"Building the Simple Ecosystem"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__wJpWz
                  )}
                  description={
                    "Taking collaboration to the next level with security and administrative features built for teams"
                  }
                  iconBack={
                    <PencilIcon
                      className={classNames(projectcss.all, sty.svg__jqNoT)}
                      role={"img"}
                    />
                  }
                  long={true}
                  title={"Building the Simple Ecosystem"}
                />
              </p.Stack>

              <div className={classNames(projectcss.all, sty.freeBox__rvezP)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__xDfhu)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"none"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"100%"}
                  src={{
                    src: "/plasmic/simple_light_landing_page/images/simpleProject.png",
                    fullWidth: 1000,
                    fullHeight: 924,
                    aspectRatio: undefined
                  }}
                />

                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__evc0)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"none"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"90%"}
                  src={{
                    src: "/plasmic/simple_light_landing_page/images/task.png",
                    fullWidth: 1000,
                    fullHeight: 88,
                    aspectRatio: undefined
                  }}
                />
              </div>
            </p.Stack>

            <div className={classNames(projectcss.all, sty.freeBox__pDlB1)}>
              <div className={classNames(projectcss.all, sty.freeBox__uCH)} />

              <Section
                className={classNames("__wab_instance", sty.section___6M9Ns)}
                subtitle={
                  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
                }
                title={"How Simple works"}
              />

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__bSPlQ)}
              >
                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__fJKe2
                  )}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }
                  iconFront={
                    <SwapIcon
                      className={classNames(projectcss.all, sty.svg__aDFd4)}
                      role={"img"}
                    />
                  }
                  title={"Initial Contact"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__ufQtB
                  )}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }
                  iconFront={
                    <SlotIcon
                      className={classNames(projectcss.all, sty.svg__iVsDs)}
                      role={"img"}
                    />
                  }
                  title={"Discovery Session"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__hKv2C
                  )}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }
                  iconFront={
                    <CycleIcon
                      className={classNames(projectcss.all, sty.svg__fL37I)}
                      role={"img"}
                    />
                  }
                  title={"Contracting"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__cV6Yn
                  )}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }
                  iconFront={
                    <HammerIcon
                      className={classNames(projectcss.all, sty.svg__uBz90)}
                      role={"img"}
                    />
                  }
                  title={"Fast Prototyping"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__foksF
                  )}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }
                  iconFront={
                    <PencilIcon
                      className={classNames(projectcss.all, sty.svg___0QaOy)}
                      role={"img"}
                    />
                  }
                  title={"Design Phase"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__uqZo8
                  )}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }
                  iconFront={
                    <LightningIcon
                      className={classNames(projectcss.all, sty.svg__mqyIj)}
                      role={"img"}
                    />
                  }
                  title={"Develop & Launch"}
                />
              </p.Stack>

              <div className={classNames(projectcss.all, sty.freeBox__taDl5)} />
            </div>

            <Section
              className={classNames("__wab_instance", sty.section__gv9Pf)}
            />

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___7PObW)}
            >
              <FacebookLogoIcon
                className={classNames(projectcss.all, sty.svg__wfHRz)}
                role={"img"}
              />

              <TinderLogoIcon
                className={classNames(projectcss.all, sty.svg__mZmR)}
                role={"img"}
              />

              <AirbnbLogoIcon
                className={classNames(projectcss.all, sty.svg__gMvSd)}
                role={"img"}
              />

              <HubspotLogoIcon
                className={classNames(projectcss.all, sty.svg__b3UhA)}
                role={"img"}
              />

              <AmazonLogoIcon
                className={classNames(projectcss.all, sty.svg___4I8S0)}
                role={"img"}
              />
            </p.Stack>

            <Testimonial
              data-plasmic-name={"testimonial"}
              data-plasmic-override={overrides.testimonial}
              className={classNames("__wab_instance", sty.testimonial)}
            />

            <HomeCta
              data-plasmic-name={"homeCta"}
              data-plasmic-override={overrides.homeCta}
              className={classNames("__wab_instance", sty.homeCta)}
            />

            <Footer
              data-plasmic-name={"footer"}
              data-plasmic-override={overrides.footer}
              className={classNames("__wab_instance", sty.footer)}
            />
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "header", "topSection", "testimonial", "homeCta", "footer"],
  header: ["header"],
  topSection: ["topSection"],
  testimonial: ["testimonial"],
  homeCta: ["homeCta"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHome__ArgProps,
      internalVariantPropNames: PlasmicHome__VariantProps
    });

    return PlasmicHome__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHome";
  } else {
    func.displayName = `PlasmicHome.${nodeName}`;
  }
  return func;
}

export const PlasmicHome = Object.assign(
  // Top-level PlasmicHome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    topSection: makeNodeComponent("topSection"),
    testimonial: makeNodeComponent("testimonial"),
    homeCta: makeNodeComponent("homeCta"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicHome
    internalVariantProps: PlasmicHome__VariantProps,
    internalArgProps: PlasmicHome__ArgProps
  }
);

export default PlasmicHome;
/* prettier-ignore-end */
