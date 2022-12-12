import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const navigate = useNavigate()

	const login = async () => {
		try {
			await signInWithEmailAndPassword(getAuth(), email, password);
			navigate('/');
		} catch (e) {
			setError(e.message);
		}
	}

	return (
		<>
			<h1>Login</h1>
			{error && <p classname="error">{error}</p>}
			<input placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} />
			<input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
			<button onClick={login}> Login</button>
			<br /><br />
			<Link to="/createaccount">Create an account</Link>
		</>
	);
}

export default Login;