import React, { Fragment } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Paper, Box, Grid, TextField, Typography, FormControlLabel, Checkbox, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { step6vaidations } from './validations/step6validations';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Stack } from '@mui/system';
import dayjs from 'dayjs';
import DropIn from "braintree-web-drop-in-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UseToken from '../../../../hooks/useToken';

const Step6 = ({ registrationData, setRegistrationData, steps, activeStep, completed, completedSteps, totalSteps, handleComplete, handleNext, handleBack, authHeaders, ...props }) => {
	const {
		register,
		control,
		handleSubmit,
		formState: { errors, isDirty, isValid }
	} = useForm({
		resolver: yupResolver(step6vaidations)
	});

	const descriptionElementRef = React.useRef(null);
	const [clientToken, setClientToken] = React.useState("");
	const [instance, setInstance] = React.useState();
	const [openLiabilityDialog, setOpenLiabilityDialog] = React.useState(false);
	const [scroll, setScroll] = React.useState('paper');
	const navi = useNavigate();
	const token = UseToken();
	// console.log('===== Step6: token:' + JSON.stringify(token));
	
	React.useEffect(() => {
		if (openLiabilityDialog) {
			const { current: descriptionElement } = descriptionElementRef;
			if (descriptionElement !== null) {
				descriptionElement.focus();
			}
		}
	}, [openLiabilityDialog]);

	const [today, setToday] = React.useState(dayjs());

	React.useEffect(() => {
		// console.log('>>>>> Registration Page: UseEffect');
		async function initialize() {
			if (token) {
					// console.log('user token: ' + token);
					const headers = token !== null ? { 
						authtoken: token
					} : {};
					// console.log('API Headers: ' + JSON.stringify(headers));
					
				}
				// const res = await axios.get(`${process.env.REACT_APP_BAT_SERVER_HOST}/api/heartbeat`, { headers })
		}
		// console.log('<<<<<< Registration Page: UseEffect');
		initialize();
	}, [token]);


	const getBTToken = async () => {
		// console.log("Auth Headers " + JSON.stringify(authHeaders));
		const btAPIToken = await axios.get(`${process.env.REACT_APP_BAT_SERVER_HOST}/api/generatetoken`, {headers: authHeaders})
		// console.log("BT Token retrieved from server " + JSON.stringify(btAPIToken.data));
		setClientToken(btAPIToken.data);
	};

	const onSubmit = data => {
		// console.log(JSON.stringify(data, null, 2));
		// console.log("Registration Data: " + JSON.stringify(registrationData, null, 2));
		handleComplete();
	};

	const handleClickOpenLiabilityDialog = () => () => {
		setOpenLiabilityDialog(true);
	};

	const handleCloseLiabilityDialog = () => {
		setOpenLiabilityDialog(false);
	};

	const handleFeePayment = async () => {
		const { nonce } = await instance.requestPaymentMethod();
		const paymentData = {
			nonce: nonce,
			amount: 200
		}
		await axios.post(`${process.env.REACT_APP_BAT_SERVER_HOST}/api/checkout`, paymentData, {headers: authHeaders})
			.then((response) => {
				const {transaction, success} = response.data;
				if (response.status === 200 && success && transaction.id) {
					// console.log("Payment Success - Transaction ID: " + transaction.id);
					navi(
						'/paymentSuccess',
						{state: { tranStatus: " SUCCESS, Transaction ID: " + transaction.id }}
					);
				} else {
					// console.log("Payment failed status: " + transaction.status);
					navi(
						'/paymentFailure',
						{state: { tranStatus:  transaction.status }},
					);
				}
			})
			.catch((error) => {
				// console.log("Payment Response error: " + error);
				navi(
					'/paymentFailure',
					{state: { tranStatus:  error }},
				);
		});
	}

	function LiabilityForm() {
		return (
			<div
				className="mdl-textfield--full-width"
				style={{ textAlign: "center", paddingLeft: "10px", paddingRight: "10px" }}
			>
				<Dialog
					open={openLiabilityDialog}
					onClose={handleCloseLiabilityDialog}
					scroll={scroll}
					aria-labelledby="scroll-dialog-title"
					aria-describedby="scroll-dialog-description"
				>
					<DialogTitle id="scroll-dialog-title">Liability Release Form</DialogTitle>
					<DialogContent dividers={scroll === 'paper'}>
						<DialogContentText
							id="scroll-dialog-description"
							ref={descriptionElementRef}
							tabIndex={-1}
						>
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
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleCloseLiabilityDialog}>Decline</Button>
						<Button onClick={handleCloseLiabilityDialog}>Accept</Button>
					</DialogActions>
				</Dialog>
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
		if (!clientToken) {
			getBTToken();
		}
		return (
			<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}>
				<Typography variant="h6" align="center">
					Confirmation
				</Typography>
				<Grid container spacing={10} justifyContent={'center'}>
					<Grid item>
						{/* <Grid item xs={12}>
								<Button onClick={handleClickOpenLiabilityDialog()}>Liability Form</Button>
							</Grid> */}
						<Grid container>
							<Grid item xs={12} my={6}>
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
						<Grid container>
							<Grid item xs={12}>
								<LocalizationProvider dateAdapter={AdapterDayjs}>
									<Stack spacing={3}>
										<DatePicker
											disableFuture
											openTo="year"
											views={['year', 'month', 'day']}
											label="Date"
											value={today}
											onChange={(newValue) => {
												setToday(newValue);
											}}
											disabled
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
						<Grid container>
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
											I agree to the By-Laws and Membership Terms *
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
						</Grid>
					</Grid>
					<Grid item>
						<Grid container>
							<Grid item>
								{clientToken &&
									<Box>
										<DropIn
											options={{
												authorization: clientToken,
												card: {
													cardholderName: {
														required: true
													}
												}
											}}
											onInstance={(instance) => setInstance(instance)}
										/>
										<Button
											onClick={(e) => handleFeePayment(e)}>
											Pay Membership Fees
										</Button>
									</Box>
								}
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<LiabilityForm />

			</Box>
		);
	};

	return (
		<div key="step6">
			<Fragment>
				<Paper sx={{ m: 5, p: 5 }}>
					{BodyContent()}
					{FooterContent()}
				</Paper>
			</Fragment>
		</div>
	);

}

export default Step6;