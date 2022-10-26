import React from "react";
import {Footer, Navbar} from "../components";

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <head>
      <title>Next.js</title>
    </head>
    <body>
      <Navbar />
        <main className="max-w-4xl p-4 flex justify-center items-center m-auto min-h-screen">
          {children}
        </main>
      <Footer />
    </body>
    </html>
  );
}