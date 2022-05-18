import type { NextPage } from "next";
import Layout from "../../components/layout";
import Image from "next/image";
import Footer from "../../components/footer";
import Link from "next/link";
import { motion } from "framer-motion";
import ProjectTitle from "../../components/ProjectComponents/ProjectTitle";
import ProjectImages from "../../components/ProjectComponents/ProjectImages";
import ProjectProse from "../../components/ProjectComponents/ProjectProse";
import ProjectBack from "../../components/ProjectComponents/ProjectBack";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <ProjectBack/>
        <div className="bg-white flex flex-col md:gap-8 gap-4">
          <ProjectTitle title="Generic" subtitle="something" />
          <ProjectImages
            number={2}
            source="/images/1.jpeg"
            width="1920"
            height="1080"
            source2="/images/image.jpeg"
            width2="1280"
            height2="800"
          />
          <ProjectProse>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ProjectProse>
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default Home;
