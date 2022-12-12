import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About BAT</Link>
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
	)
}

export default NavBar;