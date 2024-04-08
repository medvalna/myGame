import '~/components/App/App.css'
import '~/pages/GameField/GameField.css'
import { useEffect, useState } from 'react'
import { getThemes } from '~/api/getThemes'
import { QuestionsList } from '~/components/ThemeList/ThemeList'
export const GameField = () => {
  const [themeList, setThemeList] = useState<string[]>([])

  async function loadThemes() {
    const values = await getThemes()
    setThemeList(values)
  }
  useEffect(() => {
    loadThemes()
  }, [])

  const listItems = themeList.map((themeList, index) => (
    <QuestionsList title={themeList} key={index} />
  ))

  return (
    <>
      <div className="box">
        <ul className="titles">{listItems}</ul>
      </div>
    </>
  )
}
