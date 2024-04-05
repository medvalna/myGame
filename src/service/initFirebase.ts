import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import { firebaseConfig } from '~/config/constants'

//const db = firebase.firestore();

function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }
}

initFirebase()

export { firebase }
