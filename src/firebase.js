import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth,signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyC_o3K03oVXFkRgvsebxgaVb3-c2XVIrXU",
  authDomain: "netflix-clone-de75a.firebaseapp.com",
  projectId: "netflix-clone-de75a",
  storageBucket: "netflix-clone-de75a.appspot.com",
  messagingSenderId: "867743974211",
  appId: "1:867743974211:web:2531094edee913b78525f6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name,email,password)=>{
 try{
  const res = await createUserWithEmailAndPassword(auth,email,password);
  const user = res.user;
  await addDoc(collection(db,"user"),{
    uid: user.uid,
    name, 
    authProvider : "local",
    email,
  });
 }catch(error){
    console.log(error);
   toast.error(error.code.spli('/')[1].split('-').join(" "));
 }
}
const login = async (email,password) =>{
    try{
        const res = await signInWithEmailAndPassword(auth,email,password);
    }catch{
        console.log(error);
        toast.error(error.code.spli('/')[1].split('-').join(" "));
    }
}
const logout = ()=>{
signOut(auth);
}
export {auth, db , signup , login , logout};