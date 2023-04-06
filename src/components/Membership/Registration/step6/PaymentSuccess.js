import { SpaceBar } from "@mui/icons-material";
import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";

const PaymentSuccess = (props) => {
	const location = useLocation();
	return (
		<div key="payment_success">
			<Fragment>
				<Paper sx={{ m: 5, p: 5 }}>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}>
						<Typography variant="h4" align="center">
							Thank you for your payment!
						</Typography>
						<Grid container spacing={10} justifyContent={'center'}>
							<Grid item>
								<Typography variant="h6" align="center">
									Transaction status: {location.state.tranStatus}
								</Typography>
							</Grid>
						</Grid>
						<Grid container spacing={10} justifyContent={'center'}>
							<Grid item>
								<Typography variant="title" align="center">
									* Please Note that charges on the credit card will appear as Payment to <b>batus.org</b>
								</Typography>
							</Grid>
						</Grid>
					</Box>
				</Paper>
			</Fragment>
		</div>
	);
};

export default PaymentSuccess;