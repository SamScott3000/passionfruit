import Layout from "./layout";
import Link from 'next/link'
function Footer(props: any) {
  return (
    <footer className="bg-white pb-16">
        <Layout>
          <div className="h-px bg-gray-200 mb-12"/>
          <div className="grid grid-cols-2 md:gap-12 gap-4">
          <div className="">
            <p className="text-black">Want to see more?</p>
          </div>

            <div className="flex flex-col">
              <Link scroll={false} href='/'><p className="duration-200 hover:text-gray-600 hover:cursor-pointer">Home</p></Link>
              <Link scroll={false} href='/projects'><p className="duration-200 hover:text-gray-600 hover:cursor-pointer">Work</p></Link>
              <Link scroll={false} href='/blog'><p className="duration-200 hover:text-gray-600 hover:cursor-pointer">Blog</p></Link>
              <Link scroll={false} href='/about'><p className="duration-200 hover:text-gray-600 hover:cursor-pointer">About</p></Link>
            </div>
            <p></p>
          </div>
        </Layout>
    </footer>
  )
}

export default Footer;
