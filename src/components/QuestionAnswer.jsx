import React from "react";
import Question from "./Question";
import Answer from "./Answer";
import { useQuestionData } from "@/context/QuestionContext";

export const QuestionAnswer = () => {
  const { data, setData } = useQuestionData();
  const answers = data.answers;
  return (
    <div className="w-3/4 bg-orange-400">
      <Question />
      {answers.map((answer, index) => {
        return <Answer key={index} index={index} />;
      })}
    </div>
  );
};
