import "./App.css";
import "../pages/GameField.css";
import { useNavigate } from "react-router-dom";
interface QuestionProps {
  question: string;
  cost: number;
  answer: string;
  theme: string;
}
export const Card = (prop: QuestionProps) => {
  const navigate = useNavigate();
  function handlePress() {
    const data = {
      theme: prop.theme,
      question: prop.question,
      answer: prop.answer,
    };
    navigate("/question", { state: data });
  }
  return (
    <button
      className="d0"
      onClick={() => {
        handlePress();
      }}
    >
      {prop.cost}
    </button>
  );
};
