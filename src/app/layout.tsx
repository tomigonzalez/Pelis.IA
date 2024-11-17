"use client";
import "./globals.css";
import Nav from "./components/nav/nav";
import ModalNav from "./components/modalNav/modalNav";

import { useEffect, useState } from "react";
import { MyProvider } from "./context/myContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsModalOpen((prev) => !prev);
  };
  useEffect(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <html lang="en">
      <body>
        <MyProvider>
          <section className="absolute m-auto w-full flex flex-col items-center justify-center">
            <div className="w-full h-full mt-2  flex flex-col gap-4 px-4  items-center justify-center">
              <header className="  max-w-[900px] relative z-[5] w-full">
                <Nav toggleMenu={toggleMenu} isModalOpen={isModalOpen} />
              </header>
              <main
                className={`max-w-[900px] w-full h-[550px] border-dashed z-[1] transition-all duration-300 ${
                  isModalOpen ? "blur-xl " : ""
                }`}
              >
                {children}
              </main>
            </div>
            <footer className="text-center leading-[3rem] opacity-70">
              © {new Date().getFullYear()} TMGC
            </footer>
          </section>
          {isModalOpen && (
            <ModalNav isModalOpen={isModalOpen} toggleMenu={toggleMenu} />
          )}
        </MyProvider>
      </body>
    </html>
  );
}
