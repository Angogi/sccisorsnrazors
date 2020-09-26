import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDkJdYdrZ0jYOoavOGzwh9Me4J2zJliveY",
  authDomain: "sccisorsnrazorsbarcelona-7e723.firebaseapp.com",
  databaseURL: "https://sccisorsnrazorsbarcelona-7e723.firebaseio.com",
  projectId: "sccisorsnrazorsbarcelona-7e723",
  storageBucket: "sccisorsnrazorsbarcelona-7e723.appspot.com",
  messagingSenderId: "1070591219769",
  appId: "1:1070591219769:web:eccc64b8eb7e90da1395e8",
  measurementId: "G-8WWM8NZJ0N"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth , provider};
  export default db;