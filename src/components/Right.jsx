import { QuestionAnswer } from "./QuestionAnswer";
import { SideInfo } from "./SideInfo";

export const Right = () => {
  return (
    <div className="w-3/4 h-[100vh] bg-lime-200">
      <div className="flex justify-between">
        <QuestionAnswer />
        <SideInfo />
      </div>
    </div>
  );
};
