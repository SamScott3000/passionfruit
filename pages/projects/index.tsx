import type { NextPage } from "next";
import ProjectCard from "../../components/cards/projectCard";

const Projects: NextPage = () => {
  return (
    <div className="bg-sky-400 h-screen">
      <ProjectCard />
    </div>
  );
};

export default Projects;
