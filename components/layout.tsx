import { motion } from "framer-motion";

function Layout(props: any) {
  return <div className="relative mx-12 pt-8">{props.children}</div>;
}

export default Layout;
