import React from 'react';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Registration from './Registration'

const CreateAccount = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [error, setError] = useState('');

	const navigate = useNavigate()

	const createAccount = async () => {
		try {
			if (password !== confirmPassword) {
				setError();
				return;
			}
			await createUserWithEmailAndPassword(getAuth(), email, password);
			navigate('/');
		} catch (e) {
			setError(e.message);
		}
	}

	return (
		<>
		<Container component="main" maxWidth="xl" sx={{ mb: 4 }}>
			<Paper
				variant="outlined"
				sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
			>
				<Registration />
			</Paper>
			</Container>

			{/* <h1>Create Account</h1>
			{error && <p classname="error">{error}</p>}
			<input placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} />
			<input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
			<input type="password" placeholder="Re-enter Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
			<button onClick={createAccount}> Create Account </button>
			<br /><br />
			<Link to="/login">Already have an account? Login in here</Link> */}
		</>
	);}

export default CreateAccount;