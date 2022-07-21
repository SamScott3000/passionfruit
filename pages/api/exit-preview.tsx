import { exitPreview } from "@prismicio/next";

export default async function exit({ req, res }: any) {
  await exitPreview({ res, req });
}
