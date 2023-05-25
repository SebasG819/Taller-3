import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail} from "firebase/auth";

const firebaseConfig = {
	
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

signInWithEmailAndPassword(auth, email, password)
.then((userCredential:any) => {
	// Signed in
	const user2 = userCredential.user;
	console.log(user2);
	// ...
})
.catch((error:any) => {
	const errorCode = error.code;
	const errorMessage = error.message;
});
