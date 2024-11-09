type Props = {
  currentQuestions: number;
};

export default function Stepper(props: Props) {
  return (
    <div className="w-full h-2/5 flex flex-col justify-center items-center">
      <div className="w-3/4 min-h-6">
        <ul className="flex flex-row overflow-hidden justify-between gap-6 rounded-2xl text-center ">
          <li
            className={`bg-white w-full ${
              props.currentQuestions >= 1 ? "bg-red-500" : "text-black"
            }`}
          >
            1
          </li>
          <li
            className={`bg-white w-full ${
              props.currentQuestions >= 2 ? "bg-red-500" : "text-black"
            }`}
          >
            2
          </li>
          <li
            className={`bg-white w-full ${
              props.currentQuestions >= 3 ? "bg-red-500" : " text-black"
            }`}
          >
            3
          </li>
          <li
            className={`bg-white w-full ${
              props.currentQuestions >= 4 ? "bg-red-500" : "text-black"
            }`}
          >
            4
          </li>
          <li
            className={`bg-white w-full ${
              props.currentQuestions >= 5 ? "bg-red-500" : "text-black"
            }`}
          >
            5
          </li>
        </ul>
      </div>
    </div>
  );
}
