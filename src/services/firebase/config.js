import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCssfwsIIw-DWW9YIUEj0h6kZC3PYxlJZU",
  authDomain: "magichycbenz.firebaseapp.com",
  projectId: "magichycbenz",
  storageBucket: "magichycbenz.appspot.com",
  messagingSenderId: "202536505775",
  appId: "1:202536505775:web:0431c12fa0831af1759f5a"
};

const app = initializeApp(firebaseConfig);

export default function getFireStoreApp() {
    return app
}