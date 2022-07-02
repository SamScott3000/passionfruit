import { createClient, linkResolver } from "../../prismicio";
import Layout from "../../components/layout";
import type { NextPage } from "next";
import { PrismicRichText } from "@prismicio/react";
import { SliceZone } from '@prismicio/react'
import { components } from '../../slices'


import * as prismicH from "@prismicio/helpers";

export default function LandingPage({ project }: any) {
  return (
    <Layout>
      <h1>{project?.uid}</h1>
      <SliceZone slices={project?.data?.slices} components={ components } />
    </Layout>
  );
}

export async function getStaticPaths({ previewData }: any) {
  const client = createClient({ previewData });
  const documents = await client.getAllByType("page");
  return {
    paths: documents.map((doc) => prismicH.asLink(doc, linkResolver)),
    fallback: true,
  };
}

export async function getStaticProps({ params, previewData }: any) {
  const client = createClient({ previewData });
  const uid = params.uid;
  console.log(uid);
  const project = await client.getByUID("projects", uid);
  return {
    props: { project },
  };
}
