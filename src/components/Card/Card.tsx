import '~/components/App/App.css'
import '~/pages/GameField/GameField.css'
import { useNavigate } from 'react-router-dom'

export const Card = ({
  cost,
  theme,
  uuid,
  asked,
}: {
  cost: number
  theme: string
  uuid: string
  asked: boolean
}) => {
  const navigate = useNavigate()

  function handlePress() {
    const data = {
      theme: theme,
      // question: prop.question,
      // answer: prop.answer,
      cost: cost,
      uuid: uuid,
    }
    navigate(`/question/${uuid}`)
  }

  return (
    <button
      className={asked ? 'del' : 'd0'}
      onClick={() => {
        handlePress()
      }}
    >
      {uuid}
    </button>
  )
}
