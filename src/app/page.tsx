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
        <div className="w-[60%] flex flex-col gap-16 mb-10">
          <div className="w-full text-center text-xl font-medium">
            <p>Descubre películas perfectas para ti con la ayuda de IA.</p>
            <p>
              Nuestro sistema inteligente analiza tus gustos en base a preguntas
              y te recomienda la mejor opcion.
            </p>
          </div>

          <Link
            href="/recomendacion"
            className="flex flex-row items-center justify-center gap-2 text-xl hover:text-yellow-400"
          >
            <p>Ver recomendacion</p>
            <FiArrowRightCircle size={25} />
          </Link>
        </div>
      </div>

      <div className="absolute w-full h-full">
        <Popcorn
          style="top-[-22vh] left-[-45vh] blur-[2px]"
          w={350}
          popcorn="valde1"
        />
        <Popcorn
          style="top-[45vh] left-[-25vh] blur-[2px]"
          w={70}
          popcorn="pochoclo2"
        />
        <Popcorn
          style="top-[57vh] left-[12vh] blur-[0.5px]"
          w={150}
          popcorn="pochoclo4"
        />
        <Popcorn
          style="top-[8vh] left-[15vh] blur-[1.3px]"
          w={100}
          popcorn="pochoclo3"
        />
        <Popcorn style="top-[43vh] right-[-15vh]" w={270} popcorn="pochoclo1" />
      </div>
    </section>
  );
}
