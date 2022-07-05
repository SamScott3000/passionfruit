import type { NextPage } from "next";
import Layout from "../../components/layout";
import Link from "next/link";
import { createClient, linkResolver } from "../../prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "../../slices";
import { MdArrowBack } from "react-icons/md";

export default function about({ about }: any) {
  return (
    <>
      <Layout>
        <div className="fixed hover:pointer z-10 group hover:text-gray-600">
          <Link href="/">
            <button className="hover:pointer">
              <MdArrowBack className="z-50 inline-block group-hover:-translate-x-2 duration-200 pb-1" />
              Home
            </button>
          </Link>
        </div>

        <div className="my-16 flex">
          <div className="">
            <SliceZone slices={about?.data?.slices} components={components} />
          </div>
          <div className="bg-blue-500 p-16 rounded">hey</div>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps({ params, previewData }: any) {
  const client = createClient({ previewData });
  const about = await client.getSingle("about");
  return {
    props: { about },
  };
}
