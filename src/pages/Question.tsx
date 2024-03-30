import { useLocation } from "react-router-dom";
import "../components/App.css";
import "./GameField.css";
import "./Question.css";
import { useEffect, useState } from "react";
import { useCountdown } from "../hooks/useCountdown";

export const Question = () => {
  //const get = getData();
  const location = useLocation();
  const theme = location.state.theme;
  const questionNumber = location.state.question;

  const [showAnswer, setShowAnswer] = useState(false);

  const { time, setStartTimer, startTimer } = useCountdown(13 * 1000, () =>
    setShowAnswer(true)
  );

  function myFunction_set() {
    const r = document.querySelector<HTMLElement>(":root");
    if (r) {
      if (theme === "детство") {
        r.style.setProperty("--background", "#DAF3F2");
      } else if (theme == "жизнь") {
        r.style.setProperty("--background", "#DAE6F3");
      } else {
        r.style.setProperty("--background", "#DCDAF3");
      }
    }
  }

  useEffect(() => {
    myFunction_set();
  }, []);
  // async function saveData() {
  //   const values = await getQuestion(theme, questionNumber);
  //   setAnswer(values.answer);
  //   setQuestion(values.question);
  //   console.log("there: ", answer, question);
  // }
  return (
    <>
      {/* <button
        onClick={saveData}
        style={{
          backgroundColor:
            theme === 1 ? "#95DCDB" : theme === 2 ? "#95B7DC" : "#9A95DC",
        }}
      >
        Start
      </button> */}
      <div
        className="container"
        style={{
          color: theme === 1 ? "#194D4C" : theme === 2 ? "#19324D" : "#1d194d",
        }}
      >
        <div className="title">
          <h1>
            {theme} {questionNumber}
          </h1>
        </div>
        <button
          onClick={() => {
            setShowAnswer(!showAnswer);
          }}
          style={{
            backgroundColor:
              theme === 1 ? "#95DCDB" : theme === 2 ? "#95B7DC" : "#9A95DC",
          }}
        >
          show Answer
        </button>
        <button
          onClick={() => {
            setStartTimer(true);
          }}
          style={{
            backgroundColor:
              theme === 1 ? "#95DCDB" : theme === 2 ? "#95B7DC" : "#9A95DC",
          }}
        >
          start timer
        </button>
        <div>
          <p>{location.state.question}</p>
          <p>{showAnswer ? location.state.answer : ""}</p>
        </div>
        <h1>{startTimer ? time : null}</h1>
      </div>
    </>
  );
};
