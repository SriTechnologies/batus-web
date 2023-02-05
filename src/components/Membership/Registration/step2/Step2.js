import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Paper, Box, Grid, TextField, Typography, Button } from '@mui/material';
import { step2validations } from './validations/step2validations';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Step2 = ({ registrationData, setRegistrationData, steps, activeStep, completed, completedSteps, totalSteps, handleComplete, handleNext, handleBack, ...props }) => {
	const {
		register,
		handleSubmit,
		formState: { isDirty, isValid, errors }
	} = useForm({
		resolver: yupResolver(step2validations)
	});

	const [dob_value, setDOBValue] = React.useState(null);

	const onSubmit = data => {
		console.log(JSON.stringify(data, null, 2));
		console.log("Registration Data: " + JSON.stringify(registrationData, null, 2));
		const regData = registrationData;
		regData.mem_firstname = data.firstname;
		regData.mem_middlename = data.middlename;
		regData.mem_lastname = data.lastname;
		regData.mem_dob = dob_value;
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
					Member Details
				</Typography>

				<Grid container spacing={1} justifyContent={'center'}>
					<Grid item xs={12} sm={12}>
						<TextField
							required
							id="firstname"
							name="firstname"
							key="firstname"
							label="First Name"
							fullWidth
							margin="dense"
							{...register('firstname')}
							error={errors.firstname ? true : false}
							size='small'
						/>
						<Typography variant="inherit" color="textSecondary">
							{errors.firstname?.message}
						</Typography>
					</Grid>
				</Grid>
				<Grid container spacing={1} justifyContent={'center'}>
					<Grid item xs={12} sm={12}>
						<TextField
							id="middlename"
							name="middlename"
							key="middlename"
							label="Middle Name"
							fullWidth
							margin="dense"
							{...register('middlename')}
							error={errors.firstname ? true : false}
							size='small'
						/>
						<Typography variant="inherit" color="textSecondary">
							{errors.middlename?.message}
						</Typography>
					</Grid>
				</Grid>
				<Grid container spacing={1} justifyContent={'center'}>
					<Grid item xs={12} sm={12}>
						<TextField
							required
							id="lastname"
							name="lastname"
							key="lastname"
							label="Last Name"
							fullWidth
							margin="dense"
							{...register('lastname')}
							error={errors.lastname ? true : false}
							size='small'
						/>
						<Typography variant="inherit" color="textSecondary">
							{errors.lastname?.message}
						</Typography>
					</Grid>
				</Grid>

				<Grid container spacing={1} justifyContent={'center'}>
					<Grid item xs={12} sm={12}>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<Stack spacing={3}>
								<DatePicker
									disableFuture
									openTo="year"
									views={['year', 'month', 'day']}
									label="Date of Birth"
									value={dob_value}
									onChange={(newValue) => {
										setDOBValue(newValue);
									}}
									renderInput={(params) =>
										<TextField
											{...params}
											id="dob"
											name="dob"
											{...register('dob')}
											error={errors.dob ? true : false}
										/>
									}
								/>
								<Typography variant="inherit" color="textSecondary">
									{errors.dob?.message}
								</Typography>
							</Stack>
						</LocalizationProvider>
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

export default Step2;