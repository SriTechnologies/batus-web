import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Paper, Box, Grid, TextField, Typography, Button } from '@mui/material';
import { step5vaidations } from './validations/step5validations';

const Step5 = ({ registrationData, setRegistrationData, steps, activeStep, completed, completedSteps, totalSteps, handleComplete, handleNext, handleBack, ...props }) => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(step5vaidations)
	});

	const onSubmit = data => {
		// console.log(JSON.stringify(data, null, 2));
		// console.log("Registration Data: " + JSON.stringify(registrationData, null, 2));
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
					Member Address Details
				</Typography>

				<Grid container spacing={1} justifyContent={'center'}>
					<Grid item xs={12} sm={12}>
						<TextField
							required
							id="address1"
							name="address1"
							key={"address1"}
							label="Street Number & Name"
							fullWidth
							margin="dense"
							{...register('address1')}
							error={errors.address1 ? true : false}
							size='small'
						/>
						<Typography variant="inherit" color="textSecondary">
							{errors.address1?.message}
						</Typography>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							id="address2"
							name="address2"
							label="Apt. Number"
							fullWidth
							margin="dense"
							{...register('address2')}
							error={errors.address2 ? true : false}
							size='small'
						/>
						<Typography variant="inherit" color="textSecondary">
							{errors.address2?.message}
						</Typography>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="city"
							name="city"
							label="City"
							fullWidth
							margin="dense"
							{...register('city')}
							error={errors.city ? true : false}
							size='small'
						/>
						<Typography variant="inherit" color="textSecondary">
							{errors.city?.message}
						</Typography>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="state"
							name="state"
							label="State"
							fullWidth
							margin="dense"
							{...register('state')}
							error={errors.state ? true : false}
							size='small'
						/>
						<Typography variant="inherit" color="textSecondary">
							{errors.state?.message}
						</Typography>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="zipcode"
							name="zipcode"
							label="Zip Code"
							fullWidth
							margin="dense"
							{...register('zipcode')}
							error={errors.zipcode ? true : false}
							size='small'
						/>
						<Typography variant="inherit" color="textSecondary">
							{errors.zipcode?.message}
						</Typography>
					</Grid>
				</Grid>
			</Box>
		);
	};

	return (
		<div key="step5">
		<Fragment>
			<Paper sx={{ m: 5, p: 5 }}>
				{BodyContent()}
				{FooterContent()}
			</Paper>
		</Fragment>
		</div>
	);

}

export default Step5;