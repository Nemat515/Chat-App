import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDgLYstS-S8O40JXoGeUdYQnrN6PvQuuLY",
  authDomain: "nemat-chatapp.firebaseapp.com",
  projectId: "nemat-chatapp",
  storageBucket: "nemat-chatapp.appspot.com",
  messagingSenderId: "611463135493",
  appId: "1:611463135493:web:4cdfa867d8cdd67642b76c",
};

export const app = initializeApp(firebaseConfig);
