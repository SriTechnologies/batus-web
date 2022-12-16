import React from 'react';
import "./Header.css"
import { Toolbar, Typography, Box } from '@mui/material';
import g1 from '../../images/g1.jpg';
import a1 from '../../images/as1.jpg';

const Header = () => {
	return (
		<div class="banner header">
			<Toolbar disableGutters>
				<Box>
					<img src={g1} alt='BAT' width="60" height="100" />
				</Box>
				<Box sx={{ flexGrow: 1 }}>
					<Typography variant="h4">Welcome to Brahmin Association of Texas (BAT)</Typography>
				</Box>
				<Box>
					<img src={a1} alt='BAT' width="60" height="100" />
				</Box>
			</Toolbar>
		</div>
	);
}

export default Header;