// components/Popcorn.js
import Image from "next/image";

export default function Popcorn({
  style,
  popcorn,
  width,
}: {
  style: string;
  popcorn: string;
  width?: string;
}) {
  return (
    <div className={`absolute ${style}`}>
      <Image
        src={`/assets/img/${popcorn}.png`} // Cambia esta ruta según tu imagen de pochoclo
        alt="Pochoclo"
        width={300}
        height={200}
        className={`h-auto w-auto ${width}`}
      />
    </div>
  );
}
