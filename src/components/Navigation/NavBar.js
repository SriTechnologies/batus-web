import { Link } from "react-router-dom";
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import "./NavBar.css"

const NavBar = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
	  setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
	  setAnchorEl(null);
	};
  
	// const [open, setOpen] = useState(false);

	// const handleOpen = () => {
	// 	setOpen(!open);
	// };

	// const handleAboutBAT = () => {
	// 	setOpen(!open);
	// };

	// const handleBATMission = () => {
	// 	setOpen(!open);
	// };

	// const handleBATByLaws = () => {
	// 	setOpen(!open);
	// };

	// const Dropdown = ({ open, trigger, menu }) => {
	// 	return (
	// 	  <div className="dropdown">
	// 		{trigger}
	// 		{open ? (
	// 		  <ul className="menu">
	// 			{menu.map((menuItem, index) => (
	// 			  <li key={index} className="menu-item">{menuItem}</li>
	// 			))}
	// 		  </ul>
	// 		) : null}
	// 	  </div>
	// 	);
	//   };

	return (
		<nav class="navbar navbar-default">
			<ul class="nav navbar-nav">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<div>
						<Button
							id="about-button"
							aria-controls={open ? 'about-menu' : undefined}
							aria-haspopup="true"
							aria-expanded={open ? 'true' : undefined}
							onClick={handleClick}
							color='inherit'
						>
							About Us
						</Button>
						<Menu
							id="about-menu"
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							MenuListProps={{
								'aria-labelledby': 'about-button',
							}}
						>
							<MenuItem onClick={handleClose}>About BAT</MenuItem>
							<MenuItem onClick={handleClose}>BAT Mission</MenuItem>
							<MenuItem onClick={handleClose}>BAT By-Laws</MenuItem>
						</Menu>
					</div>
				</li>
				<li>
					<Link to="/committee">Committee</Link>
				</li>
				<li>
					<Link to="/membership">Membership</Link>
				</li>
				<li>
					<Link to="/volunteer">Volunteer</Link>
				</li>
				<li>
					<Link to="/events">Events</Link>
				</li>
				<li>
					<Link to="/contactus">Contact Us</Link>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;