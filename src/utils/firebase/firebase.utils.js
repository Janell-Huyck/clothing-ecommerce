import { initializeApp } from 'firebase/app'
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2Ax8w3ZurKH8_TOXtHjp-79ojbk8oyN0",
  authDomain: "clothing-ecommerce-46ed8.firebaseapp.com",
  projectId: "clothing-ecommerce-46ed8",
  storageBucket: "clothing-ecommerce-46ed8.appspot.com",
  messagingSenderId: "544625150741",
  appId: "1:544625150741:web:82e169dd18fc3b0841f71c",
  measurementId: "G-5WHN3H5ZFH"
};

// eslint-disable-next-line
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore()

export const createUserDocumentFromAuth = async (
    userAuth, 
    additionalInformation = {}
    ) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutAuthUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            callback(user);
        } else {
            callback(null);
        }
    });
}
