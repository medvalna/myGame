import { useLocation } from "react-router-dom";
import "../components/App.css";
import "./GameField.css";
import "./Question.css";
import { useEffect, useState } from "react";
import { firebase } from "../initFirebase";
export const Question = () => {
  const location = useLocation();
  const theme = location.state.theme;
  const themeStr = theme === 1 ? "детство" : theme === 2 ? "жизнь" : "разное";
  const themeStrEng = theme === 1 ? "childhood" : theme === 2 ? "life" : "mix";
  const questionNumber = location.state.question;
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  // var question = "";
  // var answer = "";
  function getData() {
    const db = firebase.firestore();
    var questionsRef = db
      .collection("questions")
      .where("theme", "==", themeStrEng);
    questionsRef
      .where("cost", "==", questionNumber)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          setQuestion(doc.data().text);
          setAnswer(doc.data().answer);
          console.log(question, answer);
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }

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
    //getData();
  });
  return (
    <>
      <button
        onClick={getData}
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
          <p>{question}</p>
          <p>{answer}</p>
        </div>
        <div></div>
      </div>
    </>
  );
};
