import { useNavigate } from "react-router-dom";
import "../components/App.css";
import "./GameField.css";
import { useEffect } from "react";
export const GameField = () => {
  const navigate = useNavigate();
  function handlePress(theme: number, question: number) {
    const data = { theme: theme, question: question };
    navigate("/question", { state: data });
  }

  // Create a function for getting a variable value
  // function myFunction_get() {
  //   // Get the styles (properties and values) for the root
  //   var rs = getComputedStyle(r!);
  //   // Alert the value of the --blue variable
  //   alert(
  //     "The value of --background is: " + rs.getPropertyValue("--background")
  //   );
  // }
  //console.log(myFunction_get());
  // Create a function for setting a variable value
  function myFunction_set() {
    // Set the value of variable --blue to another value (in this case "lightblue")
    // var r = document.querySelector(":root")  as HTMLCollectionOf<HTMLElement>;
    var r = document.querySelector<HTMLElement>(":root");
    if (r) {
      r.style.setProperty("--background", "#f1fafa");
    }
  }
  useEffect(() => {
    // Update the document title using the browser API
    myFunction_set();
  });
  return (
    <div className="box">
      <div className="group">
        <button className="d0"> детство</button>
        <button
          className="d1"
          onClick={() => {
            handlePress(1, 1);
          }}
        >
          10
        </button>
        <button
          className=" d2"
          onClick={() => {
            handlePress(1, 2);
          }}
        >
          20
        </button>
        <button
          className=" d3"
          onClick={() => {
            handlePress(1, 3);
          }}
        >
          30
        </button>
        <button
          className=" d4"
          onClick={() => {
            handlePress(1, 4);
          }}
        >
          40
        </button>
      </div>
      <div className="group">
        <button className="l0"> жизнь</button>
        <button
          className="l1"
          onClick={() => {
            handlePress(2, 1);
          }}
        >
          10
        </button>
        <button
          className="l2"
          onClick={() => {
            handlePress(2, 2);
          }}
        >
          20
        </button>
        <button
          className="l3"
          onClick={() => {
            handlePress(2, 3);
          }}
        >
          30
        </button>
        <button
          className="l4"
          onClick={() => {
            handlePress(2, 4);
          }}
        >
          40
        </button>
      </div>

      <div className="group ">
        <button className="r0"> разное</button>
        <button
          className="r1"
          onClick={() => {
            handlePress(3, 1);
          }}
        >
          10
        </button>
        <button
          className="r2"
          onClick={() => {
            handlePress(3, 2);
          }}
        >
          20
        </button>
        <button
          className="r3"
          onClick={() => {
            handlePress(3, 3);
          }}
        >
          30
        </button>
        <button
          className="r4"
          onClick={() => {
            handlePress(3, 4);
          }}
        >
          40
        </button>
      </div>
    </div>
  );
};
