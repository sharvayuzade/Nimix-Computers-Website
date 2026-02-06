import { initializeApp, getApps, FirebaseApp } from 'firebase/app'
import { getFirestore, Firestore } from 'firebase/firestore'
import { getAuth, Auth } from 'firebase/auth'
import { getStorage, FirebaseStorage } from 'firebase/storage'
import { getAnalytics, isSupported, Analytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

// Initialize Firebase app lazily (only in browser)
let app: FirebaseApp | null = null
let firestoreInstance: Firestore | null = null
let authInstance: Auth | null = null
let storageInstance: FirebaseStorage | null = null

const getApp = () => {
  if (typeof window === 'undefined') return null
  if (!app) {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
  }
  return app
}

// Lazy getters for Firebase services
export const getDb = () => {
  if (typeof window === 'undefined') return null
  if (!firestoreInstance) {
    const firebaseApp = getApp()
    if (firebaseApp) {
      firestoreInstance = getFirestore(firebaseApp)
    }
  }
  return firestoreInstance
}

export const getAuthInstance = () => {
  if (typeof window === 'undefined') return null
  if (!authInstance) {
    const firebaseApp = getApp()
    if (firebaseApp) {
      authInstance = getAuth(firebaseApp)
    }
  }
  return authInstance
}

export const getStorageInstance = () => {
  if (typeof window === 'undefined') return null
  if (!storageInstance) {
    const firebaseApp = getApp()
    if (firebaseApp) {
      storageInstance = getStorage(firebaseApp)
    }
  }
  return storageInstance
}

// Initialize Analytics (only in browser)
export const initAnalytics = async (): Promise<Analytics | null> => {
  if (typeof window !== 'undefined') {
    const firebaseApp = getApp()
    if (firebaseApp) {
      const supported = await isSupported()
      if (supported) {
        return getAnalytics(firebaseApp)
      }
    }
  }
  return null
}

// Legacy exports for backwards compatibility (will return null on server)
export const db = typeof window !== 'undefined' ? getDb() : null
export const auth = typeof window !== 'undefined' ? getAuthInstance() : null
export const storage = typeof window !== 'undefined' ? getStorageInstance() : null

export default typeof window !== 'undefined' ? getApp() : null
