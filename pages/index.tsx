import { PrismicRichText, PrismicLink } from "@prismicio/react";
import { createClient, linkResolver } from "../prismicio";
import Layout from "../components/layout";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";

export default function Home({ homepage }: any) {
  const x = {
    paragraph: ({ children }: any) => <p className="font-serif italic">{children}</p>,
  };
  return (
    <Layout>
      <PrismicRichText field={homepage?.data?.introduction} components={x} />
      <div className="h-12" />
      <SliceZone slices={homepage?.data?.slices} components={components} />
    </Layout>
  );
}

export async function getStaticProps({ params, previewData }: any) {
  const client = createClient({ previewData });
  const homepage = await client.getSingle("homepage");
  return {
    props: { homepage },
  };
}
