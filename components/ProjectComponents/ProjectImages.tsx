import { motion } from "framer-motion";
import Image from "next/image";

function ProjectImages(props: any) {
  const item = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 },
    transition: { duration: 0.2, type: "ease" },
  };
  return (
    <motion.div variants={item} className="duration-200">
      <div className="duration-200 flex gap-4 md:gap-12 pt-12 ">
        <div className="">
          <Image
            src={props.source}
            width={props.width}
            height={props.height}
            alt=""
          />
        </div>
        {props.number === 2 && (
          <div className="">
            <Image
              src={props.source2}
              width={props.width2}
              height={props.height2}
              alt=""
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default ProjectImages;
