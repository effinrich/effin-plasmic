// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: veLEhZEbNdx4Wx5Pkd8v3H
// Component: LNfhq3Dc6yaZu
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: veLEhZEbNdx4Wx5Pkd8v3H/projectcss
import sty from "./PlasmicFeatureCard.module.css"; // plasmic-import: LNfhq3Dc6yaZu/css

export const PlasmicFeatureCard__VariantProps = new Array("long");

export const PlasmicFeatureCard__ArgProps = new Array(
  "iconFront",
  "title",
  "description",
  "iconBack"
);

function PlasmicFeatureCard__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root, {
        [sty.rootlong]: hasVariant(variants, "long", "long")
      })}
    >
      {(hasVariant(variants, "long", "long") ? false : true) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__lrMUc, {
            [sty.freeBoxlong__lrMUcIqa2M]: hasVariant(variants, "long", "long")
          })}
        >
          <div
            className={classNames(projectcss.all, sty.freeBox__hfkpT, {
              [sty.freeBoxlong__hfkpTiqa2M]: hasVariant(
                variants,
                "long",
                "long"
              )
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: (
                <svg
                  className={classNames(projectcss.all, sty.svg___47PhI)}
                  role={"img"}
                />
              ),

              value: args.iconFront
            })}
          </div>
        </div>
      ) : null}

      <div
        className={classNames(projectcss.all, sty.freeBox___0Tw0U, {
          [sty.freeBoxlong___0Tw0UIqa2M]: hasVariant(variants, "long", "long")
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Title",
          value: args.title,
          className: classNames(sty.slotTargetTitle, {
            [sty.slotTargetTitlelong]: hasVariant(variants, "long", "long")
          })
        })}

        {p.renderPlasmicSlot({
          defaultContents:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          value: args.description,
          className: classNames(sty.slotTargetDescription, {
            [sty.slotTargetDescriptionlong]: hasVariant(
              variants,
              "long",
              "long"
            )
          })
        })}
      </div>

      {(hasVariant(variants, "long", "long") ? true : false) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__otdpL, {
            [sty.freeBoxlong__otdpLiqa2M]: hasVariant(variants, "long", "long")
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <svg
                className={classNames(projectcss.all, sty.svg___0IgmT)}
                role={"img"}
              />
            ),

            value: args.iconBack
          })}
        </div>
      ) : null}
    </p.Stack>
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
      internalArgPropNames: PlasmicFeatureCard__ArgProps,
      internalVariantPropNames: PlasmicFeatureCard__VariantProps
    });

    return PlasmicFeatureCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFeatureCard";
  } else {
    func.displayName = `PlasmicFeatureCard.${nodeName}`;
  }
  return func;
}

export const PlasmicFeatureCard = Object.assign(
  // Top-level PlasmicFeatureCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicFeatureCard
    internalVariantProps: PlasmicFeatureCard__VariantProps,
    internalArgProps: PlasmicFeatureCard__ArgProps
  }
);

export default PlasmicFeatureCard;
/* prettier-ignore-end */
