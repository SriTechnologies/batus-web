import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Step1 from './Registration/step1/Step1';
import Step2 from './Registration/step2/Step2';
import Step3 from './Registration/step3/Step3';
import Step4 from './Registration/step4/Step4';
import Step5 from './Registration/step5/Steps5';
import Step6 from './Registration/step6/Steps6';
import { RegistrationData } from './Registration/model/RegistrationDataModel'
import UseToken from '../../hooks/useToken';

const steps = ['Setup Credentials', 'Member Details', 'Gotra Details', 'Family Details', 'Contact Details', 'Liability agreement'];

export default function Registration (props) {
	const [activeStep, setActiveStep] = React.useState(0);
	const [completed, setCompleted] = React.useState({});
	const [registrationData, setRegistrationData] = React.useState(new RegistrationData());

	const [apiAuthHeader, setAPIAuthHeader] = React.useState({});
	const token = UseToken();

	React.useEffect(() => {
		console.log('>>>>> Registration Page: UseEffect');
		if (token) {
			console.log('user token: ' + token);
			const headers = token !== null ? { 
				authtoken: token
			} : {};
			setAPIAuthHeader(headers);
		}
		console.log('<<<<<< Registration Page: UseEffect');
	}, [token]);

	const totalSteps = () => {
		return steps.length;
	};

	const completedSteps = () => {
		return Object.keys(completed).length;
	};

	const isLastStep = () => {
		return activeStep === totalSteps() - 1;
	};

	const allStepsCompleted = () => {
		return completedSteps() === totalSteps();
	};

	const handleNext = () => {
		const newActiveStep =
			isLastStep() && !allStepsCompleted()
				? // It's the last step, but not all steps have been completed,
				// find the first step that has been completed
				steps.findIndex((step, i) => !(i in completed))
				: activeStep + 1;
		console.log("Total Step: " + steps.length);
		console.log("Active Step: " + activeStep);
		console.log("Next Active Step: " + newActiveStep);
		setActiveStep(newActiveStep);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStep = (step) => () => {
		setActiveStep(step);
	};

	const handleComplete = () => {
		const newCompleted = completed;
		newCompleted[activeStep] = true;
		setCompleted(newCompleted);
		handleNext();
	};

	const handleReset = () => {
		setActiveStep(0);
		setCompleted({});
	};

	function getStepContent(step) {
		switch (step) {
			case 0:
				return <Step1 registrationData={registrationData}
					setRegistrationData={setRegistrationData}
					steps={steps}
					activeStep={activeStep}
					completed={completed}
					completedSteps={completedSteps}
					totalSteps={totalSteps}
					handleComplete={handleComplete}
					handleNext={handleNext}
					handleBack={handleBack} />;
			case 1:
				return <Step2 registrationData={registrationData}
					setRegistrationData={setRegistrationData}
					steps={steps}
					activeStep={activeStep}
					completed={completed}
					completedSteps={completedSteps}
					totalSteps={totalSteps}
					handleComplete={handleComplete}
					handleNext={handleNext}
					handleBack={handleBack} />;
			case 2:
				return <Step3 registrationData={registrationData}
					setRegistrationData={setRegistrationData}
					steps={steps}
					activeStep={activeStep}
					completed={completed}
					completedSteps={completedSteps}
					totalSteps={totalSteps}
					handleComplete={handleComplete}
					handleNext={handleNext}
					handleBack={handleBack} />;
			case 3:
				return <Step4 registrationData={registrationData}
					setRegistrationData={setRegistrationData}
					steps={steps}
					activeStep={activeStep}
					completed={completed}
					completedSteps={completedSteps}
					totalSteps={totalSteps}
					handleComplete={handleComplete}
					handleNext={handleNext}
					handleBack={handleBack} />;
			case 4:
				return <Step5 registrationData={registrationData}
					setRegistrationData={setRegistrationData}
					steps={steps}
					activeStep={activeStep}
					completed={completed}
					completedSteps={completedSteps}
					totalSteps={totalSteps}
					handleComplete={handleComplete}
					handleNext={handleNext}
					handleBack={handleBack} />;
			case 5:
				return <Step6 registrationData={registrationData}
					setRegistrationData={setRegistrationData}
					steps={steps}
					activeStep={activeStep}
					completed={completed}
					completedSteps={completedSteps}
					totalSteps={totalSteps}
					handleComplete={handleComplete}
					handleNext={handleNext}
					handleBack={handleBack}
					authHeaders={apiAuthHeader} />;
			default:
				throw new Error("Unknow step");
		}
	}

	return (
		<Box sx={{ width: '100%', my: 3 }}>
			<Box sx={{ my: 5 }}>
				<Typography variant="h4" align="center">
					Registration Form
				</Typography>
				<Typography variant="subtitle" align="center" sx={{ mt: 5 }}>
					1) Family registration includes spouse and unmarried dependents only.<br />
					2) Students can register as Volunteers<br />
					3) Please read and agree to the Membership Terms and Conditions.<br />
				</Typography>
			</Box>
			<Box sx={{ my: 10, mx: 20 }}>
				<Stepper activeStep={activeStep}>
					{steps.map((label, index) => (
						<Step key={label} completed={completed[index]}>
							<StepButton color="inherit" onClick={handleStep(index)}>
								{label}
							</StepButton>
						</Step>
					))}
				</Stepper>
			</Box>
			<div>
				{allStepsCompleted() ? (
					<React.Fragment>
						<Typography sx={{ mt: 2, mb: 1 }}>
							All steps completed - you&apos;re finished
						</Typography>
						<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
							<Box sx={{ flex: '1 1 auto' }} />
							<Button onClick={handleReset}>Reset</Button>
						</Box>
					</React.Fragment>
				) : (
					<React.Fragment>
						<Box sx={{ mx: 20 }}>
							{getStepContent(activeStep)}
						</Box>
					</React.Fragment>
				)}
			</div>
		</Box>
	);
}
