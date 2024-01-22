import React from "react";
import { QuestionAnswer } from "./QuestionAnswer";
import { SideInfo } from "./SideInfo";
import { useQuestionData } from "@/context/QuestionContext";

export function Right() {
  const { count, setCount } = useQuestionData();
  return (
    <div className="w-3/4 h-[100vh] bg-lime-200">
      <div className="flex justify-between">
        <QuestionAnswer />
        <SideInfo />
      </div>
    </div>
  );
}
