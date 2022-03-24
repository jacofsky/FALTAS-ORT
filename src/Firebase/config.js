// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Nombre del proyecto público: project-596702727084
