import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuUsingPopupState from './MenuPopupState';

const pages = [
	{
		title: 'Home', link: '/', submenu: []
	},
	{
		title: 'Committee', link: '', submenu: [
			{ title: 'Committee', link: '/committee' },
			{ title: 'Board Members', link: '/boardmembers' },
			{ title: 'Core Committee', link: '/corecommittee' }
		]
	},
	{
		title: 'Events', link: '', submenu: [
			{ title: 'Events', link: '/events' },
			{ title: 'Annual Events', link: '/annualevents' },
			{ title: 'Monthly Events', link: '/monthlyevents' }
		]
	},
	{
		title: 'Membership', link: '', submenu: [
			{ title: 'Membership', link: '/membership' },
			{ title: 'Become a Member', link: '/registration' },
			{ title: 'Membership Benefits', link: '/membership' },
		]
	},
	{
		title: 'Volunteer', link: '', submenu: [
			{ title: 'Volunteer Services', link: '/volunteer' },
			{ title: 'Register as Volunteer', link: '/volunteer' },
		]
	},
	{
		title: 'Contact Us', link: '', submenu: [
			{ title: 'Contact Us', link: '/contactus' },
		]
	},
	{
		title: 'About BAT', link: '', submenu: [
			{ title: 'About Bat', link: '/aboutbat' },
			{ title: 'BAT By-Laws', link: '/batbylaws' },
			{ title: 'BAT Mission', link: '/batmission' }
		]
	},
];

function AppHeaderBar() {

	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		// <AppBar>
			// <Container maxWidth="xl">
				<Toolbar align-items='center' sx={{ my: 2}}>
					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="BAT"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							{pages.map((page) => (
								<MenuItem key={page.title} onClick={handleCloseNavMenu}>
									<Typography textAlign="center">{page.title}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Typography
						variant="h5"
						noWrap
						component="a"
						href=""
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						BAT
					</Typography>

					<Box sx={{ mx: 1, 
						flexGrow: 1,
						gap: 5,
						display: { xs: 'none', md: 'flex' },
						alignContent: 'space-evenly'
					}}>
						{pages.map((page, itemIndex) => (
							<MenuUsingPopupState key={itemIndex} item={page} index={itemIndex} />
						))}
					</Box>
				</Toolbar>
			// </Container>
		// </AppBar>
	);
}

export default AppHeaderBar;