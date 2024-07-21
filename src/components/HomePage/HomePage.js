import React from 'react';
// import axios from "axios";
import { useEffect } from "react";
import UseToken from '../../hooks/useToken';
import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import '../../bat.css';
import image1 from '../../images/sr.jpg';
import image2 from '../../images/sr2.jpg';
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

	const iWidth=500
	const iHeight=300

	const token = UseToken();
	// console.log('===== HomePage: token:' + JSON.stringify(token));

	useEffect(() => {
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
			<div id="animation-carousel" class="relative w-full" data-carousel="slide">
				<div class="relative h-56 overflow-hidden rounded-lg md:h-96">
					<div class="hidden duration-200 ease-linear" data-carousel-item>
						<img src="https://lh3.googleusercontent.com/d/1nrzp3no7SldRqDOzNfgZ205Hxuy32iPx" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
					</div>
					<div class="hidden duration-200 ease-linear" data-carousel-item>
						<img src="https://lh3.googleusercontent.com/d/1NKrvtBUD7sm5sz4rwF16ue9bJy05mD51" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
					</div>
					<div class="hidden duration-200 ease-linear" data-carousel-item="active">
						<img src="https://lh3.googleusercontent.com/d/1vfVmtT1vLpW2hvSFE23S1iWOliuqYsaT" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
					</div>
					<div class="hidden duration-200 ease-linear" data-carousel-item>
						<img src="https://lh3.googleusercontent.com/d/1Mxgeppn_i-K2C9FU2Q6FFsy810fSvQsT" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
					</div>
					<div class="hidden duration-200 ease-linear" data-carousel-item>
						<img src="https://lh3.googleusercontent.com/d/1YWcOf1R_NpzX8R0T6xYaXojQfPSbX5l2" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
					</div>
					
				</div>
				<div class="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
					<button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
					<button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
					<button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
					<button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
					<button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
				</div>
				<button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
					<span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
						<svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
						</svg>
						<span class="sr-only">Previous</span>
					</span>
				</button>
				<button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
					<span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
						<svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
						</svg>
						<span class="sr-only">Next</span>
					</span>
				</button>
			</div>
			{/* <h1>Welcome the Brahmin Association of Texas</h1> */}
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					margin: "auto",
					width: "fit-content",
				}}
			>
				<Paper elevation={3} variant="outlined">
					<Typography>

					</Typography>
				</Paper>
			</Box>
		</center>
	);
}

export default HomePage;