import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

export default function StepperControl({
  currentQuestions,
  nextQuestion,
  prevQuestion,
}: {
  currentQuestions: number;
  nextQuestion: () => void;
  prevQuestion: () => void;
}) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full flex flex-row justify-around">
        {currentQuestions > 1 ? (
          <button
            className="flex items-center gap-2 hover:text-redPrimary"
            onClick={prevQuestion}
          >
            <FiArrowLeftCircle size={20} />
            <span className="flex items-center">Atras</span>
          </button>
        ) : (
          <button
            className="flex items-center gap-2"
            onClick={prevQuestion}
          ></button>
        )}
        {currentQuestions < 5 ? (
          <button
            className="flex items-center gap-2 hover:text-yellow-400"
            onClick={nextQuestion}
          >
            <span className="flex items-center">Siguiente</span>
            <FiArrowRightCircle size={20} />
          </button>
        ) : (
          <button className="flex items-center gap-2 hover:text-yellow-400">
            <span className="flex items-center">Mostrar resultado</span>
          </button>
        )}
      </div>
    </div>
  );
}
