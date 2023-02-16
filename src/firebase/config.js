import firebase from 'firebase/compat/app' 
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
import 'firebase/compat/auth'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_OaewVljoKpXREtVu-gFv9fMLFAQdK-Q",
  authDomain: "olx-clone-7be9b.firebaseapp.com",
  projectId: "olx-clone-7be9b",
  storageBucket: "olx-clone-7be9b.appspot.com",
  messagingSenderId: "1098272430917",
  appId: "1:1098272430917:web:9920c689f7fa093cb3fc2c",
  measurementId: "G-WKMZXNQJ6Y"
};

  export default firebase.initializeApp(firebaseConfig)
  