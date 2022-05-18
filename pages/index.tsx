import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import TitleCard from "../components/cards/titleCard";
import ProjectCard from "../components/cards/projectCard";

const Projects: NextPage = () => {
  return (
    <div className="">
       <div className="absolute right-12 bottom-8">Logos</div>
        <div className="absolute right-12 top-8">Dark Mode</div>
          <TitleCard />
    </div>
  );
};

export default Projects;
