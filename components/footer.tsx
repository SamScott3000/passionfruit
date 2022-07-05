import Layout from "./layout";
import Link from "next/link";

const navs = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Projects", link: "/projects" },
  { id: 3, title: "The Zone", link: "/zone" },
  { id: 4, title: "About", link: "/about" },
];

function Footer(props: any) {
  return (
    <footer className="text-white bg-neutral-900 pb-8">
      <Layout>
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <p className="underline">More Work</p>
          </div>
          <div className="col-span-6">
            <div className="flex flex-col items-start">
              <p className="underline">Navigation</p>
              {navs.map((x: any) => (
                <Link key={x.id} scroll={false} href={x.link}>
                  <p className="duration-200 hover:text-neutral-900 hover:cursor-pointer hover:bg-white duration-200 px-4">
                    {x.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-8 ">
            <p className="text-xs text-neutral-600">&copy; Sam Scott</p>
          </div>
        </div>
      </Layout>
    </footer>
  );
}

export default Footer;
