import type { JSXMapSerializer } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";
import { PrismicLink } from "@prismicio/react";
import { linkResolver, repositoryName } from "../prismicio";
import Image from "next/image";

const richTextComponents: JSXMapSerializer = {
  heading1: ({ children }: any) => <h1>${children}</h1>,
  heading2: ({ children }: any) => <h2>${children}</h2>,
  heading3: ({ children }: any) => <h3>${children}</h3>,
  heading4: ({ children }: any) => <h4>${children}</h4>,
  heading5: ({ children }: any) => <h5>${children}</h5>,
  heading6: ({ children }: any) => <h6>${children}</h6>,
  paragraph: ({ children }: any) => <p>${children}</p>,
  preformatted: ({ node }: any) => <pre>${JSON.stringify(node.text)}</pre>,
  strong: ({ children }: any) => <strong>${children}</strong>,
  em: ({ children }: any) => <em>${children}</em>,
  listItem: ({ children }: any) => <li>${children}</li>,
  oListItem: ({ children }: any) => <li>${children}</li>,
  list: ({ children }: any) => <ul>${children}</ul>,
  oList: ({ children }: any) => <ol>${children}</ol>,
  image: ({ key, node }: any) => (
    <Image
      key={key}
      src={node.url}
      alt={node.alt ?? ""}
      width={640}
      height={640 * (node.dimensions.height / node.dimensions.width)}
      className=""
    />
  ),

  hyperlink: ({ node, children, key }: any) => {
    const target = node.data.target
      ? `target="${node.data.target}" rel="noopener"`
      : "";
    const url = linkResolver(node.data);
    return (
      <PrismicLink href={url} key={key}>
        ${children}
      </PrismicLink>
    );
  },
  label: ({ node, children }: any) => {
    return <span className="${node.data.label}">${children}</span>;
  },
  span: ({ text }: any) => (text ? text : ""),
};

export default richTextComponents;
