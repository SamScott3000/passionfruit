import { motion } from "framer-motion";
import { title } from "process";

function ProjectTitle( props: any ) {
  const item = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 },
    transition: { duration: 0.2, type: "ease" },
  };
  return (
      <motion.div
        variants={item}
        className='duration-200'
        >
        <div className="duration-200 flex gap-12 mt-20">
            <div className="">
              <h1>{props.title}</h1>
              <h4 className="pl-4 pt-4">{props.subtitle}</h4>
            </div>
          </div>
      </motion.div>
  );
}

export default ProjectTitle;
