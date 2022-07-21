import React, { useState } from "react";
import Link from "next/link";
import Layout from "./layout";
import { Squeeze as HamburgerIcon } from "hamburger-react";

export default function Menu(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const navs = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Projects", link: "/projects" },
    { id: 3, title: "The Zone", link: "/zone" },
    { id: 4, title: "About", link: "/about" },
  ];
  return (
    <>
      <div className="z-50 fixed -mt-3 right-4 md:right-16 lg:right-24">
        <HamburgerIcon
          color={isOpen ? "white" : "black"}
          size={24}
          toggled={isOpen}
          toggle={setIsOpen}
        />
      </div>
      {isOpen ? (
        <div
          className={`overscroll-none fixed w-full h-screen backdrop-invert backdrop-blur-2xl z-40  top-0 right-0 shadow-lg`}
        >
          <div className="flex flex-col mt-28 mx-4 md:mx-16 lg:mx-24">
            <div className="h-px bg-white w-full" />
            {navs.map((x: any) => (
              <Link key={x.id} scroll={false} href={x.link}>
                <div>
                  <p className="hover:bg-white hover:text-black duration-500 h-10 lg:h-20 pt-2 px-4 lg:text-6xl hover:cursor-pointer text-white ">
                    {x.title}
                  </p>
                  <div className="h-px bg-white" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div />
      )}
    </>
  );
}

/*{`shadow-md flex ${props.align === "end" && "self-end"} 
        ${ props.order === "last" && "order-last" } 
        p-3 duration-300 rounded-full h-12 w-12 ${
          props.isOpen
            ? "bg-black-light shadow-white/25 shadow-xl hover:bg-gray-800 text-white"
            : "bg-white hover:bg-gray-300 text-gray-900"
        }`} */
