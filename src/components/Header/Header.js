import React from 'react';
import "./Header.css"
import { Toolbar, Typography, Box, AppBar } from '@mui/material';
import g1 from '../../images/g1.jpg';
import a1 from '../../images/as1.jpg';
import AppHeaderBar from '../Navigation/AppHeaderBar';
import bkimg from '../../images/sr2.jpg';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
	header: {
		backgroundImage: `url(${bkimg})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
}));


export default function Header() {

	const classes = useStyles();

	return (
		<AppBar className={classes.header} position='static'>
			<Toolbar align='center' sx={{ my: 2}}>
				<Box>
					<img src={g1} alt='BAT' width="60" height="80" />
				</Box>
				<Box sx={{ flexGrow: 1 }}>
					<Typography variant="h4">Welcome to Brahmin Association of Texas (BAT)</Typography>
				</Box>
				<Box>
					<img src={a1} alt='BAT' width="50" height="80" />
				</Box>
			</Toolbar>
			<AppHeaderBar />
		</AppBar>
	);
}

