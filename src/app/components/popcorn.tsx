// components/Popcorn.js
import Image from "next/image";

export default function Popcorn({
  style,
  popcorn,
  w,
}: {
  style: string;
  popcorn: string;

  w: number;
}) {
  return (
    <div className={`absolute ${style}`}>
      <Image
        src={`/assets/img/${popcorn}.png`} // Cambia esta ruta según tu imagen de pochoclo
        alt="Pochoclo"
        width={w}
        height={100}
      />
    </div>
  );
}
