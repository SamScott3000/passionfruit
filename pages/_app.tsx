import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { linkResolver, repositoryName } from "../prismicio";

function MyApp({ Component, pageProps, router }: AppProps) {
  const url = `http://localhost:3000/${router.route}`;
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>{children}</a>
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
      <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=passion-fruit"></script>
        <Head>
          <title>Sam Scott</title>
          <meta name="description" content="Sam Scott&apos;s personal website" />
          <meta name="author" content="Sam Scott" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <AnimatePresence
          exitBeforeEnter
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component
            {...pageProps}
            canonical={url}
            key={url}
            onExitComplete={() => window.scrollTo(0, 0)}
          />
        </AnimatePresence>
      </PrismicPreview>
    </PrismicProvider>
  );
}

export default MyApp;
