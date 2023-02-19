import { Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { Fragment } from 'react';
import { useLocation } from "react-router-dom";

const PaymentFailure = (props) => {
	const location = useLocation();
	return (
		<div key="payment_failure">
			<Fragment>
				<Paper sx={{ m: 5, p: 5 }}>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}>
						<Typography variant="h4" align="center">
							Sorry, your transaction failed!!
						</Typography>
						<Grid container spacing={10} justifyContent={'center'}>
							<Grid item>
								<Typography variant="h6" align="center">
									Error: {location.state.tranStatus}
								</Typography>
							</Grid>
						</Grid>
						<Grid container spacing={10} justifyContent={'center'}>
							<Grid item>
								<Typography variant="title" align="center">
									Please try again.
								</Typography>
							</Grid>
						</Grid>
					</Box>
				</Paper>
			</Fragment>
		</div>
	);
};

export default PaymentFailure;