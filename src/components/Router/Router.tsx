import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { App } from '../App/App'
import { Question } from '../../pages/Question/Question'
import { GameField } from '../../pages/GameField/GameField'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="/">
          <Route element={<GameField />} path="/" />
          <Route element={<Question />} path="/question/:id" />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}
