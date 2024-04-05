import { firebase } from '~/service/initFirebase'
import { GameFieldQuesionClass } from '~/types/QuestionClass'
const getConverter = {
  toFirestore(
    question: GameFieldQuesionClass,
  ): firebase.firestore.DocumentData {
    return {
      cost: question.cost,
      asked: question.asked,
      uid: question.uid,
    }
  },
  fromFirestore(
    snapshot: firebase.firestore.QueryDocumentSnapshot,
    options: firebase.firestore.SnapshotOptions,
  ): GameFieldQuesionClass {
    const data = snapshot.data(options)
    return new GameFieldQuesionClass(data.cost, data.asked, data.uid)
  },
}

export const getIdCostArr = async (theme: string) => {
  const db = firebase.firestore()
  const questionsRef = db
    .collection('questions')
    .where('theme', '==', theme)
    .withConverter(getConverter)
  const array: GameFieldQuesionClass[] = []
  try {
    const querySnapshot = await questionsRef.get()
    querySnapshot.forEach((doc) => {
      if (doc.exists && doc != undefined) {
        array.push(doc.data())
        console.log(array)
      }
    })
    return array
  } catch (error) {
    console.log('Error getting documents: ', error)
    throw error
  }
}
