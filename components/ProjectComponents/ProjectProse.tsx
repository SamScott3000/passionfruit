import { motion } from "framer-motion";

function ProjectProse( props: any ) {
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
        <div className="flex mb-16">
            <p className="max-w-prose mx-auto">
              {props.children}
            </p>
          </div>
      </motion.div>
  );
}

export default ProjectProse;
