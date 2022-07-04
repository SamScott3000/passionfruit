import { PrismicRichText, PrismicLink } from "@prismicio/react";
import { createClient, linkResolver } from "../prismicio";
import Layout from "../components/layout";
import { SliceZone } from "@prismicio/react";
import { components }from '../slices'

export default function Home({ homepage }: any) {
  return (
    <Layout>
        <p className="italic font-serif">
        <PrismicRichText
          field={homepage?.data?.introduction}
        />
        </p>
        <div className="h-12"/>
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
