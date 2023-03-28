import { createContext, useContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from "firebase/auth";
import firebase from "./config/firebaseApp";
import useToken from "./hooks/useToken";

const AuthContext = createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(true);
	const token = useToken();
	const auth = getAuth(firebase);

	function register(email, password) {
		return createUserWithEmailAndPassword(firebase.auth(), email, password);
	}

	function login(email, password) {
		return signInWithEmailAndPassword(firebase.auth(), email, password);
	}

	useEffect(() => {
		// console.log('>>>>>> AuthContext: useEffect: ');
		const unsubscribe = auth.onAuthStateChanged( async (user) => {
			// console.log('>>>>>> AuthContext: useEffect: user: ' + JSON.stringify(user));
			if (user) {
				setCurrentUser(user);
				setLoading(false);
			}
		});
		// console.log('<<<<<<<< AuthContext: useEffect');
		return async () => unsubscribe;
	}, [token, auth]);

	const value = {
		currentUser,
		login,
		register,
	};

	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	);
}
