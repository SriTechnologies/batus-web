import React from 'react';
// import axios from "axios";
import { useEffect } from "react";
import UseToken from '../../hooks/useToken';
import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
// import { useAuth } from '../../AuthContext';
// import useUser from '../../hooks/useUser';
// import { getIdToken } from 'firebase/auth';

const HomePage = () => {
	// const { user } = useUser();
	// // console.log("HomePage user: " + JSON.stringify(user));

	// useEffect(() => {
	// 	const checkUserToken = async () => {
	// 		const token = await getIdToken(user, true);
	// 		// console.log('user token: ' + token);
	// 		const headers = token !== null ? { 
	// 			authtoken: token
	// 		} : {};
	// 		if (headers !== null ) {
	// 			const res = await axios.get(`${process.env.REACT_APP_BAT_SERVER_HOST}/api/heartbeat`, { headers })
	// 		}
	// 	}
	// 	checkUserToken();
	// },[user]);

	// const {currentUser} = useAuth();
	// const [token, setToken] = useState('');

	const token = UseToken();
	// console.log('===== HomePage: token:' + JSON.stringify(token));

	useEffect( () => {
		// console.log('>>>>> HomePage: UseEffect');
		async function initialize() {
			if (token) {
					// console.log('user token: ' + token);
					const headers = token !== null ? { 
						authtoken: token
					} : {};
					// console.log('API Headers: ' + JSON.stringify(headers));
				}
				// const res = await axios.get(`${process.env.REACT_APP_BAT_SERVER_HOST}/api/heartbeat`, { headers })
		}
		// console.log('<<<<<< HomePage: UseEffect');
		initialize();
	}, [token]);

	return (
		<center>
			<h1>Welcome the Brahmin Association of Texas</h1>
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					margin: "auto",
					width: "fit-content",
				}}
			>
				<Paper elevation={3} 
					variant="outlined">
					<Typography>
						
					</Typography>
				</Paper>
			</Box>
		</center>
	);
}

export default HomePage;