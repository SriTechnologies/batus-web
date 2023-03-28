import { useState, useEffect } from "react"
import { getAuth } from "firebase/auth";
import firebase from "../config/firebaseApp";

const useUser = () => {
	const [user, setUser] =  useState( () =>
		JSON.parse(localStorage.getItem('authUser') || '{}')
	);
	const auth = getAuth(firebase);

	useEffect( () => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				localStorage.setItem('authUser', JSON.stringify(authUser));
				setUser(authUser);
			} else {
				localStorage.removeItem('authUser');
				setUser(null);
			}
		});
		return unsubscribe?.();
	}, [user, auth]);

	return { user };
}

export default useUser;