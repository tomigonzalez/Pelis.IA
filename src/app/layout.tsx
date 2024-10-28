"use client";
import "./globals.css";
import Nav from "./components/nav/nav";
import ModalNav from "./components/modalNav/modalNav";
import { MyProvider } from "./context/myContext";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsModalOpen((prev) => !prev);
  };
  return (
    <html lang="en">
      <body>
        <MyProvider>
          <div className="absolute  m-auto w-full grid min-h-screen grid-rows-[auto,1fr,auto] px-4 justify-center">
            <div className="w-[900px] mt-2 flex flex-col gap-4 h-full">
              <header className="relative z-[5]">
                <Nav toggleMenu={toggleMenu} isModalOpen={isModalOpen} />
              </header>
              <main
                className={`h-[550px] border-dashed z-[1] transition-all duration-300 ${
                  isModalOpen ? "blur-xl " : ""
                }`}
              >
                {children}
              </main>
            </div>
            <footer className="text-center leading-[3rem] opacity-70">
              © {new Date().getFullYear()} TMGC
            </footer>
          </div>
          {isModalOpen && <ModalNav isModalOpen={isModalOpen} />}
        </MyProvider>
      </body>
    </html>
  );
}
