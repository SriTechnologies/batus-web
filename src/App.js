import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppStyles from './App.css';
import NavBar from './components/NavBar';
import AppHeaderBar from './components/AppHeaderBar';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Committee from './pages/Committee';
import Events from './pages/Events';
import Membership from './pages/Membership';
import Volunteer from './pages/Volunteer';
import ContactUs from './pages/ContactUs';
import ErrorPage from './pages/Error';
import LoginPage from './pages/Login';
import CreateAccountPage from './pages/CreateAccount';
import Header from './pages/Header';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { style } from '@mui/system';
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
			<BrowserRouter>
				<div className={AppStyles.App}>
					<div className={AppStyles.banner}>
						<h1>Welcome to Brahmin Association of Texas (BAT)</h1>			
					</div>
					<div id="page-body">
						<AppHeaderBar />
							<div className={AppStyles.inner}>
								<Routes>
									<Route path="/" element={<HomePage />} />
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
							</div>
					</div>
				</div>
			</BrowserRouter>
		  );
	}
}

export default App;
