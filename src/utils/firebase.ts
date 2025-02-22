import { initializeApp} from "firebase/app";
import firebaseconfig from "./firebaseconfig";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from "firebase/auth";
<<<<<<< HEAD
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { postup } from "../types/postup";
=======
import { dispatch } from "../store";
import { navigate } from "../store/action";
import { Screens } from "../types/navigations";
>>>>>>> ef5784b3c872df0611384597e932d3014aa45603

const app = initializeApp(firebaseconfig);
const db = getFirestore(app);

export const auth = getAuth(app);

const UserRegister = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<boolean> => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential.user);
      dispatch(navigate(Screens.DASHBOARD))
      return true;
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      return false;
    }
  };

  const Userlogin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
    
  })  => {
    setPersistence(auth,browserSessionPersistence)
    .then(() => {
      return signInWithEmailAndPassword(auth,email,password);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage);
    })
  };

  const savephPostDInDB = async (postup:postup) => {
    try {
        const docRef = await addDoc(collection(db, "postup"),postup);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

  export default {UserRegister, Userlogin, savephPostDInDB};