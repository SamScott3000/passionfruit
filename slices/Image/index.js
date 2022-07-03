import React from "react";
import { PrismicRichText } from "@prismicio/react";
import NextImage from "next/image";

const Image = ({ slice }) => (
  <section className="max-w-prose mx-auto my-8 shadow-lg shadow-blue-500/25 rounded">
    <NextImage
      src={slice?.primary?.image?.url ?? ""}
      alt={slice?.primary?.image?.alt ?? ""}
      width={slice?.primary?.image?.dimensions?.width}
      height={slice?.primary?.image?.dimensions?.height}
      className="my-8 rounded"
      quality={100}
    />
  </section>
);

export default Image;
