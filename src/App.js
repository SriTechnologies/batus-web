import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Component } from 'react';

const firebaseConfig = {
	apiKey: "AIzaSyCtMJVlqCUfURlDHSyLNI04gCV41VXaQGc",
	authDomain: "batus-925ac.firebaseapp.com",
	projectId: "batus-925ac",
	storageBucket: "batus-925ac.appspot.com",
	messagingSenderId: "211406468016",
	appId: "1:211406468016:web:fcd60043998fd5cb681c75",
	measurementId: "G-YR7SLK7J7Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<div>
				<BrowserRouter>
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
							<Route path="*" element={<ErrorPage />} />
						</Routes>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
