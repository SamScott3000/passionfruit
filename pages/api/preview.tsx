import { linkResolver, createClient } from "../../prismicio";
import { setPreviewData, redirectToPreviewURL } from "@prismicio/next";

export default async ({ req, res }: any) => {
  const client = createClient({ req });
  await setPreviewData({ req, res });
  await redirectToPreviewURL({ req, res, client, linkResolver });
};
