import firebase from "firebase/app"

import "firebase/firestore"

// ADD YOUR FIREBASE CONFIG OBJECT HERE:
var firebaseConfig = {
    apiKey: "AIzaSyDKqz2bYF0K7OWuh6Zp0BUL03qWNzqUw5o",
    authDomain: "movie-app-59ac2.firebaseapp.com",
    databaseURL: "https://movie-app-59ac2.firebaseio.com",
    projectId: "movie-app-59ac2",
    storageBucket: "movie-app-59ac2.appspot.com",
    messagingSenderId: "977232722169",
    appId: "1:977232722169:web:ccbb0d3367abe7327d0a28"

}

let firebaseApp = firebase.initializeApp(firebaseConfig)
let db = firebaseApp.firestore()

db.enablePersistence()
.catch(err => {
  if(err.code == 'failed-precondition'){
    console.log('persistance failed')
  }
  else if(err.code == 'unimplemented'){
    console.log('persistance unvailable')
  }
})

export { db }