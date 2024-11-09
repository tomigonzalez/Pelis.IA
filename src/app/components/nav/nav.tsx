import Image from "next/image";
import Link from "next/link";
import { IoClose, IoMenu } from "react-icons/io5";

export default function Nav({
  toggleMenu,
  isModalOpen,
}: {
  toggleMenu: () => void;
  isModalOpen: boolean;
}) {
  return (
    <nav className="h-[70px] w-full border-dashed flex flex-row items-center justify-between pl-4 pr-4">
      <Link href="/">
        <Image
          src="/assets/img/filmix.png"
          alt="Logo de la plataforma"
          width={100}
          height={100}
          className="cursor-pointer"
        />
      </Link>
      <div className="w-[55px] h-[70%] flex items-center justify-center border-dashed-small">
        <button onClick={toggleMenu}>
          {!isModalOpen ? (
            <IoMenu
              size={37}
              className="cursor-pointer text-grayPrimary hover:text-yellow-400"
            />
          ) : (
            <IoClose
              size={37}
              className="cursor-pointer text-grayPrimary hover:text-redPrimary"
            />
          )}
        </button>
      </div>
    </nav>
  );
}
