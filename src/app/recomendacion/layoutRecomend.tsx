"use client";
import { useState } from "react";
import Stepper from "../components/stepper";
import StepperControl from "../components/stepperControl";
import Questions from "../components/questions";
type Props = {};

const LayoutRecomend = (props: Props) => {
  const [currentQuestions, setCurrentQuestions] = useState<number>(1);

  const nextQuestion = () => {
    setCurrentQuestions((prev) => prev + 1);
  };
  const prevQuestion = () => {
    setCurrentQuestions((prev) => prev - 1);
  };

  const displayQuestions = (step: number) => {
    switch (step) {
      case 1:
        return <Questions currentQuestions={currentQuestions} />;
      case 2:
        return <Questions currentQuestions={currentQuestions} />;
      case 3:
        return <Questions currentQuestions={currentQuestions} />;
      case 4:
        return <Questions currentQuestions={currentQuestions} />;
      case 5:
        return <Questions currentQuestions={currentQuestions} />;
    }
  };
  return (
    <div className="h-full flex flex-col justify-between items-center">
      <Stepper currentQuestions={currentQuestions} />

      {displayQuestions(currentQuestions)}

      <StepperControl
        nextQuestion={nextQuestion}
        prevQuestion={prevQuestion}
        currentQuestions={currentQuestions}
      />
    </div>
  );
};

export default LayoutRecomend;
