import { Metadata } from "next";
import LayoutRecomend from "./layoutRecomend";
export const metadata: Metadata = {
  title: "Filmix - Recomendador de peliculas",
  description: "La mejor IA para recomendar peliculas",
  keywords: ["cine", "peliculas", "ocio", "disfrutar", "familia"],
};
export default function RecomendacionesPage() {
  return (
    <>
      <LayoutRecomend></LayoutRecomend>
    </>
  );
}
