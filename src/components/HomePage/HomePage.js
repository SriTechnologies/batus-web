import React from 'react';
import axios from "axios";
import { useEffect } from "react";
import useUser from "../../hooks/useUser";

const HomePage = () => {
	const { user } = useUser();

	useEffect(() => {
		const checkUserToken = async () => {
			const token = user && await user.getIdToken();
			console.log('user token: ' + token);
			const headers = token ? { 
				authtoken: token
			} : {};
			if (headers !== "" ) {
				const res = await axios.get(`${process.env.REACT_APP_BAT_SERVER_HOST}/api/hello`, { headers })
			}
		}
		checkUserToken();
	},[user]);

	return (
		<h1>Home page</h1>
	);
}

export default HomePage;