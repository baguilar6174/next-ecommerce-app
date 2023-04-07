'use client';

import { Typography } from '@mui/material';
import { ProductsList } from '../components';
import { useProducts } from '../hooks';

export default function HomePage(): React.ReactNode {
	const { error, isLoading, products } = useProducts('/products');

	if (error) return <div>failed to load</div>;
	if (isLoading) return <div>loading...</div>;

	return (
		<>
			<Typography variant="h1" component="h1">
				Next Store
			</Typography>
			<Typography variant="h2" sx={{ marginBottom: 1 }}>
				All products
			</Typography>
			{isLoading ? <h1>Loading...</h1> : <ProductsList products={products} />}
		</>
	);
}
