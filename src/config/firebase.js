import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAg2dzen3Kp50wytpfvmAv_r_1woQMt4s0",
  authDomain: "egzotyczne-ogrody.firebaseapp.com",
  databaseURL: "https://egzotyczne-ogrody.firebaseio.com",
  projectId: "egzotyczne-ogrody",
  storageBucket: "egzotyczne-ogrody.appspot.com",
  messagingSenderId: "491547807998",
  appId: "1:491547807998:web:0a211cad189d2f38a195af",
  measurementId: "G-2EVNF3FLG1"
};

firebase.initializeApp(firebaseConfig);

export default firebase