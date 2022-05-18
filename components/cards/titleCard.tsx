import Layout from "../layout";
import Link from "next/link";
import { motion } from "framer-motion";
import TitleLinks from "../TitleLinks";

function titleCard(props: any) {
  const item = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 },
    transition: { type: "ease" },
  };
  return (
    <Layout>
      <div className="w-full sm:w-[36rem] lg:w-[64rem] py-20 ">
        <motion.h1
          variants={item}
          className="duration-200 font-serif italic cursor-default pb-4 md:pb-0"
        >
          I&apos;m Sam Scott, a <span className="">designer</span> working on
          and off the web and you have a few choices...
        </motion.h1>
        <div className="pl-0 md:pl-12 ">
          <Link href="/projects">
            <div>
              <TitleLinks
                disabled={false}
                words="1. You can check out some of my projects here"
              />
            </div>
          </Link>
          <Link href="/about">
            <div>
              <TitleLinks
                disabled={false}
                words="2. Maybe see what I'm about?"
              />
            </div>
          </Link>
          <div>
            <TitleLinks
              disabled={true}
              words="3. Have a look through my blog?"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default titleCard;
