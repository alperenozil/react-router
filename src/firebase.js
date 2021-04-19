import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "selamkenksoIJcqX5efIzC6T8",
    authDomain: "public-notes-f0fcc.firebaseapp.com",
    projectId: "public-notes-f0fcc",
    storageBucket: "public-notes-f0fcc.appspot.com",
    messagingSenderId: "637867974163",
    appId: "1:637867974163:web:32bf205c62934c82f929e6",
    measurementId: "G-4YN2R2NCFT"
  };

firebase.initializeApp(firebaseConfig);
window.firebase=firebase;
export default firebase;