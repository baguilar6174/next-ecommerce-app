'use client';

import { Typography } from '@mui/material';
import { ProductsList } from '../components';
import { initialData } from '../data';

export default function HomePage(): React.ReactNode {
	return (
		<>
			<Typography variant="h1" component="h1">
				Next Store
			</Typography>
			<Typography variant="h2" sx={{ marginBottom: 1 }}>
				All products
			</Typography>
			<ProductsList products={initialData.products as any} />
		</>
	);
}
