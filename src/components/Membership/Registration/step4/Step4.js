import React, { Fragment } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Paper, Box, Grid, TextField, Typography, FormControlLabel, Checkbox, Button } from '@mui/material';
import { step4vaidations } from './validations/step4validations';

const Step4 = () => {
	const {
		register,
		control,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(step4vaidations)
	});

	const onSubmit = data => {
		console.log(JSON.stringify(data, null, 2));
	};

	return (
<Fragment>
			<Paper sx={{ m: 5, p: 5 }}>
				<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}>
					<Typography variant="h6" align="center">
						Create Username and Password
					</Typography>

					<Grid container spacing={1} justifyContent={'center'}>
						<Grid item xs={12} sm={12}>
							<TextField
								required
								id="fullname"
								name="fullname"
								label="Full Name"
								fullWidth
								margin="dense"
								{...register('fullname')}
								error={errors.fullname ? true : false}
								size='small'
							/>
							<Typography variant="inherit" color="textSecondary">
								{errors.fullname?.message}
							</Typography>
						</Grid>
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
					</Grid>

					<Box mt={3}>
						<Button
							variant="contained"
							color="primary"
							onClick={handleSubmit(onSubmit)}
						>
							Register
						</Button>
					</Box>
				</Box>
			</Paper>
		</Fragment>
	);
}

export default Step4;