
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, 
        getAuth, 
        signInWithEmailAndPassword, 
        signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyA0qG6E0ASKzi29gm9FxwqsWklZebNWdHs",
  authDomain: "netflix-clone-7eb15.firebaseapp.com",
  projectId: "netflix-clone-7eb15",
  storageBucket: "netflix-clone-7eb15.appspot.com",
  messagingSenderId: "212655710170",
  appId: "1:212655710170:web:07ce2a08db521ee87f6ae3"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const singUp = async (name, email, password) =>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"),{
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })      
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async (email, password)=>{
        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
            console.log(error);
            toast.error(error.code.split('/')[1].split('-').join(" "));
        }
}

const logout = () => {
    signOut(auth);
}

export {auth, db, login, singUp, logout};