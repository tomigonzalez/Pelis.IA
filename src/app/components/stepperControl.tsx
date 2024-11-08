import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

export default function StepperControl() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <p>form stepper</p>

      <div className="w-full flex flex-row justify-around">
        <button className="flex items-center gap-2">
          <FiArrowLeftCircle size={20} />
          <span className="flex items-center">Atras</span>
        </button>
        <button className="flex items-center gap-2">
          <span className="flex items-center">Siguiente</span>
          <FiArrowRightCircle size={20} />
        </button>
      </div>
    </div>
  );
}
