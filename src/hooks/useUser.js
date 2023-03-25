import { useState, useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth";

const useUser = () => {
	const [user, setUser] =  useState( () =>
		JSON.parse(localStorage.getItem('authUser') || '{}')
	);

	useEffect( () => {
		const unsubscribe = onAuthStateChanged((authUser) => {
			if (authUser) {
				localStorage.setItem('authUser', JSON.stringify(authUser));
				setUser(user);
			} else {
				localStorage.removeItem('authUser');
				setUser(null);
			}
		});
		return unsubscribe?.();
	}, [user]);

	return { user };
}

export default useUser;