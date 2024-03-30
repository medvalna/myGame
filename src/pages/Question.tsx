import { useLocation } from "react-router-dom";
import "../components/App.css";
import "./GameField.css";
import "./Question.css";
import { useEffect, useState } from "react";
import { useCountdown } from "../hooks/useCountdown";
import { updateDB } from "../hooks/getData";

export const Question = () => {
  //const get = getData();
  const location = useLocation();
  const theme = location.state.theme;
  const questionNumber = location.state.cost;
  const question = location.state.question;
  const answer = location.state.answer;
  const cost = location.state.cost;
  const uuid = location.state.uuid;
  const asked = location.state.asked;
  const [showAnswer, setShowAnswer] = useState(false);

  const { time, setStartTimer, startTimer } = useCountdown(60 * 1000, () =>
    setShowAnswer(true)
  );

  function myFunction_set() {
    const r = document.querySelector<HTMLElement>(":root");
    if (r) {
      if (theme === "детство") {
        r.style.setProperty("--background", "#DAF3F2");
      } else if (theme === "жизнь") {
        r.style.setProperty("--background", "#DAE6F3");
      } else {
        r.style.setProperty("--background", "#DCDAF3");
      }
    }
  }

  useEffect(() => {
    myFunction_set();
    setStartTimer(true);
  }, []);

  useEffect(() => {
    console.log(asked);
    updateDB(uuid, answer, question, theme, cost, asked);
  }, [showAnswer]);

  return (
    <>
      <div className="texts">
        <div className="buttons">
          <div
            className="title"
            style={{
              backgroundColor:
                theme === "детство"
                  ? "#95DCDB"
                  : theme === "жизнь"
                  ? "#95B7DC"
                  : "#9A95DC",
            }}
          >
            <h2>
              {theme} {questionNumber}
            </h2>
          </div>
          {theme === "музыка" ? null : (
            <div
              className="header"
              style={{
                backgroundColor:
                  theme === "детство"
                    ? "#95DCDB"
                    : theme === "жизнь"
                    ? "#95B7DC"
                    : "#9A95DC",
              }}
            >
              <button
                className="answerbtn"
                onClick={() => {
                  setShowAnswer(!showAnswer);
                }}
                style={{
                  backgroundColor:
                    theme === "детство"
                      ? "#95DCDB"
                      : theme === "жизнь"
                      ? "#95B7DC"
                      : "#9A95DC",
                }}
              >
                Show Answer
              </button>
            </div>
          )}

          <div
            className="header"
            style={{
              backgroundColor:
                theme === "детство"
                  ? "#95DCDB"
                  : theme === "жизнь"
                  ? "#95B7DC"
                  : "#9A95DC",
            }}
          >
            <button
              className="timebtn"
              onClick={() => {
                theme === "музыка"
                  ? setShowAnswer(!showAnswer)
                  : setStartTimer(!startTimer);
              }}
              style={{
                backgroundColor:
                  theme === "детство"
                    ? "#95DCDB"
                    : theme === "жизнь"
                    ? "#95B7DC"
                    : "#9A95DC",
              }}
            >
              {theme === "музыка" ? "Show Answer" : "start timer"}
            </button>
            {theme === "музыка" ? null : (
              <div
                className="timer"
                style={{
                  backgroundColor:
                    theme === "детство"
                      ? "#95DCDB"
                      : theme === "жизнь"
                      ? "#95B7DC"
                      : "#9A95DC",
                }}
              >
                <h2>{startTimer ? time : "Timer"}</h2>
              </div>
            )}
          </div>
        </div>

        <div className="question">
          <h2>{question}</h2>

          <h2>{showAnswer ? answer : "Answer"}</h2>
        </div>
      </div>
    </>
  );
};
