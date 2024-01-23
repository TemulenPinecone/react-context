import { useQuestionData } from "@/context/QuestionContext";
import React from "react";
import { useTheme } from "@/context/ThemeContext";

export default function Rating({ index }) {
  const { data, count, setData } = useQuestionData();
  const { theme } = useTheme();

  const divClassName = `rounded-lg px-10 ${
    theme == `light` ? `bg-gray-700 text-white` : `bg-gray-100 text-black`
  }`;
  const pClasssName = `text-[40px] ${
    theme == `light` ? `text-black` : `text-white`
  }`;

  const incrementHandler = () => {
    data.answers[index].rating += 1;
    setData({ ...data });
  };

  const decrementHandler = () => {
    data.answers[index].rating -= 1;
    setData({ ...data });
  };

  return (
    <div className="flex flex-col w-[90px] items-center mb-5">
      <button className={divClassName} onClick={incrementHandler}>
        +
      </button>
      <p className={pClasssName}>{data.answers[index].rating}</p>
      <button className={divClassName} onClick={decrementHandler}>
        -
      </button>
    </div>
  );
}
