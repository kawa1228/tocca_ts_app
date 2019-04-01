import firebase from 'firebase'
import 'firebase/firestore'

if (!firebase.apps.length) {
  console.log(process.env.$APIKEY)
  firebase.initializeApp({
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    databaseURL: process.env.DATABASEURL,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID
  })
}

export default firebase
