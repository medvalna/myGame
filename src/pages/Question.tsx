import { useLocation } from "react-router-dom";
import "../components/App.css";
import "./GameField.css";
import "./Question.css";
import { useEffect } from "react";
export const Question = () => {
  const location = useLocation();
  const theme = location.state.theme;
  function myFunction_set() {
    var r = document.querySelector<HTMLElement>(":root");
    var q = document.querySelector<HTMLElement>("question");
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
  return (
    <>
      <div
        className="container"
        style={{
          color: theme === 1 ? "#194D4C" : theme === 2 ? "#19324D" : "#1d194d",
        }}
      >
        <div className="question">
          <h1>{theme}</h1>
          <h1>{location.state.question}</h1>
        </div>
      </div>
    </>
  );
};
