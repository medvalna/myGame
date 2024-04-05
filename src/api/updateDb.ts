import { firebase } from '~/service/initFirebase'
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
