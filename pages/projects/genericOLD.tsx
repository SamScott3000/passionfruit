import type { NextPage } from "next";
import Layout from "../../components/layout";
import Image from "next/image";
import Footer from "../../components/footer";
import Link from "next/link";
import { motion } from "framer-motion";
import ProjectTitle from "../../components/ProjectComponents/ProjectTitle";
import ProjectImages from "../../components/ProjectComponents/ProjectImages";
import ProjectProse from "../../components/ProjectComponents/ProjectProse";
import ProjectBack from "../../components/ProjectComponents/ProjectBack";
import { MdArrowDownward } from "react-icons/md";
import { MdNorthEast } from "react-icons/md";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <ProjectBack />
        <div className="bg-white flex flex-col md:gap-8 gap-4">
          <ProjectTitle title="Generic" subtitle="" />
          <video className='z-50' width="1920 " height="1080" controls>
            <source src="../video/generic.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="font-light ">
            Directed and animated by myself. Sound Design by Ezra McLeish.
          </p>
          <ProjectProse>
            Generic in its current form is a plan for an interactive
            installation examining space as defined by the digital. It grabs and
            displays low quality amateur footage from the user&apos;s input.
            This footage is location restricted based on the destination&apos;s
            nearest airport, meaning an endless cycle of flight footage, airport
            terminals and concrete wastelands are all that&apos;s gets show.
            Generic space seeps into online experience.
          </ProjectProse>
          <p className="font-bold text-center">Technical Documentation:</p>
          <div className="mx-auto w-full flex sm:w-96 border-black border rounded-md">
            <Image
              src="/images/installationDiagram1.jpg"
              width="1000"
              height="889"
              alt=""
              className="border-black border rounded-md"
            />
          </div>
          <ProjectProse>
            1. The user interacts with the work through a keyboard.
          </ProjectProse>
          <div className="self-center items-center flex md:flex-row flex-col gap-8">
            <div className="bg-blue-700 h-72 w-48 rounded-md shadow-xl shadow-blue-700/50">
              <p className="mt-24 text-white pb-2 px-4 font-light animate-pulse">
                Where would you like to go?
              </p>
              <div className="mx-4 mt-4 animate-pulse h-px bg-white" />
            </div>
            <div className="w-72 rounded border-black border-4">
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-black ml-2 my-2" />
                <div className="h-3 w-3 rounded-full bg-black my-2" />
                <div className="h-3 w-3 rounded-full bg-black my-2" />
              </div>
              <div className="h-1 w-full bg-black " />
              <p className="p-4 font-mono">
                user_input = Text(main_window, ...) button = Button(main_window,
                ... command=lambda: retrieve_input())
              </p>
            </div>
          </div>
          <ProjectProse>
            2. The user is promted with a question and left to answer. The
            interface will only accept locations.
          </ProjectProse>
          <div className="self-center items-center flex md:flex-row flex-col gap-8">
            <div className="flex w-96">
              <Image
                src="/images/california.svg"
                width="640"
                height="310"
                alt=""
                className="border-black border rounded-md"
              />
            </div>
            <div className="">
              <p className="font-bold text-3xl text-gray-400">
                36.7783° N, 119.4179° W
              </p>
              <MdArrowDownward className="text-gray-400 h-16 mx-auto w-12" />
              <p className="font-bold text-3xl">33.9416° N, 118.4085° W</p>
            </div>
          </div>
          <ProjectProse>
            3. The coordinates of the nearest airport closest to the original
            search string are found.These coordinates then inform a video search
            along with keywords to get a list of all travel related videos from
            that location.
          </ProjectProse>
          <ProjectProse>
            4. These videos are parsed and filtered for orientation, resolution
            and filesize. Only a few get through.
          </ProjectProse>
          <Image src="/images/display.svg" width="400" height="633" alt="" />
          <ProjectProse>
            5. These videos are then displayed along with their title and total
            viewcount. They are displayed as soon as they are found, meaning
            they are always at risk of change. The smaller display presents
            tourist advert stock footage of sunsets and beaches, with text
            giving you a clue as to where you are.
          </ProjectProse>
          <ProjectProse>
            This is almost entirely written in{" "}
            <span className="font-bold">Python</span> making heavy use of{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://docs.python.org/3/library/tkinter.html"
            >
              <span className="font-bold text-blue-700 hover:underline">
                tkinter
              </span>
            </a>{" "}
            and{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://opencv.org/"
            >
              <span className="font-bold text-blue-700 hover:underline">
                OpenCv
              </span>
            </a>{" "}
            for on the fly video processing. I used the{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://developers.google.com/youtube/v3"
            >
              <span className="font-bold text-blue-700 hover:underline">
                YouTube API
              </span>
            </a>{" "}
            for search processing and{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://pytube.io/en/latest/#"
            >
              <span className="font-bold text-blue-700 hover:underline">
                pytube
              </span>
            </a>{" "}
            for downloading.
            <br />
            <br />
            The installation will be set up on the 8th of June 2022, further documentation of the work will go on this page then.
          </ProjectProse>
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default Home;
