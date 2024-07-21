import React from 'react';
import { BrowserRouter as Router, useNavigate, Routes, Route } from 'react-router-dom';
// import './App.css';
import './bat.css';
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
import { AuthProvider } from './AuthContext';
import { Dialog } from '@mui/material';
import MatrimonyBenefits from './components/Matrimony/MatrimonyBenefits';
import MatrimonyEnroll from './components/Matrimony/MatrimonyEnroll';
import Footer from './components/Footer/Footer';

class BATApp extends React.Component {
	render() {
		return (
			<div>
				<Router>
					<AuthProvider>
						<Header />
						<div class="w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap py-1 flex-grow">
							<div class="w-fixed w-full flex-shrink flex-grow-0 px-2 ">
								<div class="sticky top-0 p-2 bg-gray-100 rounded-xl w-full h-full">
									<div class="bg-gray-100 rounded-xl mb-3 w-full">
										<div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-12 lg:px-8 lg:flex lg:items-center lg:justify-between">
											<h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
												<span class="block">Ready to dive in?</span>
											</h2>
										</div>
									</div>
								</div>
								<main role="main" class="w-full flex-grow pt-1 px-3">
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
										<Route path="/matrimony" element={<MatrimonyBenefits />} />
										<Route path="/matrimonyenroll" element={<MatrimonyEnroll />} />
										<Route path="/volunteer" element={<Volunteer />} />
										<Route path="/contactus" element={<ContactUs />} />
										<Route path="/login" element={<LoginPage />} />
										<Route path="/createaccount" element={<CreateAccount />} />
										<Route path="/paymentSuccess" element={(
											<PaymentSuccess />
										)} />
										<Route path="/paymentFailure" element={(
											<PaymentFailure />
										)} />
										<Route path="*" element={<ErrorPage />} />
									</Routes>
								</main>
								<div class="w-fixed w-full flex-shrink flex-grow-0 px-2">
									<div class="flex sm:flex-col px-2">
										<div class="bg-gray-50 rounded-xl border mb-3 w-full">
											<div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-12 lg:px-8 lg:flex lg:items-center lg:justify-between">
												<h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
													<span class="block text-indigo-600">Made with Tailwind CSS!</span>
												</h2>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<Footer />
					</AuthProvider>
				</Router>
			</div >
		);
	}
}

// export default FirebaseContext(BATApp);
export default BATApp;
