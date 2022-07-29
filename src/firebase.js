// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGr3C6Pc6YsVWa0CjMm0cIQIH0ey7qovk",
  authDomain: "disneyclone-7883c.firebaseapp.com",
  projectId: "disneyclone-7883c",
  storageBucket: "disneyclone-7883c.appspot.com",
  messagingSenderId: "484342236241",
  appId: "1:484342236241:web:e42c9bc48bf12429d4a470"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore;
const db = getFirestore(firebaseApp);
const auth= firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage= firebase.storage;
export {auth,provider,storage};
export default db;
