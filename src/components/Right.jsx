import React from "react";
import { QuestionAnswer } from "./QuestionAnswer";
import { SideInfo } from "./SideInfo";
import { useQuestionData } from "@/context/QuestionContext";

export function Right() {
  const { count, setCount } = useQuestionData();
  return (
    <div className="w-[100%] h-[100vh] bg-lime-200">
      <div className="flex">
        <div className="w-[100%]">
          <QuestionAnswer />
        </div>
        <div className="w-[20%]">
          <SideInfo />
        </div>
      </div>
    </div>
  );
}
