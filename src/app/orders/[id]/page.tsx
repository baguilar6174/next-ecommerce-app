'use client';

import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Chip, Divider, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import { CartList, OrderSummary } from '../../cart/components';

export default function OrderPage(): React.ReactElement {
	return (
		<>
			<Typography variant="h1" component="h1">
				Order: ABC123
			</Typography>

			{/* <Chip sx={{ my: 2 }} label="Pending order" variant="outlined" color="error" icon={<CreditCardOffOutlined />} /> */}
			<Chip sx={{ my: 3 }} label="Order paid" variant="outlined" color="success" icon={<CreditScoreOutlined />} />

			<Grid container>
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
								<h1>Pagar</h1>
								<Chip label="Order paid" variant="outlined" color="success" icon={<CreditScoreOutlined />} />
							</Box>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</>
	);
}
