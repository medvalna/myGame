import firebase from 'firebase/compat/app'

export const getThemes = async (): Promise<Array<string>> => {
  const themes: string[] = []
  const db = firebase.firestore()
  const questionsRef = db.collection('themes')

  try {
    const querySnapshot = await questionsRef.get()
    querySnapshot.forEach((doc) => {
      themes.push(doc.data().title)
    })
    return themes
  } catch (error) {
    console.log('Error getting documents: ', error)
    throw error
  }
}
