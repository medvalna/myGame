import "./App.css";
import "../pages/GameField.css";
import { getQuestionsArr } from "../hooks/getData";
import { useEffect, useState } from "react";
import { Card } from "./Card";
interface ThemeListProps {
  title: string;
}
export const ThemeList = (prop: ThemeListProps) => {
  const [questions, setQuestions] = useState<string[]>([]);
  const [cost, setCost] = useState<number[]>([]);
  const [answers, setAnswer] = useState<string[]>([]);
  const [uuid, setUuid] = useState<string[]>([]);
  const [asked, setAsked] = useState<boolean[]>([]);

  async function loadQuestions() {
    const state = await getQuestionsArr(prop.title);
    setQuestions(state.questions);
    setCost(state.cost);
    setAnswer(state.answers);
    setUuid(state.uuid);
    setAsked(state.asked);
    console.log(state);
  }
  useEffect(() => {
    loadQuestions();
  }, []);
  const questionsComponent = questions.map((questions, index) => (
    <Card
      question={questions}
      key={index}
      cost={cost[index]}
      answer={answers[index]}
      theme={prop.title}
      uuid={uuid[index]}
      asked={asked[index]}
    />
  ));
  return (
    <div className="col">
      <button className="d0">{prop.title}</button>

      {questionsComponent}
    </div>
  );
};
