import "../components/App.css";
import "./GameField.css";
import { useEffect, useState } from "react";
import { getThemes } from "~/api/getData";
import { QuestionsList } from "../components/ThemeList";
export const GameField = () => {
  const [themeList, setThemeList] = useState<string[]>([]);

  async function loadThemes() {
    const values = await getThemes();
    setThemeList(values);
  }

  function changeBgColor() {
    const r = document.querySelector<HTMLElement>(":root");
    if (r) {
      r.style.setProperty("--background", "#DAF3F2");
    }
  }

  useEffect(() => {
    loadThemes();
  }, []);

  useEffect(() => {
    changeBgColor();
  });

  const listItems = themeList.map((themeList, index) => (
    <QuestionsList title={themeList} key={index} />
  ));

  return (
    <>
      <div className="box">
        <ul className="titles">{listItems}</ul>
      </div>
    </>
  );
};
