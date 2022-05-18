import Layout from "../layout";
import Link from "next/link";

function projectCard(props: any) {
  return (
    <div className="bg-white absolute bottom-0 w-full h-[50vh] drop-shadow-xl">
      <Layout>
        <Link href="/projects/dummy">
          <h1>Dummy</h1>
        </Link>
        <Link href="/projects/dummy">
          <h1>Dummy</h1>
        </Link>
        <Link href="/projects/dummy">
          <h1>Dummy</h1>
        </Link>
      </Layout>
    </div>
  );
}

export default projectCard;
