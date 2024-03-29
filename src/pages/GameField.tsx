import { useNavigate } from "react-router-dom";
import "../components/App.css";
import "./GameField.css";
import { useEffect, useState } from "react";
import { getThemes } from "../hooks/getData";
import { ThemeList } from "../components/ThemeList";
export const GameField = () => {
  const navigate = useNavigate();
  function handlePress(theme: number, question: number) {
    const data = { theme: theme, question: question };
    navigate("/question", { state: data });
  }

  function myFunction_set() {
    const r = document.querySelector<HTMLElement>(":root");
    if (r) {
      r.style.setProperty("--background", "#f1fafa");
    }
  }
  const [themeList, setThemeList] = useState([""]);
  async function loadThemes() {
    const values = await getThemes();
    setThemeList(values);
    console.log(values);
  }
  useEffect(() => {
    myFunction_set();
  });
  useEffect(() => {
    loadThemes();
  }, [themeList]);
  const listItems = themeList.map((themeList) => (
    <ThemeList title={themeList} />
  ));
  return (
    <>
      <div className="box">
        <ul className="titles">{listItems}</ul>
        <div className="group">
          <button className="d0">детство</button>
          <button
            className="d1"
            onClick={() => {
              handlePress(1, 10);
            }}
          >
            10
          </button>
          <button
            className=" d2"
            onClick={() => {
              handlePress(1, 20);
            }}
          >
            20
          </button>
          <button
            className=" d3"
            onClick={() => {
              handlePress(1, 30);
            }}
          >
            30
          </button>
          <button
            className=" d4"
            onClick={() => {
              handlePress(1, 40);
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
              handlePress(2, 10);
            }}
          >
            10
          </button>
          <button
            className="l2"
            onClick={() => {
              handlePress(2, 20);
            }}
          >
            20
          </button>
          <button
            className="l3"
            onClick={() => {
              handlePress(2, 30);
            }}
          >
            30
          </button>
          <button
            className="l4"
            onClick={() => {
              handlePress(2, 40);
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
              handlePress(3, 10);
            }}
          >
            10
          </button>
          <button
            className="r2"
            onClick={() => {
              handlePress(3, 20);
            }}
          >
            20
          </button>
          <button
            className="r3"
            onClick={() => {
              handlePress(3, 30);
            }}
          >
            30
          </button>
          <button
            className="r4"
            onClick={() => {
              handlePress(3, 40);
            }}
          >
            40
          </button>
        </div>
      </div>
    </>
  );
};
