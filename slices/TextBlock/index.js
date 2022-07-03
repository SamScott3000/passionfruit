import React from "react";
import { PrismicRichText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import Image from "next/image";
import { PrismicLink } from "@prismicio/react";


const components = {
  heading1: ({ children }) => <h1>{children}</h1>,
  heading2: ({ children }) => <h2 className="font-bold my-8 indent-4">{children}</h2>,
  heading3: ({ children }) => <h3 className="font-bold my-8 indent-4">{children}</h3>,
  heading4: ({ children }) => <h4>{children}</h4>,
  heading5: ({ children }) => <h5>{children}</h5>,
  heading6: ({ children }) => <h6 className="font-bold my-8 indent-4">{children}</h6>,
  paragraph: ({ children }) => <p className="my-8">{children}</p>,
  preformatted: ({ node }) => <pre>{JSON.stringify(node.text)}</pre>, 
  strong: ({ children }) => <strong>{children}</strong>,
  em: ({ children }) => <em>{children}</em>,
  listItem: ({ children }) => <li>{children}</li>,
  oListItem: ({ children }) => <li>{children}</li>,
  list: ({ children }) => <ul>{children}</ul>,
  oList: ({ children }) => <ol>{children}</ol>,
  hyperlink: ({ node, children, key }) => {
    const target = node.data.target
      ? `target="{node.data.target}" rel="noopener"`
      : "";
    const url = linkResolver(node.data);
    return (
      <PrismicLink href={url} key={key}>
        {children}
      </PrismicLink>
    );
  },
  label: ({ node, children }) => {
    return <span className="{node.data.label}">{children}</span>;
  },
  span: ({ text }) => (text ? text : ""),
};

const TextBlock = ({ slice }) => (
  <section className="max-w-prose mx-auto">
        <PrismicRichText
          field={slice.primary.subHeading}
          components={components}
        />
        <PrismicRichText
          field={slice.primary.description}
          components={components}
        />
  </section>
);

export default TextBlock;
