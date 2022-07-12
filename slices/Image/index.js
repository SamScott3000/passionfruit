import React from "react";
import { PrismicRichText } from "@prismicio/react";
import NextImage from "next/image";
import components from "../../components/richTextComponents";

const Image = ({ slice }) => (
  <section className="max-w-prose mx-auto my-8 ">
    <div className="shadow-lg w-fit rounded flex mx-auto">
      <NextImage
        src={slice?.primary?.image?.url ?? ""}
        alt={slice?.primary?.image?.alt ?? ""}
        width={slice?.primary?.image?.dimensions?.width}
        height={slice?.primary?.image?.dimensions?.height}
        className="my-8 rounded "
        quality={100}
      />
    </div>
    <PrismicRichText
      field={slice?.primary?.imageDescription}
      components={components}
    />
  </section>
);

export default Image;
