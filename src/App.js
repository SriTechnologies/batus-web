import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import AboutBat from './components/AboutUs/AboutBat';
import BatByLaws from './components/AboutUs/BatByLaws';
import BatMission from './components/AboutUs/BatMission';
import Committee from './components/Committee/Committee';
import CoreCommittee from './components/Committee/CoreCommittee';
import BoardMembers from './components/Committee/BoardMembers';
import Events from './components/Events/Events';
import AnnualEvents from './components/Events/AnnualEvents';
import MonthlyEvents from './components/Events/MonthlyEvents';
import Membership from './components/Membership/Membership';
import CreateAccount from './components/Membership/CreateAccount';
import Registration from './components/Membership/Registration';
import Volunteer from './components/Volunteer/Volunteer';
import ContactUs from './components/ContactUs/ContactUs';
import ErrorPage from './components/Error/Error';
import LoginPage from './components/Login/Login';
import Header from './components/Header/Header';
import PaymentSuccess from "./components/Membership/Registration/step6/PaymentSuccess";
import PaymentFailure from "./components/Membership/Registration/step6/PaymentFailure";
// import { FirebaseContext } from './AuthContext';
import {AuthProvider} from './AuthContext';

class BATApp extends React.Component {
/*	
	constructor(props) {
		console.log("Constructor >>>>>");
		super(props);
		this.state = {
			authUser: null,
			authToken: null,
			authHeaders: null,
			isLoading: true,
		}
		console.log("Constructor <<<<<<");
	}

	componentDidMount = async () => {
		console.log("compnent did mount >>>>>");
		this.listener = this.props.firebase.auth.onAuthStateChanged( async (currentUser) => {
			if (currentUser !== null) {
				try {
					this.setState({ authUser: currentUser });
					console.log("currentUser: " + currentUser);
					const token = await currentUser.getIdToken(true);
					console.log("User Token: " + token);
					this.setState({ authToken: token });
					const headers = token ? {
						authtoken: token
					} : null;
					console.log("AuthHeaders: " + JSON.stringify(headers));
					if (headers) {
						this.setState({ authHeaders: headers });
					}
					if (this.state.isLoading === true) {
						this.setState({ isLoading: false });
					}
				} catch (error) {
					console.log(error);
				}
			} else {
				this.setState({ authUser: null });
				this.setState({ authToken: null });
				this.setState({ authHeaders: null });
			}
		});
		console.log("compnent did mount <<<<<<");
	}

	componentWillUnmount() {
		this.listener();
	}
*/

	render() {
		// console.log("render >>>>>");
		// if (this.state.isLoading === true) {
		// 	return null;
		// }
		// console.log("Actual render >>>>>");
		return (
			<div>
				<Router>
					<AuthProvider>
					<Header />
					<div className="container">
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="/aboutbat" element={<AboutBat />} />
							<Route path="/batbylaws" element={<BatByLaws />} />
							<Route path="/batmission" element={<BatMission />} />
							<Route path="/committee" element={<Committee />} />
							<Route path="/corecommittee" element={<CoreCommittee />} />
							<Route path="/boardmembers" element={<BoardMembers />} />
							<Route path="/events" element={<Events />} />
							<Route path="/annualevents" element={<AnnualEvents />} />
							<Route path="/monthlyevents" element={<MonthlyEvents />} />
							<Route path="/membership" element={<Membership />} />
							<Route path="/registration" element={<Registration />} />
							<Route path="/volunteer" element={<Volunteer />} />
							<Route path="/contactus" element={<ContactUs />} />
							<Route path="/login" element={<LoginPage />} />
							<Route path="/createaccount" element={<CreateAccount />} />
							<Route path="/paymentSuccess" element={<PaymentSuccess />} />
							<Route path="/paymentFailure" element={<PaymentFailure />} />
							<Route path="*" element={<ErrorPage />} />
						</Routes>
					</div>
					</AuthProvider>
				</Router>
			</div>
		);
	}
}

// export default FirebaseContext(BATApp);
export default BATApp;
