import React from "react";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

const HomePageLink = ({ slice }) => (
  <section>
    <Link href={slice.primary.link}>
      <div className="lg:mx-8 duration-200 group mb-8">
        <button className="text-left text-3xl md:text-6xl">
        {slice.primary.linkText}<MdArrowForward className='duration-200 group-hover:ml-6 inline-block '/>
          <div className="h-px bg-black mb-2"/>
        </button>
      </div>
    </Link>
  </section>
);

export default HomePageLink;
