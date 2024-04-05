import { firebase } from '~/service/initFirebase'
import { QuestionClass } from '~/types/QuestionClass'

const postConverter = {
  toFirestore(question: QuestionClass): firebase.firestore.DocumentData {
    return {
      question: question.text,
      cost: question.cost,
      answer: question.answer,
      asked: question.asked,
      theme: question.theme,
      uuid: question.uuid,
    }
  },
  fromFirestore(
    snapshot: firebase.firestore.QueryDocumentSnapshot,
    options: firebase.firestore.SnapshotOptions,
  ): QuestionClass {
    const data = snapshot.data(options)
    return new QuestionClass(
      data.text,
      data.cost,
      data.answer,
      data.asked,
      data.theme,
      data.uuid,
    )
  },
}

export const getQuestion = async (uuid: string) => {
  const db = firebase.firestore()

  const questionsRef = db
    .collection('questions')
    .withConverter(postConverter)
    .doc(uuid)

  try {
    return await questionsRef.get().then((doc) => {
      if (doc.exists && doc != undefined) {
        return doc.data()
      }
    })
  } catch (error) {
    console.log('Error getting documents: ', error)
    throw error
  }
}
