import React, { Fragment } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Paper, Box, Grid, TextField, Typography, FormControlLabel, Checkbox, Button } from '@mui/material';
import { step1validations } from './validations/step1validations';

const Step1 = ({ registrationData, steps, activeStep, completed, completedSteps, totalSteps, handleComplete, handleNext, handleBack, ...props }) => {
	const {
		register,
		control,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(step1validations)
	});

	const [formComplete, setFormComplete] = React.useState(0);

	const onSubmit = data => {
		console.log(JSON.stringify(data, null, 2));
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
					onClick={handleNext}
					sx={{ mr: 1 }}
					disabled={ formComplete === 0}
				>
					Next
				</Button>
				{activeStep !== steps.length &&
					(completed[activeStep] ? (
						<Typography variant="caption" sx={{ display: 'inline-block' }}>
							Step {activeStep + 1} already completed
						</Typography>
					) : (
						<Button 
							onClick={handleComplete} 
							disabled={ formComplete === 0}
						>
							{completedSteps() === totalSteps() - 1
								? 'Register'
								: 'Complete Step'}
						</Button>
					))}
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
