import fs from "fs";
import Link from "next/link";

const Writing = async () => {
  const files = fs.readdirSync("posts");

  return (
    <div className="w-screen prose prose-sm">
      <ul>
        {files.map((file) => {
          const slug = file.replace(".md", "").toLowerCase();

          const label = slug
            .replace(/-/g, " ")
            .replace(/^\w/, (c) => c.toUpperCase());

          return (
            <li key={file}>
              <Link href={`/writing/${slug}`}>{label}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Writing;
