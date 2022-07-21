import type { JSXMapSerializer } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";
import { PrismicLink } from "@prismicio/react";
import { linkResolver, repositoryName } from "../prismicio";
import Image from "next/image";

const richTextComponents = {
  heading1: ({ children }: any) => <h1>{children}</h1>,
  heading2: ({ children }: any) => (
    <h2 className="font-bold my-8 indent-4">{children}</h2>
  ),
  heading3: ({ children }: any) => (
    <h3 className="font-bold my-8 indent-4">{children}</h3>
  ),
  heading4: ({ children }: any) => <h4 className="italic font-serif">{children}</h4>,
  heading5: ({ children }: any) => <h5 className="mb-8 mt-4 text-neutral-500 font-light text-sm">{children}</h5>,
  heading6: ({ children }: any) => (
    <h6 className="font-bold my-8 indent-4">{children}</h6>
  ),
  paragraph: ({ children }: any) => <p className="my-8">{children}</p>,
  preformatted: ({ node }: any) => <pre>{JSON.stringify(node.text)}</pre>,
  strong: ({ children }: any) => <strong>{children}</strong>,
  em: ({ children }: any) => <em>{children}</em>,
  listItem: ({ children }: any) => <li>{children}</li>,
  oListItem: ({ children }: any) => <li className="my-4 ml-4 lg:mx-4">{children}</li>,
  list: ({ children }: any) => <ul>{children}</ul>,
  oList: ({ children }: any) => <ol className="list-decimal text-sm ">{children}</ol>,
  label: ({ node, children }: any) => {
    return <span className="{node.data.label}">{children}</span>;
  },
  span: ({ text }: any) => (text ? text : ""),
  hyperlink: ({ node, children }: any) => {
    console.log(node.data);
    const target = node.data.target
      ? `target="${node.data.target}" rel="noopener"`
      : "";
    const url = node.data.url;
    return (
      <a
        className="hover:underline text-blue-600 inline-block"
        target={target}
        href={url}
      >
        {children}
      </a>
    );
  },
};

export default richTextComponents;
