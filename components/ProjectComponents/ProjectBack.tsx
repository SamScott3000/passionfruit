import Link from "next/link";
import { MdArrowBack } from "react-icons/md";

function ProjectBack(props: any) {
  const item = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 },
    transition: { duration: 0.2, type: "ease" },
  };
  return (
    <div className="fixed hover:pointer z-10 group hover:text-gray-600">
      <Link href="/projects">
        <button className="pr-2 hover:pointer">
          <MdArrowBack className="z-50 inline-block group-hover:-translate-x-2 duration-200 pb-1" />
          Projects
        </button>
      </Link>
    </div>
  );
}

export default ProjectBack;
