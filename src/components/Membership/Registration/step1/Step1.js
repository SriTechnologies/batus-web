import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Paper, Box, Grid, TextField, Typography, Button } from '@mui/material';
import { step1validations } from './validations/step1validations';

const Step1 = ({ registrationData, setRegistrationData, steps, activeStep, completed, completedSteps, totalSteps, handleComplete, handleNext, handleBack, ...props }) => {
	const {
		register,
		handleSubmit,
		formState: { isDirty, isValid, errors }

	} = useForm({
		resolver: yupResolver(step1validations),
		defaultValues: {
			username: '',
			email: '',
			password: '',
			confirmPassword: ''
		},
	});

	const onSubmit = data => {
		console.log(JSON.stringify(data, null, 2));
		console.log("Registration Data: " + JSON.stringify(registrationData, null, 2));
		const regData = registrationData;
		regData.username = data.username;
		regData.password = data.password;
		regData.mem_email = data.email;
		setRegistrationData(regData);
		handleNext();
	};

	function FooterContent() {
		return (
			<Box sx={{ display: 'flex', flexDirection: 'row', p: 2 }}>
				<Button
					color="inherit"
					disabled={activeStep === 0}
					onClick={handleBack}
					sx={{ mr: 1 }}
				>
					Back
				</Button>
				<Box sx={{ flex: '1 1 auto' }} />
				<Button 
					onClick={handleSubmit(onSubmit)}
					sx={{ mr: 1 }}
					disabled={!isDirty || !isValid}
				>
					Next
				</Button>
			</Box>
		);
	};

	function BodyContent() {
		return (
			<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}>
				<Typography variant="h6" align="center">
					Create Username and Password
				</Typography>

				<Grid container spacing={1} justifyContent={'center'}>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="username"
							key={"username"}
							name="username"
							label="Username"
							fullWidth
							margin="dense"
							{...register('username')}
							error={errors.username ? true : false}
							size='small'
						/>
						<Typography variant="inherit" color="textSecondary">
							{errors.username?.message}
						</Typography>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="email"
							key={"email"}
							name="email"
							label="Email"
							fullWidth
							margin="dense"
							{...register('email')}
							error={errors.email ? true : false}
							size='small'
						/>
						<Typography variant="inherit" color="textSecondary">
							{errors.email?.message}
						</Typography>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="password"
							key={"password"}
							name="password"
							label="Password"
							type="password"
							fullWidth
							margin="dense"
							{...register('password')}
							error={errors.password ? true : false}
							size='small'
						/>
						<Typography variant="inherit" color="textSecondary">
							{errors.password?.message}
						</Typography>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="confirmPassword"
							key={"confirmPassword"}
							name="confirmPassword"
							label="Confirm Password"
							type="password"
							fullWidth
							margin="dense"
							{...register('confirmPassword')}
							error={errors.confirmPassword ? true : false}
							size='small'
						/>
						<Typography variant="inherit" color="textSecondary">
							{errors.confirmPassword?.message}
						</Typography>
					</Grid>
				</Grid>
			</Box>
		);
	};

	return (
		<Fragment>
			<Paper sx={{ m: 5, p: 5 }}>
				<BodyContent />
				<FooterContent />
			</Paper>
		</Fragment>
	);
}

export default Step1;
