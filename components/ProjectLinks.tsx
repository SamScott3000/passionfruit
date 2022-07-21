import { motion } from "framer-motion";

function ProjectLinks(props: any) {
  const item = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 },
    transition: { type: "ease" },
  };
  return (
    <motion.div
      variants={item}
      className="flex group gap-4 md:gap-12 justify-between pt-4 duration-200 hover:cursor-pointer hover:text-white hover:bg-black "
    >
      <h1 className="">{props.name}</h1>
      <div className="flex-grow h-px lg:h-1 self-center bg-black group-hover:bg-white"></div>
      <h1 className="">{props.date}</h1>
    </motion.div>
  );
}

export default ProjectLinks;
