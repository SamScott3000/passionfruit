import Layout from "../layout";
import Link from "next/link";
import { motion } from "framer-motion";
import ProjectLinks from "../ProjectLinks";

function projectCard(props: any) {
  return (
    <div className="flex flex-col ">
      <Link href="/projects/generic">
        <div>
          <ProjectLinks name="Generic" date="20/5/22" />
        </div>
      </Link>
      <ProjectLinks name="Dead Handz" date="Ongoing" />
      <ProjectLinks name="WDSG" date="10/1/22" />
    </div>
  );
}

export default projectCard;
