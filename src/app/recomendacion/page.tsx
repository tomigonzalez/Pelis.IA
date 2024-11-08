"use client";
import { useState } from "react";
import Stepper from "../components/stepper";
import StepperControl from "../components/stepperControl";

export default function RecomendacionesPage() {
  const [currentQuestions, setCurrentQuestions] = useState<number>(1);

  const displayQuestions = (step: number) => {
    switch (step) {
      case 1:
        return;
      case 2:
        return;
      case 3:
        return;
      case 4:
        return;
      case 5:
        return;
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Stepper />
      <h1>ARRANQUEMOS</h1>
      <StepperControl />
    </div>
  );
}
