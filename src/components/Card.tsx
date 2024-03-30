import "./App.css";
import "../pages/GameField.css";
import { useNavigate } from "react-router-dom";
interface QuestionProps {
  question: string;
  cost: number;
  answer: string;
  theme: string;
  uuid: string;
  asked: boolean;
}
export const Card = (prop: QuestionProps) => {
  const navigate = useNavigate();
  function handlePress() {
    const data = {
      theme: prop.theme,
      question: prop.question,
      answer: prop.answer,
      cost: prop.cost,
      uuid: prop.uuid,
      asked: prop.asked,
    };
    navigate("/question", { state: data });
  }
  return (
    <button
      className={prop.asked ? "del" : "d0"}
      onClick={() => {
        handlePress();
      }}
    >
      {prop.cost}
    </button>
  );
};
