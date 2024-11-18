import React from "react";

import { IoRepeat, IoSwapVerticalOutline } from "react-icons/io5";

type Props = {};

const ButtonsPeliculas = (props: Props) => {
  return (
    <div className="w-full flex flex-row max-sm:flex-col max-sm:gap-8 max-sm:items-center justify-around">
      <button className="flex items-center gap-2 max-md:text-sm text-xl hover:text-redPrimary">
        <IoRepeat className=" max-md:text-[1.4rem] text-[1.8rem]" />

        <span className="flex  items-center">Repetir respuestas</span>
      </button>

      <button className="flex items-center gap-2 max-md:text-sm text-xl hover:text-redPrimary">
        <IoSwapVerticalOutline className=" max-md:text-[1.4rem] text-[1.8rem]" />
        <span className="flex  items-center">Cambiar respuestas</span>
      </button>
    </div>
  );
};

export default ButtonsPeliculas;
