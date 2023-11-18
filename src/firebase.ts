import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyBaxEVGB7FchgnzEODi_-fsw4yYeuiSyMs',
  authDomain: 'portfolio-bde17.firebaseapp.com',
  projectId: 'portfolio-bde17',
  storageBucket: 'portfolio-bde17.appspot.com',
  messagingSenderId: '116032724321',
  appId: '1:116032724321:web:ec9c5313d869117b52f920',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth()
const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)

export const signInWithGoogle = () => signInWithPopup(auth, provider)
