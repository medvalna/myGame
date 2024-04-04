import { useLocation, useParams } from "react-router-dom";
import "../components/App.css";
import "./GameField.css";
import "./Question.css";
import { useEffect, useState } from "react";
import { useCountdown } from "../hooks/useCountdown";
import { getQuestion, updateDB } from "../api/getData";
import { QuestionClass } from "~/types/QuestionClass";

export const Question = () => {
  const { id } = useParams();
  const [showAnswer, setShowAnswer] = useState(false);
  const [data, setData] = useState<QuestionClass>();

  if (!id) {
    return null;
  }

  const loadQuestion = async () => {
    const state = await getQuestion(id);
    console.log("states:", state);
    setData(state);
  };
  const { time, setStartTimer, startTimer } = useCountdown(60 * 1000, () =>
    setShowAnswer(true)
  );

  function changeBgColor() {
    const r = document.querySelector<HTMLElement>(":root");
  }

  useEffect(() => {
    loadQuestion();
  }, []);

  useEffect(() => {
    changeBgColor();
    setStartTimer(true);
  }, []);

  useEffect(() => {
    if (data) {
      updateDB({ uuid: id, asked: data?.asked });
    }
  }, [showAnswer]);

  return (
    <>
      <div className="texts">
        <div className="buttons">
          <div className="title">
            <h2>
              {data?.theme} {data?.cost}
            </h2>
          </div>
          {data?.theme === "музыка" ? null : (
            <div className="header">
              <button
                className="answerbtn"
                onClick={() => {
                  setShowAnswer(!showAnswer);
                }}
              >
                Show Answer
              </button>
            </div>
          )}

          <div className="header">
            <button
              className="timebtn"
              onClick={() => {
                data?.theme === "музыка"
                  ? setShowAnswer(!showAnswer)
                  : setStartTimer(!startTimer);
              }}
            >
              {data?.theme === "музыка" ? "Show Answer" : "start timer"}
            </button>
            {data?.theme === "музыка" ? null : (
              <div className="timer">
                <h2>{startTimer ? time : "Timer"}</h2>
              </div>
            )}
          </div>
        </div>

        <div className="question">
          <h2>{data?.text}</h2>

          <h2>{showAnswer ? data?.answer : "Answer"}</h2>
        </div>
      </div>
    </>
  );
};
