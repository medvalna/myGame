﻿import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import { Question } from "../pages/Question";
import { GameField } from "../pages/GameField";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="/">
          <Route element={<GameField />} path="/" />
          <Route element={<Question />} path="/question" />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};