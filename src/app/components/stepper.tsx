export default function Stepper() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-3/4 min-h-6 ">
        <ul className="flex flex-row overflow-hidden justify-between gap-6 rounded-2xl text-center ">
          <li className="bg-white w-full">1</li>
          <li className="bg-slate-300 w-full">2</li>
          <li className="bg-slate-500 w-full">3</li>
          <li className="bg-slate-600 w-full">4</li>
          <li className="bg-slate-800 w-full">5</li>
        </ul>
      </div>
    </div>
  );
}
