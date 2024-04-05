import './App.css'
import '../pages/GameField.css'
import { getIdCostArr } from '../api/getData'
import { useEffect, useState } from 'react'
import { Card } from './Card'
import { GameFieldQuesionClass } from '~/types/QuestionClass'

export const QuestionsList = ({ title }: { title: string }) => {
  const [questions, setQuestions] = useState<GameFieldQuesionClass[]>([])
  async function loadQuestions() {
    const state = await getIdCostArr(title)
    setQuestions(state)
  }
  useEffect(() => {
    loadQuestions()
  }, [])
  const questionsComponent = questions.map((questions, index) => (
    <Card
      key={index}
      cost={questions.cost}
      theme={title}
      uuid={questions.uid}
      asked={questions.asked}
    />
  ))
  return (
    <div className="col">
      <button className="d0">{title}</button>

      {questionsComponent}
    </div>
  )
}
