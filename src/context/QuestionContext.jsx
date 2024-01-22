import React, { useContext, createContext, useState } from "react";

// CONTEXT ҮҮСГЭХ БҮРДЭЭ БИЧНЭ
// -----------------------------------------
const QuestionContext = createContext();
export const useQuestionData = () => {
  useContext(QuestionContext);
};

export const QuestionProvider = ({ children }) => {
  const [data, setData] = useState(dummyData);
  const [count, setCount] = useState(0);

  return (
    <QuestionContext.Provider value={{ data, setData, count, setCount }}>
      {children}
    </QuestionContext.Provider>
  );
};
// -------------------------------------------

const dummyData = {
  question: {
    title: `Answer 1`,
    detail: `question detail 1`,
  },
  answers: [
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
