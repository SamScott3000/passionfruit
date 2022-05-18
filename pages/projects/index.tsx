import type { NextPage } from "next";
import ProjectCard from "../../components/cards/projectCard";
import Link from "next/link";
import Layout from "../../components/layout";
import { MdArrowBack} from "react-icons/md";

const Projects: NextPage = () => {
  return (
    <div className="">
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
            <ProjectCard />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Projects;
