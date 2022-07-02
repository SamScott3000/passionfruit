import { createClient } from "../../prismicio";
import { PrismicRichText } from "@prismicio/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Date } from "prismic-reactjs";
import { format } from "date-fns";

import Layout from "../../components/layout";
import { MdArrowBack } from "react-icons/md";

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
            <MdArrowBack className="z-50 inline-block group-hover:-translate-x-4 duration-200 pb-1" />
            Home
          </button>
        </Link>
      </div>
      <div className="mt-20">
        <div className="h-full">
          {project.map((x: any) => (
            <Link key={x.uid} href={`/projects/${x.uid}`}>
              <motion.div
                variants={item}
                className="flex group gap-4 md:gap-12 justify-between pt-4 duration-200 hover:cursor-pointer hover:text-white hover:bg-black "
              >
                <h1>
                  <PrismicRichText field={x.data.title} />
                </h1>
                <div className="flex-grow h-px lg:h-1 self-center bg-black group-hover:bg-white"></div>
                <h1>{format(Date(x.data.date), "yyyy")}</h1>
              </motion.div>
            </Link>
          ))}
        </div>
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
