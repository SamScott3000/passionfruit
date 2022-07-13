import type { NextPage } from "next";
import Layout from "../../components/layout";
import Link from "next/link";
import { createClient, linkResolver } from "../../prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "../../slices";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { PrismicText, PrismicRichText } from "@prismicio/react";
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaChess } from "react-icons/fa";
import Hamburger from "../../components/Hamburger";

export default function about({ about }: any) {
  const iconClass = "w-6 h-6 hover:text-neutral-500 duration-200 ";
  const icons = [
    {
      id: 1,
      icon: <BsTwitter className={iconClass} />,
      link: "https://twitter.com/SamScott3000",
    },
    {
      id: 2,
      icon: <FaChess className={iconClass} />,
      link: "https://www.chess.com/member/sonicturnip",
    },
    {
      id: 3,
      icon: <BsGithub className={iconClass} />,
      link: "https://github.com/SamScott3000",
    },
    {
      id: 3,
      icon: <BsLinkedin className={iconClass} />,
      link: "https://www.linkedin.com/in/sam-scott-9845a51b3/",
    },
  ];
  return (
    <>
      <Layout>
        <div className="fixed hover:pointer z-10 group hover:text-gray-600">
          <Link href="/">
            <button className="hover:pointer">
              <MdArrowBack className="z-50 inline-block group-hover:-translate-x-2 duration-200 pb-1" />
              Home
            </button>
          </Link>
        </div>
        <Hamburger/>
        <div className="flex lg:flex-row flex-col lg:gap-16 mt-24 gap-16">
          <div className="w-60">
            <div className="mb-8">
              <PrismicRichText field={about?.data?.contactHeader} />
            </div>
            <div className="my-8">
              <PrismicRichText field={about?.data?.contact} />
            </div>
            <div className="mb-8">
              <a
                className="hover:text-neutral-500 duration-200 group inline underline"
                href="mailto:samoscarscott@gmail.com"
              >
                {about?.data?.email}
                <MdArrowForward className="group-hover:ml-2 duration-200 inline" />
              </a>
            </div>
            <div className="flex gap-4">
              {icons.map((x: any) => (
                <a
                  key={x.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={x.link}
                  className='hover:-translate-y-1 duration-200'
                >
                  <button className="">{x.icon}</button>
                </a>
              ))}
            </div>
          </div>

          <div className="max-w-prose">
            <div className="">
              <SliceZone slices={about?.data?.slices} components={components} />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps({ params, previewData }: any) {
  const client = createClient({ previewData });
  const about = await client.getSingle("about");
  return {
    props: { about },
  };
}
