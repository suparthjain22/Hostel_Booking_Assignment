// import firebase from "firebase/app";

// import "firebase/auth";

// const app = firebase.initializeApp({
//     apiKey: "AIzaSyCdQY_SjuaTl_VPDrUAwy9iUFBo9MlweeU",
//     authDomain: "hostel-allocation-assign-a50e6.firebaseapp.com",
//     projectId: "hostel-allocation-assign-a50e6",
//     storageBucket: "hostel-allocation-assign-a50e6.appspot.com",
//     messagingSenderId: "398523719263",
//     appId: "1:398523719263:web:ddd953b548f4b0a43045ea",
//     measurementId: "G-MZ1KQVVBZC"
//   });
//   export const auth=app.auth();
//   export default app;
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCdQY_SjuaTl_VPDrUAwy9iUFBo9MlweeU",
    authDomain: "hostel-allocation-assign-a50e6.firebaseapp.com",
    projectId: "hostel-allocation-assign-a50e6",
    storageBucket: "hostel-allocation-assign-a50e6.appspot.com",
    messagingSenderId: "398523719263",
    appId: "1:398523719263:web:ddd953b548f4b0a43045ea",
    measurementId: "G-MZ1KQVVBZC"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
// export default db;