import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import "firebase/firestore";

var firebaseConfig = {};
// Initialize Firebase

if (!firebase.apps.length) {
  console.log("working...");
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.firestore().settings({ experimentalForceLongPolling: true });
}

export const auth = firebase.auth();
export const db = firebase.firestore();
export const analytics = firebase.analytics();
export { firebase };
