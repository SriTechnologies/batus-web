import React from 'react';
import "./Header.css"
import { Toolbar, Typography, Box, AppBar } from '@mui/material';
import banner_left from '../../images/banner-left.png';
import banner_right from '../../images/banner-right.png';
import AppHeaderBar from '../Navigation/AppHeaderBar';
import banner_background from '../../images/banner-background.png';

export default function Header() {

	const bannerStyle = {
		width: '100%',
		backgroundImage: `url(${banner_background})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		display: 'flex',
		justifyContent: 'center',
	};

	return (
		<div>
			<AppBar style={bannerStyle}	position='sticky'>
				<Toolbar className='header' sx={{ my: 2}}>
					<Box>
						<img src={banner_left} alt='BAT' width="80" height="90" />
					</Box>
					<Box sx={{ flexGrow: 1 }}>
						<Typography variant="h3">Brahmin Association of Texas (BAT)</Typography>
					</Box>
					<Box>
						<img src={banner_right} alt='BAT' width="60" height="100" />
					</Box>
				</Toolbar>
			</AppBar>
			<AppHeaderBar />
		</div>
	);
}

