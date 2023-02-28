import { Divider, Grid, Typography } from '@mui/material';

export const OrderSummary = (): React.ReactElement => {
	return (
		<Grid container>
			<Grid item xs={6}>
				<Typography>Nro. Products</Typography>
			</Grid>
			<Grid item xs={6} display="flex" justifyContent="end">
				<Typography>3 items</Typography>
			</Grid>

			<Grid item xs={6}>
				<Typography>Subtotal</Typography>
			</Grid>
			<Grid item xs={6} display="flex" justifyContent="end">
				<Typography>{`$${105.36}`}</Typography>
			</Grid>

			<Grid item xs={6}>
				<Typography>IVA (12%)</Typography>
			</Grid>
			<Grid item xs={6} display="flex" justifyContent="end">
				<Typography>{`$${5.36}`}</Typography>
			</Grid>
			<Divider sx={{ my: 3 }} />
			<Grid item xs={6}>
				<Typography variant="subtitle1">Total</Typography>
			</Grid>
			<Grid item xs={6} display="flex" justifyContent="end">
				<Typography variant="subtitle1">{`$${110.36}`}</Typography>
			</Grid>
		</Grid>
	);
};
