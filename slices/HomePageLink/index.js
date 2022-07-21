import React from "react";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

const HomePageLink = ({ slice }) => (
  <section>
    <Link href={slice.primary.link}>
      <div className="duration-200 group text-left">
        <button className="text-left text-[6vw] font-thin">
          {slice.primary.linkText}
          <div className="h-px bg-black mb-2" />
        </button>
      </div>
    </Link>
  </section>
);

export default HomePageLink;
