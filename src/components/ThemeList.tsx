import "./App.css";
import "../pages/GameField.css";
import { getIdCostArr } from "../api/getData";
import { useEffect, useState } from "react";
import { Card } from "./Card";
interface ThemeListProps {
  title: string;
}
export const ThemeList = (prop: ThemeListProps) => {
  const [cost, setCost] = useState<number[]>([]);
  const [uuid, setUuid] = useState<string[]>([]);
  const [asked, setAsked] = useState<boolean[]>([]);

  async function loadQuestions() {
    const state = await getIdCostArr(prop.title);

    setCost(state.cost);
    setUuid(state.uuid);
    setAsked(state.asked);
  }
  useEffect(() => {
    loadQuestions();
  }, []);
  const questionsComponent = cost.map((cost, index) => (
    <Card
      key={index}
      cost={cost}
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
