import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail} from "firebase/auth";

const firebaseConfig = {
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//Register new user
createUserWithEmailAndPassword(auth,email, password)
.then((userCredential:any) => {
	// Signed in
	const user = userCredential.user;
	console.log(user);
	// ...
})
.catch((error:any) => {
	const errorCode = error.code;
	const errorMessage = error.message;
	console.log(errorMessage);
	// ..
});