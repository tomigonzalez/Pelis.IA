import type { Metadata } from "next";

import "./globals.css";
import Nav from "./components/nav/nav";

export const metadata: Metadata = {
  title: "Filmix - Hello World",
  description: "La mejor IA para recomendar peliculas",
  keywords: ["cine", "peliculas", "ocio", "disfrutar", "familia"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="container  m-auto grid min-h-screen grid-rows-[auto,1fr,auto] px-4 justify-center">
        <div className="w-[900px] mt-2 flex flex-col gap-4 h-full">
          <header>
            <Nav />
          </header>
          <main className=" h-[550px] border-dashed">{children}</main>
        </div>
        <footer className="text-center leading-[3rem] opacity-70">
          © {new Date().getFullYear()} TMGC
        </footer>
      </body>
    </html>
  );
}
