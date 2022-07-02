import { createClient, linkResolver } from "../../prismicio";
import Layout from "../../components/layout";
import type { NextPage } from "next";
import { PrismicRichText } from "@prismicio/react";

import * as prismicH from "@prismicio/helpers";

export async function getStaticPaths() {
  const client = createClient();
  const documents = await client.getAllByType("page");
  return {
    paths: documents.map((doc) => prismicH.asLink(doc, linkResolver)),
    fallback: true,
  };
}



const LandingPage: NextPage = ({ project }: any) => {
  return (
    <Layout>
      <h1>{project.uid}</h1>
      <PrismicRichText field={project.data.slices.primary} />
    </Layout>
  );
};
export async function getStaticProps({ params, previewData }: any) {
    const client = createClient({ previewData });
    const uid = params.uid;
  
    const project = await client.getByUID("projects", uid);
    return {
      props: { project },
    };
  }
export default LandingPage;
