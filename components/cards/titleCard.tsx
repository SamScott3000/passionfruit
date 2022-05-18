import Layout from "../layout";
import Link from "next/link";
import { motion } from "framer-motion";

const variants = {
  hidden: { y: 0 },
  enter: { y: 0 },
  exit: { y: 0 },
};

function titleCard(props: any) {
  return (
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
    >
      <div className="relative bg-white h-[80vh] drop-shadow-xl">
        <div className="absolute right-12 bottom-8">Logos</div>
        <div className="absolute right-12 top-8">Dark Mode</div>
        <Layout>
          <h1>What would you like to know?</h1>
          <Link href="/projects">
            <h1>Click here for projects</h1>
          </Link>
        </Layout>
      </div>
    </motion.main>
  );
}

export default titleCard;
