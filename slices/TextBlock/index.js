import React from "react";
import { PrismicRichText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import Image from "next/image";
import { PrismicLink } from "@prismicio/react";
import { createClient, linkResolver } from "../../prismicio";
import { FiArrowUpRight } from "react-icons/fi";
import components from '../../components/richTextComponents'

const docResolver = (link) => {
  if (link.link_type === "Document") {
    return linkResolver(link);
  }

  if (link.link_type === "Any") {
    return "";
  }

  return link.url;
};

const TextBlock = ({ slice }) => (
  <section className="max-w-prose mx-auto ">
    <PrismicRichText
      field={slice?.primary?.subHeading}
      components={components}
    />
    <PrismicRichText
      field={slice?.primary?.description}
      components={components}
    />
  </section>
);

export default TextBlock;
