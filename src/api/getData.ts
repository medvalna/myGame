import { firebase } from '~/service/initFirebase'
import { GameFieldQuesionClass, QuestionClass } from '~/types/QuestionClass'

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
    const data = snapshot.data(options)!
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

export const updateDB = async ({
  uuid,
  asked,
}: {
  uuid: string
  asked: boolean
}) => {
  const db = firebase.firestore()
  const postData = {
    uid: uuid,
    asked: !asked,
  }
  try {
    await db.collection('questions').doc(uuid).update(postData)
  } catch (error) {
    console.log('Error getting documents: ', error)
    throw error
  }
}

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
    const data = snapshot.data(options)!
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
