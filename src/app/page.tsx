"use client";

import { RandomField } from "@/components/RandomField";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [dateString, setDateString] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDateString(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <main className="flex flex-col gap-4 h-screen p-4">
      <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-12 gap-4">
        <div className="col-span-3">
          <h1>Sam Scott</h1>
        </div>
        <div className="col-span-3 underline">
          <Link href="/writing">Writing</Link>
        </div>
        <div className="col-span-3">
          <p>{dateString}</p>
        </div>
        <div className="col-span-3">
          <p>Hello</p>
        </div>
      </div>
      <RandomField />
    </main>
  );
}
