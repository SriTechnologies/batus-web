import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import useUser from "../../hooks/useUser";


const HomePage = () => {
	const { user, isLoading } = useUser();

	useEffect(() => {
		const checkUserToken = async () => {
			const token = user && await user.getIdToken();
			console.log('user token: ' + token);
			const headers = token ? { 
				authtoken: token
			} : {};
			if (headers !== "" ) {
				const res = await axios.get('http://localhost:8989/api/hello', { headers })
			}
		}
		checkUserToken();
	});

	return (
		<h1>Home page</h1>
	);
}

export default HomePage;