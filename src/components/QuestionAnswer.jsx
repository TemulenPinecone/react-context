import React from "react";
import Question from "./Question";
import Answer from "./Answer";
import { useQuestionData } from "@/context/QuestionContext";
import { useTheme } from "@/context/ThemeContext";

export const QuestionAnswer = () => {
  const { data, setData } = useQuestionData();
  const answers = data.answers;
  const { theme } = useTheme();

  const divClassName = theme == `light` ? `bg-white` : `bg-gray-700`;
  const pClasssName = theme == `light` ? `text-black` : `text-white`;

  return (
    <div className={divClassName}>
      <Question />
      <div className="flex flex-col justify-start">
        {answers.map((answer, index) => {
          return <Answer key={index} index={index} />;
        })}
      </div>
    </div>
  );
};
