import React, { useContext, createContext } from "react";

const QuestionContext = createContext();
export const useQuestionData = () => {
  useContext(QuestionContext);
};

export const QuestionProvider = ({ children }) => {
  return <QuestionContext.Provider>{children}</QuestionContext.Provider>;
};
