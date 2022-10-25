import type { NextPage } from "next";
import Head from "next/head";

import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

type LayoutProps = { children: React.ReactNode };

export const Layout: NextPage<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Head>
        <title>Avatar Generator</title>
        <meta name="description" content="Avatar Generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-4xl p-4 flex justify-center items-center m-auto min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
};
