'use client';

import { Typography } from '@mui/material';

export default function HomePage(): React.ReactNode {
	return (
		<>
			<Typography variant="h1" component="h1">
				Next Store
			</Typography>
			<Typography variant="h2" sx={{ marginBottom: 1 }}>
				All products
			</Typography>
		</>
	);
}
