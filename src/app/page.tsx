import Image from "next/image";
import { FiArrowRightCircle } from "react-icons/fi";
import Popcorn from "./components/popcorn";

export default function HomePage() {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center gap-5">
      <h2 className="text-xl font-thin">INTRODUCCION</h2>
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
            Nuestro sistema inteligente analiza tus gustos en base a preguntas y
            te recomienda la mejor opcion.
          </p>
        </div>
        <div className="flex flex-row items-center justify-center gap-2 text-xl">
          <a>Ver recomendacion</a>
          <FiArrowRightCircle size={25} className="" />
        </div>
      </div>

      <Popcorn
        style="top-[-10vh] left-[0vh] blur-[2px] "
        w={350}
        popcorn="valde1"
      />
      <Popcorn
        style="top-[60vh] left-[20vh] blur-[2px]"
        w={60}
        popcorn="pochoclo2"
      />

      <Popcorn
        style="top-[70vh] left-[55vh] blur-[1px]"
        w={150}
        popcorn="pochoclo4"
      />

      <Popcorn
        style="top-[20vh] left-[60vh] blur-[1.3px]"
        w={110}
        popcorn="pochoclo3"
      />
      <Popcorn style="top-[50vh] right-[25vh] " w={300} popcorn="pochoclo1" />
    </section>
  );
}
