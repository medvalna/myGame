import '~/components/App/App.css'
import '~/pages/GameField/GameField.css'
import { useNavigate } from 'react-router-dom'

export const Card = ({
  uuid,
  asked,
  cost,
}: {
  cost: number
  theme: string
  uuid: string
  asked: boolean
}) => {
  const navigate = useNavigate()

  function handlePress() {
    navigate(`/question/${uuid}`)
  }

  return (
    <button
      className={asked ? 'del' : 'd0'}
      onClick={() => {
        handlePress()
      }}
    >
      {cost}
    </button>
  )
}
