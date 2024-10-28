import Image from "next/image";
import { IoMenu } from "react-icons/io5";

export default function Nav({
  toggleMenu,
  isModalOpen,
}: {
  toggleMenu: () => void;
  isModalOpen: boolean;
}) {
  return (
    <nav className="h-[70px] w-full border-dashed flex flex-row items-center justify-between pl-4 pr-4">
      <div className="">
        <Image
          src="/assets/img/filmix.png"
          alt="Logo de la plataforma "
          width={"100"}
          height={"100"}
        />
      </div>
      <div className="w-[55px] h-[70%] flex items-center justify-center border-dashed-small">
        <button onClick={toggleMenu}>
          <IoMenu
            size={37}
            className="cursor-pointer text-grayPrimary hover:text-yellow-400"
          />
        </button>
      </div>
    </nav>
  );
}
