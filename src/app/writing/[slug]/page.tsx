import React from "react";
import fs from "fs";
import Markdown from "react-markdown";
import { redirect } from "next/navigation";

const Post = ({ params }: { params: { slug: string } }) => {
  let fileContent = "";

  try {
    fileContent = fs.readFileSync(`posts/${params.slug}.md`, "utf-8");
  } catch (e) {
    redirect("/writing");
  }

  return <Markdown className="prose prose-sm">{fileContent}</Markdown>;
};

export default Post;

export async function generateStaticParams() {
  const files = fs.readdirSync("posts");

  return files.map((file) => {
    const slug = file.replace(".md", "").toLowerCase();

    return {
      params: {
        slug,
      },
    };
  });
}
