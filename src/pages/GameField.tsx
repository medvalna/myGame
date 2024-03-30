import { useNavigate } from "react-router-dom";
import "../components/App.css";
import "./GameField.css";
import { useEffect, useState } from "react";
import { getThemes } from "../hooks/getData";
import { ThemeList } from "../components/ThemeList";
export const GameField = () => {
  const [themeList, setThemeList] = useState<string[]>([]);
  async function loadThemes() {
    const values = await getThemes();
    setThemeList(values);
    console.log(values);
  }

  useEffect(() => {
    loadThemes();
  }, []);

  const listItems = themeList.map((themeList, index) => (
    <ThemeList title={themeList} key={index} />
  ));
  return (
    <>
      <div className="box">
        <ul className="titles">{listItems}</ul>
      </div>
    </>
  );
};
