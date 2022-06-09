import type { NextPage } from "next";
import Layout from "../../components/layout";
import Link from 'next/link'

const About: NextPage = () => {
  return (
    <>
        <Layout>
        <div className="fixed hover:pointer z-10"><Link href='/'>Home</Link></div>
          <div className="mt-20 grid grid-cols-4 gap-12">
            
          </div>
        </Layout>
      
        <Layout>
          
          <h1>Contact</h1>
          <p className="mt-4">samoscarscott@gmail.com</p>
          <p className="text-center mt-32 bg-black text-white">You&apos;re currently viewing a work in progress.</p>
        </Layout>

    </>
  );
};

export default About;
