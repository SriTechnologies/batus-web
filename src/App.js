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
import { getFirestore } from "firebase/firestore";
import { Component } from 'react';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FB_API_KEY,
	authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FB_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FB_MSG_SENDER_ID,
	appId: process.env.REACT_APP_FB_APP_ID,
	measurementId: process.env.REACT_APP_FB_MEASUREMENT_ID
  };
 
// Initialize Firebase
const fbApp = initializeApp(firebaseConfig);
const fbAnalytics = getAnalytics(fbApp);
const fbDB = getFirestore(fbApp);

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
							<Route path="/registration" element={<Registration db={fbDB}/>} />
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
