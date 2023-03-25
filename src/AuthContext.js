import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "./config/firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
	console.log('>>>>>> AuthContext: useEffect: ' + JSON.stringify(auth));
    const unsubscribe = auth.onAuthStateChanged( (user) => {
		console.log('>>>>>> AuthContext: useEffect: user: ' + JSON.stringify(user));
		if (user) {
      		setCurrentUser(user);
      		setLoading(false);
		}
    });
	console.log('<<<<<<<< AuthContext: useEffect');
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    register,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

// import  { createContext } from 'react';

// const AuthContext = createContext(null);

// export const FirebaseContext = Component => props => (
// 	<AuthContext.Consumer>
// 		{firebase => <Component {...props} firebase={firebase}/>}
// 	</AuthContext.Consumer>
// );

// export default AuthContext;

// export function AuthContextProvider({ children }) {
//   const [user, setUser] = useState({});
//   const [token, setToken] = useState(null);

//   function logIn(email, password) {
//     return signInWithEmailAndPassword(auth, email, password);
//   }
//   function signUp(email, password) {
//     return createUserWithEmailAndPassword(auth, email, password);
//   }
//   function logOut() {
//     return signOut(auth);
//   }
//   function googleSignIn() {
//     const googleAuthProvider = new GoogleAuthProvider();
//     return signInWithPopup(auth, googleAuthProvider);
//   }

//   useEffect(() => {
//     fbAuth.onAuthStateChanged( async(currentuser) => {
// 		if (currentuser) {
//       		console.log("Auth: ", currentuser);
//       		setUser(currentuser);
// 			const token = await currentuser.getIdToken();
// 			setToken(token);
// 		} else {
// 			console.log("Auth is null: ");
// 			setUser(null);
// 		}
//     });
//   }, []);

//   return (
//     <AuthContext.Provider
//       value={{ user /*, logIn, signUp, logOut, googleSignIn */ }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useUserAuth() {
//   return useContext(AuthContext);
// }
