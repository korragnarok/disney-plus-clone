import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCM3NMjVLyvX9pUD_dEyl0hkQMI3pqQEfs",
    authDomain: "disney-plus-site-clone.firebaseapp.com",
    projectId: "disney-plus-site-clone",
    storageBucket: "disney-plus-site-clone.appspot.com",
    messagingSenderId: "657944570465",
    appId: "1:657944570465:web:203741d712dc34804ed820",
    measurementId: "G-6D0FS6QQW8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;