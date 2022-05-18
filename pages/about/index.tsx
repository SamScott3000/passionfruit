import type { NextPage } from "next";
import Layout from "../../components/layout";
import Link from 'next/link'

const About: NextPage = () => {
  return (
    <>
        <Layout>
        <div className="fixed hover:pointer z-10"><Link href='/'>Home</Link></div>
          <div className="mt-20 grid grid-cols-4 gap-12">
            <h1>About</h1>
            <p className="col-span-2 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="col-span-1 bg-red-500"></div>
          </div>
        </Layout>
      
        <Layout>
          <h1>Contact</h1>
        </Layout>

    </>
  );
};

export default About;
