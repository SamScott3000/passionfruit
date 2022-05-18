import type { NextPage } from "next";
import Layout from "../../components/layout";
import Link from "next/link";

const Blog: NextPage = () => {
  return (
    <Layout>
        <div className="fixed hover:pointer z-10">
          <Link href="/">Home</Link>
        </div>
      <div className="mt-20">
        <h1>Blog</h1>
      </div>
    </Layout>
  );
};

export default Blog;
