import React, { Fragment } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Paper, Box, Grid, TextField, Typography, FormControlLabel, Checkbox, Button } from '@mui/material';
import { step6vaidations } from './validations/step6validations';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Stack } from '@mui/system';
import dayjs from 'dayjs';
const Step6 = ({ registrationData, setRegistrationData, steps, activeStep, completed, completedSteps, totalSteps, handleComplete, handleNext, handleBack, ...props }) => {
	const {
		register,
		control,
		handleSubmit,
		formState: { errors, isDirty, isValid }
	} = useForm({
		resolver: yupResolver(step6vaidations)
	});
	const [today, setToday] = React.useState(dayjs());

	const onSubmit = data => {
		console.log(JSON.stringify(data, null, 2));
		console.log("Registration Data: " + JSON.stringify(registrationData, null, 2));
		handleComplete();
	};

	function LiabilityForm() {
		return (
			<div
				className="mdl-textfield--full-width"
				style={{ textAlign: "center", paddingLeft: "10px", paddingRight: "10px" }}
			>
				<h3>Liability Release Form </h3>
				<hr />
				<p>
					For the purposes of this document, <br />
					<br />
					“Organization” refers to Brahmin Association of Texas (BAT) and its DBAs 
					and any other names under which Brahmin Association of Texas conducts and/or
					coordinates activities. Organization also refers to, ALL venues and
					venue organizations, including [[Address]], where Brahmin Association of Texas conducts its activities. 
					“Activity” refers to meetings, events, programs, volunteer efforts and any other direct or
					indirect efforts and/or activities that the Organization conducts and/or
					coordinates. <br />
					<br />
					<b>Location of Events, Programs: Various locations across USA.</b>
					<br />
					<br />
					I,(for myself or as parent or guardian), hereby release, absolve, and
					indemnify the Organization, its Board Members, management, other members,
					mentors and all volunteers, and other affiliated members and/or sponsors
					from any and all liability, claims or demands for personal injury,
					sickness or death, as well as property damages and expenses, of any
					nature whatsoever which may be incurred by me and/or my child
					participant, that occur while participating in any Activity the
					Organization conducts and/or coordinates. <br />
					<br />
					Furthermore, I hereby state that I am (or my child is) joining the
					Activity on my own volition, and that there is no pressure from the
					Organization in any manner, and I am (or my child is) free to
					discontinue the Activity at any point in time. I (myself or on behalf of
					my child) assume all risk of personal injury, sickness, death, damage
					and expense as a result of participation in the Activity. This release
					is for any and all liability for personal injuries (including death) and
					property losses or damage occasioned by, or in connection with any
					Activity of the Organization. <br />
					<br />
					In addition, I hereby state that I, on behalf of myself or my child,
					also consent for the usage of any of the photographs, audio or video
					content recorded, developed as part of the Activity towards publishing
					or distribution in various media, including electronic channels, CD/DVD
					productions, and for any and all purposes of the material.
				</p>
				<hr />
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
					disabled={!isDirty || !isValid}
					sx={{ mr: 1 }}
				>
					Complete Registration
				</Button>
			</Box>
		);
	};

	function BodyContent() {
		return (
			<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}>
				<Typography variant="h6" align="center">
					Liability Acceptance Form
				</Typography>

				<Grid container spacing={1} justifyContent={'center'}>
					<LiabilityForm />
					<Grid item xs={12}>
						<FormControlLabel
							control={
								<Controller
									control={control}
									name="acceptTerms"
									defaultValue="false"
									inputRef={register()}
									render={({ field: { onChange } }) => (
										<Checkbox
											color="primary"
											onChange={e => onChange(e.target.checked)}
										/>
									)}
								/>
							}
							label={
								<Typography color={errors.acceptTerms ? 'error' : 'inherit'}>
									I have read and agree to the Terms *
								</Typography>
							}
						/>
						<br />
						<Typography variant="inherit" color="textSecondary">
							{errors.acceptTerms
								? '(' + errors.acceptTerms.message + ')'
								: ''}
						</Typography>
					</Grid>
					<Grid item xs={12} sm={3}>
						<TextField
							required
							id="membername"
							name="membername"
							key={"membername"}
							label="Full Name"
							fullWidth
							margin="dense"
							{...register('membername')}
							error={errors.membername ? true : false}
							size='small'
						/>
						<Typography variant="inherit" color="textSecondary">
							{errors.membername?.message}
						</Typography>
					</Grid>
				</Grid>
				<Grid container spacing={1} justifyContent={'center'}>
					<Grid item xs={12} sm={3}>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<Stack spacing={3}>
								<DatePicker
									disableFuture
									openTo="year"
									views={['year', 'month', 'day']}
									label="Date of Birth"
									value={today}
									onChange={(newValue) => {
										setToday(newValue);
									}}
									renderInput={(params) =>
										<TextField
											{...params}
											id="today"
											name="today"
											{...register('today')}
											error={errors.today ? true : false}
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

export default Step6;