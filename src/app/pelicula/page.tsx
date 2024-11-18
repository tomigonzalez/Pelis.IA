import { Metadata } from "next";
import Image from "next/image";
import ButtonsPeliculas from "./buttonsPeliculas";

export const metadata: Metadata = {
  title: "Filmix - Tu pelicula",
  description: "La mejor IA para recomendar peliculas",
  keywords: ["cine", "peliculas", "ocio", "disfrutar", "familia"],
};
export default function RecomendacionesPage() {
  return (
    <section className="flex flex-col items-center gap-40 w-full h-full justify-center">
      {/* <h2 className="text-2xl font-thin mt-2">TE RECOMENDAMOS</h2> */}
      <div className="max-md:w-4/5 w-2/5 gap-10 flex flex-col items-center ">
        {/* <div className="w-full flex justify-center">
          <Image
            src={"/assets/img/filmixBig.svg"}
            width={"400"}
            height={"100"}
            alt="pelicula"
          />
        </div>
        <div className="w-9/12">
          <h2 className="font-bold text-xl">
            Harry Potter y las reliquias de la Muerte: PARTE 2
          </h2>
          <p>
            Harry, Ron y Hermione se marchan de Hogwarts para iniciar su misión
            más importante: tienen que destruir los horrocruxes, el secreto del
            poder y la inmortalidad de Voldemort, en los que el temido mago
            oscuro guarda los fragmentos de su alma.
          </p>
        </div> */}
        <h1 className="text-2xl font-semibold text-center">
          {" "}
          ESTAMOS CREANDO AL ROBOT , POR FAVOR INTENTE MAS TARDE!
        </h1>
      </div>
      <ButtonsPeliculas />
    </section>
  );
}
