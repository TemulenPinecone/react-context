export const QuestionAnswer = () => {
  return (
    <div className="w-3/4 bg-orange-400">
      <Question />
      {answers.map((answer, index) => {
        return <Answer key={index} answer={answer} />;
      })}
    </div>
  );
};
