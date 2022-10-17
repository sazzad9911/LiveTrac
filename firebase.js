
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBq9G8aRy98JCTSg0Si0M2CC1RiAKasgOk",
  authDomain: "scientistx-trucker.firebaseapp.com",
  databaseURL: "https://scientistx-trucker-default-rtdb.firebaseio.com",
  projectId: "scientistx-trucker",
  storageBucket: "scientistx-trucker.appspot.com",
  messagingSenderId: "673042513100",
  appId: "1:673042513100:web:4bd4d74ebae04e6d875669",
  measurementId: "G-RBVTCGB4HD"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const db=getFirestore(app)
const storage =getStorage(app)
const firebase={
    auth:auth,
    db:db,
    storage:storage,
    app:app,
}
export default firebase