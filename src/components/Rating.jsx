import { useQuestionData } from "@/context/QuestionContext";
import React from "react";

export default function Rating({ index }) {
  const { data, count, setData } = useQuestionData();

  const incrementHandler = () => {
    data.answers[index].rating += 1;
    setData({ ...data });
  };

  const decrementHandler = () => {
    data.answers[index].rating -= 1;
    setData({ ...data });
  };

  return (
    <div>
      <button onClick={incrementHandler}>up arrow</button>
      <p>{data.answers[index].rating}</p>
      <button onClick={decrementHandler}>down arrow</button>
    </div>
  );
}
