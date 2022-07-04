import { motion } from "framer-motion";
import { MdArrowForward } from "react-icons/md";

function TitleLinks(props: any) {
  const item = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 },
    transition: { type: "ease" },
  };
  return (
      <motion.h1
        variants={item}
        className={` ${props.disabled === true && "hover:cursor-not-allowed hover:bg-gray-300"} ${props.disabled === false && "hover:cursor-pointer hover:bg-black"}  mr-8 group py-4 duration-200 hover:text-white`}
      >
        {props.words}
        {props.disabled === !true &&
          <span className="duration-200 group-hover:ml-4">
          <MdArrowForward className='inline-block '/>
        </span>
        }
      </motion.h1>
  );
}

export default TitleLinks;
