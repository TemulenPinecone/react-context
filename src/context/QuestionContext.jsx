import React, { useContext, createContext, useState } from "react";

const QuestionContext = createContext();
export const useQuestionData = () => {
  useContext(QuestionContext);
};

export const QuestionProvider = ({ children }) => {
  const [data, setData] = useState(dummyData);
  return <QuestionContext.Provider>{children}</QuestionContext.Provider>;
};

const dummyData = {
  question: {
    title: `Answer 1`,
    detail: `question detail 1`,
  },
  answer: [
    {
      text: `text 1`,
      rating: 10,
    },
    {
      text: `text 2`,
      rating: 5,
    },
    {
      text: `text 3`,
      rating: 8,
    },
  ],
};
