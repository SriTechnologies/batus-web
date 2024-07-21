import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FB_API_KEY,
	authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FB_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FB_MSG_SENDER_ID,
	appId: process.env.REACT_APP_FB_APP_ID,
	measurementId: process.env.REACT_APP_FB_MEASUREMENT_ID
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

// export const auth = getAuth(app);
// // console.log("Fire Auth objec: " + JSON.stringify(auth));

// export const auth = initializeAuth(app, {errorMap: debugErrorMap, persistence: browserLocalPersistence, popupRedirectResolver: undefined });
// in order to use this auth instance elsewhere

export default firebaseApp;
