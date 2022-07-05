import { createClient } from "../../prismicio";
import { PrismicRichText } from "@prismicio/react";
import { motion } from "framer-motion";
import Link from 'next/link'
import { Date } from "prismic-reactjs";
import { format } from "date-fns";
import Image from "next/image";
import Layout from "../../components/layout";
import { MdArrowBack } from "react-icons/md";
import Hamburger from "../../components/Hamburger";

const components = {
  heading1: ({ children }: any) => <h1>{children}</h1>,
  heading2: ({ children }: any) => <h2 className="lg:text-6xl">{children}</h2>,
};

const LandingPage = ({ project }: any) => {
  const item = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 },
    transition: { type: "ease" },
  };

  return (
    <Layout>
      <div className="fixed hover:pointer z-10 group hover:text-gray-600">
        <Link href="/">
          <button className="hover:pointer">
            <MdArrowBack className="z-40 inline-block group-hover:-translate-x-2 duration-200 pb-1" />
            Home
          </button>
        </Link>
      </div>
      <Hamburger/>
      <div className="mt-20 flex flex-col  duration-700">
        <div className="h-px bg-black " />
        {project.map((x: any) => (
          <Link key={x.uid} href={`/projects/${x.uid}`}>
            <div className=" hover:cursor-pointer hover:bg-black hover:text-white duration-700">
              <div className="items-end flex gap-4 group rounded-full py-2 px-4">
                <PrismicRichText field={x.data.title} components={components} />
                {x?.data?.coverImage?.url !== undefined ? (
                  <div className="h-6 lg:h-16 flex-grow duration-700 relative rounded-full">
                    <Image
                      src={x.data?.coverImage?.url ?? ""}
                      alt={x.data?.coverImage?.alt ?? ""}
                      className="group-hover:invert duration-700"
                      quality={25}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                ) : null}
                <p className="font-serif">
                  &#40;{format(Date(x.data.date), "yyyy")}&#41;
                </p>
              </div>
              <div className="h-px bg-black " />
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export async function getStaticProps(previewData: any) {
  const client = createClient({ previewData });

  const project = await client.getAllByType("projects", {
    orderings: "my.projects.order",
  });

  return {
    props: { project },
  };
}
export default LandingPage;
