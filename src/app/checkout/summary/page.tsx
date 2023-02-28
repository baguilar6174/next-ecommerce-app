'use client';

import { Box, Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import { CartList, OrderSummary } from '../../cart/components';

export default function SummaryPage(): React.ReactElement {
	return (
		<>
			<Typography variant="h1" component="h1">
				Order Summary
			</Typography>
			<Grid container sx={{ mt: 3 }}>
				<Grid item xs={12} sm={7}>
					<CartList />
				</Grid>
				<Grid item xs={12} sm={5}>
					<Card className="summary-card">
						<CardContent>
							<Typography variant="subtitle1">Order (3 items)</Typography>
							<Divider sx={{ my: 2 }} />

							<Box display={'flex'} justifyContent="space-between" sx={{ mb: 2 }}>
								<Typography variant="subtitle1">Address delivery</Typography>
								<Link href="/checkout/address">
									<Typography variant="subtitle1" color="white">
										Update
									</Typography>
								</Link>
							</Box>

							<Typography>Bryan Aguilar</Typography>
							<Typography>Bryan Aguilar</Typography>
							<Typography>Bryan Aguilar</Typography>
							<Typography>Ecuador</Typography>
							<Typography>+593 987654321</Typography>

							<Divider sx={{ my: 2 }} />

							<Box display={'flex'} justifyContent="end" sx={{ mb: 3 }}>
								<Link href="/cart">
									<Typography variant="subtitle1" color="white">
										Update yout cart
									</Typography>
								</Link>
							</Box>

							<OrderSummary />
							<Box sx={{ mt: 3 }}>
								<Button color="secondary" variant="outlined" fullWidth>
									Confirm order
								</Button>
							</Box>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</>
	);
}
