import { useMyContext } from "../context/myContext";
import { options } from "../data/data";

export default function Questions({
  currentQuestions,
}: {
  currentQuestions: number;
}) {
  const { answers, setAnswers } = useMyContext();

  // Filtramos la pregunta actual según el valor de currentQuestions
  const currentQuestion = options.find((item) => item.id === currentQuestions);

  // Si no encuentra una pregunta, retornamos null
  if (!currentQuestion) return null;

  // Manejar el cambio de selección
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.value;
    // Copiamos el array de respuestas actual para no mutar
    const updatedAnswers = [...answers];
    // Guardo la respuesta en la posición correspondiente
    updatedAnswers[currentQuestions - 1] = selectedOption;
    // Actualizamos el estado con las respuestas modificadas
    setAnswers(updatedAnswers);
  };

  return (
    <section className="w-full h-full flex flex-col justify-between items-center">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h4 className="max-sm:text-sm text-xl  font-semibold mb-4 text-left">
          {currentQuestion.question}
        </h4>

        <select
          className="cursor-pointer bg-transparent border-dashed rounded-xl p-4 sm:w-1/2 w-2/3"
          value={answers[currentQuestions - 1] || ""}
          onChange={handleChange}
        >
          <option
            value=""
            disabled
            className=" cursor-pointer bg-black rounded-2xl"
          >
            Selecciona una opción
          </option>
          {currentQuestion.options.map((option, index) => (
            <option
              className=" cursor-pointer bg-black rounded-2xl text-white"
              key={index}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}
