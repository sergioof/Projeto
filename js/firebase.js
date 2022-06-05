/********************************************** 
* Renomeie este arquivo para firebase.js!
***********************************************/

// Cole as informações do seu RealTime Database do Firebase abaixo:
const firebaseConfig = {
  apiKey: "AIzaSyD1Szi3fq--BNzalB_9PydDv-aWJZBWfKE",
  authDomain: "gti---projeto-1.firebaseapp.com",
  databaseURL: "https://gti---projeto-1-default-rtdb.firebaseio.com",
  projectId: "gti---projeto-1",
  storageBucket: "gti---projeto-1.appspot.com",
  messagingSenderId: "194565468641",
  appId: "1:194565468641:web:2e41cc4fc580a60df022a0",
  measurementId: "G-N8LD4BR830"
};

/*
* Nas regras do Realtime Database, informe:
* {
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}
*/

// Inicializando o Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
