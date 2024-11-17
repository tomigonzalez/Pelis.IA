import Image from "next/image";
import { FiArrowRightCircle } from "react-icons/fi";
import Popcorn from "./components/popcorn";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Filmix - Hello World",
  description: "La mejor IA para recomendar peliculas",
  keywords: ["cine", "peliculas", "ocio", "disfrutar", "familia"],
};

export default function HomePage() {
  return (
    <section className="w-full h-full flex flex-col relative">
      <div className="w-full h-full flex flex-col gap-5 items-center justify-center z-[40]">
        <h2 className="text-2xl font-thin">INTRODUCCION</h2>
        <Image
          src={"/assets/img/filmixBig.svg"}
          alt="Logo de la plataforma"
          width={"400"}
          height={"100"}
        ></Image>
        <div className="max-md:w-[80%] w-[60%] flex flex-col gap-16 mb-10">
          <div className="w-full text-center max-md:text-sm text-xl font-medium">
            <p>Descubre películas perfectas para ti con la ayuda de IA.</p>
            <p>
              Nuestro sistema inteligente analiza tus gustos en base a preguntas
              y te recomienda la mejor opcion.
            </p>
          </div>

          <Link
            href="/recomendacion"
            className="flex flex-row items-center justify-center gap-2 max-md:text-sm text-xl hover:text-yellow-400"
          >
            <p>Ver recomendacion</p>
            <FiArrowRightCircle className="max-md:text-[1.4rem] text-[1.8rem]" />
          </Link>
        </div>
      </div>

      <div className="absolute w-full h-full  max-md:hidden block">
        <Popcorn
          style="top-[-22vh] left-[-35vh]  2xl:top-[-22vh] 2xl:left-[-42vh] lg:top-[-22vh] lg:left-[-22vh] md:top-[-12vh] md:left-[-10vh] blur-[2px]"
          popcorn="valde1"
          width=" md:w-[260px] lg:w-[300px] 2xl:w-[350px] "
        />
        <Popcorn
          style="2xl:top-[45vh] 2xl:left-[-25vh] lg:top-[40vh] lg:left-[-2vh] md:top-[40vh] md:left-[0vh]  blur-[2px]"
          popcorn="pochoclo2"
          width=" md:w-[80px] lg:w-[100px] 2xl:w-[120px]"
        />
        <Popcorn
          style="2xl:top-[60vh] 2xl:left-[20vh] lg:top-[65vh] lg:left-[45vh] md:top-[65vh] md:left-[30vh] blur-[0.5px] "
          popcorn="pochoclo4"
          width=" md:w-[140px] lg:w-[140px] 2xl:w-[150px]"
        />
        <Popcorn
          style="2xl:top-[5vh] 2xl:left-[15vh] lg:top-[2vh] lg:left-[40vh] md:top-[5vh] md:left-[45vh] blur-[1.3px] "
          popcorn="pochoclo3"
          width=" md:w-[75px] lg:w-[90px] 2xl:w-[100px]"
        />
        <Popcorn
          style="2xl:top-[40vh] 2xl:right-[-10vh] lg:top-[45vh] lg:right-[-7vh] md:top-[50vh] md:right-[0vh]"
          popcorn="pochoclo1"
          width=" md:w-[200px] lg:w-[240px] 2xl:w-[270px]"
        />
      </div>
    </section>
  );
}
