import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Stack from '@mui/material/Stack';

const pages = [
	{
		title: 'Home', link: '/', submenu: []
	},
	{
		title: 'Committee', link: '/Committee', submenu: [
			{ title: 'Board Members', link: '/' },
			{ title: 'Core Committee', link: '/' }
		]
	},
	{
		title: 'Contact Us', link: '/ContactUs', submenu: [
			{ title: 'Email', link: '/' },
			{ title: 'Contact Details', link: '/' }
		]
	},
	{
		title: 'Events', link: '/Events', submenu: [
			{ title: 'Annual Events', link: '/' },
			{ title: 'Monthly Events', link: '/' }
		]
	},
	{
		title: 'Membership', link: '/Membership', submenu: [
			{ title: 'Become a Member', link: '/' },
			{ title: 'Membership Benefits', link: '/' },
		]
	},
	{
		title: 'Volunteer', link: '/Volunteer', submenu: [
			{ title: 'Register as Volunteer', link: '/' },
			{ title: 'Volunteer Services', link: '/' }
		]
	},
];

function AppHeaderBar() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElMenu, setAnchorElMenu] = React.useState(null);
	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef(null);
	const anchorRefs = React.useRef([]);

	const handleToggle = (event, index, len) => {
		console.log("Menu index: ", index);
		if (len > 0) {
			setOpen((prevOpen) => !prevOpen);
			if (event.currentTarget !== anchorRef) {
				anchorRef.current = event.currentTarget;
			}
		}
	};

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}
		anchorRef.current = null;
		setOpen(false);
	};

	function handleListKeyDown(event) {
		if (event.key === 'Tab') {
			event.preventDefault();
			setOpen(false);
		} else if (event.key === 'Escape') {
			setOpen(false);
		}
	}

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleOpenSubMenu = (event) => {
		setAnchorElMenu(event.currentTarget);
	};

	const handleCloseSubMenu = () => {
		setAnchorElMenu(null);
	};

	const SubMenu = props => {
		// const [anchorEl, setAnchorEl] = React.useState(props.anchorEl);
		// const open = Boolean(anchorEl);

		return (
			<Menu
				// elevation={0}
				// sx={{ mt: '20px' }}
				id={props.id}
				// anchorEl={props.anchorEl}
				// anchorOrigin={{
				// 	vertical: 'bottom',
				// 	horizontal: 'center',
				// }}
				keepMounted
				// transformOrigin={{
				// 	vertical: 'bottom',
				// 	horizontal: 'center',
				// }}
				open={Boolean(props.anchorEl)}
				// autoFocusItem={props.af}
				// onClose={props.close}
			>
				{props.content.map((item) => (
					<MenuItem
						id={item.title}
						key={item.title}
						onClick={props.close}
					>
						{item.title}
					</MenuItem>
				))}
			</Menu>
		);
	}

	return (
		<AppBar position="relative">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
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

					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{pages.map((page, itemIndex) => (
							<Box>
								<Button
									ref={(el) => (anchorRefs.current.push(el))}
									key={page.title}
									id={`menubutton-${itemIndex}`}
									aria-label={page.title}
									aria-controls={open ? `submenu-${itemIndex}` : undefined}
									aria-expanded={open ? 'true' : undefined}
									aria-haspopup="true"
									onClick={(e) => { handleToggle(e, itemIndex, page.submenu.length) }}
									color='inherit'
								>
									{page.title}
								</Button>
								<Popper
									open={open}
									anchorEl={anchorRef.current}
									role={undefined}
									placement="bottom-start"
									transition
									disablePortal
									// onKeyDown={handleListKeyDown}
									// onClose={handleClose}
								>
									{({ TransitionProps, placement }) => (
										<Grow
											{...TransitionProps}
											style={{
												transformOrigin:
													placement === 'bottom-start' ? 'left top' : 'left bottom',
											}}
										>
											<Paper>
												<ClickAwayListener onClickAway={handleClose}>
													<MenuList
														id={`submenu-${itemIndex}`}
														key={`submenu-${itemIndex}`}
														aria-labelledby={`menubutton-${itemIndex}`}
														autoFocusItem={open}
														onKeyDown={handleListKeyDown}
														onClose={handleClose}
													>
														{page.submenu?.map((subitem, subitemIndex) => (
															<MenuItem
																key={subitem.title}
																onClick={handleClose}>
																{subitem.title}
															</MenuItem>
														))}
													</MenuList>
													{/* <SubMenu id={itemIndex} af={`${open}`} close={handleClose} content={page.submenu} /> */}
												</ClickAwayListener>
											</Paper>
										</Grow>
									)}
								</Popper>
							</Box>

							// <MenuList variant='menu' sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
							// 	{pages.map((page, itemIndex) => (
							// 	))}
							// </MenuList>
							// <Box>
							// 	<Button
							// 		id={`menubutton-${itemIndex}`}
							// 		color='inherit'
							// 		aria-controls={`menu-${itemIndex}`}
							// 		aria-haspopup="true"
							// 		onClick={handleOpenSubMenu}
							// 	>
							// 		{page.title}
							// 	</Button>
							// 	<Menu
							// 		id={`menu-${itemIndex}`}
							// 		aria-labelledby={`menubutton-${itemIndex}`}
							// 		aria-controls={`menuitem-${itemIndex}`}
							// 		anchorEl={anchorElMenu}
							// 		keepMounted
							// 		open={Boolean(anchorElMenu)}
							// 		onClose={handleCloseSubMenu}
							// 		anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
							// 		transformOrigin={{ vertical: 'top', horizontal: 'center' }}
							// 	>
							// 		<MenuItem
							// 			key={page.title}
							// 			id={`menuitem-${itemIndex}`}
							// 			onClick={(e) => {
							// 				console.log('Submenu clicked index: ', itemIndex);
							// 				handleCloseSubMenu(e);
							// 			}}
							// 			aria-controls={`submenu-${itemIndex}`}
							// 		>
							// 			{page.title}
							// 			<SubMenu id={`submenu-${itemIndex}`} anchorEl={anchorElMenu} content={page.submenu} />
							// 		</MenuItem>
							// 	</Menu>
							// </Box>
						))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default AppHeaderBar;