import type { NextPage } from "next";
import Layout from "../../components/layout";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="grid grid-cols-4 gap-12">
        <div className="col-span-4">
          <h1>Project One</h1>
          <h4>Subheading</h4>
        </div>
        <div className="col-span-2">
          <Image src="/images/image.jpeg" width="1280" height="800" alt="" />
        </div>
        <div className="col-span-2">
          <Image src="/images/image.jpeg" width="1280" height="800" alt="" />
        </div>
        <div className="col-span-2">
            <p>Lorem Ipsum</p>
          </div>
      </div>
    </Layout>
  );
};

export default Home;
