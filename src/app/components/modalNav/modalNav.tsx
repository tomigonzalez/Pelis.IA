import Link from "next/link";

export default function ModalNav({
  isModalOpen,
  toggleMenu,
}: {
  isModalOpen: boolean;
  toggleMenu: () => void;
}) {
  return (
    <div
      className={`relative transition-transform z-[3] ${
        isModalOpen ? "animate-slideDown" : ""
      }`}
    >
      {/* Fondo con opacidad */}
      <div className="absolute bg-black opacity-60 min-h-screen w-full z-[1]"></div>

      {/* Contenido del modal */}
      <div className="relative z-[2] w-full h-screen flex flex-col-reverse">
        <div className="w-full h-[80vh] flex justify-center">
          <ul className="flex flex-col gap-10 max-md:text-2xl text-4xl text-center">
            <Link
              className="font-bold  text-white"
              href={"/"}
              onClick={toggleMenu}
            >
              INICIO
            </Link>
            <Link
              href={"/recomendacion"}
              className="font-bold  text-white"
              onClick={toggleMenu}
            >
              RECOMENDAR PELICULA
            </Link>
            <li className="font-bold  text-white">CONTACTO</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
