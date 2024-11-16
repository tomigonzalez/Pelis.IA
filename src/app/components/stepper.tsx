type Props = {
  currentQuestions: number;
};

export default function Stepper(props: Props) {
  return (
    <div className="w-full h-2/5 flex flex-col justify-center items-center">
      <div className="w-3/4 min-h-6">
        <ul className="flex flex-row overflow-hidden justify-between gap-6 rounded-2xl text-center ">
          <li
            className={` w-full ${
              props.currentQuestions >= 1
                ? "bg-redPrimary text-white"
                : "bg-white text-black"
            }`}
          >
            1
          </li>
          <li
            className={`w-full ${
              props.currentQuestions >= 2
                ? "bg-redPrimary text-white"
                : "bg-white text-black"
            }`}
          >
            2
          </li>
          <li
            className={` w-full ${
              props.currentQuestions >= 3
                ? "bg-redPrimary text-white"
                : "bg-white text-black"
            }`}
          >
            3
          </li>
          <li
            className={` w-full ${
              props.currentQuestions >= 4
                ? "bg-redPrimary text-white"
                : "bg-white text-black"
            }`}
          >
            4
          </li>
          <li
            className={` w-full ${
              props.currentQuestions >= 5
                ? "bg-redPrimary text-white"
                : "bg-white text-black"
            }`}
          >
            5
          </li>
        </ul>
      </div>
    </div>
  );
}
