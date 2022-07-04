import React from "react";
import Link from "next/Link";
import { MdArrowForward } from "react-icons/md";

const HomePageLink = ({ slice }) => (
  <section>
    <Link href={slice.primary.link}>
      <div className="ml-8 lg:ml-16 duration-200 group w-[40vw] ">
        <button className="text-left text-3xl md:text-5xl lg:text-7xl">
        {slice.primary.linkText}<MdArrowForward className='duration-200 group-hover:ml-6 inline-block '/>
          <div className="h-px bg-black mt-2"/>
        </button>
      </div>
    </Link>
  </section>
);

export default HomePageLink;
