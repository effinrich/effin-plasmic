// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: veLEhZEbNdx4Wx5Pkd8v3H
// Component: mvlur8a2gmDqPD
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import BaseCard from "../../BaseCard"; // plasmic-import: Ml3nYOSauLOC_c/component
import Bullet from "../../Bullet"; // plasmic-import: vwCCxvXTuQiAAY/component
import LinkButton from "../../LinkButton"; // plasmic-import: lSTIGdfMG8akB/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: veLEhZEbNdx4Wx5Pkd8v3H/projectcss
import sty from "./PlasmicPlan.module.css"; // plasmic-import: mvlur8a2gmDqPD/css

export const PlasmicPlan__VariantProps = new Array();

export const PlasmicPlan__ArgProps = new Array(
  "price",
  "name",
  "description",
  "children"
);

function PlasmicPlan__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <BaseCard
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames("__wab_instance", sty.root)}
    >
      <div className={classNames(projectcss.all, sty.freeBox__cuyN)}>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__ibgEe)}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Basic",
            value: args.name,
            className: classNames(sty.slotTargetName)
          })}

          {p.renderPlasmicSlot({
            defaultContents: (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__y7QF9
                )}
              >
                {"$10"}
              </div>
            ),

            value: args.price
          })}

          {p.renderPlasmicSlot({
            defaultContents: (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__on7Hw)}
              >
                <Bullet
                  className={classNames("__wab_instance", sty.bullet___3CtiB)}
                />

                <Bullet
                  className={classNames("__wab_instance", sty.bullet__eYq)}
                />

                <Bullet
                  className={classNames("__wab_instance", sty.bullet___3G493)}
                />
              </p.Stack>
            ),

            value: args.description
          })}

          <div className={classNames(projectcss.all, sty.freeBox__ndwy)}>
            {p.renderPlasmicSlot({
              defaultContents: (
                <LinkButton text={"Get started"} type={"outlineBlue"} />
              ),

              value: args.children
            })}
          </div>
        </p.Stack>
      </div>
    </BaseCard>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPlan__ArgProps,
      internalVariantPropNames: PlasmicPlan__VariantProps
    });

    return PlasmicPlan__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPlan";
  } else {
    func.displayName = `PlasmicPlan.${nodeName}`;
  }
  return func;
}

export const PlasmicPlan = Object.assign(
  // Top-level PlasmicPlan renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicPlan
    internalVariantProps: PlasmicPlan__VariantProps,
    internalArgProps: PlasmicPlan__ArgProps
  }
);

export default PlasmicPlan;
/* prettier-ignore-end */