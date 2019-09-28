import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD79eUWARbeMkPYaXJChWbIfwSyEGJcKPc",
  authDomain: "yp-reminders.firebaseapp.com",
  databaseURL: "https://yp-reminders.firebaseio.com",
  projectId: "yp-reminders",
  storageBucket: "",
  messagingSenderId: "1098671017082",
  appId: "1:1098671017082:web:6438e207fade604e0dffc3"
};

const fire = firebase.initializeApp(firebaseConfig);
const fireDataRef = fire.firestore();

export {fire , fireDataRef};