import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppStyles from './App.css';
import AppHeaderBar from './components/Navigation/AppHeaderBar';
import HomePage from './components/HomePage/HomePage';
import AboutUs from './components/AboutUs/AboutUs';
import Committee from './components/Committee/Committee';
import Events from './components/Events/Events';
import Membership from './components/Membership/Membership';
import Volunteer from './components/Volunteer/Volunteer';
import ContactUs from './components/ContactUs/ContactUs';
import ErrorPage from './components/Error/Error';
import LoginPage from './components/Login/Login';
import CreateAccountPage from './components/Membership/CreateAccount';
import Header from './components/Header/Header';
import Welcome from './pages/Welcome';

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
			<div className={AppStyles.App}>
				<Header />
				<AppHeaderBar />
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Welcome />} />
						<Route path="/about" element={<AboutUs />} />
						<Route path="/committee" element={<Committee />} />
						<Route path="/events" element={<Events />} />
						<Route path="/membership" element={<Membership />} />
						<Route path="/volunteer" element={<Volunteer />} />
						<Route path="/contactus" element={<ContactUs />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/createaccount" element={<CreateAccountPage />} />
						<Route path="*" element={<ErrorPage />} />
					</Routes>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
