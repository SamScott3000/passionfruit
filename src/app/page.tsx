"use client";

import { RandomField } from "@/components/RandomField";

export default function Home() {
  return (
    <main className="flex sm:flex-row flex-col gap-8 min-h-screen p-4">
      <div className="max-w-[45ch] h-fit">
        <h1 className="mb-8">Hi, I’m Sam Scott, I code and things.</h1>
        <p>Currently working on some fun projects at Studio206.</p>
        <p>
          I’ve just published a little strip plot package because I couldn’t
          find a nice way of doing this.
        </p>
        <p>I write, make moodboards and try to do a lot.</p>
      </div>
      <RandomField />
    </main>
  );
}
