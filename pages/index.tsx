import { PrismicRichText, PrismicLink } from "@prismicio/react";
import { createClient, linkResolver } from "../prismicio";
import Layout from "../components/layout";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";
import { motion } from "framer-motion";

export default function Home({ homepage }: any) {
  const x = {
    paragraph: ({ children }: any) => (
      <p className="font-serif italic">{children}</p>
    ),
  };

  return (
    <Layout>
      <div className="w-60">
        <PrismicRichText field={homepage?.data?.introduction} />
      </div>
      <div className="h-12" />
      <div className="flex flex-col flex-wrap">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="">
            <SliceZone
              slices={homepage?.data?.slices}
              components={components}
            />
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params, previewData }: any) {
  const client = createClient({ previewData });
  const homepage = await client.getSingle("homepage");
  return {
    props: { homepage },
  };
}
