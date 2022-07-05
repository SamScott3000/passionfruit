import { createClient, linkResolver } from "../../prismicio";
import Layout from "../../components/layout";
import { SliceZone } from "@prismicio/react";
import { components } from "../../slices";
import * as prismicH from "@prismicio/helpers";
import Image from "next/image";
import { PrismicRichText } from "@prismicio/react";
import ProjectBack from "../../components/ProjectComponents/ProjectBack";
import Footer from "../../components/Footer";
import Hamburger from "../../components/Hamburger";

export default function LandingPage({ project }: any) {
  return (
    <>
      <Layout>
        <ProjectBack />
        <Hamburger/>
        <div className="max-w-prose mx-auto">
          <h2 className="text-5xl mt-36 font-light">
            <PrismicRichText field={project?.data?.title} />
          </h2>
          <div className="flex mt-4 mb-8 items-center justify-between">
            <h3 className="text-gray-500 italic font-light">
              <PrismicRichText field={project?.data?.subHeading} />
            </h3>
            <div className="flex items-center gap-4">
              <div className="rounded-full w-4 h-4 bg-black"></div>
              <div className="rounded-full w-4 h-4 bg-black"></div>
              <div className="rounded-full w-4 h-4 bg-black"></div>
              <div className="rounded-full w-4 h-4 bg-black"></div>
            </div>
          </div>
          {project?.data?.coverImage?.url !== undefined ? (
            <Image
              src={project?.data?.coverImage?.url ?? ""}
              alt={project?.data?.coverImage?.alt ?? ""}
              width={project?.data?.coverImage?.dimensions?.width}
              height={project?.data?.coverImage?.dimensions?.height}
              className="my-8 rounded"
              quality={100}
            />
          ) : null}
        </div>
        <SliceZone slices={project?.data?.slices} components={components} />
      </Layout>
      <Footer />
    </>
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
  const project = await client.getByUID("projects", uid);
  return {
    props: { project },
  };
}
