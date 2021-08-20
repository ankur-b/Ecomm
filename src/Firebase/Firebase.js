import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAXMDv38JuKuDTBQbltTJwk7Jjd3mrJK2k",
    authDomain: "ecomm-782c0.firebaseapp.com",
    projectId: "ecomm-782c0",
    storageBucket: "ecomm-782c0.appspot.com",
    messagingSenderId: "1084026827369",
    appId: "1:1084026827369:web:7e455e47351f8c61aca8f8",
    measurementId: "G-54K4B8E5BJ"
};

export const createUserProfileDocument = async(userAuth,additionalData) =>{
    if(!userAuth){
       return 
    }
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    if(!snapShot.exists){
        const {displayName,email} = userAuth;
        const createdAt = new Date()
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user',error.message)
        }
    }
    return userRef
}


firebase.initializeApp(config)
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);