import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAHJnwTlqpXPQ2DOQxKreVKrIug5UYi67g",
  authDomain: "appwork-f93ac.firebaseapp.com",
  projectId: "appwork-f93ac",
  storageBucket: "appwork-f93ac.appspot.com",
  messagingSenderId: "901391688640",
  appId: "1:901391688640:web:c55d9a91af01fede01de25",
  measurementId: "G-LNNBSKKVLV"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);