import firebase from '../config/firebaseApp';
import {useState, useEffect } from 'react';
import { getAuth, signInAnonymously } from 'firebase/auth';

export default function useToken() {
  const [token, setToken] = useState('');
  const auth = getAuth(firebase);
  const [creds, setCreds] = useState({});

  useEffect(() => {
	async function getCreds() {
		signInAnonymously(auth)
		.then((c) => {
			// console.log(">>>>>> useToken: SignInAnonymous Success: " + JSON.stringify(c));
			setCreds(c);
		})
		.catch((error) => {
		// console.log(">>>>>> useToken: SignInAnonymous Failure: " + error.message);
		});
	}
	getCreds();
  }, [auth]);

  useEffect(() => { 
	// console.log('>>>>>> useToken: useEffect: ');
		return auth.onAuthStateChanged(async function (user) {
			// console.log('>>>>>> useToken: useEffect: user: ' + JSON.stringify(user));
			if (user) {
				const tok = await user.getIdToken(true);
				setToken(tok);
			}
			// console.log('<<<<<< useToken: useEffect: user: ' + JSON.stringify(user));
		});
  }, [auth]);

  return token
}
