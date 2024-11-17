import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { useMyContext } from "../context/myContext"; // Importa el contexto

export default function StepperControl({
  currentQuestions,
  nextQuestion,
  prevQuestion,
}: {
  currentQuestions: number;
  nextQuestion: () => void;
  prevQuestion: () => void;
}) {
  const { answers } = useMyContext();

  // Comprobar si hay una respuesta seleccionada para la pregunta actual
  const isAnswerSelected = answers[currentQuestions - 1] !== undefined;

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full flex flex-row justify-around">
        {currentQuestions > 1 ? (
          <button
            className="flex items-center gap-2 max-md:text-sm text-xl hover:text-redPrimary"
            onClick={prevQuestion}
          >
            <FiArrowLeftCircle className=" max-md:text-[1.4rem] text-[1.8rem]" />
            <span className="flex  items-center">Atrás</span>
          </button>
        ) : (
          <button
            className="flex items-center gap-2"
            onClick={prevQuestion}
          ></button>
        )}

        {currentQuestions < 5 ? (
          <button
            className={`flex items-center gap-2 max-md:text-sm text-xl hover:text-yellow-400 ${
              !isAnswerSelected
                ? "cursor-not-allowed opacity-50 hover:text-yellow-400"
                : ""
            }`}
            onClick={nextQuestion}
            disabled={!isAnswerSelected}
          >
            <span className="flex items-center">Siguiente</span>
            <FiArrowRightCircle className="max-md:text-[1.4rem] text-[1.8rem]" />
          </button>
        ) : (
          <button className="flex items-center gap-2 max-md:text-sm text-xl hover:text-yellow-400">
            <span className="flex items-center">Recomendar</span>
          </button>
        )}
      </div>
    </div>
  );
}
