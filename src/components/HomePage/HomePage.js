import React, { useState } from 'react';
import axios from "axios";
// import { useEffect } from "react";
// import useUser from "../../hooks/useUser";
// import UseToken from '../../hooks/useToken';
import { useAuth } from '../../AuthContext';

const HomePage = () => {
	// const { user } = useUser();

	// useEffect(() => {
	// 	const checkUserToken = async () => {
	// 		const token = user && await user.getIdToken();
	// 		console.log('user token: ' + token);
	// 		const headers = token !== null ? { 
	// 			authtoken: token
	// 		} : {};
	// 		if (headers !== null ) {
	// 			const res = await axios.get(`${process.env.REACT_APP_BAT_SERVER_HOST}/api/heartbeat`, { headers })
	// 		}
	// 	}
	// 	checkUserToken();
	// },[user]);

	const {currentUser} = useAuth();
	const [token, setToken] = useState('');

	// const token = UseToken();

	React.useEffect( () => {
		console.log('>>>>> HomePage: UseEffect');
		
		if (currentUser) {
			currentUser.getIdToken(true)
        	.then(latestToken => {
				setToken(latestToken);
				console.log('user token: ' + latestToken);
				const headers = latestToken !== null ? { 
					authtoken: latestToken
				} : {};
				console.log('API Headers: ' + JSON.stringify(headers));
			})
        	.catch(err => console.log(err))
			// const res = await axios.get(`${process.env.REACT_APP_BAT_SERVER_HOST}/api/heartbeat`, { headers })
		}
		console.log('<<<<<< HomePage: UseEffect');
	}, [currentUser]);

	return (
		<h1>Home page</h1>
	);
}

export default HomePage;