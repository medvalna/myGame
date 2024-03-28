import { useLocation } from "react-router-dom";
import "../components/App.css";
import "./GameField.css";
import "./Question.css";
import { useEffect, useState } from "react";
import { getData } from "../hooks/getData";

export const Question = () => {
  //const get = getData();
  const location = useLocation();
  const theme = location.state.theme;
  const questionNumber = location.state.question;
  const themeStr = theme === 1 ? "детство" : theme === 2 ? "жизнь" : "разное";

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  // var question = "";
  // var answer = "";

  function myFunction_set() {
    var r = document.querySelector<HTMLElement>(":root");
    if (r) {
      if (theme === 1) {
        r.style.setProperty("--background", "#DAF3F2");
      } else if (theme == 2) {
        r.style.setProperty("--background", "#DAE6F3");
      } else {
        r.style.setProperty("--background", "#DCDAF3");
      }
    }
  }
  useEffect(() => {
    myFunction_set();
  });
  async function saveData() {
    const values = await getData(theme, questionNumber);
    setAnswer(values.answer);
    setQuestion(values.question);
    console.log("there: ", answer, question);
  }
  return (
    <>
      <button
        onClick={saveData}
        style={{
          backgroundColor:
            theme === 1 ? "#95DCDB" : theme === 2 ? "#95B7DC" : "#9A95DC",
        }}
      >
        Start
      </button>
      <div
        className="container"
        style={{
          color: theme === 1 ? "#194D4C" : theme === 2 ? "#19324D" : "#1d194d",
        }}
      >
        <div className="title">
          <h1>
            {themeStr} {questionNumber}
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
        <div>
          <p>{question}</p>
          <p>{showAnswer ? answer : ""}</p>
        </div>
      </div>
    </>
  );
};
