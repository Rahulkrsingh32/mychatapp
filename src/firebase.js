import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyDgeezlc4li1RAuE8nC6wizjaQD62rEYIc",
    authDomain: "my-chat-cb489.firebaseapp.com",
    projectId: "my-chat-cb489",
    storageBucket: "my-chat-cb489.appspot.com",
    messagingSenderId: "985377815266",
    appId: "1:985377815266:web:72319cf3fb4943a5d2fcbb"
  }).auth();