'use client';

import { Button, Grid, TextField, Typography } from '@mui/material';
import Link from 'next/link';

export default function RegisterPage(): React.ReactNode {
	return (
		<Grid sx={{ height: 'calc(100vh - 160px)' }} container display="flex" alignItems="center" justifyContent="center">
			<Grid item xs={12} sm={5}>
				<Typography variant="h1" component="h1">
					Register
				</Typography>
				<TextField fullWidth label="Name" type="text" variant="filled" sx={{ py: 4 }} />
				<TextField fullWidth label="Email" type="text" variant="filled" sx={{ pb: 4 }} />
				<TextField fullWidth label="Password" type="password" variant="filled" sx={{ pb: 4 }} />
				<Button variant="outlined" fullWidth size="large">
					Submit
				</Button>
				<Typography align="center" sx={{ pt: 4 }}>
					Already have an account?{' '}
					<Link href="/auth">
						<span style={{ color: 'white' }}>Sign in</span>
					</Link>
				</Typography>
			</Grid>
		</Grid>
	);
}
