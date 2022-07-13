import { createClient, linkResolver } from "../../prismicio";
import Layout from "../../components/layout";
import { SliceZone, PrismicLink } from "@prismicio/react";
import { components } from "../../slices";
import * as prismicH from "@prismicio/helpers";
import Image from "next/image";
import { PrismicRichText } from "@prismicio/react";
import ProjectBack from "../../components/ProjectComponents/ProjectBack";
import Footer from "../../components/Footer";
import Hamburger from "../../components/Hamburger";
import { SiNextdotjs } from "react-icons/si";
import icons from "../../components/icons";

export default function LandingPage({ project }: any) {
  console.log(project?.data?.vimeoURLid);
  return (
    <>
      <Layout>
        <ProjectBack />
        <Hamburger />
        <div className="max-w-prose mx-auto">
          <h2 className="text-5xl mt-36 font-light">
            <PrismicRichText field={project?.data?.title} />
          </h2>
          <div className="flex mt-4 mb-8 items-start justify-between">
            <h3 className="text-neutral-500 italic font-light">
              <PrismicRichText field={project?.data?.subHeading} />
            </h3>
            {/*<div className="flex items-center gap-4">
              <div><SiNextdotjs className="w-6 h-6"/></div>
              <div className="">{icons.NextJs}</div>
              <div className="rounded-full w-4 h-4 bg-black"></div>
              <div className="rounded-full w-4 h-4 bg-black"></div>
            </div>*/}
          </div>

          {project?.data?.vimeoURLid !== undefined &&
          project?.data?.vimeoURLid !== null ? (
            <div className="relative w-full aspect-video ">
              <iframe
                src={`https://player.vimeo.com/video/${project?.data?.vimeoURLid}?h=h=8d81e162f9&amp;portrait=0&amp;dnt&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;color=FFFFFF`}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="absolute w-full h-full rounded"
                height={200}
                title="generic"
              ></iframe>
            </div>
          ) : project?.data?.coverImage !== undefined &&
            project?.data?.coverImage !== null ? (
            <Image
              src={project?.data?.coverImage?.url ?? ""}
              alt={project?.data?.coverImage?.alt ?? ""}
              width={project?.data?.coverImage?.dimensions?.width}
              height={project?.data?.coverImage?.dimensions?.height}
              className="my-8 rounded"
              quality={100}
            />
          ) : null}
          <div className="mt-4 text-neutral-500 font-light text-sm">
            <PrismicRichText field={project?.data?.description} />
          </div>
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
