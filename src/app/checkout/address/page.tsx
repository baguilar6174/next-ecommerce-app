'use client';

import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';

export default function AddressPage(): React.ReactElement {
	return (
		<>
			<Typography variant="h1" component="h1">
				Address
			</Typography>
			<Grid container spacing={2} sx={{ mt: 3 }}>
				<Grid item xs={12} sm={6}>
					<TextField label="Name" variant="filled" fullWidth />
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField label="Lastname" variant="filled" fullWidth />
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField label="Address" variant="filled" fullWidth />
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField label="Address 2 (optional)" variant="filled" fullWidth />
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField label="Postal code" variant="filled" fullWidth />
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField label="City" variant="filled" fullWidth />
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl fullWidth>
						<InputLabel>Country</InputLabel>
						<Select variant="filled" label="Country" value={1}>
							<MenuItem value={1}>Ecuador</MenuItem>
							<MenuItem value={2}>COlombia</MenuItem>
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField label="Phone" variant="filled" fullWidth />
				</Grid>
			</Grid>
			<Grid container display="flex" justifyContent="center" sx={{ my: 5 }}>
				<Grid item xs={12} sm={4}>
					<Button variant="outlined" fullWidth>
						Review order
					</Button>
				</Grid>
			</Grid>
		</>
	);
}
