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

  console.log("Respuestas actuales:", answers);

  return (
    <section className="w-full h-full flex flex-col justify-between items-center">
      <h1>ARRANQUEMOS</h1>

      <div className="w-full h-full flex flex-col items-center justify-center">
        <h4 className="text-xl font-semibold mb-4 text-left">
          {currentQuestion.question}
        </h4>

        <select
          className="cursor-pointer bg-transparent border-dashed rounded-xl p-4 w-1/2"
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
