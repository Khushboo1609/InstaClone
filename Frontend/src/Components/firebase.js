import { initializeApp } from 'firebase/app';
import { getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";

const app = initializeApp({
    apiKey: "AIzaSyCi5f_Jv-6vXTlZ73Ch9zet8_J5pwQCEkc",
    authDomain: "instaclone-6d93f.firebaseapp.com",
    projectId: "instaclone-6d93f",
    storageBucket: "instaclone-6d93f.appspot.com",
    messagingSenderId: "263851006600",
    appId: "1:263851006600:web:fe05f5116e50148db31d3d",
    measurementId: "G-3YFQCKKY57"
  }
);

const auth=getAuth(app);
const storage=getStorage(app);


export {storage,auth};
