import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Paper, Box, Grid, TextField, Typography, FormControlLabel, Button, FormControl, FormLabel, RadioGroup, Radio, InputLabel, Select, MenuItem } from '@mui/material';
import { step4vaidations } from './validations/step4validations';

const Step4 = ({  registrationData, setRegistrationData, steps, activeStep, completed, completedSteps, totalSteps, handleComplete, handleNext, handleBack, ...props }) => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(step4vaidations)
	});
 
	const [maritalStatusValue, setMaritalStatusValue] = React.useState('');
	const [childCount, setChildCount] = React.useState(0);

	const handleMaritalStatus = (event) => {
		setMaritalStatusValue(event.target.value);
	};

	const handleChildCount = (event) => {
		// console.log("Children count: " + event.target.value);
		setChildCount(event.target.value)
	}

	const onSubmit = data => {
		// console.log(JSON.stringify(data, null, 2));
		// console.log("Registration Data: " + JSON.stringify(registrationData, null, 2));
		if (maritalStatusValue === 2) {
			const regData = registrationData;
			regData.spouse_firstname = data.s_firstname;
			regData.spouse_lastname =  data.s_lastname;
			regData.spouse_maiden_name = data.s_maidenname;
			regData.spouse_middlename =  data.s_middlename
			regData.spouse_dob =  data.s_dob;
			regData.spouse_maiden_gotra = data.s_gotram;
			setRegistrationData(regData);
		}
		handleNext();
	};

	function ChildrenDetails() {
		const childList = [];

		for (let index = 0; index < childCount; index++) {
			childList.push(
				<Grid container spacing={1} mt={2} justifyContent={'center'}>
					<Typography>
						Child {index+1} Details
					</Typography>

					<Grid item xs={12} sm={12}>
						<TextField
							required
							id={`c_firstname_${index}`}
							name={`c_firstname_${index}`}
							key={`c_firstname_${index}`}
							{...register(`c_${index}_firstname`)}
							label="First Name"
							fullWidth
							margin="dense"
							size='small'
						/>
					</Grid>
					<Grid item xs={12} sm={12}>
						<TextField
							required
							id={`c_middlename_${index}`}
							name={`c_middlename_${index}`}
							key={`c_middlename_${index}`}
							{...register(`c_${index}_middlename`)}
							label="Middle Name"
							fullWidth
							margin="dense"
							size='small'
						/>
					</Grid>
					<Grid item xs={12} sm={12}>
						<TextField
							required
							id={`c_lastname_${index}`}
							name={`c_lastname_${index}`}
							key={`c_lastname_${index}`}
							{...register(`c_${index}_lastname`)}
							label="Last Name"
							fullWidth
							margin="dense"
							size='small'
						/>
					</Grid>
					<Grid item xs={12} sm={12}>
						<TextField
							required
							id={`c_age_${index}`}
							name={`c_age_${index}`}
							key={`c_age_${index}`}
							{...register(`c_${index}_age`)}
							label="Age"
							fullWidth
							margin="dense"
							size='small'
						/>
					</Grid>
				</Grid>
			);
		}

		return (
			<div>
				{childList}
			</div>
		);
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
					Personal & Family Details
				</Typography>

				<Grid container spacing={1} justifyContent={'center'}>

					<FormControl>
						<FormLabel id="marital-status-label">Marital Status</FormLabel>
						<RadioGroup
							row
							aria-labelledby="marital-status-label"
							name="marital-status-group"
							value={maritalStatusValue}
							onChange={handleMaritalStatus}
						>
							<FormControlLabel value="1" control={<Radio />} label="Single" />
							<FormControlLabel value="2" control={<Radio />} label="Married" />
						</RadioGroup>
					</FormControl>

					{maritalStatusValue === '2' &&
						<Grid container spacing={2} justifyContent={'center'}>
							<Typography>
								Spouse Details
							</Typography>

							<Grid item xs={12} sm={12}>
								<TextField
									required
									id="s_firstname"
									name="s_firstname"
									label="First Name"
									fullWidth
									margin="dense"
									{...register('s_firstname')}
									error={errors.s_firstname ? true : false}
									size='small'
								/>
								<Typography variant="inherit" color="textSecondary">
									{errors.s_firstname?.message}
								</Typography>
							</Grid>
							<Grid item xs={12} sm={12}>
								<TextField
									required
									id="s_maidenname"
									name="s_maidenname"
									label="Maiden Name"
									fullWidth
									margin="dense"
									{...register('s_maidenname')}
									error={errors.s_maidenname ? true : false}
									size='small'
								/>
								<Typography variant="inherit" color="textSecondary">
									{errors.s_maidenname?.message}
								</Typography>
							</Grid>
							<Grid item xs={12} sm={12}>
								<TextField
									required
									id="s_middlename"
									name="s_middlename"
									label="Middle Name"
									fullWidth
									margin="dense"
									{...register('s_middlename')}
									error={errors.s_middlename ? true : false}
									size='small'
								/>
								<Typography variant="inherit" color="textSecondary">
									{errors.s_middlename?.message}
								</Typography>
							</Grid>
							<Grid item xs={12} sm={12}>
								<TextField
									required
									id="s_lastname"
									name="s_lastname"
									label="Last Name"
									fullWidth
									margin="dense"
									{...register('s_lastname')}
									error={errors.s_lastname ? true : false}
									size='small'
								/>
								<Typography variant="inherit" color="textSecondary">
									{errors.s_lastname?.message}
								</Typography>
							</Grid>
							<Grid item xs={12} sm={12}>
								<TextField
									required
									id="s_dob"
									name="s_dob"
									label="Date of Birth"
									fullWidth
									margin="dense"
									{...register('s_dob')}
									error={errors.s_dob ? true : false}
									size='small'
								/>
								<Typography variant="inherit" color="textSecondary">
									{errors.s_dob?.message}
								</Typography>
							</Grid>
							<Grid item xs={12} sm={12}>
								<TextField
									required
									id="s_gotram"
									name="s_gotram"
									label="Maiden Gotram"
									fullWidth
									margin="dense"
									{...register('s_gotram')}
									error={errors.s_gotram ? true : false}
									size='small'
								/>
								<Typography variant="inherit" color="textSecondary">
									{errors.s_gotram?.message}
								</Typography>
							</Grid>

							<FormControl sx={{ m: 5, minWidth: 120 }}>
							<InputLabel id="child-count-label">Children</InputLabel>
							<Select
								labelId="child-count-label"
								id="child-count-select"
								value={childCount}
								label="No. of Children"
								onChange={handleChildCount}
							>
								<MenuItem value={0}>
									<em>None</em>
								</MenuItem>
								<MenuItem value={1}>1</MenuItem>
								<MenuItem value={2}>2</MenuItem>
								<MenuItem value={3}>3</MenuItem>
								<MenuItem value={4}>4</MenuItem>
							</Select>
						</FormControl>

						</Grid>
					}

					{childCount > 0 &&
						<ChildrenDetails />
					}

				</Grid>
			</Box>
		);
	};

	return (
		<div key="step4">
		<Fragment>
			<Paper sx={{ m: 5, p: 5 }}>
				{BodyContent()}
				{FooterContent()}
			</Paper>
		</Fragment>
		</div>
	);

}

export default Step4;