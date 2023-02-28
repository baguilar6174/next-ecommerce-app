'use client';

import { Box, Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { CartList, OrderSummary } from './components';

export default function CartPage(): React.ReactElement {
	return (
		<>
			<Typography variant="h1" component="h1">
				Shopping Cart
			</Typography>
			<Grid container sx={{ mt: 3 }}>
				<Grid item xs={12} sm={7}>
					<CartList editable />
				</Grid>
				<Grid item xs={12} sm={5}>
					<Card className="summary-card">
						<CardContent>
							<Typography variant="subtitle1">Order Summary</Typography>
							<Divider sx={{ my: 2 }} />
							<OrderSummary />
							<Box sx={{ mt: 3 }}>
								<Button color="secondary" variant="outlined" fullWidth>
									Checkout
								</Button>
							</Box>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</>
	);
}
