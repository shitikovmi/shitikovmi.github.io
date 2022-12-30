import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB9IGfMHXqgH_ABcIkNXwaRfe_fDREvAxY",
    authDomain: "batumi-investment.firebaseapp.com",
    projectId: "batumi-investment",
    storageBucket: "batumi-investment.appspot.com",
    messagingSenderId: "840318976667",
    appId: "1:840318976667:web:9613c9970ca24dfc38bc3e"
};

const app = initializeApp(firebaseConfig);

export default app;