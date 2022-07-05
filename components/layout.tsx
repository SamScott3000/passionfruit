import { motion } from "framer-motion";

function Layout(props: any) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        type: "linear",
      },
    },
    exit: { opacity: 0 },
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="static mx-4 md:mx-16 lg:mx-24 pt-8">{props.children}</div>
    </motion.div>
  );
}

export default Layout;
