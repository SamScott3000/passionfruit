import Layout from "./layout";
import Link from "next/link";
import { createClient, linkResolver } from "../prismicio";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";

const navs = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Projects", link: "/projects" },
  { id: 3, title: "The Zone", link: "/zone" },
  { id: 4, title: "About", link: "/about" },
];

const Footer = ({ project, footerProps }: any) => {
  return (
    <footer className="pt-8 pb-16 gap-4">
      <div className="flex gap-8 justify-center">
        {navs.map((x: any) => (
          <Link key={x.id} scroll={false} href={x.link}>
            <p className="text-right hover:cursor-pointer hover:text-neutral-500 duration-200">
              {x.title}
            </p>
          </Link>
        ))}
      </div>
      <div className="mt-8 ">
        <p className="text-xs text-neutral-600 text-center">&copy; Sam Scott</p>
      </div>
    </footer>
  );
};

export default Footer;
