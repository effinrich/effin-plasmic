// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: veLEhZEbNdx4Wx5Pkd8v3H
// Component: lSTIGdfMG8akB
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: veLEhZEbNdx4Wx5Pkd8v3H/projectcss
import sty from "./PlasmicLinkButton.module.css"; // plasmic-import: lSTIGdfMG8akB/css

export const PlasmicLinkButton__VariantProps = new Array("type");

export const PlasmicLinkButton__ArgProps = new Array("text", "href");

function PlasmicLinkButton__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <p.PlasmicLink
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.a, projectcss.root_reset, sty.root, {
        [sty.roottype_outlineBlue]: hasVariant(variants, "type", "outlineBlue"),
        [sty.roottype_small]: hasVariant(variants, "type", "small"),
        [sty.roottype_solidBlack]: hasVariant(variants, "type", "solidBlack"),
        [sty.roottype_solidBlue]: hasVariant(variants, "type", "solidBlue")
      })}
      component={Link}
      href={args.href !== undefined ? args.href : "#"}
      platform={"nextjs"}
    >
      {p.renderPlasmicSlot({
        defaultContents: "Do the thing",
        value: args.text,
        className: classNames(sty.slotTargetText, {
          [sty.slotTargetTexttype_outlineBlue]: hasVariant(
            variants,
            "type",
            "outlineBlue"
          ),

          [sty.slotTargetTexttype_solidBlack]: hasVariant(
            variants,
            "type",
            "solidBlack"
          ),

          [sty.slotTargetTexttype_solidBlue]: hasVariant(
            variants,
            "type",
            "solidBlue"
          )
        })
      })}
    </p.PlasmicLink>
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
      internalArgPropNames: PlasmicLinkButton__ArgProps,
      internalVariantPropNames: PlasmicLinkButton__VariantProps
    });

    return PlasmicLinkButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLinkButton";
  } else {
    func.displayName = `PlasmicLinkButton.${nodeName}`;
  }
  return func;
}

export const PlasmicLinkButton = Object.assign(
  // Top-level PlasmicLinkButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicLinkButton
    internalVariantProps: PlasmicLinkButton__VariantProps,
    internalArgProps: PlasmicLinkButton__ArgProps
  }
);

export default PlasmicLinkButton;
/* prettier-ignore-end */
